'use client';

import { useCart } from "@/hooks/use-cart";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "../ui/button";

export const CartModal = ({ children }: { children?: React.ReactNode }) => {

    const cart = useCart();

    return (
        <Drawer onOpenChange={cart.onClose}>
            <DrawerTrigger>{children}</DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="flex items-center flex-col space-y-5">
                    <DrawerTitle>Cart Items</DrawerTitle>
                    <DrawerDescription>All Your Added Items Will Appear Here</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    <Button>Order Now</Button>
                    <DrawerClose>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}