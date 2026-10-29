import styles from '../stylesheets/DashboardStatus.module.css'
import StatusIcons from './StatusIcons'

export default function DashboardStatus({ status, id = '', type }: { status: string, id?: string, type: string }) {

  return (
    <div className={styles['status-wrapper']} id={id}>
      <StatusIcons size={16} status={status} iconType={type}/>
      <h1>{type} {'OK'}</h1>
    </div>
  )
}