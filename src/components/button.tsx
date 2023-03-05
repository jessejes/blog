import Link from "next/link";
import { useRouter } from "next/router";

interface ButtonProps {
    href?: string, 
    text: string
}

export default function Button(props: ButtonProps) {
    
    const router = useRouter()
    
    return (
        <Link className="primary-button" href={props.href == null ? router.pathname : props.href}>
            {props.text}
        </Link>
    )
}