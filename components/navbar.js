import styles from './navbar.module.css'

export default function Navbar({ children }){
    return (
        <div className={styles.nav}>
            {children}
        </div>
    )
}