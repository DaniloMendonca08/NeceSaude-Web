import { Button, Input } from "@nextui-org/react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function AtualizarCadastro() {
    return (
        <main className="h-screen text-center">
          <NavBar />

          <h1 className="text-custom-blue mt-10 text-xl">Atualizar seus dados</h1>

          <div className="w-1/5 bg-custom-blue grid grid-cols-1 gap-8 justify-center items-center my-20 mx-auto p-10 rounded-lg text-center">
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
            <button className="bg-custom-blue py-2 px-4 rounded-md mb-28">Atualizar dados</button>
          </div>
          <Footer />
        </main>
      );
}