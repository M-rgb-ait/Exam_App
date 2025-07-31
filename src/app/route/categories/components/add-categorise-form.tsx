"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CategoriseAddapi from "@/lib/api/categoriseadd.api";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

export default function Addcategoriseform() {
  //   const queryClinte = useQueryClient();

  //   const { isPending, error, mutateAsync } = useMutation({
  //     mutationFn: (CategoryData: { [key: string]: unknown }) =>
  //       CategoriseAddapi(CategoryData),
  //   });

  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      image: "",
      name: "",
    },
  });

  const onSubmit = async (values: { [key: string]: unknown }) => {
    console.log("valuesform", values);
    // const payload = await mutateAsync(values);
    const payload = await CategoriseAddapi(values);

    // queryClinte.invalidateQueries({
    //   queryKey: ["categories"],
    // });
    // console.log("payload", payload);
    console.log("payload", payload);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-36 mb-64">
      <div>
        <Input
          type="file"
          placeholder="Image"
          {...register("image", {
            required: {
              value: true,
              message: "categoris imge is required",
            },
          })}
        />
        {formState.errors.image && (
          <p className="text-sm text-rose-600">
            {formState.errors.image.message}
          </p>
        )}
      </div>
      <div>
        <Input
          type="text"
          placeholder="categoris name"
          {...register("name", {
            required: {
              value: true,
              message: "categoris name is required",
            },
          })}
        />
        {formState.errors.name && (
          <p className="text-sm text-rose-600">
            {formState.errors.name.message}
          </p>
        )}
      </div>

      <Button
        className="w-full mt-3 bg-blue-700"
        disabled={formState.isSubmitted && !formState.isValid}
        // className="bg-violet-900 mt-8 py-3"
      >
        add categoris
      </Button>
    </form>
  );
}
