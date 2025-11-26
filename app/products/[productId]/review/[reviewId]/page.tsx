interface PageProps {
  params: { productId: string;
            reviewId: string
   };
}

export default async function ProductPage({ params }: PageProps) {
  const { productId } = await params; // await here
  const { reviewId } = await params; // await here
  return <h1>Review {reviewId} for Product ID: {productId}</h1>;
}