"use client";

// Chat cn
import { Button } from "@/components/ui/button";
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
import { LoginSchema, UseLoginSchema } from "@/lib/schemes/auth.scheme";
import LoginIcon from "@/app/_component/loginicon/page";
import useCheckLogin from "../_actions/use-sheck-login";

export default function Singinform() {
  // const route = useRouter();
  const { isPending, CheckLogin, error } = useCheckLogin();

  const form = useForm<UseLoginSchema>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<UseLoginSchema> = async (valuse) => {
    //function login
    CheckLogin(valuse);
  };
  return (
    <>
      {error && <p className="text-rose-700 text-xl p-2">{error.message}</p>}

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
        >
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-2xl/9 font-bold tracking-tight text-gray-900">
              Sign in
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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

            <div className="text-sm flex items-center justify-between">
              <Link
                href="/auth/changepassword"
                className="font-semibold text-indigo-600 hover:text-indigo-500 flex justify-end"
              >
                Change password
              </Link>
              <Link
                href="/auth/forgetpassword"
                className="font-semibold text-indigo-600 hover:text-indigo-500 flex justify-end"
              >
                Forget password?
              </Link>
            </div>
            <Button
              className="w-full mt-3 bg-blue-700"
              type="submit"
              disabled={form.formState.isSubmitted && !form.formState.isValid}
            >
              {isPending ? "Loding....." : "sigin in"}
            </Button>

            <LoginIcon />
          </div>
        </form>
      </Form>
    </>
  );
}
