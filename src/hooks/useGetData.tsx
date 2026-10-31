import { useEffect, useState } from "react";

const URL = 'https://api.thingspeak.com/channels/3534621/feeds.json?results=1'

type Feed = {
  field1: null | string;
  field2: null | string;
  field3: null | string;
  field4: null | string;
  field5: null | string;
  field6: null | string;
}

export default function useGetSensorReads() {

  const [value, setValue] = useState<Feed | null>(null)

  useEffect(() => {

    async function getRead() {
      try {
        const res = await fetch(URL)
        if (!res.ok) throw new Error(`HTTP: ${res.status}`)
        const data = await res.json() 
        setValue(data.feeds[0])
      } catch (err) {
        console.log("Error")
      }
      console.log("call made")
    }
    getRead()

    const makeCall = setInterval(getRead, 20000)
    return () => {
      clearInterval(makeCall)
    }
  }, [])

  return {
    gas: Number(value?.field1 ?? null),
    latentTemp: Number(value?.field2 ?? null),
    surfaceTemp: Number(value?.field3 ?? null),
    ultraviolet: Number(value?.field4 ?? null),
    infrared: Number(value?.field5 ?? null),
    photoelectric: Number(value?.field6 ?? null),
  };
}