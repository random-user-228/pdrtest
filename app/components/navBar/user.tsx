import Image from "next/image"
import userimage from './user.png'
export default function UserBut(){
    return(
        <div>
            <Image src={userimage}
            alt="gg" width={50} height={50}
            />
        </div>
    )
}