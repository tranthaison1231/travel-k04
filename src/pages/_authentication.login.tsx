import { Button } from "~/shared/ui/Button";
import { Input } from "~/shared/ui/Input";
import Face from "~/assets/images/face.svg";
import Google from "~/assets/images/google.svg";


export default function Login() {
  return (
    <div className="mt-8 px-5">
      <h1 className="text-[#294D81] text-5xl">Login to your account</h1>
      <div className="mt-13">
        <p className="font-bold mb-3">Email</p>
        <Input placeholder="Enter your email" />
      </div>
      <div className="mt-6">
        <p className="font-bold mb-3">Password</p>
        <Input placeholder="Enter your password" />
      </div>
      <p className="underline font-bold mt-6 mb-8">Forgot Password</p>
      <Button> Sign In</Button>
      <p className="text-center mt-8">OR</p>
      <div className="lg:flex gap-4 mt-8 w-full lg:justify-center ">
        <div className="flex gap-2 px-10 py-5 lg:w-1/2 justify-center mb-4">
          <img src={Google} alt="" className="size-6" />
          <p className=""> Sign un with Google</p>
        </div>
        <div className="flex gap-2 bg-[#1877F2] items-center justify-center px-10 py-5 lg:w-1/2">
          <img src={Face} alt="" className="" />
          <p className="text-white"> Sign un with Facebook</p>
        </div>        
      </div>
      <p className="font-medium text-center lg:mt-8 mt-6 pb-5">Don't have an account?  
        <a href="./register" className="text-blue-500"> Sign Up</a> </p>
    </div>
  );
}
