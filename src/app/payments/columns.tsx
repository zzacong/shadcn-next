'use client'

import { createColumnHelper } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'

import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { Checkbox } from '~/components/ui/checkbox'
import { DataTableColumnHeader } from '~/components/ui/data-table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  amount: number
  status: 'pending' | 'processing' | 'success' | 'failed'
  email: string
}

const columnHelper = createColumnHelper<Payment>()

export const columns = [
  columnHelper.accessor((row) => row, {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
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
  }),
  columnHelper.accessor('status', {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: (props) => (
      <Badge
        variant={
          props.getValue() === 'failed'
            ? 'destructive'
            : props.getValue() === 'pending'
            ? 'outline'
            : props.getValue() === 'processing'
            ? 'secondary'
            : 'default'
        }
      >
        {props.getValue()}
      </Badge>
    ),
  }),
  columnHelper.accessor('email', {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
  }),
  columnHelper.accessor('amount', {
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Amount"
        className="justify-end"
      />
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'))
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  }),
  columnHelper.accessor((row) => row, {
    id: 'actions',
    header: '',
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <div className="text-right">
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
          </div>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  }),
]
