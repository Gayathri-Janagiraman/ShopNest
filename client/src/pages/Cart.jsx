import React, { useState } from 'react';
import TopNavbar from "../components/TopNavbar";
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import { getAuth } from "firebase/auth";
import { ClipboardIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';

function Cart() {
    const { cartItems, removeFromCart, changeQuantity } = useCart();
    const [copied, setCopied] = useState(false);
    const cardNumber = "4242 4242 4242 4242";

    const getTotal = () => {
        return cartItems
            .reduce((total, item) => {
                const price = parseFloat(item.price.replace('₹', '')) || 0;
                return total + price * item.quantity;
            }, 0)
            .toFixed(2);
    };

    const handleCheckout = async () => {
        const auth = getAuth();
        const token = await auth.currentUser?.getIdToken();

        const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/create-checkout-session`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ cartItems }),
        });

        const data = await res.json();
        if (data.url) {
            window.location.href = data.url;
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(cardNumber)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            })
            .catch(() => alert("Failed to copy!"));
    };

    return (
        <div className="flex flex-col">
            <TopNavbar />
            <div className="pt-28">
                <main className="flex-grow max-w-5xl mx-auto px-4 py-10">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Your Cart</h2>

                    {cartItems.length === 0 ? (
                        <div className="text-center text-gray-500">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
                                alt="Empty Cart"
                                className="mx-auto mb-4 w-28 opacity-70"
                            />
                            <p className="text-lg">You haven't added anything yet.</p>
                        </div>
                    ) : (
                        <>
                            <div className="space-y-6">
                                {cartItems.map(item => {
                                    const price = parseFloat(item.price.replace('₹', '')) || 0;
                                    return (
                                        <div
                                            key={item.id}
                                            className="flex flex-col md:gap-2 sm:flex-row items-center justify-between bg-white shadow p-4 rounded-xl"
                                        >
                                            <div className="flex items-center gap-4 w-full sm:w-auto">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-20 h-20 object-cover rounded-lg"
                                                />
                                                <div>
                                                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                                                    <p className="text-gray-600">₹{price.toFixed(2)} each</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-3 mt-4 sm:mt-0">
                                                <button
                                                    onClick={() => changeQuantity(item.id, -1)}
                                                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                                >
                                                    −
                                                </button>
                                                <span className="text-lg">{item.quantity}</span>
                                                <button
                                                    onClick={() => changeQuantity(item.id, 1)}
                                                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                                >
                                                    +
                                                </button>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-red-500 hover:underline text-sm ml-2"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="text-right mt-10 border-t pt-6">
                                <h4 className="text-xl font-bold text-gray-800">
                                    Total: ₹{getTotal()}
                                </h4>
                                <button
                                    onClick={handleCheckout}
                                    className="mt-4 px-6 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition"
                                >
                                    Proceed to Payment
                                </button>

                                <div className="bg-yellow-100 text-yellow-800 p-4 rounded-md mb-4 mt-7 border-l-4 border-yellow-500 flex items-center justify-between">
                                    <div>
                                        <p className='md:pl-16'>
                                            <strong>Test Mode:</strong> This is a demo project. Use the test card number{" "}
                                            <code className="font-mono">{cardNumber}</code> to simulate payment.
                                            <button
                                                onClick={handleCopy}
                                                aria-label="Copy test card number"
                                                className="p-2 rounded hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                            >
                                                {copied ? (
                                                    <ClipboardDocumentCheckIcon className="w-5 h-5 text-green-600" />
                                                ) : (
                                                    <ClipboardIcon className="w-5 h-5 hover:text-yellow-700 cursor-pointer" />
                                                )}
                                            </button>
                                        </p>
                                        <p>Expiry: Any future date &nbsp;|&nbsp; CVC: Any 3-digit &nbsp;|&nbsp; ZIP: Any 5-digit</p>
                                    </div>

                                </div>
                            </div>
                        </>
                    )}
                </main>
            </div>
            <div className="mt-20">
                <Footer />
            </div>
        </div>
    );
}

export default Cart;
