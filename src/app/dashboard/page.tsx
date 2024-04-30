import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-between"> {/* Flexbox para alinhamento vertical */}
      <NavBar /> {/* Barra de navegação no topo */}

      <div className="flex items-center"> {/* Permite que a div cresça */}
        <div className="grid grid-cols-2 gap-40 bg-custom-blue p-10 rounded-lg"> {/* Espaçamento entre elementos da grade */}
          <button className="bg-custom-blue py-2 px-4 rounded-md">Entrar</button>
          <button className="bg-custom-blue py-2 px-4 rounded-md">Entrar</button>
          <button className="bg-custom-blue py-2 px-4 rounded-md">Entrar</button>
          <button className="bg-custom-blue py-2 px-4 rounded-md">Entrar</button>
        </div>
      </div>

      <Footer /> {/* Rodapé no final */}
    </main>
  );
}
