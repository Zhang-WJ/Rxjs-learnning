import React from 'react'
import { useEventCallback } from 'rxjs-hooks'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs'

const Basic02: React.FC = () => {
  const [clickCallback, [description, x, y]] = useEventCallback(
    (event$: Observable<any>) => event$.pipe(map((event) => [event.target.innerHTML, event.clientX, event.clientY])),
    ['nothing', 0, 0],
  )

  return (
    <div className="basic02">
      <h1>
        click position: {x}, {y}
      </h1>
      <h1>"{description}" was clicked</h1>
      <button onClick={clickCallback}>click me</button>
      <button onClick={clickCallback}>click you</button>
      <button onClick={clickCallback}>click him</button>
    </div>
  )
}

export default Basic02
