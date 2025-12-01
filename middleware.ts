import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const response = NextResponse.next();


    const token = request.cookies.get('theme')?.value || response.cookies.set('theme', 'white');

    response.headers.set("custom-header", "custom-value")
    return response
}


export const config = {
    matcher: [
        '/',
        '/profile',
        '/login',
        '/signup',
    ]
}