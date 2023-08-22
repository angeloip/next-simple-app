import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <section className="flex h-16 w-full items-center justify-between p-4 bg-slate-700">
        <Link href="/" className="text-2xl font-bold">
          Home
        </Link>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </section>
    </nav>
  )
}
