import { useMutation } from "@tanstack/react-query";
import { UseForgotPassword } from "@/lib/schemes/auth.scheme";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import ForgotPassword from "./forget.action";

export default function useCheckForget() {
  // Navigation
  const router = useRouter();
  // Mutation
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (values: UseForgotPassword) => {
      const payload = await ForgotPassword(values);

      if ("code" in payload) throw new Error(payload.message);

      return payload;
    },
    onSuccess: (data) => {
      console.log(data);
      // Redirect to the the verifycode page upon successful ForgotPassword
      setTimeout(() => {
        router.push("/auth/verifycode");
        toast.success("SusseccForgotPassword");
      }, 1500);
    },
  });

  return { isPending, error, CheckForget: mutate };
}
