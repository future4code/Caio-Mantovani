import React from "react";
import { DadosUsuario } from "./components/DadosUsuario";
import { ListaUsuario } from "./components/ListaUsuario";



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
