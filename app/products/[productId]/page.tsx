import { Metadata } from "next";

interface PageProps {
  params: { productId: string };
}

// Ensure this is async and awaits params (per your specific Next.js error)
export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const { productId } = await params;
  
  return {
    title: `Product ${productId}`,
    
    // ⭐️ ADD THIS LINE ⭐️
    description: `This is the official page for product ID ${productId}. Get all the details here.`,
  };
};

export default async function ProductPage({ params }: PageProps) {
  const { productId } = await params; 
  return <h1>Product ID is: {productId}</h1>;
}
