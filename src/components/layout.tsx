import Footer from "./footer";
import Navbar from "./navbar";

interface LayoutProps { 
    children: JSX.Element
}

export default function Layout(props: LayoutProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex justify-center flex-grow">
                <div className="max-w-lg">
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>
    )
}