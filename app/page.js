import Menu from "./components/Menu";
import Produto from "./components/Produto";

export default function Home() {
  return (
    <div>

      <Menu/>
      
      <h1> Enviando para GitHub </h1>
      <p> Atividade em andamenteo... </p>
      <p> Testatando nova versão </p>

      <hr/>

      <h2> Produtinhos </h2>

    <div className="flex justify-around">
      <Produto  nome="Velho Barreiro" preco="25,00" nota="⭐" botao="Encomendar"/>
      <Produto nome="TennisPé" preco="58,73" nota="⭐⭐⭐" botao="Comprar"/>
      <Produto nome="Chinelo com prego" preco="200,00" nota="⭐⭐⭐⭐⭐" botao="Comprar"/>
      <Produto nome="Cobra Recheada" preco="12,00" nota="⭐⭐" botao="Encomendar"/>
    </div>

    </div>
  );
}
