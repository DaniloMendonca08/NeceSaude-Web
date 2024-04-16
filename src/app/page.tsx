import { Input } from "@nextui-org/react";
import NavBar from "./components/NavBar";


export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="w-64">
        <h2 className="text-slate-700">Login</h2>
        <Input 
        key="nome"
        label = "Nome"
        name = "nome"
        labelPlacement="outside"/>
      </div>
    </main>
  );
}
