"use client";

// Chat cn
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { ResetPassword, UseResetPassword } from "@/lib/schemes/auth.scheme";
import LoginIcon from "@/app/_component/loginicon/page";
import useCheckReset from "../_action/use-sheck-reset";

export default function Resetpasswordform() {
  const { CheckReset, isPending, error } = useCheckReset();

  const form = useForm<UseResetPassword>({
    defaultValues: {
      email: "",
      newPassword: "",
    },
    resolver: zodResolver(ResetPassword),
  });

  const onSubmit: SubmitHandler<UseResetPassword> = async (valuse) => {
    //function ResetPassword

    CheckReset(valuse);
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
              Reset Password
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
                </FormItem>
              )}
            />

            {/* password */}
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      {...field}
                      placeholder="newPassword"
                      autoComplete="password"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* variant="link" */}
            <Button type="submit">
              {isPending ? "Loding...." : "ResetPassword"}
            </Button>
            <LoginIcon />
          </div>
        </form>
      </Form>
    </>
  );
}
