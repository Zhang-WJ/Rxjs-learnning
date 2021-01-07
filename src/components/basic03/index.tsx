import React, { useEffect, useState } from 'react'
import { interval } from 'rxjs'
import { map } from 'rxjs/operators'

const Basic03: React.FC = () => {
  const [a, setA] = useState(0)
  useEffect(() => {
    interval(1000)
      .pipe(map((item) => item))
      .subscribe((val) => setA(val))
  }, [])

  return (
    <div>
      <h1>{a}</h1>
    </div>
  )
}

export default Basic03
