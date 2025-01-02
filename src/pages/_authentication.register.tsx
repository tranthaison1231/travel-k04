import Face from "~/assets/images/face.svg";
import Google from "~/assets/images/google.svg";
import { Button } from "~/shared/ui/atoms/Button";
import { Input } from "~/shared/ui/atoms/Input";
import { SocialButton } from "~/shared/ui/molecules/SocialButton";
import { useRef, useState } from "react";



export default function Register() {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setError({
      firstName: !firstNameRef.current?.value ? "First name is required" : "",
      lastName: !lastNameRef.current?.value ? "Last name is required" : "",
      email: !emailRef.current?.value ? "Email is required" : "",
      password: !passwordRef.current?.value ? "Password is required" : "",
    });

    console.log({
      firstName: firstNameRef.current?.value,
      lastName: lastNameRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    });
  };

  return (
  <div>
    <form onSubmit={onSubmit}>
      <h1 className="text-[#294D81] text-5xl">Create your account</h1>
      <div className="mt-13 lg:flex gap-4">
        <div className="lg:w-1/2">
          <p className="font-bold mb-3">First name </p>
          <Input placeholder="Enter your first name " />
        </div>
        <div className="lg:w-1/2">
          <p className="font-bold mb-3 mt-4 lg:mt-0">Last name</p>
          <Input placeholder="Enter your last name" />
        </div>
      </div>
      <div className="mt-6">
        <p className="font-bold mb-3">Email</p>
        <Input placeholder="Enter your email" ref={emailRef} />
        {error.email && <p className="text-red-500 mt-4">{error.email}</p>}
      </div>
      <div className="mt-6">
        <p className="font-bold mb-3">Password</p>
        <Input
          placeholder="Enter your password"
          type="password"
          ref={passwordRef}
        />
        {error.password && (
          <p className="text-red-500 mt-4">{error.password}</p>
        )}
      </div>
      <p className="underline font-bold mt-6 mb-8">Forgot Password</p>
      <Button type="submit"> Sign In</Button>
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
