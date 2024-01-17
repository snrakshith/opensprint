"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import Logo from "../../assets/svg/logo.svg";
import { FormSchema } from "@/shared/validations/LoginForm";

export function LoginForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-1/3 space-y-6"
        >
          <img className="h-24 w-full object-fit" src={Logo} alt="Logo" />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Username</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className="bg-slate-700 text-white focus:outline-none focus:ring focus:border-gray-300"
                    placeholder="Enter username"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-white" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Password</FormLabel>
                <FormControl>
                  <Input
                    className="bg-slate-700 text-white focus:outline-none focus:ring focus:border-gray-300"
                    placeholder="Enter password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-white" />
              </FormItem>
            )}
          />

          <Button type="submit" size="lg" variant="ikure">
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
}
