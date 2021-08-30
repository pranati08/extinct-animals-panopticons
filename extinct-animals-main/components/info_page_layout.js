import styles from './info_page_layout.module.css'

export default function Info_Page_Layout({ children }) {
  return <div className={styles.container}>{children}</div>
}