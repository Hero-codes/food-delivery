import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const Orders = () => {
    return (
        <div className="container mx-auto px-3">
            <h1 className="text-3xl font-semibold text-center mb-10 underline">Previous Orders</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
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
                                <p className='font-bold text-gray-700 dark:text-white text-[22px] leading-7 mb-1'>Chapati</p>
                                <div className='flex flex-row'>
                                    <p className='text-[17px] font-bold text-[#0FB478]'>INR 100</p>
                                </div>
                                <p className='text-[#7C7C80] dark:text-lime-300 font-[15px] mt-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam esse molestiae quia tenetur ad modi. Tempora hic ipsum ratione cum?</p>

                                {/* ADD HOTEL DETAILS */}

                                <Button className='block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 dark:text-white transform bg-[#FFC933] dark:bg-blue-700 rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                                    Order Again
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders