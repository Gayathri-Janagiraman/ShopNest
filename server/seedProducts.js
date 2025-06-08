const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const cameraProducts = [
    {
        name: "Nikon Classic SLR",
        price: "₹4999",
        image: "camera1.jpg",
        rating: 5,
        category: "camera",
        description: "Vintage Nikon SLR camera with classic manual controls — ideal for film photography lovers.",
    },
    {
        name: "Retro Leather-Strap Camera",
        price: "₹3799",
        image: "camera2.jpg",
        rating: 4,
        category: "camera",
        description: "Stylish compact camera with leather casing and neck strap — great for travel shots.",
    },
    {
        name: "Handheld Street Film Camera",
        price: "₹3599",
        image: "camera3.avif",
        rating: 5,
        category: "camera",
        description: "Compact silver film camera designed for quick snapshots — perfect for casual street photography.",
    },
    {
        name: "Minimal Point-and-Shoot",
        price: "₹2999",
        image: "camera4.avif",
        rating: 3,
        category: "camera",
        description: "Sleek and functional point-and-shoot digital camera — great for beginners and everyday capture.",
    },
    {
        name: "Yashica Film Tripod Camera",
        price: "₹5499",
        image: "camera5.jpg",
        rating: 4,
        category: "camera",
        description: "Durable black Yashica film camera mounted on tripod — known for sharp optics and vintage build quality.",
    },
    {
        name: "Retro Red Pocket Camera",
        price: "₹3199",
        image: "camera6.avif",
        rating: 3,
        category: "camera",
        description: "Compact red film camera with bold style — easily fits in your pocket.",
    },
    {
        name: "Canon AE-1 Manual Camera",
        price: "₹5999",
        image: "camera7.jpg",
        rating: 4,
        category: "camera",
        description: "Legendary Canon AE-1 film camera — prized for its reliable mechanics and beautiful lens rendering.",
    },
    {
        name: "Olympus Quick Snap",
        price: "₹2499",
        image: "camera8.jpg",
        rating: 3,
        category: "camera",
        description: "Sleek Olympus point-and-shoot camera — simple, fast, and built for quick moments on the go.",
    },
    {
        name: "Sony Mirrorless Zoom Pro",
        price: "₹6799",
        image: "camera9.jpg",
        rating: 5,
        category: "camera",
        description: "High-performance Sony mirrorless camera with a precision zoom lens.",
    },
];


const clockProducts = [
    {
        name: "Vintage Wall Clock",
        price: "₹500",
        image: "clock1.jpg",
        rating: 5,
        category: "clock",
        description: "Classic black frame with bold numbers for a retro look and easy readability."
    },
    {
        name: "Minimalist Round Clock",
        price: "₹300",
        image: "clock2.jpg",
        rating: 3,
        category: "clock",
        description: "A modern clock with a clean white face and clear numeric dial for a sleek, minimalist touch."
    },
    {
        name: "Golden Shadow Clock",
        price: "₹350",
        image: "clock3.jpg",
        rating: 4,
        category: "clock",
        description: "Elegant gold-rimmed design with subtle shadows — blends perfectly with contemporary interiors."
    },
    {
        name: "Marble Rose Gold Clock",
        price: "₹1000",
        image: "clock4.jpg",
        rating: 5,
        category: "clock",
        description: "Luxurious rose gold hands on a marble-finish face. Sophisticated design for modern spaces."
    },
    {
        name: "Neon Gradient Wall Clock",
        price: "₹250",
        image: "clock5.jpg",
        rating: 4,
        category: "clock",
        description: "Bright neon gradient face with a playful design, perfect for kids’ rooms or creative spaces."
    },
    {
        name: "Compact Oval Desk Clock",
        price: "₹200",
        image: "clock6.avif",
        rating: 2,
        category: "clock",
        description: "Compact and stylish white oval clock — ideal for desks or bedside tables."
    },
    {
        name: "Transparent Glass Clock",
        price: "₹360",
        image: "clock7.jpg",
        rating: 3,
        category: "clock",
        description: "See-through glass face with floating hour marks, offering a sleek and futuristic look."
    },
    {
        name: "Textured Black Frame Clock",
        price: "₹449",
        image: "clock8.jpg",
        rating: 4,
        category: "clock",
        description: "Classic circular black clock with a textured frame, great for bold and timeless interiors."
    }
];


