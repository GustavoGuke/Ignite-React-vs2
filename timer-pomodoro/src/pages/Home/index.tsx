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

const validationSchemaZod = zod.object({
  task: zod.string().min(1),
  minutesInput: zod.number().min(1).max(60),
})
type NewCycleFormData = zod.infer<typeof validationSchemaZod>
export function Home() {
  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(validationSchemaZod),
    defaultValues: {
      task: '',
      minutesInput: 0,
    },
  })
  const { handleSubmit, watch, reset } = newCycleForm

  const task = watch('task')

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCicle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

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
