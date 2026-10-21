import styles from './App.module.css'
import Dashboard from './components/Dashboard.tsx'


export default function App() {
  return (<div className={styles['app-wrapper']}>
    <Dashboard />
  </div>)
} 