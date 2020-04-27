import React from 'react';


export class Etapa1 extends React.Component {
    render() {
        return (

<div className={"dados1'"}>
   <h1>ETAPA 1 - DADOS GERAIS</h1>
   <p>1. Qual seu nome?</p>
   <input type="text" onChange={this.props.onChange} value={this.props.value}></input>
   <p>Qual dua idade?</p>
   <input type="text" onChange={this.props.onChange} value={this.props.value}></input>
   <p>Qual seu email?</p>
   <input type="text" onChange={this.props.onChange} value={this.props.value}></input>
   <p>Qual sua escolaridade?</p> 
   <select name="escolaridade">
       
       <option value="Ensino médio incompleto">Ensino médio incompleto</option>
       <option value="Ensino médio completo">Ensino médio completo</option>
       <option value="Ensino superior incompleto">Ensino superior incompleto</option>
       <option value="Ensino superior completo">Ensino superior completo</option>
              
   </select>



</div>
        );
    }
}
export default Etapa1;