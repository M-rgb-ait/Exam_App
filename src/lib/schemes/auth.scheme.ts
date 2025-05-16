import { z } from "zod";

// RegisterSchema
export const RegisterSchema = z
  .object({
    username: z
      .string({ required_error: "username-required" })
      .regex(/^[a-zA-Z]+$/),
    firstName: z
      .string({ required_error: "firstname-required" })
      .regex(/^[a-zA-Z]+$/),
    lastName: z
      .string({ required_error: "lastname-required" })
      .regex(/^[a-zA-Z]+$/),
    email: z
      .string({ required_error: "email-required" })
      .email({ message: "email-invalid" }),
    password: z
      .string({ required_error: "password-required" })
      .regex(
        /^[A-Za-z]+@[0-9]+$/,
        "1uppercase and 4lowercase and like@ 3number"
      ), //9number only
    rePassword: z.string({ required_error: "password-required" }),
    phone: z
      .string({ required_error: "phone-required" })
      .regex(/^01[0125][0-9]{8}$/),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "password is not match",
    path: ["rePassword"],
  });
export type UseRegisterSchema = z.infer<typeof RegisterSchema>;
//LoginSchema

export const LoginSchema = z.object({
  email: z
    .string({ required_error: "email-required" })
    .email({ message: "email-invalid" }),
  password: z.string({ required_error: "password-required" }),
});
export type UseLoginSchema = z.infer<typeof LoginSchema>;

//ForgotPasswordSchema

export const ForgotPasswordSchema = z.object({
  email: z
    .string({ required_error: "email-required" })
    .email({ message: "email-invalid" }),
});
export type UseForgotPassword = z.infer<typeof ForgotPasswordSchema>;

//ResetCode

export const ResetCode = z.object({
  resetCode: z
    .string({ required_error: "ResetCode-required" })
    .regex(/[0-6]/, "6 number"),
});
export type UseResetCode = z.infer<typeof ResetCode>;

//ChangePasswordScheme

export const ChangePasswordScheme = z.object({
  oldPassword: z.string({ required_error: "email-required" }),
  password: z.string({ required_error: "-required" }),
  rePassword: z.string({ required_error: "-required" }),
});
export type UseChangePasswordScheme = z.infer<typeof ChangePasswordScheme>;

//ResetPassword

export const ResetPassword = z.object({
  // /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
  email: z.string({ required_error: "email-required" }),
  newPassword: z
    .string({ required_error: "-required" })
    .regex(/^[A-Za-z]+@[0-9]+$/, "1uppercase and 4lowercase and like@ 3number"), //9number only
});
export type UseResetPassword = z.infer<typeof ResetPassword>;
