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

const methodInvoice: MethodInvoiceType[] = [
  "Credit Card",
  "Paypal",
  "Bank Transfer",
  "Cash",
];
export function MethodInvoiceSelect({
  handleSelectMethod,
}: {
  handleSelectMethod: (data: MethodInvoiceType) => void;
}) {
  return (
    <Select onValueChange={handleSelectMethod}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a method" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Method</SelectLabel>
          {methodInvoice.map((method, index) => (
            <SelectItem key={method} value={method}>
              {method}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
