import React, { useState } from 'react'
import { useEventCallback } from 'rxjs-hooks'
import { timer } from 'rxjs'
import { map, switchMap, filter, withLatestFrom, scan, startWith, tap } from 'rxjs/operators'

// @ts-ignore
const Animation = ({ frame }) => {
  const frames = '|/-\\|/-\\|'.split('')
  return (
    <div>
      <p>{frames[frame % frames.length]}</p>
    </div>
  )
}

const Basic04: React.FC = () => {
  const defaultRate = 5

  const [running, setRunning] = useState(false)

  // @ts-ignore
  const [onEvent, frame] = useEventCallback((events$) => {
    const on$ = events$.pipe(
      // @ts-ignore
      filter((e) => e.type === 'click'),
      scan((running) => !running, running),
      startWith(running),
      tap(setRunning),
    )

    return events$.pipe(
      // @ts-ignore
      filter((e) => e.type === 'change'),
      // @ts-ignore
      map((e) => parseInt(e.target.value, 10)),
      startWith(defaultRate),
      switchMap((i) => timer(200, 1000 / i)),
      withLatestFrom(on$),
      // @ts-ignore
      filter(([_, running]) => running),
      scan((frame) => frame + 1, 0),
    )
  })

  return (
    <div className="App">
      <button onClick={onEvent}>{running ? 'Stop' : 'Start'}</button>
      <input type="range" onChange={onEvent} defaultValue={defaultRate} min="1" max="10" />
      <Animation frame={frame} />
    </div>
  )
}

export default Basic04
