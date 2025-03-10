import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { Invoice } from "~/entities/invoice";
import InvoiceCreateForm, {
  InvoiceInput,
} from "~/features/create-invoice/ui/InvoiceCreateForm";
import InvoiceEditForm from "~/features/edit-invoice/ui/InvoiceEditForm";
import { Button } from "~/shared/ui/atoms/Button";
import { Checkbox } from "~/shared/ui/molecules/Checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/shared/ui/molecules/DropdownMenu";
import ConfirmMenu from "~/shared/ui/organisms/ConfirmMenu";
import { DataTable } from "~/shared/ui/organisms/DataTable";

export default function Admin() {
  const [isOpen, setIsOpen] = useState(false);
  const [invoices, setInvoices] = useState<Invoice[]>([
    {
      id: "INV001",
      status: "Paid",
      method: "Credit Card 1",
      amount: "$210.00",
    },
    {
      id: "INV002",
      status: "Paid",
      method: "Credit Card 2",
      amount: "$220.00",
    },
    {
      id: "INV003",
      status: "Paid",
      method: "Credit Card 3",
      amount: "$230.00",
    },
    {
      id: "INV004",
      status: "Paid",
      method: "Credit Card 4",
      amount: "$240.00",
    },
  ]);

  const onSubmit = (data: InvoiceInput) => {
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
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <ConfirmMenu
                onConfirm={() =>
                  setInvoices((prev) =>
                    prev.filter((invoice) => invoice.id !== data.getValue())
                  )
                }
              >
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                  Delete
                </DropdownMenuItem>
              </ConfirmMenu>
              <InvoiceEditForm
                onSubmit={(e) => {
                  setInvoices((prev) =>
                    prev.map((invoice) =>
                      invoice.id === data.row.original.id
                        ? {
                            id: e.invoice,
                            status: e.status,
                            method: e.payment,
                            amount: e.amount,
                          }
                        : invoice
                    )
                  );
                }}
                initialValues={{
                  invoice: data.row.original.id,
                  status: data.row.original.status,
                  payment: data.row.original.method,
                  amount: data.row.original.amount,
                }}
              />
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return (
    <div>
      <div className="flex justify-end">
        <InvoiceCreateForm
          open={isOpen}
          onOpenChange={setIsOpen}
          onSubmit={onSubmit}
        />
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
