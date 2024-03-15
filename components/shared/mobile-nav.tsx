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
import { auth, SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import { ThemeToggler } from "@/components/shared/theme-toggler";
import { NavItems } from "./nav-items";

export const MobileNav = ({ children }: { children: React.ReactNode }) => {
    const { user } = auth();
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
                            <Button>Order Now!</Button>
                        </SignedIn>

                        <div className="flex items-center flex-col gap-y-5">
                            <NavItems />
                            <UserButton afterSignOutUrl="/" />
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