const cupsProducts = [
    {
        name: "Ruby Red Mug",
        price: "₹199",
        image: "cup1.jpg",
        rating: 4,
        category: "ceramiccups",
        description: "A glossy red ceramic mug. Stylish and bold design to start your mornings right."
    },
    {
        name: "Sunrise Yellow Cup",
        price: "₹229",
        image: "cup2.avif",
        rating: 5,
        category: "ceramiccups",
        description: "Bright yellow ceramic mug with a splash of coffee beans — a cheerful companion for coffee lovers."
    },
    {
        name: "Arctic White Mug with Blue Rim",
        price: "₹179",
        image: "cup3.jpg",
        rating: 3,
        category: "ceramiccups",
        description: "Minimalist white ceramic mug featuring a soft blue rim, ideal for a cozy, modern kitchen."
    },
    {
        name: "Mint Green Ribbed Cup",
        price: "₹249",
        image: "cup4.avif",
        rating: 4,
        category: "ceramiccups",
        description: "A refreshing mint green ceramic cup with ribbed texture — elegant, fresh, and perfect for gifting."
    },
    {
        name: "Matte White Duo Set",
        price: "₹399",
        image: "cup5.avif",
        rating: 3,
        category: "ceramiccups",
        description: "Set of two matte-finished white ceramic cups — sleek and perfect for minimalist table settings."
    },
    {
        name: "Charcoal Black Mug",
        price: "₹229",
        image: "cup6.avif",
        rating: 4,
        category: "ceramiccups",
        description: "A deep charcoal black ceramic mug accompanied by a sugar container — chic and contemporary."
    },
    {
        name: "Classic Grey Saucer Set",
        price: "₹349",
        image: "cup7.avif",
        rating: 4,
        category: "ceramiccups",
        description: "Smooth ceramic teacup with a matching saucer in grey tone, ideal for evening tea rituals."
    },
    {
        name: "Rustic Terracotta Cup",
        price: "₹159",
        image: "cup8.jpg",
        rating: 3,
        category: "ceramiccups",
        description: "Handmade terracotta-style ceramic cup with earthy tones."
    },
    {
        name: "Geometric Stackable Mugs",
        price: "₹299",
        image: "cup9.jpg",
        rating: 4,
        category: "ceramiccups",
        description: "Set of ceramic mugs with elegant black-and-white geometric patterns."
    },
    {
        name: "Cherry Red Angular Mug",
        price: "₹219",
        image: "cup10.avif",
        rating: 2,
        category: "ceramiccups",
        description: "Bold cherry red ceramic mug with a distinctive angular handle — adds a touch of vibrance."
    }
];


