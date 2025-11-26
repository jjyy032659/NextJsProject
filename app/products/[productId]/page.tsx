interface PageProps {
  params: { productId: string };
}

export default async function ProductPage({ params }: PageProps) {
  const { productId } = await params; // <-- await here!
  return <h1>Product ID: {productId}</h1>;
}