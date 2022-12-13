import { differenceInSeconds } from 'date-fns'
import {
  createContext,
  ReactNode,
  useState,
  useReducer,
  useEffect,
} from 'react'
import { ActionTypes, Cycle, CyclesReducers } from '../reducers/cycles'

interface createNewCycleData {
  task: string
  minutesAmount: number
}

interface CycleContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  markCurrentCycleAsFinished: () => void
  amountSecondsPassed: number
  setSecondPassed: (seconds: number) => void
  createNewCycle: (data: createNewCycleData) => void
  interruptCicle: () => void
}

interface ChildrenContext {
  children: ReactNode
}

export const cyclesContext = createContext({} as CycleContextType)

export function CyclesContextProvider({ children }: ChildrenContext) {
  const [cyclesState, dispatch] = useReducer(
    CyclesReducers,
    {
      cycles: [],
      activeCycleId: null,
    },
    () => {
      const storadStateJson = localStorage.getItem(
        '@ignite-pomodoro:cycles-state-1.0.0',
      )

      if (storadStateJson) {
        return JSON.parse(storadStateJson)
      }
    },
  )

  const { cycles, activeCycleId } = cyclesState
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
    }

    return 0
  })
  
  useEffect(() => {
    const stateJson = JSON.stringify(cyclesState)

    localStorage.setItem('@ignite-pomodoro:cycles-state-1.0.0', stateJson)
  }, [cyclesState])
  // const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  function setSecondPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }
  function markCurrentCycleAsFinished() {
    dispatch({
      type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
      payload: {
        activeCycleId,
      },
    })
    // setCycles((state) =>
    //   state.map((cycle) => {
    //     if (cycle.id === activeCycleId) {
    //       return { ...cycle, finishedDate: new Date() }
    //     } else {
    //       return cycle
    //     }
    //   }),
    // )
  }

  function createNewCycle(data: createNewCycleData) {
    const id = String(new Date().getTime())
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }
    dispatch({
      type: ActionTypes.ADD_NEW_CYCLE,
      payload: {
        newCycle,
      },
    })
    // setCycles((oldCycle) => [...oldCycle, newCycle])
    setAmountSecondsPassed(0)
  }

  function interruptCicle() {
    dispatch({
      type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
      payload: {
        activeCycleId,
      },
    })
    // setCycles((state) =>
    //   state.map((cycle) => {
    //     if (cycle.id === activeCycleId) {
    //       return { ...cycle, interruptedDate: new Date() }
    //     } else {
    //       return cycle
    //     }
    //   }),
    // )
  }
  return (
    <cyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        createNewCycle,
        interruptCicle,
        markCurrentCycleAsFinished,
        setSecondPassed,
      }}
    >
      {children}
    </cyclesContext.Provider>
  )
}
