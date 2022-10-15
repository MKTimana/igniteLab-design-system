import { At, Password } from 'phosphor-react'
import { Button } from './components/Button'
import { Checkbox } from './components/Checkbox'
import { Heading } from './components/Heading'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'
import { Logo } from './Logo'
import './styles/global.css'
export function App() {
  return (
    <div className='w-screen h-screen bg-grey-900 flex flex-col items-center justify-center text-grey-100'>
      <header className='flex items-center flex-col'>
        <Logo/>

        <Heading size="lg">
            MKTECH
        </Heading>

        <Text size='lg' className='text-grey-400 mt-1'>
          Faça login, para usar
        </Text>
      </header>
      <form className='flex flex-col items-stretch w-full max-w-sm mt-10 gap-4'>
        <label htmlFor="email" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <At/>
            </TextInput.Icon>
            <TextInput.Input id='email' placeholder='Digite o seu email...'/>
          </TextInput.Root>
        </label>

        <label htmlFor="pwd" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Password/>
            </TextInput.Icon>
            <TextInput.Input id='pwd' placeholder='***********'/>
          </TextInput.Root>
        </label>

        <label htmlFor='remember' className='flex items-center gap-2'>
          <Checkbox id='remember'/>
          <Text size='sm' className='text-grey-200'>Lembrar de mim por 30 dias</Text>
        </label>

        <Button type="submit" className='mt-4'>Aceder a plataforma</Button>

      </form>

      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Text asChild size='sm'>
          <a className='text-grey-400 underline hover:text-grey-200'>Esqueceu a sua senha?</a>
        </Text>

        <Text asChild size='sm'>
          <span className='text-grey-400 underline'>Não possui uma conta?  
            <a href='#' className='hover:text-grey-200'> Crie uma agora!</a>
          </span>
        </Text>
        
      </footer>

    </div>
    )
}