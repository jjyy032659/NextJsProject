// This tells Next.js to use the stable Node.js runtime environment
export const runtime = 'nodejs'; 

import { comments } from "../data"; 

export async function GET(request, context) {
    
    // 1. Temporarily treat the params as a Promise and await them
    // This is NOT standard practice, but may bypass your specific compiler bug
    const { id } = await context.params; 

    // 2. Use the resolved ID
    const commentId = parseInt(id); 

    const comment = comments.find(
        (c) => c.id === commentId
    );
    
    if (!comment) {
        return new Response(JSON.stringify({ error: 'Comment not found' }), { 
            status: 404,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    return Response.json(comment);
}

export async function PATCH(request, context) {
    const { id } = await context.params;
    const commentId = parseInt(id);
    

  

    const body = await request.json();
    const { text } = body;
    const index= comments.findIndex(
        (c)=>c.id===commentId
    )
    comments[index].text=text

    return Response.json(comments[index]);
}

export async function DELETE(request, context) {
    const { id } = await context.params;
    const commentId = parseInt(id);

    const index = comments.findIndex(
        (c) => c.id === commentId
    );

    if (index === -1) {
        return new Response(JSON.stringify({ error: 'Comment not found' }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    const deletedComment = comments.splice(index, 1);

    return Response.json(deletedComment[0]);
}
