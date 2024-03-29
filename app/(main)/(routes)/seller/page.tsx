"use client";
import { Input } from '@/components/ui/input';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Dropzone } from '@/components/shared/dropzone';
import { uploadRestaurant } from '@/lib/actions/restaurant.action';
import { useState } from 'react';
import { useEdgeStore } from '@/lib/edgestore';
import { toast } from 'sonner';

const BecomeASellerPage = () => {

    const [file, setFile] = useState<File>();
    const { edgestore } = useEdgeStore();

    const formSchema = z.object({
        shopName: z.string(),
        shopAddress: z.string(),
        shopImg: z.string(),
        shopOpenTime: z.string(),
        shopCloseTime: z.string()
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            shopName: "",
            shopAddress: "",
            shopImg: "",
            shopOpenTime: "",
            shopCloseTime: ""
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            let res;

            if (file) {
                res = await edgestore.publicFiles.upload({
                    file,
                });
            }

            if (res) {
                await uploadRestaurant({
                    shopName: values.shopName,
                    shopAddress: values.shopAddress,
                    shopOpenTime: values.shopOpenTime,
                    shopCloseTime: values.shopCloseTime,
                    shopImg: res.url
                });
            };
            toast.success("Form Submitted! 🎉 Kudos")
            form.reset();
        } catch (error) {
            console.log(error);
            toast.error("There was an error in submitting the form! Retry.")
        }
    }

    return (
        <div className='container mx-auto px-3'>
            <h1 className='text-center text-3xl font-semibold mb-10 underline'>Seller Details</h1>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-6'>
                    <FormField
                        control={form.control}
                        name="shopName"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Shop Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Shop Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="shopAddress"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Shop Address</FormLabel>
                                <FormControl className='h-32'>
                                    <Textarea placeholder="Shop Address" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className='flex flex-col md:flex-row w-full gap-4'>
                        <FormField
                            control={form.control}
                            name="shopOpenTime"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Shop Open Time</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Shop Open Time" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="shopCloseTime"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Shop Close Time</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Shop Close Time" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="shopImg"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Shop Image</FormLabel>
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
                        disabled={form.formState.isSubmitting}
                        className='col-span-2 w-full'>
                        {form.formState.isSubmitting ? (
                            "Submitting..."
                        ) : "Publish Restaurant"}
                    </Button>

                </form>
            </Form>
        </div>
    )
}

export default BecomeASellerPage;