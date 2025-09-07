"use client";
import { useState, Suspense } from "react";
import { useRouter } from "next/navigation";


export default function Home() {

  const [wish, setWish] = useState('');
  const router = useRouter();

  const sendWish = () => {
    if (!wish.trim()) {
      alert('Please enter a wish');
      return;
    }
    router.push(`/displayWish?wish=${encodeURIComponent(wish)}`);
  }

  return (
    <>
      <Suspense fallback={<div>Loading your wish...</div>}>
        <input type="text" value={wish} onChange={(e) => setWish(e.target.value)} placeholder="Enter Wish"/>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={sendWish}>Send</button>
      </Suspense>
    </>
  );
}
