import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Products from "./Products";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";
import LoadingSpinner from "./Loading";

function ProductCategory() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/products?category=${category}`)
      .then((res) => res.json())
      .then((data) => {

        const updatedProducts = data.map((product) => ({
          ...product,
          id: product._id, 
          image:`${process.env.REACT_APP_API_BASE_URL}/images/${product.image}`,
        }));


        setProducts(updatedProducts);
        setLoading(false);
      })
      .catch((err) => {
        console.error(" Failed to fetch products:", err);
        setLoading(false);
      });
  }, [category]);

  if (loading) return <div><LoadingSpinner/></div>;

  return (
    <>
      <TopNavbar />
      <div className="pt-28 ">
      <Products products={products} />
      </div>
      <Footer />
    </>
  );
}

export default ProductCategory;

