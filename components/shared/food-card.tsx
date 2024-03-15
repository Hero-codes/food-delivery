import Image from "next/image"
import Link from "next/link";

interface FoodCardProps {
    title: string,
    price: number,
    description: string,
    imgUrl?: string
}

export const FoodCard = ({ description, price, title, imgUrl }: FoodCardProps) => {
    return (
        <div className='flex items-center justify-center mb-10'>
            <div className='w-full max-w-md  mx-auto bg-white dark:bg-zinc-800 rounded-3xl shadow-xl overflow-hidden'>
                <div className='max-w-md mx-auto'>
                    <div className='h-[236px]'>
                        <Image
                            className="w-full h-full bg-center bg-contain"
                            src="/food1.jpeg"
                            alt="next"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className='p-4 sm:p-6'>
                        <p className='font-bold text-gray-700 dark:text-white text-[22px] leading-7 mb-1'>{title}</p>
                        <div className='flex flex-row'>
                            <p className='text-[17px] font-bold text-[#0FB478]'>INR {price}</p>
                        </div>
                        <p className='text-[#7C7C80] dark:text-lime-300 font-[15px] mt-6'>{description}</p>

                        <Link href="" className='block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] dark:bg-blue-700 rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                            View on foodies
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}