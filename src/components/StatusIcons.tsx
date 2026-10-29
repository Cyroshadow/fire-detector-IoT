import { Square, House, Cloudy, WavesVertical, Siren, Thermometer, Loader, ThermometerSun } from "lucide-react"


export default function Icon({ size, status, iconType }: { size: number, status: string, iconType: string }) {

  let centerCoords: number = (24 - size) / 2;
  let bgColor: string = 'var(--bg-dark)'
  const icons: Record<string, React.ReactNode> = {
    'House': <House
      size={size}
      color={bgColor}
      x={centerCoords}
      y={centerCoords} />,
    'Gas': <Cloudy
      size={size}
      color={bgColor}
      x={centerCoords}
      y={centerCoords} />,
    'Photoelectric': <WavesVertical
      size={size}
      color={bgColor}
      x={centerCoords}
      y={centerCoords} />,
    'Ultraviolet': <Siren
      size={size}
      color={bgColor}
      x={centerCoords}
      y={centerCoords} />,
    'LatentTemp': <Thermometer
      size={size}
      color={bgColor}
      x={centerCoords}
      y={centerCoords} />,
    'Infrared': <Loader
      size={size}
      color={bgColor}
      x={centerCoords}
      y={centerCoords} />,
    'SurfaceTemp': <ThermometerSun
      size={size}
      color={bgColor}
      x={centerCoords}
      y={centerCoords} />,
  }

  return (<Square size={40} color={status} fill={status}>
    {icons[iconType]}
  </Square>)
}