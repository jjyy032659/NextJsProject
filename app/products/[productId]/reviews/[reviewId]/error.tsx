"use client";

export default function ErrorBoundary({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <div>
            <h2>Something went wrong loading the review!</h2>
            <p>Error Detail: {error.message}</p>
            <button onClick={() => reset()}>Try Again</button>
        </div>
    );
}