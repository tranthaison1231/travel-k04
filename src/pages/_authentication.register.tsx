import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import Face from "~/assets/images/face.svg";
import Google from "~/assets/images/google.svg";
import { Button } from "~/shared/ui/atoms/Button";
import { Input } from "~/shared/ui/atoms/Input";
import { SocialButton } from "~/shared/ui/molecules/SocialButton";

export const validationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
export type RegisterSchemaType = z.infer<typeof validationSchema>;

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(validationSchema),
  });
  const onSubmit: SubmitHandler<RegisterSchemaType> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-[#294D81] text-5xl">Create your account</h1>
        <div className="gap-4 mt-13 lg:flex">
          <div className="lg:w-1/2">
            <p className="mb-3 font-bold">First name </p>
            <Input
              placeholder="Enter your first name "
              {...register("firstName")}
            />
            {errors.firstName && (
              <p className="mt-4 text-red-500">{errors.firstName.message}</p>
            )}
          </div>
          <div className="lg:w-1/2">
            <p className="mt-4 mb-3 font-bold lg:mt-0">Last name</p>
            <Input
              placeholder="Enter your last name"
              {...register("lastName")}
            />
            {errors.lastName && (
              <p className="mt-4 text-red-500">{errors.lastName.message}</p>
            )}
          </div>
        </div>
        <div className="mt-6">
          <p className="mb-3 font-bold">Email</p>
          <Input placeholder="Enter your email" {...register("lastName")} />
          {errors.lastName && (
            <p className="mt-4 text-red-500">{errors.lastName.message}</p>
          )}
        </div>
        <div className="mt-6">
          <p className="mb-3 font-bold">Password</p>
          <Input
            placeholder="Enter your password"
            type="password"
            {...register("password")}
          />
          {errors.password && (
            <p className="mt-4 text-red-500">{errors.password.message}</p>
          )}
        </div>
        <p className="mt-6 mb-8 font-bold underline">Forgot Password</p>
        <Button type="submit"> Sign In</Button>
      </form>
      <p className="mt-8 text-center">OR</p>
      <div className="flex w-full gap-4 mt-8 lg:justify-center ">
        <SocialButton icon={Google} className="w-1/2" variant="default">
          Sign in with Google
        </SocialButton>
        <SocialButton icon={Face} className="w-1/2" variant="primary">
          Sign in with Facebook
        </SocialButton>
      </div>
      <p className="pb-5 mt-6 font-medium text-center lg:mt-8">
        Don't have an account?
        <a href="./login" className="text-blue-500">
          {" "}
          Sign In
        </a>{" "}
      </p>
    </div>
  );
}
