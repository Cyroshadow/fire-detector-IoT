import { useState } from 'react'
import styles from '../stylesheets/Dashboard.module.css'
import DashboardStatus from './DashboardStatus'

export default function Dashboard() {

  const [status, setStatus] = useState('var(--safe)')

  return (<>
    <div className={styles['dashboard-wrapper']}>
      <DashboardStatus status={status}/>
    </div>
    <label className={styles['dashboard-label']}>Smoke Detector 8000 Dashboard</label>
  </>)
}