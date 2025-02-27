import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React from "react";
import { set, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import { urlApi, UserType } from "~/pages/_admin.admin.users";
import { Button } from "~/shared/ui/atoms/Button";
import { Input } from "~/shared/ui/atoms/Input";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/shared/ui/organisms/Dialog";
const schema = z.object({
  name: z.string({ required_error: "Name is required" }).min(1),
  phone: z.string({ required_error: "Phone is required" }).min(1),
  country: z.string({ required_error: "Country is required" }).min(1),
  email: z.string({ required_error: "Email is required" }).min(1),
});
export type CreateUserFormType = z.infer<typeof schema>;

interface CreateUserFormProps {
  setUsers: React.Dispatch<React.SetStateAction<UserType[]>>;
}
export default function CreateUserForm({ setUsers }: CreateUserFormProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormType>({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: CreateUserFormType) => {
    axios
      .post(urlApi, data)
      .then((data) => {
        setUsers((prev) => [...prev, data.data]);
        toast.success("User created successfully");
        setIsOpen(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to create user");
      });
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{<Button>Create User</Button>}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">Create User</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div className="grid flex-1 gap-2">
              <p>Email</p>
              <Input {...register("email")} />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
            <div className="grid flex-1 gap-2">
              <p>Name</p>
              <Input {...register("name")} />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>
            <div className="grid flex-1 gap-2">
              <p>Phone</p>
              <Input {...register("phone")} />
              {errors.phone && (
                <span className="text-red-500">{errors.phone.message}</span>
              )}
            </div>
            <div className="grid flex-1 gap-2">
              <p>Country</p>
              <Input {...register("country")} />
              {errors.country && (
                <span className="text-red-500">{errors.country.message}</span>
              )}
            </div>
          </div>

          <DialogFooter>
            <Button type="submit" className="mt-4" variant="default">
              Save Change
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
