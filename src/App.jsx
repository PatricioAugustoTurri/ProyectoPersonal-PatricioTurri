import { BrowserRouter } from "react-router-dom";
import Footer from "./Componentes/Footer";
import Header from "./Componentes/Header";
import Main from "./Componentes/Main";
import { NextUIProvider } from '@nextui-org/react';

function App (){
  return (
    <BrowserRouter>
      <NextUIProvider>
        <Header/>
        <Main/>
        <Footer/>
      </NextUIProvider>
    </BrowserRouter>
  )
}

export default App ;