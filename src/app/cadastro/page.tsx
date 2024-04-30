"use client"

import { Input } from "@nextui-org/react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { SetStateAction, useState } from "react";
import { createUser } from "../actions/usuario/createUser";
import { useRouter } from "next/navigation";

export default function Cadastro() {

  const router = useRouter()
  const [nome, setNome] = useState("")
  const [cpf, setCpf] = useState("")
  const [dataN, setDataN] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [botaoVisivel, setBotaoVisivel] = useState(false);
  

  const handleNome = (event: { target: { value: SetStateAction<string>; }; }) => {
    setNome(event.target.value)
    validarInputs()
  }

  const handleCpf = (event: { target: { value: SetStateAction<string>; }; }) => {
    setCpf(event.target.value)
    validarInputs()
  }

  const handleDataN = (event: { target: { value: SetStateAction<string>; }; }) => {
    setDataN(event.target.value)
    validarInputs()
  }

  const handleEmail = (event: { target: { value: SetStateAction<string>; }; }) => {
    setEmail(event.target.value)
    validarInputs()
  }

  const handleSenha = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSenha(event.target.value)
    validarInputs()
  }

  const usuario = {
    'cpf': cpf,
    'nome': nome,
    'data_nascimento': dataN,
    'email': email,
    'senha': senha
  }

  const handleRegister = async () => {
    const user = await createUser(usuario);
    if (user.success == true) {
      router.push("/")
    }

    else {
      throw user.result
    }
  }

  console.log("URL para cadastro de usuário:", `${process.env.API_BASE_URL}/usuario/cadastro`);


  const validarInputs = () => {
    if (
      nome.trim() !== "" &&
      cpf.trim() !== "" && 
      dataN.trim() !== "" && 
      email.trim() !== "" && 
      senha.trim() !== ""
    ) {
      setBotaoVisivel(true);
    } else {
      setBotaoVisivel(false);
    }
  };

    return (
        <main className="h-screen text-center">
          <NavBar />

          <h1 className="text-custom-blue mt-10 text-xl">Faça seu cadastro</h1>

          <div className="w-1/5 bg-custom-blue grid grid-cols-1 gap-8 justify-center items-center my-20 mx-auto p-10 rounded-lg text-center">
            <Input 
            key="nome-completo"
            label = "Nome completo"
            name = "nome-completo"
            labelPlacement="outside"
            value={nome}
            onChange={handleNome}
            required            
            />
    
            <Input 
            key="cpf"
            label = "CPF"
            name = "cpf"
            labelPlacement="outside"
            value={cpf}
            onChange={handleCpf}
            required           
            />

            <Input 
            key="data-nascimento"
            label = "Data de nascimento"
            name = "data-nascimento"
            labelPlacement="outside"
            type="date"
            value={dataN}
            onChange={handleDataN}
            required     
            />

            <Input 
            key="email"
            label = "Email"
            name = "email"
            labelPlacement="outside"
            value={email}
            onChange={handleEmail}
            required
            />

            <Input 
            key="senha"
            label = "Senha"
            name = "senha"
            labelPlacement="outside"
            type="text"
            onChange={handleSenha}
            value={senha}
            required
            />
          </div>
          <div className="flex justify-center">
            <button className={`py-2 px-4 rounded-md mb-24 transition-colors duration-200
             ${!botaoVisivel ? "bg-gray-400 text-gray-600 cursor-not-allowed" : "bg-custom-blue text-white"}`}
              disabled={!botaoVisivel}
              onClick={handleRegister}>Cadastrar</button>
          </div>
          <Footer />
        </main>
      );
}