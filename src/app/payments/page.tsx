import { DataTable } from '~/components/data-table'
import { type Payment, columns } from './columns'

export const metadata = {
  title: 'Payments',
}

async function getData() {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    {
      id: '06273dde-fe82-43cd-8b22-0d0ef9b27586',
      amount: 120,
      status: 'failed',
      email: 'k@example.com',
    },
    {
      id: 'f002f21e-64c9-5646-8a04-cc33020874be',
      amount: 200,
      status: 'success',
      email: 'ne@pi.pl',
    },
    {
      id: '82228d75-6f40-5a39-99ba-527fbcece9ae',
      amount: 50,
      status: 'processing',
      email: 'boacu@ba.ax',
    },
  ] satisfies Payment[]
}

export default async function TablePage() {
  const data = await getData()

  return (
    <main className="container py-10">
      {/* @ts-expect-error */}
      <DataTable columns={columns} data={data} />
    </main>
  )
}
