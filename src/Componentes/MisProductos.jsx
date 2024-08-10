function MisProductos ({ productos }) {

}

export default MisProductos ;

/*
<div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="p-0 overflow-visible">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="justify-between text-small">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
    */ 

    /*
        if (productos.map((a)=> a.categoria).length === 0){
        return (<div>No hay productos</div>)
    }else{
    return (
        <section className="grid justify-center grid-cols-2 gap-4 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3">
            { productos.map((producto , index)=>{
                return (
                    <article key={index} className="flex flex-col items-center gap-1 p-2 text-center rounded-lg bg-slate-100">
                        <Image
                            isZoomed
                            width={200}
                            height={200}
                            objectFit="cover"
                            alt={producto.titulo}
                            src={producto.imagen}
                        />
                         <div className="flex flex-col justify-start">
                            <h1 className="text-xl font-bold">{producto.titulo}</h1>
                            <p className="font-bold">${producto.precio}</p>
                        </div>
                    <Link to="/fotos/:id" className="p-2 font-black bg-red-400 rounded-md text-black/50">VER DETALLES</Link>
                    </article>
            )
            })}
        </section>
    )
}
    */