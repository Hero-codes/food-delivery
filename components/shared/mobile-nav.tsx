import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '@/components/ui/button';
import { currentUser, SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton } from '@clerk/nextjs'
import { ThemeToggler } from "@/components/shared/theme-toggler";
import { NavItems } from "./nav-items";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import Image from "next/image";
import { LogOut, Settings, ShoppingCart, UserRound } from "lucide-react";
import Link from "next/link";
import { CartModal } from "./cart-modal";

export const MobileNav = async ({ children }: { children: React.ReactNode }) => {
    const user = await currentUser();

    return (
        <Sheet>
            <SheetTrigger>
                {children}
            </SheetTrigger>

            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
                        <span>Logo</span>
                        <span>Name</span>
                    </SheetTitle>

                    <SheetDescription className="flex gap-y-10 flex-col pt-32">
                        <SignedOut>
                            <SignUpButton mode="modal">
                                <Button>Sign Up</Button>
                            </SignUpButton>

                            <SignInButton mode="modal">
                                <Button>Sign In</Button>
                            </SignInButton>
                        </SignedOut>

                        <SignedIn>
                            <CartModal>
                                <span className='flex justify-center px-4 py-2 rounded-md items-center bg-primary text-primary-foreground hover:bg-primary/90'>
                                    <ShoppingCart className='mr-2 h-5 w-5' />
                                    Cart
                                </span>
                            </CartModal>
                        </SignedIn>

                        <div className="flex items-center flex-col gap-y-5">
                            <NavItems />

                            <SignedIn>
                                <DropdownMenu>
                                    <DropdownMenuTrigger>
                                        <Image
                                            className='h-8 w-8 rounded-full'
                                            src={user?.imageUrl as string}
                                            alt="Profile pic"
                                            width={24}
                                            height={24}
                                        />
                                    </DropdownMenuTrigger>

                                    <DropdownMenuContent className='mt-3'>
                                        <DropdownMenuLabel>Account Settings</DropdownMenuLabel>
                                        <DropdownMenuSeparator />

                                        <Link href="/user/profile">
                                            <DropdownMenuItem className='flex items-center cursor-pointer'>
                                                <UserRound size={20} className='mr-2' />
                                                Profile
                                            </DropdownMenuItem>
                                        </Link>

                                        <Link href="/user/settings">
                                            <DropdownMenuItem className='flex items-center cursor-pointer'>
                                                <Settings size={20} className='mr-2' />
                                                Settings
                                            </DropdownMenuItem>
                                        </Link>

                                        <SignOutButton>
                                            <DropdownMenuItem className='flex items-center cursor-pointer'>
                                                <LogOut size={20} className='mr-2' />
                                                Log-out
                                            </DropdownMenuItem>
                                        </SignOutButton>
                                    </DropdownMenuContent>

                                </DropdownMenu>
                            </SignedIn>
                        </div>

                        <div className="flex items-center justify-center gap-x-3">
                            <ThemeToggler />
                            <span>Select Your Theme</span>
                        </div>

                    </SheetDescription>
                </SheetHeader>

                <SheetFooter className="absolute bottom-5">
                    <span>Made by Hero-Codes</span>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}