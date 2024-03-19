"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useEdgeStore } from '@/lib/edgestore';
import { toast } from 'sonner';
import { useState } from 'react';
import { Dropzone } from "@/components/shared/dropzone";
import { uploadDish } from "@/lib/actions/dishes.action";
import { useParams } from "next/navigation";

const MenuEditPage = () => {

    const [file, setFile] = useState<File>();
    const { edgestore } = useEdgeStore();
    const params = useParams();

    const menuSchema = z.object({
        restaurantId: z.string(),
        dishName: z.string(),
        dishDescription: z.string(),
        dishPhoto: z.string(),
        dishPrice: z.number(),
    });

    const menu = useForm<z.infer<typeof menuSchema>>({
        resolver: zodResolver(menuSchema),
        defaultValues: {
            dishName: "",
            dishDescription: "",
            dishPhoto: "",
            dishPrice: 0,
            restaurantId: ""
        }
    });

    async function onSubmit(values: z.infer<typeof menuSchema>) {
        try {
            let res;

            if (file) {
                res = await edgestore.publicFiles.upload({
                    file,
                });
            }

            if (res) {
                await uploadDish({
                    dishDescription: values.dishDescription,
                    dishName: values.dishName,
                    dishPhoto: res.url,
                    dishPrice: values.dishPrice,
                    restaurantId: params.restaurantId as string
                });
            };

            toast.success("Dish Added! 🎉 Kudos")
            menu.reset();
        } catch (error) {
            console.log(error);
            toast.error("There was an error in submitting the form! Retry.")
        }
    }

    return (
        <div className='mx-auto container px-3'>
            <div className='flex flex-col font-semibold text-xl items-center space-y-4'>
                <h3>Edit Menu</h3>
                <span>+Hotel Name+</span>
            </div>

            <div className='flex flex-col space-y-5'>
                <Form {...menu}>
                    <form onSubmit={menu.handleSubmit(onSubmit)} className='flex flex-col gap-6'>
                        <FormField
                            control={menu.control}
                            name="dishName"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Dish Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Dish Name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={menu.control}
                            name="dishDescription"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Dish Description</FormLabel>
                                    <FormControl className='h-32'>
                                        <Textarea placeholder="Dish Description" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={menu.control}
                            name="dishPrice"
                            render={({ field: { onChange, ...field } }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Dish Price</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="Dish Price"
                                            {...field}
                                            onChange={(e) => {
                                                onChange(parseInt(e.target.value, 10) || 0);
                                            }}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={menu.control}
                            name="dishPhoto"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Dish Image</FormLabel>
                                    <FormControl className='h-72 w-full'>
                                        <Dropzone
                                            setFile={setFile}
                                            file={file}
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button
                            type='submit'
                            size="lg"
                            disabled={menu.formState.isSubmitting}
                            className='col-span-2 w-full'>
                            {menu.formState.isSubmitting ? (
                                "Submitting..."
                            ) : "Publish Dish"}
                        </Button>

                    </form>
                </Form>
            </div>
        </div>
    )
}

export default MenuEditPage