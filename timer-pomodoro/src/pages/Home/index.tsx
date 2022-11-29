import { HandPalm, Play } from 'phosphor-react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { createContext, useState } from 'react'

import { HomeContainer, Startbutton, Stopbutton } from './styles'
import NewCycleForm from './components/NewCycleForm'
import Countdown from './components/Countdown'

// interface NewCicleFormData {
//   task: string
//   minutesInput: number
// }

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CycleContextType {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  markCurrentCycleAsFinished: () => void
  amountSecondsPassed: number
  setSecondPassed: (seconds: number) => void
}
export const CyclesContext = createContext({} as CycleContextType)
const validationSchemaZod = zod.object({
  task: zod.string().min(1),
  minutesInput: zod.number().min(1).max(60),
})
type NewCycleFormData = zod.infer<typeof validationSchemaZod>
export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(validationSchemaZod),
    defaultValues: {
      task: '',
      minutesInput: 0,
    },
  })
  const { handleSubmit, watch, reset } = newCycleForm

  function setSecondPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }
  function markCurrentCycleAsFinished() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
  }
  function handleCreateNewCicle(data: NewCycleFormData) {
    const id = String(new Date().getTime())
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesInput,
      startDate: new Date(),
    }

    setCycles((oldCycle) => [...oldCycle, newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)
    reset()
  }

  function handleInterruptCicle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
    setActiveCycleId(null)
  }
  const task = watch('task')

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCicle)}>
        <CyclesContext.Provider
          value={{
            activeCycle,
            activeCycleId,
            amountSecondsPassed,
            markCurrentCycleAsFinished,
            setSecondPassed,
          }}
        >
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>
          <Countdown />
        </CyclesContext.Provider>
        {activeCycle ? (
          <Stopbutton onClick={handleInterruptCicle} type="button">
            <HandPalm size={24} />
            STOP
          </Stopbutton>
        ) : (
          <Startbutton disabled={!task} type="submit">
            <Play size={24} />
            START
          </Startbutton>
        )}
      </form>
    </HomeContainer>
  )
}
