// app/products/[productId]/layout.jsx

// We remove 'async' because the params are passed synchronously in the props,
// and we remove all type annotations.
export default function ProductDetailsLayout({ children, params }) {
    
    // We can safely destructure the parameters now in pure JS.
    const { productId } = params;

    return (
        <div>
            {/* Confirmation that the layout receives the ID */}
            <h1>Features products for ID: {productId}</h1> 
            
            {/* This renders the nested [reviewId] page */}
            {children} 
        </div>
    );
}