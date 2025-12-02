
import {Metadata} from "next";
import "./globals.css";
import{ThemeProvider} from "@/components/theme-provider";



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
        <ThemeProvider><body>
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
        </body></ThemeProvider>
        
      </html>   
    );
}   