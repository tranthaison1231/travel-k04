import { ColumnDef } from "@tanstack/react-table";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { Checkbox } from "~/shared/ui/molecules/Checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/shared/ui/molecules/DropdownMenu";
import { DataTable } from "~/shared/ui/organisms/DataTable";

import CreateUserForm from "~/features/users/create-user/ui/CreateUserForm";
import EditUserForm from "~/features/users/edit-user/ui/EditUserForm";
import { Button } from "~/shared/ui/atoms/Button";
import ConfirmMenu from "~/shared/ui/organisms/ConfirmMenu";
import { request } from "~/shared/helpers/request";
import { User } from "~/entities/user";
import { toast } from "sonner";

export default function UserPage() {
  const columns: ColumnDef<User, unknown>[] = useMemo(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => {
              return row.toggleSelected(!!value);
            }}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
      {
        Header: "Id",
        accessorKey: "id",
      },
      {
        Header: "Name",
        accessorKey: "name",
        sortDescFirst: false, //first sort order will be ascending (nullable values can mess up auto detection of sort order)
      },

      {
        Header: "Email",
        accessorKey: "email",
      },
      {
        Header: "Phone",
        accessorKey: "phone",
      },

      {
        Header: "Country",

        accessorKey: "country",
      },
      {
        id: "actions",
        enableHiding: false,
        accessorKey: "Actions",
        cell: (data) => {
          return (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger className="cursor-pointer">
                  ...
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <ConfirmMenu
                    onConfirm={() => handleDelete(data.row.original.id)}
                  >
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onSelect={(e) => e.preventDefault()}
                    >
                      Delete
                    </DropdownMenuItem>
                  </ConfirmMenu>
                  <EditUserForm
                    initialValues={data.row.original}
                    setUsers={setUsers}
                  >
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onSelect={(e) => e.preventDefault()}
                    >
                      Edit
                    </DropdownMenuItem>
                  </EditUserForm>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          );
        },
      },
    ],
    []
  );
  const [users, setUsers] = useState<User[]>(() => []);
  const [rowSelection, setRowSelection] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleDelete = (id: string) => {
    request
      .delete(`users/${id}`)
      .then(() => {
        setUsers((prev) => prev.filter((user) => user.id !== id));
        toast.success("User deleted successfully");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to delete user");
      });
  };

  const handleSelectedDelete = () => {
    const selectedIds = Object.keys(rowSelection).filter(
      (key) => rowSelection[key]
    );

    axios
      .all(
        selectedIds.map((id) => {
          return request.delete(`users/${id}`);
        })
      )
      .then(() => {
        setUsers((prev) =>
          prev.filter((user) => !selectedIds.includes(user.id))
        );
        toast.success("Users deleted successfully");
        setRowSelection({});
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to delete users");
      });
  };
  useEffect(() => {
    request.get(`/users`).then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div>
      <div className="flex items-center gap-4">
        <CreateUserForm setUsers={setUsers} />
        {Object.keys(rowSelection).filter((key) => rowSelection[key]).length >
          0 && (
          <Button onClick={handleSelectedDelete} variant="destructive">
            Delete Selected
          </Button>
        )}
      </div>
      <DataTable
        columns={columns}
        data={users}
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
        // rowSelection={rowSelection}
        // setRowSelection={setRowSelection}
      />
    </div>
  );
}
