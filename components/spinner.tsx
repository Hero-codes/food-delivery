import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Loader } from "lucide-react";

const spinnerVariants = cva(
    "animate-spin text-muted-foreground",
    {
        variants: {
            size: {
                default: "h-4 w-4",
                sm: "h-2 w-2",
                md: "h-5 w-5",
                lg: "h-7 w-7"
            },
        },
        defaultVariants: {
            size: "default"
        }
    }
);

interface SpinnerProps extends VariantProps<typeof spinnerVariants> { };

export const Spinner = ({ size }: SpinnerProps) => {
    return <Loader className={cn(spinnerVariants({ size }))} />
};