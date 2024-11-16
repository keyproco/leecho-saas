import { h } from 'vue'
import type { ColumnDef } from '@tanstack/vue-table'


interface Payment {
  id: string
  amount: number
  status: 'pending' | 'processing' | 'success' | 'failed'
  email: string
}


export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'id',
    header: () => h('div', { class: 'text-right' }, 'ID'),
    cell: ({ row }) => {
      return h('div', { class: 'text-right font-medium' }, row.getValue('id'))
    },
  },
  {
    accessorKey: 'amount',
    header: () => h('div', { class: 'text-right' }, 'Amount'),
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue('amount'))
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount)

      return h('div', { class: 'text-right font-medium' }, formatted)
    },
  }
]

