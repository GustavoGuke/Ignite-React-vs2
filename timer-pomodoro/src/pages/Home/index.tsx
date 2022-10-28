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

const validationSchemaZod = zod.object({
  task: zod.string().min(2, 'Infome a tarefa'),
  minutesInput: zod.number().min(5).max(60),
})

// interface NewCicleFormData {
//   task: string
//   minutesInput: number
// }

type NewCicleFormData = zod.infer<typeof validationSchemaZod>
export function Home() {
  const { register, handleSubmit, reset } = useForm<NewCicleFormData>({
    resolver: zodResolver(validationSchemaZod),
    defaultValues: {
      task: '',
      minutesInput: 0,
    },
  })

  function handleCreateNewCicle(data: NewCicleFormData) {
    console.log(data.task)
    reset()
  }

  // const minutesInput = watch('minutesInput')
  // const task = watch('task')
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

        <Startbutton type="submit">
          <Play size={24} />
          START
        </Startbutton>
      </form>
    </HomeContainer>
  )
}
