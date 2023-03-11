import Footer from "./footer";
import Navbar from "./navbar";

interface LayoutProps { 
    children: JSX.Element
}

export default function Layout(props: LayoutProps) {
    return (
        <div className="flex flex-col min-h-screen mx-4">
            <Navbar />
            <div className="flex justify-center flex-grow">
                <div className="flex justify-center flex-grow max-w-lg">
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>
    )
}