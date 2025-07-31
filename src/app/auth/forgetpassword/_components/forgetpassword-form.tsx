"use client";

// Chat cn
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import {
  ForgotPasswordSchema,
  UseForgotPassword,
} from "@/lib/schemes/auth.scheme";
import LoginIcon from "@/app/_component/loginicon/page";
import useCheckForget from "../_actions/use-sheck-forget";

export default function Forgetform() {
  const { CheckForget, isPending, error } = useCheckForget();
  const form = useForm<UseForgotPassword>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(ForgotPasswordSchema),
  });

  const onSubmit: SubmitHandler<UseForgotPassword> = async (valuse) => {
    console.log("valuse", valuse);
    CheckForget(valuse);
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
              Forget password
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
                      required
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="text-sm">
              <Link
                href="/auth/verifycode"
                className="font-semibold text-indigo-600 hover:text-indigo-500 flex justify-end"
              >
                Recover password?
              </Link>
            </div>
            {/* variant="link" */}
            <Button className="w-full mt-3 bg-blue-700" type="submit">
              {isPending ? "Loding...." : "Send Email"}
            </Button>

            <LoginIcon />
          </div>
        </form>
      </Form>
    </>
  );
}
