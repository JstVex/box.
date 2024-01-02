'use client'

import Link from "next/link";
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
    message: z.string().min(1),
})

const BlackBox = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            message: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <div className="relative h-screen">
            <Link href="/" className="absolute ml-2 text-lg">
                box.
            </Link>
            <div className="w-screen h-[100vh] flex flex-col items-center justify-center space-y-10">
                <div className="w-40 h-40 duration-1000 bg-black transform transition-transform origin-center"></div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    {/* <FormLabel>Message</FormLabel> */}
                                    <FormControl>
                                        <Textarea placeholder="Enter something you would like to put in the black box" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* <Button type="submit">Submit</Button> */}
                    </form>
                </Form>
            </div>
        </div>
    );
}

export default BlackBox;