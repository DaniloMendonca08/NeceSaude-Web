"use client"

import { Button, Input } from "@nextui-org/react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useRouter } from "next/navigation";


export default function Home() {

  const router = useRouter()

  const handleChangeData = () => {
    router.push("/att-cadastro")
  }

  return (
    <main className="min-h-screen">
      <NavBar />
      <div className="w-1/5 bg-custom-blue grid grid-cols-1 gap-8 justify-center items-center my-20 mx-auto p-10 rounded-lg text-center">
        <h2>Login</h2>
        <Input 
        key="email"
        label = "Email"
        name = "email"
        labelPlacement="outside"
        />

        <Input 
        key="senha"
        label = "Senha"
        name = "senha"
        labelPlacement="outside"
        />
      </div>

      <div className="w-1/6 flex flex-col gap-6 justify-center items-center my-20 mx-auto p-10 rounded-lg text-center">
      <button className="bg-custom-blue py-2 px-4 rounded-md">Entrar</button>

      <h2 className="text-custom-blue py-2 px-4 rounded-md">Esqueceu sua senha?</h2>

      <button className="bg-custom-blue py-2 px-4 rounded-md" onClick={handleChangeData}>Alterar meus dados</button>

      <h2 className="text-custom-blue py-2 px-4 rounded-md">Não é cadastrado?</h2>

      <button className="bg-custom-blue py-2 px-4 rounded-md">Fazer cadastro</button>
      </div>
      <Footer />
    </main>
  );
}
