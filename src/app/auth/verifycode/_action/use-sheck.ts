import { UseResetCode } from "@/lib/schemes/auth.scheme";
import { useMutation } from "@tanstack/react-query";
import VerifycodeAction from "../_action/verify.action";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function useCheckCode() {
  // Navigation
  const router = useRouter();
  // Mutation
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (values: UseResetCode) => {
      const payload = await VerifycodeAction(values);

      if ("code" in payload) throw new Error(payload.message);

      return payload;
    },
    onSuccess: (data) => {
      console.log(data);
      // Redirect to the the resetpassword page upon successful VerifyCode
      // No need
      setTimeout(() => {
        router.push("/auth/resetpassword");
        toast.success("SusseccVerifyCode"); // No need
      }, 1500);
    },
    // onError: (error) => {
    //   console.log(error.message);
    //   setTimeout(() => {
    //     window.location.href = "/auth/verifycode";
    //   }, 1500);
    // },
  });

  return { isPending, error, CheckCode: mutate };
}
