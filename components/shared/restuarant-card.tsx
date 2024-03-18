"use client";
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button";
import { RestaurantCardProps } from "@/lib/types";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { deleteRestaurant } from "@/lib/actions/restaurant.action";
import { toast } from "sonner";
import { useEdgeStore } from "@/lib/edgestore";

export const RestaurantCard = ({ restaurant, buttonText, showDeleteButton }: RestaurantCardProps) => {

    const { edgestore } = useEdgeStore();

    const handleDelete = async (id: string, imgUrl: string) => {

        const deleteRecord = await edgestore.publicFiles.delete({
            url: imgUrl
        });

        await deleteRestaurant(id);
        toast.success("Restaurant deleted successfully!");
    }

    return (
        <div key={restaurant.id}
            className="flex p-2 shadow-md rounded-md flex-col md:flex-row gap-x-3 md:h-56 w-full">
            <div className="md:h-full h-40 relative w-full md:w-1/3">
                <Image
                    src={`${restaurant.shopImg}`}
                    alt={"shopImage"}
                    className="object-contain"
                    fill
                />
            </div>

            <div className="flex mt-3 md:mt-0 flex-col md:w-[calc(100%-33.33%)] space-y-1">
                <span className="md:text-lg text-sm font-semibold text-muted-foreground">Name: {restaurant.shopName}</span>
                <span className="md:text-lg text-sm font-semibold text-muted-foreground">Address: {restaurant.shopAddress}</span>
                <span className="md:text-lg text-sm font-semibold text-muted-foreground">Open Time: {restaurant.shopOpenTime}</span>
                <span className="md:text-lg text-sm font-semibold text-muted-foreground">Close time: {restaurant.shopCloseTime}</span>

                {!showDeleteButton && <Link href={`/restaurants/${restaurant.id}`}>
                    <Button size="sm" className="w-full mb-1">{buttonText}</Button>
                </Link>}

                {showDeleteButton && (
                    <Link href={`/restaurants/${restaurant.id}/menu-edit`}>
                        <Button size="sm" className="w-full mb-1">{buttonText}</Button>
                    </Link>
                )}

                {showDeleteButton && (
                    <AlertDialog>
                        <AlertDialogTrigger className="bg-red-600 rounded-lg p-1.5 text-white">Delete Restaurant</AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    This action cannot be undone. This will permanently delete your restaurant
                                    and remove your data from our servers.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={() => handleDelete(restaurant.id, restaurant.shopImg!)}>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>

                )}
            </div>
        </div>
    )
}