"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { Chrome } from "lucide-react";
import { auth } from "../../../firebase";
import { useRouter } from "next/navigation";
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
import { signInWithEmailAndPassword } from "firebase/auth";
import { signIn } from "next-auth/react";

const Login = () => {
  const router = useRouter();
  const form = useForm();

  // 1. Define your form.

  const onSubmit = async (values) => {
    const { Email, Password } = values;
    // signIn("credentials", {
    //   Email,
    //   Password,
    //   redirect: false,
    //   callbackUrl: "/",
    // });

    if (!Email || !Password) {
      alert("Please enter your email and password");
      return;
    }

    if (Email === "admin123@gmail.com" && Password === "admin123") {
      router.push("/admin");
    } else {
      alert("no admin");
    }
    // await signInWithEmailAndPassword(auth, Email, Password)
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     console.log(user);
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorMessage = error.message;
    //     console.log(errorMessage);
    //   });
  };

  return (
    <div className="md:w-1/3 mx-auto border-b-2 pb-2">
      <div>
        <h1 className="text-center text-red-500 font-semibold text-4xl">
          Login
        </h1>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
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
            Login
          </Button>
          <div className="text-center space-y-3">
            <p>or Login with Provider</p>
            <Button variant="outline" className="w-full">
              <span className="me-4">
                <Chrome color="blue" />
              </span>
              Login with google
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Login;
