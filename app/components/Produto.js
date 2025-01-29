function Produto( attr ) {
    return (
        <div className="border-solid border w-1/6 bg-zinc-50 p-5">

            <div className="text-center">
               <img src="http://placehold.co/200"/>
            </div>

               <h2 className="text-lime-800"> {attr.nome} </h2>
               <p> {attr.nota} </p>
               <p>R$ {attr.preco} </p>
               <button className="text-white bg-black rounded-xl"> {attr.botao} </button>
        </div>
     );
}

export default Produto;