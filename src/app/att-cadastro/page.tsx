"use client"

import { Button, Input } from "@nextui-org/react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { SetStateAction, useState } from "react";

export default function AtualizarCadastro() {

  const [email, setEmail] = useState("")

  const handleEmail = (event: { target: { value: SetStateAction<string>; }; }) => {
    setEmail(event.target.value)
  }

    return (
        <main className="min-h-96 text-center">
          <NavBar />

          <h1 className="text-custom-blue mt-10 text-xl">Atualizar seus dados</h1>

          <div className="w-1/5 bg-custom-blue grid grid-cols-1 gap-8 justify-center items-center my-20 mx-auto p-10 rounded-lg text-center">
            <h3>Digite o email cadastrado</h3>
            <Input 
            key="email"
            label = "Email"
            name = "email"
            labelPlacement="outside"
            value={email}
            onChange={handleEmail}
            required
            />
          </div>

          <div className="flex justify-center">
            <button className="bg-custom-blue py-2 px-4 rounded-md mb-28">Atualizar login</button>
          </div>
          <Footer />
        </main>
      );
}