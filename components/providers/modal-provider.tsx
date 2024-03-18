"use client";

import { useState, useEffect } from "react";

import { CartModal } from "../shared/cart-modal";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState<boolean>(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <>
            <CartModal />
        </>
    )
}