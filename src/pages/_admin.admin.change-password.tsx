import React from "react";
import { Button } from "~/shared/ui/atoms/Button";
import { Input } from "~/shared/ui/atoms/Input";

export default function ChangePassword() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="p-5 border border-gray-300 shadow-md min-w-[400px] flex flex-col gap-4">
        <h2 className="text-xl font-bold text-center">Change password</h2>
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
        <Button>Submit</Button>
      </div>
    </div>
  );
}
