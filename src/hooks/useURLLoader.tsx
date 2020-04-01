import { useState, useEffect } from 'react'
import axios from 'axios';

const useURLLoader = (url: string, deps: any[] = []) => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    axios.get(url).then(result => {
      setData(result.data)
      setLoading(false)
    })
  }, deps) // 仅在 deps 发生变化时，重新订阅
  return [data, loading]
}

export default useURLLoader