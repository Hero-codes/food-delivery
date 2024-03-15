"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export const NavItems = () => {

    const pathname = usePathname();

    const links = [
        {
            title: "Restaurants",
            href: "/restaurants"
        },
        {
            title: "Previous Orders",
            href: "/orders",
        },
        {
            title: "Become a Seller",
            href: "/seller"
        }
    ]

    return (
        <>
            {links.map(link => {
                const isActive = pathname === link.href

                return (
                    <Link
                        key={link.title}
                        className={isActive ? "border-b border-zinc-400 py-1 text-muted-foreground" : "hover:text-muted-foreground transition hover:border-b py-1 hover:border-zinc-400"}
                        href={`${link.href}`}>{
                            link.title}
                    </Link>
                )
            })}
        </>
    )
}
