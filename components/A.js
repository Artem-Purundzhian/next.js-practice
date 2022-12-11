import Link from "next/link";

export default function({text, href, className}){
    return(
        <Link href={href} className={className}>
            {text}
        </Link>
    )
}