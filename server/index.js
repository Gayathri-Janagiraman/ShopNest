const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
require("./firebase/firebaseAdmin");

const app = express();
app.use(cors());
app.use(express.json());

const paymentRoutes = require("./routes/payment");
app.use("/api", paymentRoutes);


app.use('/images', express.static(path.join(__dirname, 'public/images')));

const PORT = process.env.PORT || 5000;

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB Atlas")) 
    .catch((err) => console.error(err));


const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    image: String,
    rating: Number,
    description: String,
    category: String,
});

const Product = mongoose.model("Product", productSchema);

// API route: fetch products with optional category filter (case-insensitive)
app.get("/api/products", async (req, res) => {
    try {
        const category = req.query.category;
        let filter = {};
        if (category) {
            filter.category = { $regex: new RegExp(`^${category}$`, 'i') };
        }
        const products = await Product.find(filter);
        res.json(products);
    } catch (err) {
        console.error("Error fetching products:", err);
        res.status(500).json({ message: "Server error" });
    }
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
