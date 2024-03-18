import { Button } from '@/components/ui/button'
import { SignInButton, SignOutButton, SignUpButton, SignedIn, SignedOut, currentUser } from '@clerk/nextjs'
import { LogOut, Menu, Settings, ShoppingCart, UserRound } from 'lucide-react'
import React from 'react'
import { MobileNav } from './mobile-nav'
import { ThemeToggler } from '@/components/shared/theme-toggler'
import Link from 'next/link'
import { NavItems } from './nav-items'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import Image from 'next/image'
import { CartModal } from './cart-modal'

export const Navbar = async () => {

    const user = await currentUser();

    return (
        <nav className='w-full fixed top-0 z-50 bg-white dark:bg-black shadow-md'>
            <div className='container mx-auto p-5'>
                <div className='w-full flex items-center gap-x-4 justify-between'>

                    <Link href="/" className='flex gap-x-2 items-center'>
                        <span>Logo</span>
                        <span>Name</span>
                    </Link>

                    <div className='md:flex hidden items-center gap-x-5'>
                        <NavItems />
                    </div>

                    <div className='md:flex gap-x-2 items-center hidden'>
                        <SignedOut>
                            <SignUpButton mode='modal'>
                                <Button>Sign Up</Button>
                            </SignUpButton>
                            <SignInButton mode='modal'>
                                <Button>Sign In</Button>
                            </SignInButton>
                        </SignedOut>

                        <SignedIn>
                            <CartModal>
                                <span className='flex px-4 py-2 rounded-md items-center bg-primary text-primary-foreground hover:bg-primary/90'>
                                    <ShoppingCart className='mr-2 h-5 w-5' />
                                    Cart
                                </span>
                            </CartModal>
                        </SignedIn>

                        <ThemeToggler />

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

                    <div className='block md:hidden'>
                        <MobileNav>
                            <Menu />
                        </MobileNav>
                    </div>

                </div>
            </div>
        </nav>
    )
};