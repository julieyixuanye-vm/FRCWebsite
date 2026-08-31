import { Link } from 'react-router-dom'
import FishMark from '../components/FishMark'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <div className={`page ${styles.wrap}`}>
      <FishMark className={styles.fish} title="" />
      <p className="eyebrow">Error 404</p>
      <h1 className={styles.h1}>Nothing at this depth</h1>
      <p className="lead">That page does not exist, or it did and the season archive moved it.</p>
      <Link to="/" className={styles.button}>
        Back to the surface <span aria-hidden="true">→</span>
      </Link>
    </div>
  )
}
