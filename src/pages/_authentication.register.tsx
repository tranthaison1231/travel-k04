import Face from "~/assets/images/face.svg";
import Google from "~/assets/images/google.svg";
import { Button } from "~/shared/ui/atoms/Button";
import { Input } from "~/shared/ui/atoms/Input";

export default function Register() {
  return (
    <div className="mt-8 pt-6 px-5">
      <h1 className="text-[#294D81] text-5xl">Login to your account</h1>
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
      <div className="lg:mt-13 mt-4">
        <p className="font-bold mb-3">Email</p>
        <Input placeholder="Enter your email" />
      </div>
      <div className="lg:mt-6 mt-4 mb-8">
        <p className="font-bold mb-3">Password</p>
        <Input placeholder="Enter your password" />
      </div>
      <Button>Create an account</Button>
      <p className="text-center mt-8">OR</p>
      <div className="lg:flex gap-4 mt-8 w-full lg:justify-center ">
        <div className="flex gap-2 px-10 py-5 lg:w-1/2 justify-center">
          <img src={Google} alt="" className="size-6" />
          <p className="font-semibold"> Sign up with Google</p>
        </div>
        <div className="flex gap-2 bg-[#1877F2] items-center px-10 py-5 lg:w-1/2 justify-center">
          <img src={Face} alt="" className="" />
          <p className="text-white font-semibold"> Sign up with Facebook</p>
        </div>
      </div>
      <p className="font-medium text-center mt-8 pb-5">
        Don't have an account?
        <a href="./login" className="text-blue-500">
          {" "}
          Sign In
        </a>{" "}
      </p>
    </div>
  );
}
