import { useEffect, useState } from "react";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import Products from "../pages/Products";
import LoadingSpinner from "./Loading";
function LandingPage() {
    const [trending, setTrending] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
      fetch(`${process.env.REACT_APP_API_BASE_URL}/api/products`)

            .then((res) => res.json())

            .then((data) => {
                const shuffled = data.sort(() => 0.5 - Math.random());
                const trending = shuffled.slice(0, 8);
                const updated = trending.map((product) => ({
                    ...product,
                    id: product._id,
                    image: `${process.env.REACT_APP_API_BASE_URL}/images/${product.image}`,
                }));
                setTrending(updated);
                setLoading(false);
            })

            .catch((err) => console.error("Failed to load trending products", err));
    }, []);

    return (
        <div>
            <TopNavbar />
            <div className="pt-28">
                <HeroBanner />
            </div>

            {/* Trending Section */}
            <div className="text-center mt-7 md:mt-10 mb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800" id="trending-products">Trending Products</h2>
                <p className="text-gray-500 md:text-xl">Discover top picks curated just for you</p>
            </div>

            <div>
                {loading ? (
                    <div className="text-center text-gray-600 py-10">
                        <LoadingSpinner />
                    </div>
                ) : (
                    <Products products={trending} />
                )}
            </div>
            <Footer />
        </div>
    );
}

export default LandingPage;



