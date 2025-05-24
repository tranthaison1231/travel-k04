import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import Face from "~/assets/images/face.svg";
import Google from "~/assets/images/google.svg";
import { Button } from "~/shared/ui/atoms/Button";
import { Input } from "~/shared/ui/atoms/Input";
import { SocialButton } from "~/shared/ui/molecules/SocialButton";
import { register } from "../api/register";
import { toast } from "sonner";
import { useNavigate } from "react-router";

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
  const navigate = useNavigate();
  const {
    register: registerInput,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(validationSchema),
  });
  const onSubmit: SubmitHandler<RegisterSchemaType> = async (input) => {
    try {
      const response = await register(input);
      if (!response.ok) {
        console.log(response);
        throw new Error("Failed to register");
      }

      navigate("/login");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Failed to register");
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-[#294D81] text-5xl">Create your account</h1>
        <div className="mt-13 lg:flex gap-4">
          <div className="lg:w-1/2">
            <p className="font-bold mb-3">First name </p>
            <Input
              placeholder="Enter your first name "
              {...registerInput("firstName")}
            />
            {errors.firstName && (
              <p className="text-red-500 mt-4">{errors.firstName.message}</p>
            )}
          </div>
          <div className="lg:w-1/2">
            <p className="font-bold mb-3 mt-4 lg:mt-0">Last name</p>
            <Input
              placeholder="Enter your last name"
              {...registerInput("lastName")}
            />
            {errors.lastName && (
              <p className="text-red-500 mt-4">{errors.lastName.message}</p>
            )}
          </div>
        </div>
        <div className="mt-6">
          <p className="font-bold mb-3">Email</p>
          <Input placeholder="Enter your email" {...registerInput("email")} />
          {errors.email && (
            <p className="text-red-500 mt-4">{errors.email.message}</p>
          )}
        </div>
        <div className="mt-6">
          <p className="font-bold mb-3">Password</p>
          <Input
            placeholder="Enter your password"
            type="password"
            {...registerInput("password")}
          />
          {errors.password && (
            <p className="text-red-500 mt-4">{errors.password.message}</p>
          )}
        </div>
        <p className="underline font-bold mt-6 mb-8">Forgot Password</p>
        <Button type="submit"> Sign Up</Button>
      </form>
      <p className="text-center mt-8">OR</p>
      <div className="flex gap-4 mt-8 w-full lg:justify-center ">
        <SocialButton icon={Google} className="w-1/2" variant="default">
          Sign in with Google
        </SocialButton>
        <SocialButton icon={Face} className="w-1/2" variant="primary">
          Sign in with Facebook
        </SocialButton>
      </div>
      <p className="font-medium text-center lg:mt-8 mt-6 pb-5">
        Don't have an account?
        <a href="./login" className="text-blue-500">
          {" "}
          Sign In
        </a>{" "}
      </p>
    </div>
  );
}
