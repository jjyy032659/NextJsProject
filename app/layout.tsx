import {Metadata} from "next";
import "./globals.css";


export const metadata:Metadata={
    title:{
        default:"Next.js tutorial",
        template:"%s|Codevolutio",

    },
    description:"Generate by Next.js",
}


export default function ProfileLayout({
    children,
}: {        
    children: React.ReactNode;
}) {
    return (
      <html lang="en">
        <body>

          <header
            style={{
                backgroundColor: "lightgray",
                padding: "1rem",
                textAlign: "center",
            }

            }>Header</header>
          
          {children}
          <footer
          style={{
            backgroundColor: "lightgray",
            padding: "1rem",
            textAlign: "center",
        }
        }
          >Footer</footer>
        </body>
      </html>   
    );
}   