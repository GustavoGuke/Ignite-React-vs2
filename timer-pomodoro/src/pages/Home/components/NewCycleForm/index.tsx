import { FormContainer, MinutesInput, TaskInput } from './styles'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { cyclesContext } from '../../../../contexts/CyclesContext'

export default function NewCycleForm() {
  const { activeCycle } = useContext(cyclesContext)
  const { register } = useFormContext()
  return (
    <FormContainer>
      <label htmlFor="task">Vou Trabalhar em</label>
      <TaskInput
        id="task"
        list="task-list"
        placeholder="Nome do projeto"
        {...register('task')}
        disabled={!!activeCycle}
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
        step={1}
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesInput', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
