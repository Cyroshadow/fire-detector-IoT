import { useState } from 'react'
import styles from '../stylesheets/Dashboard.module.css'
import DashboardStatus from './DashboardStatus'
import useGetSensorReads from '../hooks/useGetData'


const colorMap: Record<string, string> = {
  'critical': 'var(--critical)',
  'hazard': 'var(--hazard)',
  'caution': 'var(--caution)',
  'monitor': 'var(--monitor)',
  'safe': 'var(--safe)'
}


export default function Dashboard() {

  const { gas,
    latentTemp,
    surfaceTemp,
    ultraviolet,
    infrared,
    photoelectric
  } = useGetSensorReads()
  console.log(gas, latentTemp, surfaceTemp, ultraviolet, infrared, photoelectric)
  const [status, setStatus] = useState('var(--safe)')
  let overallStatus = 'safe'

  const surfaceTempThresholds = [20, 40, 70]
  const gasThresholds = [100, 300, 600]

  function getLevel(level: Number, thresholds: Array<Number>) {
    if (level >= thresholds[2]) return 'critical'
    if (level >= thresholds[1] && level < thresholds[2]) return 'caution'
    if (level >= thresholds[0] && level < thresholds[1]) return 'safe'

    return 'safe'
  }

  return (<>
    <div className={styles['dashboard-wrapper']} style={{ borderColor: colorMap[overallStatus] }}>
      <DashboardStatus status={status} id={styles['overall-status']} type={'House'} />
      <DashboardStatus status={colorMap[getLevel(gas, gasThresholds)]} type={'Gas'} />
      <DashboardStatus status={status} type={'Photoelectric'} />
      <DashboardStatus status={status} type={'Infrared'} />
      <DashboardStatus status={status} type={'LatentTemp'} />
      <DashboardStatus status={status} type={'Ultraviolet'} />
      <DashboardStatus status={colorMap[getLevel(surfaceTemp, surfaceTempThresholds)]} type={'SurfaceTemp'} />
    </div>
    <label className={styles['dashboard-label']}>Smoke Detector 8000 Dashboard</label>
  </>)
}