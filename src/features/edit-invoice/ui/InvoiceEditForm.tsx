import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "~/shared/ui/atoms/Button";
import { Input } from "~/shared/ui/atoms/Input";
import { DropdownMenuItem } from "~/shared/ui/molecules/DropdownMenu";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/shared/ui/organisms/Dialog";

const schema = z.object({
  invoice: z.string({ required_error: "Invoice is required" }).min(1),
  status: z.string({ required_error: "Status is required" }).min(1),
  payment: z.string({ required_error: "Payment is required" }).min(1),
  amount: z.string({ required_error: "Amount is required" }).min(1),
});

export type InvoiceInput = z.infer<typeof schema>;

interface InvoiceCreateFormProps {
  onSubmit: (data: InvoiceInput) => void;
  initialValues: InvoiceInput;
}

export default function InvoiceEditForm({
  onSubmit,
  initialValues,
}: InvoiceCreateFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InvoiceInput>({
    resolver: zodResolver(schema),
    defaultValues: initialValues,
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          Edit
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Invoice</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div
              className="grid flex-1 gap-2"
              onSubmit={handleSubmit(onSubmit)}
            >
              <p>Invoice</p>
              <Input {...register("invoice")} />
              {errors.invoice && (
                <span className="text-red-500">{errors.invoice.message}</span>
              )}
            </div>
            <div className="grid flex-1 gap-2">
              <p>Status</p>
              <Input {...register("status")} />
              {errors.status && (
                <span className="text-red-500">{errors.status.message}</span>
              )}
            </div>
            <div className="grid flex-1 gap-2">
              <p>Payment</p>
              <Input {...register("payment")} />
              {errors.payment && (
                <span className="text-red-500">{errors.payment.message}</span>
              )}
            </div>
            <div className="grid flex-1 gap-2">
              <p>Amount</p>
              <Input {...register("amount")} />
              {errors.amount && (
                <span className="text-red-500">{errors.amount.message}</span>
              )}
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="mt-4" variant="outline">
              Cancel
            </Button>
            <Button type="submit" className="mt-4" variant="default">
              Edit
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
