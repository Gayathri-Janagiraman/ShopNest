const { verifyAdmin } = require("../middleware/verifyAdmin");
const { verifyAuth } = require("../middleware/verifyAuth");
const express = require("express");
const router = express.Router();
const Stripe = require("stripe");
require("dotenv").config();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const { addProduct, updateProduct, deleteProduct } = require("../controllers/productController.js");

router.post("/", verifyAdmin, addProduct);
router.put("/:id", verifyAdmin, updateProduct);
router.delete("/:id", verifyAdmin, deleteProduct);

router.post("/create-checkout-session", verifyAuth, async (req, res) => {
  const { cartItems } = req.body;

  const line_items = cartItems.map((item) => {
    const numericPrice = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
    const unitAmount = Math.round((numericPrice / 83) * 100);

    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          images: [item.image],
        },
        unit_amount: unitAmount,
      },
      quantity: item.quantity,
    };
  });

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: `${process.env.FRONTEND_URL}/success`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
    });

    res.status(200).json({ url: session.url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;