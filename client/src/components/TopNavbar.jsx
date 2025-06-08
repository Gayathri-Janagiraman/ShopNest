import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import shopNestLogo from '../assets/images/shopping-bag.png';
import cart from '../assets/images/shopping-cart.png';
import NavMenu from './NavMenu';
import MobileMenu from './MobileMenu';
import { useCart } from '../context/CartContext';
import { toast } from "react-toastify";
import { getAuth } from "firebase/auth";


function TopNavbar() {
    const { cartItems } = useCart();
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const navigate = useNavigate();
    const auth = getAuth();
    const { clearCart } = useCart();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            toast.info("Logged out successfully");
            clearCart(); 
            navigate("/");
        } catch (error) {
            toast.error("Logout failed");
        }
    };
    

    return (
        <nav className="fixed top-5 left-6 right-6 z-50 flex justify-between items-center px-6 py-4 bg-white shadow">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <img src={shopNestLogo} alt="ShopNest logo" className="w-6 h-6 md:w-8 md:h-8" />
                <h1 className="text-lg md:text-3xl font-bold text-[#3B82F6] tracking-tight sm:text-2xl">
                    <Link to="/landing">
                        <span className="text-[#1F2937]">Shop</span>Nest
                    </Link>
                </h1>
            </div>

            <NavMenu />

            {/* Cart, Logout, and Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
                <div className="relative">
                    <Link to="/cart" className="hover:text-blue-600">
                        <img src={cart} alt="cart" className="w-8 h-8 md:w-12 md:h-12" />
                        {totalItems > 0 && (
                            <span className="absolute -top-1 -right-1 bg-black text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                                {totalItems}
                            </span>
                        )}
                    </Link>
                </div>

                <MobileMenu />

                <button
                    onClick={handleLogout}
                    className="hidden sm:flex hover:text-blue-600 font-medium md:text-xl"
                >
                    Logout
                </button>
            </div>
        </nav>
    );
}

export default TopNavbar;
