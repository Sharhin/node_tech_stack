import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { useSession, getSession } from "next-auth/react"
import { redirect } from 'next/navigation';

export default function Home() {

  return (
    <main className={styles.main}>
      Please log in?
      <Link href="/api/auth/signin">Sign in</Link>
    </main>
  )
}
