"use client";

// Chat cn
import { Button } from "@/components/ui/button";
// import {
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import { RegisterSchema, UseRegisterSchema } from "@/lib/schemes/auth.scheme";
import LoginIcon from "@/app/_component/loginicon/page";
import useCheckRegister from "../_actions/use-sheck-register";
// import Hero from "./phone-input";
// import { Select } from "@/components/ui/select";

export default function Registerform() {
  const { CheckRegister, isPending, error } = useCheckRegister();

  const form = useForm<UseRegisterSchema>({
    defaultValues: {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit: SubmitHandler<UseRegisterSchema> = async (valuse) => {
    //function Register

    CheckRegister(valuse);
  };

  return (
    <>
      {error && <p className="text-rose-700 text-xl p-2">{error.message}</p>}

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex min-h-full flex-1 flex-col justify-center px-6 py-5 lg:px-8"
        >
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            {/* {<h2></h2>} */}
            <h2 className="mt-3 text-2xl/9 font-bold tracking-tight text-gray-900">
              Sign up
            </h2>
          </div>

          <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
            {/* name */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      {...field}
                      placeholder="username"
                      autoComplete="username"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* first name */}
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      {...field}
                      placeholder="firstName"
                      autoComplete="firstName"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* last name */}
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      {...field}
                      placeholder="lastName"
                      autoComplete="lastName"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="Email"
                      {...field}
                      placeholder="Email"
                      autoComplete="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      {...field}
                      placeholder="password"
                      autoComplete="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* rePassword */}
            <FormField
              control={form.control}
              name="rePassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      {...field}
                      placeholder="rePassword"
                      autoComplete="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* phone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="tel"
                      {...field}
                      placeholder="phone"
                      autoComplete="phone"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* 
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">male</SelectItem>
                <SelectItem value="dark">famel</SelectItem>
              </SelectContent>
            </Select>

            <Hero /> */}

            <div className="text-sm flex justify-center items-center">
              <p className="text-[#313131]">Already have an account?</p>
              <Link
                href="/auth/login"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Login
              </Link>
            </div>
            {/* variant="link" onClick={() => router.push("/auth/login") } */}
            <Button
              type="submit"
              className="w-full mt-3 bg-blue-700"
              disabled={form.formState.isSubmitted && !form.formState.isValid}
            >
              {!isPending ? "Create Account" : "Loding...."}
            </Button>

            <LoginIcon />
          </div>
        </form>
      </Form>
    </>
  );
}
