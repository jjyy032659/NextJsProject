"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
    const router = useRouter();
    
    const handleClick = () => {
        console.log("Placing your order...");
        // After placing the order, navigate to the home page
        router.push("/");
    }
    
    return (
        <>
            <h1>Order Product Page</h1>
            <button 
                onClick={handleClick}
                // ⭐️ ADD THESE TAILWIND CLASSES ⭐️
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Place order
            </button>
        </>
    );
}