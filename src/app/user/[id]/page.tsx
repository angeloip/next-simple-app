import { type User } from '@/interfaces/User'

async function getUser(id: string) {
  const response = await fetch(`https://reqres.in/api/users/${id}`)
  const data = (await response.json()) as User
  return data.data
}

export default async function UserDetails({
  params: { id }
}: {
  params: { id: string }
}) {
  const user = await getUser(id)
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
      <div
        key={user.id}
        className="bg-slate-800 p-4 rounded-md flex flex-col gap-4 items-center w-full max-w-[300px] mx-4"
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
      </div>
    </section>
  )
}
