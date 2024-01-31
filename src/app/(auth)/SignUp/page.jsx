"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { Chrome } from "lucide-react";
import { auth } from "../../../firebase";

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
import Link from "next/link";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const form = useForm();
  const onSubmit = async (values) => {
    console.log(values);
    const { Email, Password } = JSON.stringify(values);

    await createUserWithEmailAndPassword(auth, Email, Password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };

  // ...

  return (
    <div className="md:w-1/3 mx-auto border-b-2 pb-2">
      <div>
        <h1 className="text-center text-red-500 font-semibold text-4xl">
          Rejister
        </h1>
        {/* {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>} */}
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Full Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Rejister
          </Button>
          <div className="text-center space-y-3">
            <p>or Login with Provider</p>
            <Button variant="outline" className="w-full">
              <span className="me-4">
                <Chrome color="blue" />
              </span>
              Login with google
            </Button>
            <div>
              <span>Existing account?</span>
              <Link href="/signin" className="ms-3 underline">
                Login here
              </Link>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignUp;
