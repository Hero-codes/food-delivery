import { FoodCard } from '@/components/shared/food-card'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const SingleRestaurantPage = () => {
    return (
        <div className='container mx-auto px-3'>
            <div className='flex flex-col gap-y-6'>
                <div className='relative w-full flex flex-col gap-y-3 h-56'>
                    <Image
                        src="/food1.jpeg"
                        alt='...'
                        className='absolute object-center object-contain h-full w-full'
                        width={100}
                        height={100} />
                </div>

                <span className='text-center text-2xl font-semibold'>Hotel Name</span>

                <div className='text-xl mt-3 border-b border-gray-400 w-fit'>
                    <span>Menu</span>
                </div>

                <div className="flex items-center relative">
                    <Search className="absolute right-4" />
                    <Input placeholder="Search Your Food Items..." className="rounded-full" />
                </div>

                <div className='grid grid-cols-1 sm:gap-x-3 sm:grid-cols-2 lg:grid-cols-3'>
                    <FoodCard description='k' price={122} title='nice' imgUrl='/food1.jpeg' />
                </div>
            </div>
        </div>
    )
}

export default SingleRestaurantPage;