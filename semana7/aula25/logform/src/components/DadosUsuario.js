import React from 'react';

export class DadosUsuario extends React.Component {

    state = {
        nomeValue: "",
        emailValue: ""

    }

    onChangeNome = (event) => {
        this.setState({nomeValue: event.target.value})
    }

    onChangeEmail = (event) => {
        this.setState({emailValue: event.target.value})
    }

    onClickCadastrar = () => {
        console.log("nome", this.state.nomeValue)
        console.log("email", this.state.emailValue)
    }

    render() {
        return <div>
            <input placeholder={"Nome"} value={this.state.nomeValue} onChange={this.onChangeNome} />
            <input placeholder={"Email"} value={this.state.emailValue} onChange={this.onChangeEmail} />
            <button onClick={this.onClickCadastrar}>Cadastrar</button>

        </div>;
    }

}