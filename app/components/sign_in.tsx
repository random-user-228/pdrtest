
import { signIn } from "@/auth"
 
export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google",{redirectTo: '/'})
      }}
    >
      <button type="submit" className="left-8 border-s-zinc-600 hover:bg-blend-color bg-orange-300">Signin with Google</button>
    </form>
  )
} 