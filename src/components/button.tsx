import Link from "next/link";
import { useRouter } from "next/router";

interface ButtonProps {
    href?: string, 
    text: string
}

export default function Button(props: ButtonProps) {
    
    const router = useRouter()
    
    return (
        <Link className="flex justify-center items-center p-0 h-16 w-full bg-neutral-800 border-2 rounded-2xl border-neutral-400 font-semibold text-xl" href={props.href == null ? router.pathname : props.href}>
            {props.text}
        </Link>
    )
}