import '../styles/global.sass'
import styles from '../styles/main.module.sass'
import Header from "../components/Header/index"

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  console.log("co?")
  return (
    <div className={styles.main}>
      <Header />
      {children}
    </div>
  )
}
