import styles from './page.module.css'
import Link from 'next/link'
import PublicLayout from "@/app/_layout/publicLayout";
import { redirect } from 'next/navigation';


export default function Home() {
  redirect('/news');

  return (
    <main className={styles.main}>
      <PublicLayout>
        Please log in?
        <Link href="/api/auth/signin">Sign in</Link>
      </PublicLayout>
    </main>
  )
}