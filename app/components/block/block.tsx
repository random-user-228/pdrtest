"use client"
import Image from "next/image"
import img1 from './1.svg'
import img2 from './2.svg'
import img3 from './3.svg'
import img4 from './4.svg'
import Link from "next/link"
import { useRouter } from "next/navigation"
export default function MainBlock(){
    const router = useRouter()
    return(
        <> 
        <div className="flex flex-wrap">
        <div className="p-6 m-5 w-96 mx-auto bg-white rounded-xl shadow-lg flex flex-col items-center space-y-4 text-center transform hover:scale-105 transition-transform duration-300 " onClick={()=>router.push('/test')}>
            <div className="shrink-0">
                <Image className="size-32" src={img1} alt="ChitChat Logo"/>
            </div>
            <div>
                <div className="text-xl font-medium text-black">Іспит як в СЦ</div>
                <p className="text-slate-500">20 запитань, 20 хвилин, максимум 2 помилки</p>
            </div>
            
        </div>
        <div className="p-6 m-5  w-96  mx-auto bg-white rounded-xl shadow-lg flex flex-col items-center space-y-4 text-center transform hover:scale-105 transition-transform duration-300 " onClick={()=>router.push('/bilet')}>
            <div className="shrink-0">
                <Image className="size-32" src={img2} alt="ChitChat Logo"/>
            </div>
            <div>
                <div className="text-xl font-medium text-black">Вчити по білетах</div>
                <p className="text-slate-500">20 випадкових запитань, без обмежень</p>
            </div>
            
        </div>
        <div className="p-6 m-5  w-96  mx-auto bg-white rounded-xl shadow-lg flex flex-col items-center space-y-4 text-center transform hover:scale-105 transition-transform duration-300 " onClick={()=>router.push('/temu')}>
            <div className="shrink-0">
                <Image className="size-32" src={img3} alt="ChitChat Logo"/>
            </div>
            <div>
                <div className="text-xl font-medium text-black">Вчити по темах</div>
                <p className="text-slate-500">Запитання згруповані по темах</p>
            </div>
            
        </div>
        <div className="p-6 m-5 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex flex-col items-center space-y-4 text-center transform hover:scale-105 transition-transform duration-300 " onClick={()=>router.push('/mistakes')}>
            <div className="shrink-0">
                <Image className="size-32" src={img4} alt="ChitChat Logo"/>
            </div>
            <div>
                <div className="text-xl font-medium text-black">Мої помилки</div>
                <p className="text-slate-500">Запитання, де були допущені помилки, з можливістю їх пройти ще раз</p>
            </div>
            
        </div>
        </div>
    </>
    )
}