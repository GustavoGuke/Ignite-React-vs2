import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesInput,
  Separator,
  Startbutton,
  TaskInput,
} from './styles'
import { useState } from 'react'

const validationSchemaZod = zod.object({
  task: zod.string().min(1),
  minutesInput: zod.number().min(5).max(60),
})

// interface NewCicleFormData {
//   task: string
//   minutesInput: number
// }

type NewCycleFormData = zod.infer<typeof validationSchemaZod>

interface Cycle {
  id: string
  task: string
  minutesAmount: number
}
export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(validationSchemaZod),
    defaultValues: {
      task: '',
      minutesInput: 0,
    },
  })

  function handleCreateNewCicle(data: NewCycleFormData) {
    const id = String(new Date().getTime())
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesInput,
    }

    setCycles((oldCycle) => [...oldCycle, newCycle])
    setActiveCycleId(id)
    reset()
  }

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)
  console.log(activeCycle)
  const task = watch('task')

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCicle)}>
        <FormContainer>
          <label htmlFor="task">Vou Trabalhar em</label>
          <TaskInput
            id="task"
            list="task-list"
            placeholder="Nome do projeto"
            {...register('task')}
          />

          <datalist id="task-list">
            <option value="Estudo" />
            <option value="Descanso" />
          </datalist>
          <label htmlFor="minutesAmount">Durante</label>
          <MinutesInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesInput', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <Startbutton disabled={!task} type="submit">
          <Play size={24} />
          START
        </Startbutton>
      </form>
    </HomeContainer>
  )
}
