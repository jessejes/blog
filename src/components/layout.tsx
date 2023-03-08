import Footer from "./footer";
import Navbar from "./navbar";
import styles from "@/styles/Layout.module.scss"


interface LayoutProps { 
    children: JSX.Element
}

export default function Layout(props: LayoutProps) {
    return (
        <div className={styles.layout}>
            <Navbar />
            <div className={styles.content}>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}