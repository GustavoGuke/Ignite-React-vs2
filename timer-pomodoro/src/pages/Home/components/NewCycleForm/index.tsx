import { FormContainer, MinutesInput, TaskInput } from './styles'

export default function NewCycleForm() {
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
