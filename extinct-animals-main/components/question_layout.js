import styles from './question_layout.module.css'

export default function Question_Layout({ children }) {
  return <div className={styles.container}>{children}</div>
}