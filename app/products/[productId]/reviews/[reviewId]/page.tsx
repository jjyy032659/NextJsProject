"use client";

// Use the useParams hook 
import { notFound, useParams } from "next/navigation"; 

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

// REMOVE THE PageProps INTERFACE (We aren't using props)

export default function ProductPage() {
    
    //  FIX: Get params directly from the hook 
    const params = useParams(); 
    
    // Manually assert the type for safe destructuring
    const { productId, reviewId } = params as { productId: string, reviewId: string };

    // Error Throwing Logic
    const random = getRandomInt(2);
    if (random === 1) {
        throw new Error("Error loading review"); 
    }

    // notFound Logic
    if (parseInt(reviewId) > 1000) {
        notFound();
    }

    return <h1>Review {reviewId} for Product ID: {productId}</h1>;
}