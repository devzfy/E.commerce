import Header from "../container/header"
import '../styles/globals.css'
import Footer from "../container/footer"

export default function RootLayout ({children}){
    return <html>
        <head>
            <title>E.commerce</title>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet"></link>
        </head>
        <body>
            <Header/>
            {children}
            <Footer/>
        </body>
    </html>
}