import { RestaurantCard } from "@/components/shared/restuarant-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getRestaurants } from "@/lib/actions/restaurant.action"
import { Search } from "lucide-react"

export const dynamic = 'force-dynamic'

const Restaurant = async () => {
    const restaurants = await getRestaurants();

    return (
        <div className="container mx-auto px-3">
            <h1 className="font-semibold text-3xl underline text-center mb-10">Restaurants</h1>

            <div className="flex flex-col">
                <form className="flex items-center relative">
                    <Input
                        name="search"
                        placeholder="Search Your Favoraite Restuarants..."
                        className="rounded-full"
                    />
                    <Button type="submit" className="p-0" variant="ghost">
                        <Search className="absolute right-4" />
                    </Button>
                </form>

                <div className="flex mt-10 flex-col gap-y-6">
                    {restaurants?.map(restaurant => (
                        <RestaurantCard
                            buttonText="View Menu"
                            restaurant={restaurant}
                        />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Restaurant