const lampProducts = [
    {
        name: "Vintage Wall Tube Light",
        price: "₹199",
        image: "lamp1.avif",
        rating: 5,
        category: "lamp",
        description: "Retro-style wall-mounted tube light with a warm golden glow."
    },
    {
        name: "Industrial Dome Pendant",
        price: "₹229",
        image: "lamp2.jpg",
        rating: 3,
        category: "lamp",
        description: "Matte black industrial-style dome lamp that adds a modern edge to kitchens, dining spaces."
    },
    {
        name: "Geometric Wall Light",
        price: "₹179",
        image: "lamp3.jpg",
        rating: 4,
        category: "lamp",
        description: "Contemporary geometric wall sconce with layered wooden panels — ideal for stylish ambient lighting."
    },
    {
        name: "Woven Bamboo Pendant",
        price: "₹249",
        image: "lamp4.avif",
        rating: 5,
        category: "lamp",
        description: "Handwoven bamboo pendant light — adds warmth, texture, and eco-friendly charm to living spaces."
    },
    {
        name: "Rattan Shade Hanging Lamp",
        price: "₹219",
        image: "lamp5.jpg",
        rating: 3,
        category: "lamp",
        description: "Natural rattan cylindrical pendant — brings a rustic yet modern vibe to bedrooms or lounge areas."
    },
    {
        name: "Sleek Wall Beam Light",
        price: "₹209",
        image: "lamp6.jpg",
        rating: 3,
        category: "lamp",
        description: "Minimalist beam-style wall light with soft illumination — perfect for corridors, galleries."
    },
    {
        name: "Copper Cage Pendant",
        price: "₹269",
        image: "lamp7.jpg",
        rating: 5,
        category: "lamp",
        description: "Stylish copper-wire cage pendant light — combines vintage industrial aesthetics with modern elegance."
    },
    {
        name: "Trio Modern Ceiling Lamps",
        price: "₹259",
        image: "lamp8.jpg",
        rating: 4,
        category: "lamp",
        description: "Set of three minimalist dome ceiling lamps in matte tones — ideal for modern kitchens or cafes."
    }
];


const menProducts = [
    {
        name: "Obsidian Intense Eau de Parfum",
        price: "₹499",
        image: "perfume1.avif",
        rating: 4,
        category: "men",
        description: "A bold and spicy fragrance with smoky undertones — crafted for men who make a lasting impression."
    },
    {
        name: "MF Signature Cologne",
        price: "₹549",
        image: "perfume2.avif",
        rating: 5,
        category: "men",
        description: "A clean, crisp scent with citrus top notes and a musky base — a modern essential for everyday wear."
    },
    {
        name: "Stealth Black Roller Fragrance",
        price: "₹399",
        image: "perfume3.avif",
        rating: 3,
        category: "men",
        description: "Compact and easy-to-carry roller perfume with a subtle herbal aroma — perfect for travel and touch-ups."
    },
    {
        name: "Irresistible Amber Cologne",
        price: "₹579",
        image: "perfume4.jpg",
        rating: 4,
        category: "men",
        description: "A luxurious amber-based cologne with woody undertones — elegant and timeless for special occasions."
    },
    {
        name: "Retro Round Brown Sunglasses",
        price: "₹749",
        image: "glass1.jpg",
        rating: 4,
        category: "men",
        description: "Vintage-inspired round sunglasses with a warm brown gradient lens and gold-tone arms."
    },
    {
        name: "Tortoise Shell Square Sunglasses",
        price: "₹899",
        image: "glass2.jpg",
        rating: 5,
        category: "men",
        description: "Square-shaped sunglasses with a tortoise shell frame and black lenses ."
    },
    {
        name: "Gold Frame Teal Lens Shades",
        price: "₹829",
        image: "glass3.jpg",
        rating: 4,
        category: "men",
        description: "Minimalist gold wireframe sunglasses paired with teal-tinted round lenses."
    },
    {
        name: "Matte Black Classic Clubmasters",
        price: "₹949",
        image: "glass4.jpg",
        rating: 5,
        category: "men",
        description: "Iconic Clubmaster-style sunglasses with matte black finish and green lenses."
    },
    {
        name: "Volt Black High-Top Sneakers",
        price: "₹1499",
        image: "sneaker1.jpg",
        rating: 4,
        category: "men",
        description: "Bold black sneakers with neon yellow accents — perfect for making a sporty, street-style statement."
    },
    {
        name: "Classic White Mesh Runners",
        price: "₹1799",
        image: "sneaker2.jpg",
        rating: 5,
        category: "men",
        description: "Minimal white sneakers with breathable mesh and red-blue stripes — ideal for gym or casual outings."
    },
    {
        name: "Ash Grey Athletic Sneakers",
        price: "₹1699",
        image: "sneaker3.jpg",
        rating: 4,
        category: "men",
        description: "Sleek all-grey sneakers with a performance build — great grip, comfort, and all-day wearability."
    },
    {
        name: "Pastel Peach Street Sneakers",
        price: "₹1899",
        image: "sneaker4.jpg",
        rating: 5,
        category: "men",
        description: "Trendy pastel sneakers with a mix of peach, lilac, and mint tones — perfect for colorful, casual looks."
    }
];


