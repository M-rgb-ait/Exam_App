"use client";

// Chat cn
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
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

    // if (!error) {
    //   setTimeout(() => {
    //     // router.push("/auth/login");
    //     window.location.href = "/route/dashboard";

    //     toast.success("SusseccLoginin");
    //   }, 1500);
    // }

    // console.log("valuse", valuse);

    // const respons = await signIn("credentials", {
    //   redirect: false,
    //   // callbackUrl: "/route/dashboard",
    //   email: valuse.email,
    //   password: valuse.password,
    // });
    // console.log("respons", respons?.error);

    // if (respons?.ok) {
    //   window.location.href = "/route/dashboard";
    // }
  };
  return (
    <>
      {error && <p className="text-rose-700 text-xl p-2">{error.message}</p>}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-2xl/9 font-bold tracking-tight text-gray-900">Sign in</h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            {/* email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="Email" {...field} placeholder="Email" autoComplete="email" />
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
                    <Input type="password" {...field} placeholder="password" autoComplete="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="text-sm flex items-center justify-end">
              <Link href="/auth/forgetpassword" className="font-semibold text-indigo-600 hover:text-indigo-500 flex justify-end">
                Forget password?
              </Link>
            </div>
            {/* variant="link" */}
            <Button type="submit" disabled={isPending || (form.formState.isSubmitted && !form.formState.isValid)}>
              {isPending ? "Loding....." : "sigin in"}
            </Button>
            {/* <Link href={'/auth/verifycode'} >Verifycode</Link> */}

            <LoginIcon />
          </div>
        </form>
      </Form>
    </>
  );
}
// /{formState.errors.password && (
//   <p className='mt-2 text-sm text-red-900'>
//     {formState.errors.password.message}
//   </p>
// )}

//   type LoginFields =z.infer<typeof Schema>

// // Form
// const form = useForm<LoginFields>({
//   resolver: zodResolver(Schema),
//   defaultValues: {
//     email: "",
//     password: "",
//   },
// });

// // Functions
// const onSubmit: SubmitHandler<LoginFields> = (values) => {
//   console.log(values);
// };
// import { Button } from "@/components/ui/button";
// import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { SubmitHandler, useForm } from "react-hook-form";
// import { z } from "zod";

// export default function Singinform() {
//   const Schema = z.object({
//     name: z.string({required_error: 'input is requier'}).min(1, '10 number'),
//     password: z.string({required_error: 'input is requier'}).min(1, '10 number'),
//   });

//     type Inputs =z.infer<typeof Schema>

//     const form = useForm<Inputs>({
//       defaultValues: {
//         name: '',
//         password: '',
//       },
//       resolver : zodResolver(Schema)
//     })

//     const onSubmit : SubmitHandler<Inputs> = async (valuse) => {
//       console.log(valuse);
//     }

//     return <Form {...form}>
//       <h2>Sing in</h2>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="bg-red-800">
//     {/* <FormField control={form.control} name="name"
//     render={({field}) => <FormItem>
//       <FormLabel>
//         username
//       </FormLabel>
//       <FormControl>
//         <Input type="field"/>
//       </FormControl>
//     </FormItem>}/> */}

//     <FormField control={form.control} name="password"
//     render={({field}) =>
//     <FormItem>
//       {/* <FormLabel>
//       password
//       </FormLabel> */}
//       <FormControl>
//         <Input type="password" placeholder="password"/>
//       </FormControl>
//     </FormItem>}/>

//     <Button className="w-full">sigin in</Button>
//       </form>
//     </Form>
//   }
