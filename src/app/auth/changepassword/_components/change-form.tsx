"use client";

// Chat cn
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  ChangePasswordScheme,
  UseChangePasswordScheme,
} from "@/lib/schemes/auth.scheme";
import LoginIcon from "@/app/_component/loginicon/page";
// import { toast } from "sonner";
import useCheckChange from "../_action/use-sheck-change";
// import { useRouter } from "next/navigation";

export default function ChangePasswordForm() {
  // const router = useRouter();

  //mutation
  const { CheckChange, isPending, error } = useCheckChange();

  const form = useForm<UseChangePasswordScheme>({
    defaultValues: {
      oldPassword: "",
      password: "",
      rePassword: "",
    },
    resolver: zodResolver(ChangePasswordScheme),
  });

  const onSubmit: SubmitHandler<UseChangePasswordScheme> = async (values) => {
    CheckChange(values);
    // if (!error) {
    //   setTimeout(() => {
    //     router.push("/auth/resetpassword");
    //     toast.success("SusseccChangePassword");
    //   }, 1500);
    // }
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
              Change Password
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            {/* password */}
            <FormField
              control={form.control}
              name="oldPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      {...field}
                      placeholder="oldPassword"
                      autoComplete="oldPassword"
                    />
                  </FormControl>
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
                      placeholder="Newpassword"
                      autoComplete="password"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* password */}
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
                      autoComplete="rePassword"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* variant="link" */}
            <Button type="submit">
              {isPending ? "Loding...." : "Change password"}
            </Button>

            <LoginIcon />
          </div>
        </form>
      </Form>
    </>
  );
}
