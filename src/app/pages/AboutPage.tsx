import { Link } from 'react-router-dom'
import styles from '../page.module.css';

export default function AboutPage() {
  return (
    <div className={styles.main}>
      <div className={styles.description}>
        <div className={styles.card}>
          <h3>About ToDo Project</h3>
          <hr></hr>
          <p>This is a React app to add and monitor ToDo tasks</p>
          <p>Version: 1.0.0</p>

          <p>
            <Link to='/'>Back To Home</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
