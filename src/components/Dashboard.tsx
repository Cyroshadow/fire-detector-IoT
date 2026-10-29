import { useState } from 'react'
import styles from '../stylesheets/Dashboard.module.css'
import DashboardStatus from './DashboardStatus'
import getSensorReads from '../hooks/useGetData'
import useGetSensorReads from '../hooks/useGetData'

export default function Dashboard() {

  const { gas,
    photoelectric,
    ultraviolet,
    infrared,
    latentTemp,
    surfaceTemp,
  } = useGetSensorReads()

  const [status, setStatus] = useState('var(--safe)')
  let overallStatus = 'safe'

  let highSurfaceTemp: boolean = surfaceTemp < 70;
  let medSurfaceTemp: boolean = surfaceTemp < 40;
  let lowSurfaceTemp: boolean = surfaceTemp < 20;
  let highGas: boolean = gas < 600;
  let medGas: boolean = gas < 300;
  let lowGas: boolean = gas < 100;


  const colorMap: Record<string, string> = {
    'critical': 'var(--critical)',
    'hazard': 'var(--hazard)',
    'caution': 'var(--caution)',
    'monitor': 'var(--monitor)',
    'safe': 'var(--safe)'
  }

  return (<>
    <div className={styles['dashboard-wrapper']} style={{ borderColor: colorMap[overallStatus] }}>
      <DashboardStatus status={status} id={styles['overall-status']} type={'House'} />
      <DashboardStatus status={status} type={'Gas'} />
      <DashboardStatus status={status} type={'Photoelectric'} />
      <DashboardStatus status={status} type={'Infrared'} />
      <DashboardStatus status={status} type={'LatentTemp'} />
      <DashboardStatus status={status} type={'Ultraviolet'} />
      <DashboardStatus status={status} type={'SurfaceTemp'} />
    </div >
    <label className={styles['dashboard-label']}>Smoke Detector 8000 Dashboard</label>
  </>)
}