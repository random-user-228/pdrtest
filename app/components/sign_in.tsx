
import { signIn } from "@/auth"
 
export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google",{redirectTo: '/'})
      }}
    >
      <button type="submit" className="left-8 bg-white border border-solid border-blue-300 rounded-md p-1 ">Увійти</button>
    </form>
  )
} 