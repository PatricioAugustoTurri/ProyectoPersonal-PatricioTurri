function Productos ({props}){
    console.log(props)
    return (
        <section>
            {props.map((producto)=>{
                return (<div key={producto.id}>
                    <h1>{producto.titulo}</h1>
                    <p>{producto.descripcion}</p>
                    <img src={producto.imagen} alt={producto.titulo}/>
                </div>)
            })}
        </section>
    )
}

export default Productos ;