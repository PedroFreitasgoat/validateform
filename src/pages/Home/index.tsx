import { Play } from "phosphor-react";
import { CountDown, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCoutdownButton, TaskInput } from "./style";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  MinutesAmount: zod.number().min(5).max(60),
})

 // interface NewCycleFromdata {
 //   task: string;
// minutesAmount: number;
//}

type NewCycleFromData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { register, handleSubmit, watch } = useForm<NewCycleFromdata>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task:'',
      minutesAmount: 0,
    }
  })

  function handleCreateNewCycle(data: NewCycleFromdata) {
    console.log(data)
  }

  const task = watch('task')
  const isSubmiteDisabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput id="task" list="task-suggestions" placeholder="De um nome para o seu projeto"
          {...register('task')}
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1"/>
            <option value="Projeto 2"/>
            <option value="Projeto 3"/>
            <option value="Projeto 4"/>
          </datalist>

          <label htmlFor="">durante</label>
          <MinutesAmountInput
           type="number" 
           id="minutesAmount" 
           placeholder="00" 
           step={5} 
           min={5} 
           max={60}
           {...register('minutesAmount', {valueAsNumber: true})}
           />
          <span>minutos.</span>
        </FormContainer>

        <CountDown>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDown>

        <StartCoutdownButton disabled={isSubmiteDisabled} type="submit">
            <Play size={24}/>
            Começar
            </StartCoutdownButton>
      </form>
    </HomeContainer>
  );
}
