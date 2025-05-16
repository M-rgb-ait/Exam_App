import { useMutation } from "@tanstack/react-query";
import { UseLoginSchema } from "@/lib/schemes/auth.scheme";
// import { toast } from "sonner";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

export default function useCheckLogin() {
  //useMutation
  const { isPending, error, mutate } = useMutation({
    mutationFn: async ({ email, password }: UseLoginSchema) => {
      console.log("email", email);
      console.log("password", password);

      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
        // callbackUrl: decodeURIComponent(searchParams.get("callbackUrl") || "/"),
      });

      // if (response?.error) throw new Error(response.error);

      return response;
      // };
      // const payload = await LoginAcyion(values);

      // if ("code" in payload) throw new Error(payload.message);

      // return payload;
    },
    onSuccess: (data) => {
      console.log(data);
      // Redirect to the the dashboard page upon successful rlogin
      setTimeout(() => {
        window.location.href = data?.url || "/route/dashboard";
        toast.success("SusseccLogin");
      }, 2000);
    },
    // onError: (error) => {
    //   // console.log(error.message);
    //   toast(`${error.message}`, {
    //     action: {
    //       label: "Siginuperror",
    //       onClick: () => console.log("Siginuperror"),
    //     },
    //   });
    // },
  });

  return { isPending, error, CheckLogin: mutate };
}
