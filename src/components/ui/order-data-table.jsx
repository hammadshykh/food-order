// DataTable.jsx

"use client"

import React, { useState } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  getFilteredRowModel,
  SortingState,
  ColumnFiltersState,
  getSortedRowModel
  
} from "@tanstack/react-table";
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./button";

function OrderDataTable({ columns, data }) {

    const [sorting,setSorting] = useState([])
    const [columnFilters, setColumnFilters] = useState([])


  const table = useReactTable({
    data,
    columns,
    state:{
        sorting,
        columnFilters
    },
    onSortingChange:setSorting,
    getSortedRowModel:getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel:getPaginationRowModel()
  });

  return (
    <>
    {/* Table */}
    <div>
    <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("payment")?.getFilterValue() || '') ?? ""}
          onChange={(event) =>
            table.getColumn("payment")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
    </div>
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
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

    {/* Pagination */}
    <div className="flex justify-end space-x-2 flex-wrap gap-2 items-center mt-5">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      <div>page</div>
        <strong>
          {table.getState().pagination.pageIndex + 1} of {""}{" "}
          {table.getPageCount()}
        </strong>
        {/* <span>
          Go to page:
          <Input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="bg-transparent rounded p-1"
          />
        </span> */}
        <span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
            className="p-2 rounded-sm"
          >
        
              {[5, 10, 20, 30, 50].map((v) => (
                <option key={v} value={v}>
                  show {v}
                </option>
              ))}
          </select>
        </span>
      </div>
    </>
  );
}

export default OrderDataTable;