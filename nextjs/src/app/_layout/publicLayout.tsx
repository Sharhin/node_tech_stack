import '../styles/global.sass'
import styles from '../styles/main.module.sass'
import Header from "../components/Header/index"

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.main}>
      <Header />
      {children}
    </div>
  )
}
