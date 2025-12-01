import {type NextRequest} from "next/server"
import {headers,cookies}    from "next/headers"


export async function GET(request:NextRequest){
    const requestHeaders=new Headers(request.headers);
    console.log(requestHeaders.get("Authorization"))
    // return new Response ("Profile API Route");
       ;(await cookies()).set("result","success");
    const themePreference=request.cookies.get("theme");
     console.log(themePreference);
     return new Response("<h1>Profile API Route</h1>",{
        headers:{
            "Content-Type":"text/html",
            "Set-Cookie":"theme=dark"
        }
     });
}