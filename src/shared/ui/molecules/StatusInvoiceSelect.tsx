import {
  MethodInvoiceType,
  StatusInvoiceType,
} from "~/pages/_admin.admin.inbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/shared/ui/molecules/select";

const statusInvoice: StatusInvoiceType[] = ["Paid", "Unpaid"];

export function StatusInvoiceSelect({
  handleSelectStatus,
}: {
  handleSelectStatus: (data: StatusInvoiceType) => void;
}) {
  return (
    <Select onValueChange={handleSelectStatus}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a status" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Status</SelectLabel>
          {statusInvoice.map((status, index) => (
            <SelectItem key={status} value={status}>
              {status}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
