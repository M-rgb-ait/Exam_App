import { useMutation } from "@tanstack/react-query";
import { UseRegisterSchema } from "@/lib/schemes/auth.scheme";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Registeracyion from "./register.acyion";

export default function useCheckRegister() {
  // Navigation
  const router = useRouter();
  // Mutation
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (values: UseRegisterSchema) => {
      const payload = await Registeracyion(values);

      if ("code" in payload) throw new Error(payload.message);

      return payload;
    },
    onSuccess: (data) => {
      console.log(data);
      // Redirect to the the login page upon successful registration
      setTimeout(() => {
        router.push("/auth/login");
        toast.success("SusseccRegister");
      }, 3000); // No need
      //      toast.error('error', {duration: 3000, position: 'top-right'});
    },
    // onError: (error) => {
    //   console.log(error.message);
    //   toast(`${error.message}`, {
    //     action: {
    //       label: "Siginuperror",
    //       onClick: () => console.log("Siginuperror"),
    //     },
    //   });
    // },
  });

  return { isPending, error, CheckRegister: mutate };
}
