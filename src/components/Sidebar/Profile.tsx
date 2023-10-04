/* eslint-disable @next/next/no-img-element */
import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        className="h-10 w-10 rounded-full"
        src="https://github.com/thiagosf-dev.png"
        alt=""
      />
      <div className="flex flex-col truncate">
        <span className="truncate text-sm font-semibold text-zinc-700">
          My Full Name
        </span>
        <span className="truncate text-sm text-zinc-500">
          myemail@email.com
        </span>
      </div>
      <button className="ml-auto rounded-md p-2 hover:bg-zinc-50" type="button">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
