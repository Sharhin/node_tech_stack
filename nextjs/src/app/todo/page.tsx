"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { useSession, signOut } from "next-auth/react"
import { redirect } from 'next/navigation';

export default function Todo() {
  const { data: session } = useSession();

  const aaa = () => {
    signOut();
  }
  console.log("session?.user", session?.user)

  if (!session?.user)
    redirect('/');
  return (
    <main >
      TODO LIST should be protected co?
      <>{session?.user ? <><button onClick={aaa}>sign out</button></> : 'no'}</>

      <form method="post" action="/todo">
        <label>
          Title
          <input id="title" name="title" />
        </label>
        <label >
          Description
          <input id="description" name="description" />
        </label>
        <button type="submit">Submit</button>
      </form>



    </main>
  )
} 