const smartwatchesProducts = [
    {
        name: "Sport Edition Smartwatch",
        price: "₹5000",
        image: "watch7.avif",
        rating: 5,
        category: "smartwatches",
        description: "Bold design with a red-accented dial and matte black finish."
    },
    {
        name: "Minimalist Black Watch",
        price: "₹1500",
        image: "watch2.jpg",
        rating: 4,
        category: "smartwatches",
        description: "A sleek smartwatch with numeric dial and soft fabric band."
    },
    {
        name: "Aqua Face Smartwatch",
        price: "₹3500",
        image: "watch3.jpg",
        rating: 3,
        category: "smartwatches",
        description: "Elegant water-themed display with a modern black strap."
    },
    {
        name: "Rose Gold Touch Watch",
        price: "₹30000",
        image: "watch4.jpg",
        rating: 4,
        category: "smartwatches",
        description: "Luxurious rose gold finish with touchscreen and health tracking."
    },
    {
        name: "Classic White Strap Watch",
        price: "₹1999",
        image: "watch5.jpg",
        rating: 4,
        category: "smartwatches",
        description: "Timeless design with white strap and digital time display."
    },
    {
        name: "Midnight Display Watch",
        price: "₹2399",
        image: "watch6.jpg",
        rating: 4,
        category: "smartwatches",
        description: "Crisp digital numbers and stylish matte finish."
    },
    {
        name: "Mirror Blue Display Watch",
        price: "₹4500",
        image: "watch8.avif",
        rating: 3,
        category: "smartwatches",
        description: "Sleek blue-tinted display with a modern look."
    },
    {
        name: "Neon Display Smartwatch",
        price: "₹2999",
        image: "watch1.jpg",
        rating: 2,
        category: "smartwatches",
        description: "Stylish digital display with neon colors and a durable strap."
    },
];


const speakerProducts = [
    {
        name: "Retro Portable Speaker",
        price: "₹539",
        image: "speaker1.avif",
        rating: 4,
        category: "speaker",
        description: "Compact oval-shaped speaker with a retro mesh grille and strap — perfect for portable."
    },
    {
        name: "Sleek Sound Bar Mini",
        price: "₹459",
        image: "speaker2.avif",
        rating: 3,
        category: "speaker",
        description: "Rectangular mini sound bar with a modern matte black finish — ideal for clean desk setups."
    },
    {
        name: "Soft Fabric Bluetooth Speaker",
        price: "₹329",
        image: "speaker3.avif",
        rating: 5,
        category: "speaker",
        description: "Rounded speaker covered in premium grey fabric — delivers clear audio for your space."
    },
    {
        name: "Classic Marshall Speaker",
        price: "₹279",
        image: "speaker4.jpg",
        rating: 4,
        category: "speaker",
        description: "Iconic black and gold Marshall speaker — a blend of vintage style for music enthusiasts."
    },
    {
        name: "Swirl Art Bluetooth Speaker",
        price: "₹349",
        image: "speaker5.jpg",
        rating: 3,
        category: "speaker",
        description: "Vibrant speaker with artistic swirl design — perfect for indoor ambiance or outdoor fun."
    },
    {
        name: "Compact Smart Speaker",
        price: "₹499",
        image: "speaker6.avif",
        rating: 4,
        category: "speaker",
        description: "Smart assistant-enabled compact speaker — delivers crisp audio for your smart home setup."
    },
    {
        name: "Modern Graffiti Speaker",
        price: "₹559",
        image: "speaker7.jpg",
        rating: 3,
        category: "speaker",
        description: "Edgy graffiti-print speaker with punchy bass and Bluetooth connectivity — made for modern trendsetters."
    },
    {
        name: "Cylindrical Mesh Smart Speaker",
        price: "₹319",
        image: "speaker8.avif",
        rating: 4,
        category: "speaker",
        description: "Minimal cylindrical speaker wrapped in mesh — perfect for subtle room decor and voice control functionality."
    }
];


