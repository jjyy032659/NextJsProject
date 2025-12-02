import { cookies } from "next/headers";


export const metadata={

    title:"About codevolution",

    description:"This is the about page of our Next.js application."
}



export default async function About() {
    const cookieStore=await cookies();
    const theme=cookieStore.get("theme")?.value;
    console.log(theme)

    return <h1>About Page</h1>;
}