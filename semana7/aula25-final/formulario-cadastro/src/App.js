import React from "react";
import { DadosUsuario } from "./components/DadoUsuario";
import { ListaUsuario } from "./components/ListaUsuarios";



class App extends React.Component {


  render() {
    return (
      <div className="App">
        <DadosUsuario/>

        <ListaUsuario/>


      </div>
    );
    }
}

export default App;
