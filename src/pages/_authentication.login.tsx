import { Button } from "~/shared/ui/Button";
import { Input } from "~/shared/ui/Input";

export default function Login() {
  return (
    <div className="mt-8">
      <h1 className="text-[#294D81] text-5xl">Login to your account</h1>
      <div className="mt-13">
        <p className="font-bold mb-3">Email</p>
        <Input placeholder="Enter your email" />
      </div>
      <div className="mt-6">
        <p>Password</p>
        <Input placeholder="Enter your password" />
      </div>
      <p className="underline font-bold mt-6 mb-8">Forgot Password</p>
      <Button> Sign In</Button>
    </div>
  );
}
