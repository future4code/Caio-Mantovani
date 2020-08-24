import {Transaction} from "./Transaction"

export class Account {
    constructor(
        private name: string,
        private cpf: string,
        private birthDate: string,
        private balance: number = 0,
        private transactions: [] = []
    ) {

    }

    getName = () => this.name
    getCpf = () => this.cpf
    getBirthDate = () => this.birthDate
    getBalance = () => this.balance
    getTransactions = () => this.transactions
    
    addTransaction(Transaction: Transaction):void{
        this.transactions.push(this.transactions)
    }

}