import { Input } from "@nextui-org/react";
import NavBar from "./components/NavBar";


export default function Home() {
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
    </main>
  );
}
