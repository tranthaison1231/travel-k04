import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
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
  id: z.string({ required_error: "Id is required" }).min(1),
  name: z.string({ required_error: "Name is required" }).min(1),
  phone: z.string({ required_error: "Phone is required" }).min(1),
  country: z.string({ required_error: "Country is required" }).min(1),
  email: z.string({ required_error: "Email is required" }).min(1),
});
export type EditUserFormType = z.infer<typeof schema>;

interface EditUserFormProps {
  initialValues: EditUserFormType;
  children: React.ReactNode;
  setUsers: React.Dispatch<React.SetStateAction<UserType[]>>;
}
export default function EditUserForm({
  initialValues,
  children,
  setUsers,
}: EditUserFormProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditUserFormType>({
    resolver: zodResolver(schema),
    defaultValues: initialValues,
  });
  const onSubmit = (data: EditUserFormType) => {
    axios
      .put(`${urlApi}/${data.id}`, data)
      .then((data) => {
        setUsers((prev) => {
          const index = prev.findIndex((user) => user.id === data.data.id);
          prev[index] = data.data;
          return [...prev];
        });
        toast.success("User updated successfully");
        setIsOpen(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to update user");
      });
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
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
