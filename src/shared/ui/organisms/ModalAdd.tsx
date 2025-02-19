import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/shared/ui/molecules/dialog";
import { Input } from "~/shared/ui/atoms/Input";
import { Label } from "~/shared/ui/atoms/label";
import { Button } from "~/shared/ui/atoms/Button";
import { StatusInvoiceSelect } from "~/shared/ui/molecules/StatusInvoiceSelect";
import { MethodInvoiceSelect } from "~/shared/ui/molecules/MethodInvoiceSelect";
import { useState } from "react";
import {
  MethodInvoiceType,
  StatusInvoiceType,
} from "~/pages/_admin.admin.inbox";
import {
  al,
  am,
} from "node_modules/react-router/dist/development/fog-of-war-BALYJxf_.mjs";

type ModalAddProps = {
  handleAddInvoice: (invoice: any) => void;
};
export function ModalAdd({ handleAddInvoice }: ModalAddProps) {
  const [open, setOpen] = useState(false);
  const [dataInvoice, setDataInvoice] = useState({
    status: "",
    method: "",
    amount: "",
  });
  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!dataInvoice.status || !dataInvoice.method || !dataInvoice.amount) {
      alert("Please fill all fields");
      return;
    }

    const newInvoice = {
      id: "INV" + new Date().getTime().toString(),
      ...dataInvoice,
    };
    handleAddInvoice(newInvoice);
    setDataInvoice((prev) => ({
      ...prev,
      status: "",
      method: "",
      amount: "",
    }));
    setOpen(false);
  };
  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        setOpen(isOpen);
        if (!isOpen) {
          setDataInvoice((prev) => ({
            ...prev,
            status: "",
            method: "",
            amount: "",
          }));
        }
      }}
    >
      <DialogTrigger asChild>
        <Button variant="default" className="cursor-pointer">
          Create
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleAdd}>
          <DialogHeader>
            <DialogTitle className="text-center">Create Invoice</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Status
              </Label>
              <StatusInvoiceSelect
                handleSelectStatus={(data: StatusInvoiceType) =>
                  setDataInvoice((prevData) => ({
                    ...prevData,
                    status: data,
                  }))
                }
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Method
              </Label>
              <MethodInvoiceSelect
                handleSelectMethod={(data: MethodInvoiceType) =>
                  setDataInvoice((prevData) => ({
                    ...prevData,
                    method: data,
                  }))
                }
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Amount
              </Label>
              <Input
                placeholder="$0.0"
                className="col-span-2"
                value={dataInvoice.amount}
                onChange={(e) =>
                  setDataInvoice((prevData) => ({
                    ...prevData,
                    amount: e.target.value,
                  }))
                }
              />
            </div>
          </div>
          <Button type="submit" className="w-full">
            Save Invoice
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
