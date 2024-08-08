import { BrowserRouter } from "react-router-dom";
import Footer from "./Componentes/Footer";
import Header from "./Componentes/Header";
import Main from "./Componentes/Main";
import { NextUIProvider } from '@nextui-org/react';
import CarroProvider from "./Provider/CarroProvider";
import UserProvider from "./Provider/UserProvider";

function App (){
  return (
    <BrowserRouter>
      <NextUIProvider>
        <CarroProvider>
          <UserProvider>
            <Header/>
            <Main/>
            <Footer/>
          </UserProvider>
        </CarroProvider>
      </NextUIProvider>
    </BrowserRouter>
  )
}

export default App ;