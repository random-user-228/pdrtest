"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";





export default function Temu() {
  const [data, setData] = useState([]);
  const router = useRouter()

  useEffect(() => {
    fetch("/api/get_temu")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return(
    <><div className="grid justify-center p-4 m-4">{data.map((v,i)=>(<div
      className="border border-solid rounded-md p-2 m-2 cursor-pointer transform transition-transform hover:scale-105"
      onClick={() => router.push(`/temaxa?d=${i}`)}>{v}</div>))}</div></>
  )
}
