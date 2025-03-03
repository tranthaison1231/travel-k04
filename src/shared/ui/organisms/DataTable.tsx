import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDown } from "lucide-react";

import { Button } from "~/shared/ui/atoms/Button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "~/shared/ui/molecules/DropdownMenu";
import { Input } from "~/shared/ui/atoms/Input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/shared/ui/atoms/Table";
import { PaginationTable } from "~/shared/ui/organisms/PaginationTable";
import { useUrlState } from "~/shared/hooks/use-url-state";

export type DataTableProps<T> = {
  data: T[];
  columns: ColumnDef<T, unknown>[];
  rowSelection: Record<string, boolean>;
  setRowSelection: (
    updaterOrValue:
      | Record<string, boolean>
      | ((old: Record<string, boolean>) => Record<string, boolean>)
  ) => void;
};

export function DataTable<
  T extends {
    id: string;
  }
>({ data, columns, rowSelection, setRowSelection }: DataTableProps<T>) {
  const [sorting, setSorting] = React.useState<SortingState>([
    {
      id: "id",
      desc: true,
    },
  ]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const [pagination, setPagination] = useUrlState<{
    pageIndex: string;
    pageSize: string;
  }>({
    pageIndex: "0",
    pageSize: "10",
  });

  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});

  const [filterBy, setFilterBy] = React.useState("id");
  const table = useReactTable<T>({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: (updaterOrValue) => {
      if (typeof updaterOrValue === "function") {
        setRowSelection((old) => updaterOrValue(old));
      } else {
        setRowSelection(updaterOrValue);
      }
    },
    getRowId: (row) => row.id,
    onPaginationChange: (updater) => {
      const newPagination =
        updater instanceof Function
          ? updater({
              pageIndex: Number(pagination.pageIndex),
              pageSize: Number(pagination.pageSize),
            })
          : updater;

      setPagination({
        pageIndex: String(newPagination.pageIndex),
        pageSize: String(newPagination.pageSize),
      });
    },
    enableRowSelection: true,
    state: {
      pagination: {
        pageIndex: Number(pagination.pageIndex),
        pageSize: Number(pagination.pageSize),
      },
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <div className="flex items-center gap-2">
          <Input
            placeholder={"Search by " + filterBy}
            value={
              (table.getColumn(filterBy)?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table.getColumn(filterBy)?.setFilterValue(event.target.value)
            }
            className="max-w-sm min-w-[300px]"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Search by {filterBy}
                <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={filterBy === column.id}
                      onCheckedChange={(value) => {
                        table.getColumn(filterBy)?.setFilterValue("");
                        setFilterBy(value ? column.id : "id");
                      }}
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                      className="cursor-pointer min-w-[50px]"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <PaginationTable table={table} />
    </div>
  );
}
