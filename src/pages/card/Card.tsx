//definiu interface
interface cardProps{
    titulo: string;
    texto: string;
    op?: number; // criaçao do objeto
    img: string;
}

function Card(props: cardProps) { // componente card, 
    return (
        <>
        <h1>CaRd</h1>
        <h2>{props.titulo}</h2>
        <p>{props.texto}</p>
        <h3><p>{props.op}</p></h3>
        </>
        
    )
}

export default Card