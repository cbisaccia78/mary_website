import Link from "next/link";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import utilStyles from '../styles/utils.module.css';
import navStyles from '../components/navbar.module.css';

export default function Home(props){
    return (
        <Layout>
            <div className={utilStyles.panel}>
                <div className={utilStyles.largeText}>
                    M.C. Sloane
                </div>
                <Navbar>
                    <Link className={navStyles.navItem} href="/">
                        <div>Home</div>
                    </Link>
                    <Link className={navStyles.navItem} href="/">
                        <div>Books</div>
                    </Link>
                    <Link className={navStyles.navItem} href="/">
                        <div>Blog</div>
                    </Link>
                    <Link className={navStyles.navItem} href="/">
                        <div>Contact Me</div>
                    </Link>
                </Navbar>
            </div>
            <div className={utilStyles.panel}>
                <Link href="/books">
                    <img src="/images/mostRecentBook.jpeg" />
                </Link>
            </div>
        </Layout>
    )
}

export async function getStaticProps(){
    return {
        props: {
            bookIds: [],
            blogIds: []
        }
    }
}