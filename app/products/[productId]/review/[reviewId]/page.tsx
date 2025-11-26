import{notFound} from "next/navigation"

interface PageProps {
  params: { productId: string;
            reviewId: string
   };
}

export default async function ProductPage({ params }: PageProps) {
  const { productId } = await params; // await here
  const { reviewId } = await params; // await here
  if(parseInt(reviewId) > 1000){
    notFound();
  }
  return <h1>Review {reviewId} for Product ID: {productId}</h1>;
}