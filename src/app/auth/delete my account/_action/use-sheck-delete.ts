import { useMutation } from "@tanstack/react-query";
import { DeleteMeAction } from "./delete.action";
import { toast } from "sonner";
import { signOut } from "next-auth/react";

export default function useCheckDelete() {
  // Mutation
  const { isPending, error, mutate } = useMutation({
    mutationFn: async () => {
      const payload = await DeleteMeAction();

      return payload;
    },
    onSuccess: (data) => {
      console.log(data);
      // Redirect to the the verifycode page upon successful ForgotPassword
      signOut();
      window.location.href = "/auth/login";
      toast.success("SusseccDeletemyAcunte");
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  return { isPending, error, CheckDelete: mutate };
}
