import styles from "./Header.module.sass"
import { getNewsCategory } from "@/dataStorage/news_category"
import Link from "next/link";
import { getServerSession } from "next-auth/next"
import authOptions  from "@/app/api/auth/[...nextauth]/auth";
export default async function Header(){  

  const newsCategory = await getNewsCategory();

  return <main>
    <div className={styles.header__top}>
      <LoginComponent />
    </div>
    <span className={styles.header__title}>Hello world Header</span>
    <div className={styles.header__menu}>
      {newsCategory.map(category=>{
        return <Link className={styles.header__menu__item} key={category.id} href={`/news/${category.id}`}>
          {category.name}
        </Link>
      })}
    </div>
  </main>
}

async function LoginComponent(){
  const session = await getServerSession(authOptions);
  console.log("session",session)
  if (session?.user) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <Link href="/api/auth/signout">Sign out</Link>
        <Link href="/admin">Admin</Link>

        {/* <button onClick={() => signOut()}>Sign out</button> */}
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <Link href="/api/auth/signin">Sign in</Link>
      {/* <button onClick={() => signIn()}>Sign in</button> */}
    </>
  )
}