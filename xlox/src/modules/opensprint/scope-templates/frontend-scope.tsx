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
import { FormSchema } from "@/shared/validations/LoginForm";
import { Options } from "../components/options";

const data = [
  {
    id: "desc",
    label: "Description",
    info: false,
    infoText: "",
  },
  {
    id: "ac",
    label: "Acceptence Criteria",
    info: false,
    infoText: "",
  },
  {
    id: "epics",
    label: "Epics",
    info: false,
    infoText: "",
  },
  {
    id: "sb",
    label: "Subtasks",
    info: false,
    infoText: "",
  },
  {
    id: "dod",
    label: "Defination of Done",
    info: false,
    infoText: "",
  },
  {
    id: "dor",
    label: "Defination of Ready",
    info: false,
    infoText: "",
  },
];

export function FrontendScope() {
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
          className="w-3/3 space-y-6"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Prefix stories with</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    // className="bg-slate-700 text-white focus:outline-none focus:ring focus:border-gray-300"
                    placeholder="As a user"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="">
            <h1 className="text-xl font-bold">Enable</h1>
            <Options data={data} />
          </div>

          <Button type="submit" size="lg" variant="ikure">
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
}
