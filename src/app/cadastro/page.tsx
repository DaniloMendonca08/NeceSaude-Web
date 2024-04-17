import { Button, Input } from "@nextui-org/react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Cadastro() {
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
            />
    
            <Input 
            key="cpf"
            label = "CPF"
            name = "cpf"
            labelPlacement="outside"
            />

            <Input 
            key="idade"
            label = "Idade"
            name = "idade"
            labelPlacement="outside"
            />

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

          <div className="flex justify-center">
            <button className="bg-custom-blue py-2 px-4 rounded-md mb-24">Cadastrar</button>
          </div>
          <Footer />
        </main>
      );
}