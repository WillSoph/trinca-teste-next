"use client"
import * as Input from '../components/Form/Input'
import { Button } from '../components/Button'
import { useRouter } from 'next/navigation'
import { useState } from 'react';

export default function Home() {

  const router = useRouter();
  const [naoAutorizado, setNaoAutorizado] = useState(false)
  
  function handleDash(event: { preventDefault: () => void; }) {
    event.preventDefault();

    const loginValue = document.getElementById('login').value;
    const passwordValue = document.getElementById('password').value;

    if (loginValue === 'trinca@trinca.com.br' && passwordValue === '654321') {
    router.push('/transactions');
    } else {
    setNaoAutorizado(true)
    }
  };  

  return (
    <section className="h-full flex justify-center bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full sm:p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="flex flex-col justify-center md:block h-screen md:h-full rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                <div className="px-4 py-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    <div className="text-center">
                      <img
                        className="mx-auto w-36"
                        src="./trinca_logo.png"
                        alt="logo"
                      />
                      <h4 className="mb-12 mt-6 pb-1 text-xl font-semibold">
                        Bem-vindo(a) ao Churras da Trinca
                      </h4>
                    </div>

                    <form
                      id="settings"
                      className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-800"
                    >
                      <div className="grid gap-3 lg:grid-cols-form">
                        <label
                          htmlFor="firstName"
                          className="text-sm font-medium text-zinc-700 dark:text-zinc-100"
                        >
                          Login
                        </label>
                        <div className="grid gap-6 lg:grid-cols-form">
                          <Input.Root>
                            <Input.Control
                              name="login"
                              id="login"
                              type="email"
                              defaultValue="trinca@trinca.com.br"
                            />
                          </Input.Root>
                        </div>
                      </div>

                      <div className="grid gap-3 pt-5 lg:grid-cols-form">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium text-zinc-700 dark:text-zinc-100"
                        >
                          Senha
                        </label>
                        <div className="flex gap-3">
                          <Input.Root>
                            <Input.Control
                              id="password"
                              type="password"
                              name="password"
                              defaultValue="654321"
                            />
                          </Input.Root>
                        </div>
                      </div>
                      { naoAutorizado && (
                        <div className="flex justify-center font-medium text-red-700 pt-4">Você não possui acesso!</div>
                      )}
                      <div className="flex items-center justify-center md:justify-end gap-2 pt-5">                        
                        <Button onClick={handleDash} type="submit" form="settings" variant="primary" className="w-full">
                          Entrar
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
                
                <div
                  className="hidden lg:flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background: `url('/bbq_pattern.png') center/cover no-repeat, linear-gradient(to right, #FFD836, #e6c234)`,
                  }}
                >
                  <div className="px-4 py-6 md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                    Desenvolvimento Excepcional: Teste de Admissão para a Trinca. ;)
                    </h4>
                    <p className="text-sm">
                    Este projeto é um desafio de admissão elaborado para a 
                    empresa Trinca. Cada funcionalidade é um reflexo do meu 
                    empenho em proporcionar soluções inovadoras e eficientes. 
                    Demonstra a dedicação que tenho em ser parte integrante 
                    da equipe Trinca, contribuindo com expertise e paixão pela tecnologia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}