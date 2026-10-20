import { House, Square } from "lucide-react"
import styles from '../stylesheets/DashboardStatus.module.css'

export default function DashboardStatus({status}: {status:string}) {
  
  let iconSize = 16
  let centerCoords = (24 - iconSize)/2

  return (
  <div className={styles['status-wrapper']}>
    <Square size={40} color={status} fill={status}>
      <House
        size={iconSize}
        color={'var(--bg)'}
        x={centerCoords}
        y={centerCoords} />
    </Square>
    <h1>House Status: {'OK'}</h1>
  </div>
  )
}