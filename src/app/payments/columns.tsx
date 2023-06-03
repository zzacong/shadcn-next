'use client'

import { createColumnHelper } from '@tanstack/react-table'
import { Badge } from '~/components/ui/badge'

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
  columnHelper.accessor('status', {
    header: 'Status',
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
    header: 'Email',
  }),
  columnHelper.accessor('amount', {
    header: 'Amount',
    cell: (props) => `$${props.getValue()}`,
  }),
]
