import { useMutation } from "@tanstack/react-query";
import ChangePasswordAction from "./change.sction";
import { UseChangePasswordScheme } from "@/lib/schemes/auth.scheme";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function useCheckChange() {
  const router = useRouter();
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (values: UseChangePasswordScheme) => {
      const payload = await ChangePasswordAction(values);

      if ("code" in payload) throw new Error(payload.message);

      return payload;
    },
    onSuccess: (data) => {
      console.log(data);
      setTimeout(() => {
        router.push("/auth/resetpassword");
        toast.success("SusseccChangePassword");
      }, 1500);
    },
  });

  return { isPending, error, CheckChange: mutate };
}
