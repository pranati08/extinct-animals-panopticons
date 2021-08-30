import styles from './choices_layout.module.css'

export default function Choices_Layout({ children }) {
  return <div className={styles.container}>{children}</div>
}