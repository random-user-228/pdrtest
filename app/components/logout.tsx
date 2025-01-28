import { signOut } from "@/auth"
 
export default function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut({redirectTo: "/"})
      }}
    >
      <button type="submit" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-10">Вийти</button>
    </form>
  )
}