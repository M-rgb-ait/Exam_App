import { UseResetPassword } from "@/lib/schemes/auth.scheme";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import ResetPasswordAction from "./reset.action";

export default function useCheckReset() {
  // Navigation
  const router = useRouter();
  // Mutation
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (values: UseResetPassword) => {
      const payload = await ResetPasswordAction(values);

      if ("code" in payload) throw new Error(payload.message);

      return payload;
    },
    onSuccess: (data) => {
      console.log(data);
      // Redirect to the the login page upon successful ResetPassword
      setTimeout(() => {
        router.push("/auth/login");
        toast.success("SusseccResetPassword");
      }, 1500);
    },
  });

  return { isPending, error, CheckReset: mutate };
}
