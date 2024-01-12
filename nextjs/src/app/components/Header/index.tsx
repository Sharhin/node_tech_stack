import styles from "./Header.module.sass"
import { getNewsCategory } from "@/dataStorage/newsCategory"
import Link from "next/link";
import { getServerSession } from "next-auth/next"
import authOptions  from "@/app/api/auth/[...nextauth]/auth";


import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import MaterialLink from '@mui/material/Link';

type SectionType = {
  title: string;
  url: string;
}

interface HeaderProps {
  sections: ReadonlyArray<SectionType>;
  title: string;
}

function HeaderComponent(props: HeaderProps) {
  const { sections, title } = props;

  return (
    <div>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section,index) => (
          <HeaderMainItem key={index} section={section}/>
        ))}
      </Toolbar>
    </div>
  );
}

function HeaderMainItem(props:{section: SectionType}){
  const { section } = props;
  
  return <Link className={styles.header__menu__link +" "+styles.header__menu__container} href={section.url}>
    <div className={styles.header__menu__item} style={{background:"#bdb"}}>
      {section.title}
    </div>
  </Link>
}

export default async function Header(){  
  const newsCategory = await getNewsCategory();
  const sections = newsCategory.map(category=>{
    return {title:category.name,url:`/news/?category=${category.id}`}
  });

  sections.unshift({title:"All", url:`/news`});

  return <main>
    <HeaderComponent title="co" sections={sections} />
  </main>
}

async function LoginComponent(){
  const session = await getServerSession(authOptions);
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