const womenProducts = [
    {
        name: "Brown Leather Handbag",
        price: "₹199",
        image: "handbag1.jpg",
        rating: 4,
        category: "women",
        description: "A classic medium-sized brown leather handbag with a crossbody strap, perfect for daily use."
    },
    {
        name: "Maroon Textured Handbag",
        price: "₹229",
        image: "handbag2.jpg",
        rating: 5,
        category: "women",
        description: "Stylish maroon handbag with a textured finish and metal clasp, ideal for casual and semi-formal outings."
    },
    {
        name: "Yellow Structured Handbag",
        price: "₹179",
        image: "handbag3.jpg",
        rating: 3,
        category: "women",
        description: "Bold yellow structured handbag with top handle and metallic lock, adding a pop of color to any outfit."
    },
    {
        name: "Grey Handbag with Buckle Straps",
        price: "₹249",
        image: "handbag4.jpg",
        rating: 4,
        category: "women",
        description: "Elegant grey handbag with dual buckle straps and a sturdy handle — versatile for work or weekend looks."
    },
    {
        name: "Rose Gold Drop Earrings",
        price: "₹399",
        image: "earring1.avif",
        rating: 3,
        category: "women",
        description: "Elegant rose gold-toned drop earrings with intricate detailing — perfect for festive and party wear."
    },
    {
        name: "Silver Hoop Earrings",
        price: "₹229",
        image: "earring2.avif",
        rating: 4,
        category: "women",
        description: "Classic chunky silver hoops, timeless and versatile, ideal for both casual and formal looks."
    },
    {
        name: "Gold Textured Stud Earrings",
        price: "₹349",
        image: "earring3.avif",
        rating: 4,
        category: "women",
        description: "Sophisticated gold-toned stud earrings with a textured finish for a subtle yet classy appearance."
    },
    {
        name: "Floral Terracotta Earrings",
        price: "₹159",
        image: "earring4.avif",
        rating: 3,
        category: "women",
        description: "Handmade floral terracotta earrings in an earthy shade, great for traditional and boho outfits."
    },
    {
        name: "Retro Round Brown Sunglasses",
        price: "₹749",
        image: "glass1.jpg",
        rating: 4,
        category: "women",
        description: "Vintage-inspired round sunglasses with a warm brown gradient lens and gold-tone arms."
    },
    {
        name: "Tortoise Shell Square Sunglasses",
        price: "₹899",
        image: "glass2.jpg",
        rating: 5,
        category: "women",
        description: "Square-shaped sunglasses with a tortoise shell frame and black lenses — ideal for bold, modern styling."
    },
    {
        name: "Gold Frame Teal Lens Shades",
        price: "₹829",
        image: "glass3.jpg",
        rating: 4,
        category: "women",
        description: "Minimalist gold wireframe sunglasses paired with teal-tinted round lenses."
    },
    {
        name: "Matte Black Classic Clubmasters",
        price: "₹949",
        image: "glass4.jpg",
        rating: 5,
        category: "women",
        description: "Iconic Clubmaster-style sunglasses with matte black finish and green lenses."
    }
];


const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    image: String,
    rating: Number,
    description: String,
    category: String,
});
const Product = mongoose.model("Product", productSchema);


// Combine all into one array
const products = [
    ...cameraProducts,
    ...clockProducts,
    ...smartwatchesProducts,
    ...menProducts,
    ...womenProducts,
    ...lampProducts,
    ...cupsProducts,
    ...speakerProducts,
];

// Seeder function
async function seedDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ Connected to MongoDB Atlas");

        await Product.deleteMany();
        console.log("🧹 Cleared existing products");

        await Product.insertMany(products);
        console.log("🌱 Seeded products successfully");

        await mongoose.disconnect();
    } catch (error) {
        console.error("❌ Error seeding data:", error);
    }
}

seedDB();