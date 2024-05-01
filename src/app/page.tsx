"use client"

import { Input } from "@nextui-org/react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useRouter } from "next/navigation";
import { getLogin } from "./actions/usuario/getLogin";
import { useState } from "react";


export default async function Home() {

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const handleEmail = (event: { target: { value: SetStateAction<string>; }; }) => {
    setEmail(event.target.value)
  }

  const handleSenha = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSenha(event.target.value)
  }

  const router = useRouter()

  const handleChangeData = () => {
    router.push("/att-cadastro")
  }

  const handleRegister = () => {
    router.push("/cadastro")
  }

  const handleLogin = async () => {
    const login = await getLogin();
    if (login.success == true) {
      router.push("/dashboard")
    }
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
        value={email}
        onChange={handleEmail}
        />

        <Input 
        key="senha"
        label = "Senha"
        name = "senha"
        labelPlacement="outside"
        value={senha}
        onChange={handleSenha}
        />
      </div>

      <div className="w-1/6 flex flex-col gap-6 justify-center items-center my-20 mx-auto p-10 rounded-lg text-center">
      <button className="bg-custom-blue py-2 px-4 rounded-md" onClick={handleLogin}>Entrar</button>

      <h2 className="text-custom-blue py-2 px-4 rounded-md">Esqueceu sua senha?</h2>
      <button className="bg-custom-blue py-2 px-4 rounded-md" onClick={handleChangeData}>Alterar meus dados</button>

      <h2 className="text-custom-blue py-2 px-4 rounded-md">Não é cadastrado?</h2>
      <button className="bg-custom-blue py-2 px-4 rounded-md" onClick={handleRegister}>Fazer cadastro</button>
      </div>
      <Footer />
    </main>
  );
}
