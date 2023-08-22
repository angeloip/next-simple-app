import { type Data } from '@/interfaces/data'
import Link from 'next/link'

const fetchUsers = async () => {
  const response = await fetch('https://reqres.in/api/users')
  const data = (await response.json()) as Data
  return data.data
}

export default async function Home() {
  const users = await fetchUsers()

  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-2.5 p-5">
      {users.map((user) => (
        <li key={user.id} className="bg-slate-800 p-4 rounded-md">
          <Link
            href={`user/${user.id}`}
            className="flex flex-col gap-4 items-center"
          >
            <img
              src={user.avatar}
              alt={user.first_name}
              className="w-24 rounded-full"
            />
            <div className="text-center grid gap-2">
              <h5 className="font-bold">
                {user.first_name} {user.last_name}
              </h5>
              <p className="text-sm text-gray-400">{user.email}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
