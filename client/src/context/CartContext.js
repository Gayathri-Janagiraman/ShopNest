import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const CartContext = createContext();

export function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState([]);
    const [user, setUser] = useState(null);

    // Load user and cart from localStorage
    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                const storedCart = localStorage.getItem(`cart_${currentUser.uid}`);
                setCartItems(storedCart ? JSON.parse(storedCart) : []);
            } else {
                setCartItems([]);
            }
        });

        return () => unsubscribe();
    }, []);

    // Save cart to localStorage when cartItems change
    useEffect(() => {
        if (user) {
            localStorage.setItem(`cart_${user.uid}`, JSON.stringify(cartItems));
        }
    }, [cartItems, user]);

    const addToCart = (product) => {
        setCartItems(prevItems => {
            const existing = prevItems.find(item => item.id === product.id);
            if (existing) {
                toast.info("Product already in cart");
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            toast.success("Product added to cart");
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCartItems(prev => {
            toast.warn("Product removed from cart");
            return prev.filter(item => item.id !== id);
        });
    };

    const changeQuantity = (id, delta) => {
        setCartItems(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        );
    };

    const clearCart = () => {
        if (user) {
            localStorage.removeItem(`cart_${user.uid}`);
        }
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, changeQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);
