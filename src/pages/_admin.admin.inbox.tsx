import { zodResolver } from "@hookform/resolvers/zod";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Register from "~/pages/_authentication.register";
import { Button } from "~/shared/ui/atoms/Button";
import { Input } from "~/shared/ui/atoms/Input";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/shared/ui/molecules/AlertDialog";
import { Checkbox } from "~/shared/ui/molecules/Checkbox";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "~/shared/ui/molecules/DropdownMenu";
import { DataTable } from "~/shared/ui/organisms/DataTable";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/shared/ui/organisms/Dialog";

interface Invoice {
  id: string;
  status: string;
  method: string;
  amount: string;
}
const schema = z.object({
  invoice: z.string({ required_error: "Invoice is required" }).min(1),
  status: z.string({ required_error: "Status is required" }).min(1),
  payment: z.string({ required_error: "Payment is required" }).min(1),
  amount: z.string({ required_error: "Amount is required" }).min(1),
});
type Schema = z.infer<typeof schema>;
export default function Admin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const [isOpen, setIsOpen] = useState(false);
  const [invoices, setInvoices] = useState<Invoice[]>([
    {
      id: "INV001",
      status: "Paid",
      method: "Credit Card",
      amount: "$250.00",
    },
    {
      id: "INV002",
      status: "Paid",
      method: "Credit Card",
      amount: "$250.00",
    },
    {
      id: "INV003",
      status: "Paid",
      method: "Credit Card",
      amount: "$250.00",
    },
    {
      id: "INV004",
      status: "Paid",
      method: "Credit Card",
      amount: "$250.00",
    },
  ]);
  const onSubmit = (data: Schema) => {
    setInvoices((prev) => [
      ...prev,
      {
        id: data.invoice,
        status: data.status,
        method: data.payment,
        amount: data.amount,
      },
    ]);
    setIsOpen(false);
  };

  const columns: ColumnDef<Invoice, unknown>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      header: "Invoice ID",
      accessorKey: "id",
    },
    {
      header: "Status",
      accessorKey: "status",
    },
    {
      header: "Payment Method",
      accessorKey: "method",
    },
    {
      header: "Amount",
      accessorKey: "amount",
    },
    {
      id: "actions",
      enableHiding: false,
      accessorKey: "id",
      cell: (data) => {
        // console.log(data.getValue());
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                    Delete
                  </DropdownMenuItem>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you sure you want to delete your account?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => {
                        setInvoices((prev) =>
                          prev.filter(
                            (invoice) => invoice.id !== data.getValue()
                          )
                        );
                      }}
                    >
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return (
    <div>
      <div className="flex justify-end">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button variant="default">Create Invoice</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Invoice</DialogTitle>
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
                    <span className="text-red-500">
                      {errors.invoice.message}
                    </span>
                  )}
                </div>
                <div className="grid flex-1 gap-2">
                  <p>Status</p>
                  <Input {...register("status")} />
                  {errors.status && (
                    <span className="text-red-500">
                      {errors.status.message}
                    </span>
                  )}
                </div>
                <div className="grid flex-1 gap-2">
                  <p>Payment</p>
                  <Input {...register("payment")} />
                  {errors.payment && (
                    <span className="text-red-500">
                      {errors.payment.message}
                    </span>
                  )}
                </div>
                <div className="grid flex-1 gap-2">
                  <p>Amount</p>
                  <Input {...register("amount")} />
                  {errors.amount && (
                    <span className="text-red-500">
                      {errors.amount.message}
                    </span>
                  )}
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" variant="default">
                  Create
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <DataTable
        columns={columns}
        data={invoices}
        searchColumn="id"
        filterPlaceholder="Search by id"
      />
    </div>
  );
}
