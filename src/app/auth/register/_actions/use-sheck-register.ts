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
      setTimeout(() => {
        router.push("/auth/login");
        toast.success("SusseccRegister");
      }, 3000);
    },
  });

  return { isPending, error, CheckRegister: mutate };
}
