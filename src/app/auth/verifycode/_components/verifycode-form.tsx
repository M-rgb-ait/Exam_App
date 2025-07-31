"use client";

// Chat cn
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import { ResetCode, UseResetCode } from "@/lib/schemes/auth.scheme";
import LoginIcon from "@/app/_component/loginicon/page";
import useCheckCode from "../_action/use-sheck";

export default function Verifycodeform() {
  const { CheckCode, isPending, error } = useCheckCode();

  const form = useForm<UseResetCode>({
    defaultValues: {
      resetCode: "",
    },
    resolver: zodResolver(ResetCode),
  });

  const onSubmit: SubmitHandler<UseResetCode> = async (valuse) => {
    //function ResetCode
    CheckCode(valuse);
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
              Verifycode
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            {/* password */}
            <FormField
              control={form.control}
              name="resetCode"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      {...field}
                      placeholder="Code"
                      autoComplete="password"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="text-sm flex justify-center items-center">
              <p className="text-[#313131]">Didn’t receive a code?</p>
              <Link
                href="/auth/forgetpassword"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Resend
              </Link>
            </div>
            <Button className="w-full mt-3 bg-blue-700" type="submit">
              {isPending ? "Loding...." : "Verify"}
            </Button>

            <LoginIcon />
          </div>
        </form>
      </Form>
    </>
  );
}
