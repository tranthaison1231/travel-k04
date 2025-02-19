import { ColumnDef, RowSelectionState } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "~/shared/ui/atoms/Button";
import { Checkbox } from "~/shared/ui/molecules/Checkbox";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "~/shared/ui/molecules/DropdownMenu";
import { DataTable } from "~/shared/ui/organisms/DataTable";

export type StatusInvoiceType = "Paid" | "Unpaid";
export type MethodInvoiceType =
  | "Credit Card"
  | "Paypal"
  | "Bank Transfer"
  | "Cash";
export interface Invoice {
  id: string;
  status: StatusInvoiceType;
  method: MethodInvoiceType;
  amount: string;
}
const INVOICES: Invoice[] = [
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
];

export default function Admin() {
  const [data, setData] = useState<Invoice[]>(INVOICES);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({}); //manage your own row selection state

  console.log("select", rowSelection);

  const handleAddInvoice = (invoice: Invoice) => {
    setData((prevData) => [...prevData, invoice]);
  };
  const handleDeleteInvoice = (id: string) => {
    setData((prevData) => prevData.filter((invoice) => invoice.id !== id));
  };
  const handleDeleteCheckedInvoices = () => {
    setData((prevData) =>
      prevData.filter((invoice) => !rowSelection[invoice.id])
    );
    setRowSelection({});
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
      cell: ({ row }) => {
        return (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        );
      },
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
      cell: (data: any) => {
        // console.log(data);
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => handleDeleteInvoice(data?.row?.original?.id)}
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return (
    <DataTable<Invoice>
      columns={columns}
      data={data}
      searchColumn="id"
      filterPlaceholder="Search by id"
      handleAddInvoice={handleAddInvoice}
      rowSelection={rowSelection}
      setRowSelection={setRowSelection}
      handleDeleteCheckedInvoices={handleDeleteCheckedInvoices}
    />
  );
}
