import { FoodCard } from "../../components/shared/food-card";
import Image from "next/image";

export default function Home() {

  return (
    <main className="container mx-auto px-5">
      <div className="flex flex-col gap-y-8">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="flex flex-col gap-y-3">
            <span className="text-2xl font-semibold">Enjoy <span className="text-2xl font-semibold text-red-500">Delicious Food</span></span>
            <span className="text-2xl font-semibold">In Your Healthy Life</span>

            <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem perferendis doloremque vitae beatae atque ratione reprehenderit voluptate ipsum nesciunt eveniet!</p>
          </div>

          <Image
            className="w-full h-72 mt-6 md:mt-0"
            src="/food1.jpeg"
            alt="food"
            height={100}
            width={100} />
        </div>

        <div className="flex flex-col mt-10">
          <h1 className="border-b w-fit text-2xl mb-10 font-semibold border-black">Top Items</h1>

          <div className="grid grid-cols-1 sm:gap-x-4 sm:grid-cols-2 md:grid-cols-3 mt-6">
            <FoodCard description="Hola" price={100} title="Nice" />
            <FoodCard description="Hola" price={100} title="Nice" />
            <FoodCard description="Hola" price={100} title="Nice" />
          </div>

        </div>

        <div className="flex flex-col mt-10">
          <div className="flex items-center flex-col gap-y-4">
            <h1 className="border-b w-fit text-2xl font-semibold border-black">Why to choose us?</h1>
            <p className="text-center text-lg text-muted-foreground max-w-md">One of the best and fastest food delivery website available in the entire globe. Never regret using us. Don't forget to give us a ⭐️</p>
          </div>

          <div className="grid grid-cols-1 mt-7 gap-x-3 sm:grid-cols-2 md:grid-cols-3">

            <div className="flex shadow-lg rounded-md items-center p-6 flex-col gap-y-5">
              <Image src="/food1.jpeg" className="w-full" alt="food" width={50} height={50} />

              <div className="flex flex-col gap-y-3">
                <span className="text-center font-semibold text-lg">Discount voucher</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quaerat dicta a error saepe pariatur architecto blanditiis veniam necessitatibus modi.</span>
              </div>
            </div>

            <div className="flex shadow-lg rounded-md items-center p-6 flex-col gap-y-5">
              <Image src="/food1.jpeg" className="w-full" alt="food" width={50} height={50} />

              <div className="flex flex-col gap-y-3">
                <span className="text-center font-semibold text-lg">Fastest Delivery</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quaerat dicta a error saepe pariatur architecto blanditiis veniam necessitatibus modi.</span>
              </div>
            </div>

            <div className="flex shadow-lg rounded-md items-center p-6 flex-col gap-y-5">
              <Image src="/food1.jpeg" className="w-full" alt="food" width={50} height={50} />

              <div className="flex flex-col gap-y-3">
                <span className="text-center font-semibold text-lg">Fresh Healthy Food</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quaerat dicta a error saepe pariatur architecto blanditiis veniam necessitatibus modi.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}