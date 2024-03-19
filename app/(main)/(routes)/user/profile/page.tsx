import { RestaurantCard } from "@/components/shared/restuarant-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getRestaurantsByUser } from "@/lib/actions/restaurant.action";
import { getXataClient } from "@/src/xata";
import { currentUser } from "@clerk/nextjs";
import Image from "next/image";

const ProfilePage = async () => {

    const user = await currentUser();
    const restaurants = await getRestaurantsByUser();

    const updateAddress = async (e: FormData) => {
        "use server";

        const xata = getXataClient();

        const address = e.get("address") as string;
        const city = e.get("address") as string;
        const country = e.get("address") as string;

        const record = await xata.db.user.create({
            address,
            city,
            country,
            // @ts-ignore
            user_id: String(user.id)
        })
    }

    return (
        <div className='container mx-auto px-3 shadow-xl dark:shadow-white border-t py-5'>
            <div className="flex flex-col gap-y-10 items-center">

                <div className="relative h-24 w-24">
                    <Image
                        src={`${user?.imageUrl as string}`}
                        alt="user_image"
                        className="absolute rounded-full w-full h-full"
                        width={100}
                        height={100} />
                </div>

                <span className="first-letter:capitalize mt-7 font-semibold">{user?.username}&apos; s profile</span>

                <div className="flex items-center gap-x-10 mt-3">
                    <div className="flex border p-4 rounded-md border-black dark:border-white flex-col items-center space-y-2">
                        <span>10</span>
                        <span>Orders</span>
                    </div>
                    <div className="flex border p-4 rounded-md border-black dark:border-white flex-col items-center space-y-2">
                        <span>10</span>
                        <span>Hotels</span>
                    </div>
                    <div className="flex border p-4 rounded-md border-black dark:border-white flex-col items-center space-y-2">
                        <span>10</span>
                        <span>Hotels</span>
                    </div>
                </div>

                <form action={updateAddress} className="flex flex-col w-full gap-y-8">
                    <div className="flex flex-col gap-y-3">
                        <Label>Your Address:</Label>
                        <Textarea name="address" placeholder="Edit Address" />
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <Label>Your City:</Label>
                        <Input name="city" placeholder="Edit City" />
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <Label>Your Country:</Label>
                        <Input name="country" placeholder="Edit Country" />
                    </div>
                    <Button type="submit">Edit Details</Button>
                </form>

                <span className="text-lg font-semibold mt-10">Your Restaurants</span>

                <div className="flex mt-10 w-full flex-col gap-y-6">
                    {restaurants?.map(restaurant => (
                        <RestaurantCard
                            key={restaurant.id}
                            buttonText="Edit Menu"
                            restaurant={JSON.parse(JSON.stringify(restaurant))}
                            showDeleteButton />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default ProfilePage;