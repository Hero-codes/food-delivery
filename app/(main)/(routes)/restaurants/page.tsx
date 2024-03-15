import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const Restaurant = () => {
    return (
        <div className="container mx-auto px-3">
            <h1 className="font-semibold text-3xl underline text-center mb-10">Restaurants</h1>

            <div className="flex flex-col">
                <div className="flex items-center relative">
                    <Search className="absolute right-4" />
                    <Input placeholder="Search Your Favoraite Restuarants..." className="rounded-full" />
                </div>


            </div>
        </div>
    )
}

export default Restaurant