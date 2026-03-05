"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Define the form schema with Zod validation
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

// Infer the TypeScript type from the schema
type FormValues = z.infer<typeof formSchema>;

export default function TestPage() {
  // Initialize the form with React Hook Form and Zod resolver
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  // Handle form submission
  function onSubmit(values: FormValues) {
    console.log("Form submitted:", values);
    alert(`Form submitted successfully!\nName: ${values.name}\nEmail: ${values.email}`);
    form.reset();
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      {/* Framer Motion animation wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Contact Form
            </CardTitle>
            <CardDescription className="text-center">
              Please fill in your details below. This form uses React Hook Form with Zod validation.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your name"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Your full name (minimum 2 characters).
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        A valid email address.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex justify-center text-sm text-muted-foreground">
            Built with Next.js + shadcn/ui + Framer Motion
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
