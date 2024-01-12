import '../styles/global.sass'
import styles from '../styles/main.module.sass'
import Header from "../components/Header/index"
import Footer from "../components/Footer/index"

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.main__container}>
        {children}
      </div>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </div>
  )
}


