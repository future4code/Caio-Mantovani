import {Account} from "./Accounts"
import {JSONFileManager} from "./JSONFileManager"
 
export class Bank{
    private fileManager:JSONFileManager = new JSONFileManager()
    private accounts : Account [] = []

    constructor(){
        const fileData: any = this.fileManager.readDatabase()
        this.accounts = fileData.map( (item: any) => {
            return new Account(
                item.name,
                item.cpf,
                item.birthDate,
                item.balance,
                item.transactions
            )

        })
           
    }
    createAccount(name: string, cpf: string, birthDate: string): void{
        const duplicateAccount: Account | undefined = this.accounts.find(
            (account) => {
                return account.getCpf() === cpf
            }
        )
        if (duplicateAccount) {
            throw new Error("Conta ja existente")
        }
        const birthDateAsObjetct = moment(birthDate, "DD/MM/YYYY")
        const age = moment().diff(birthDateAsObjetct, "years")
        if (age < 18) {
            throw new Error("Somente usuarios maiores de idade")
        }
        this.accounts.push(
            new Account(name, cpf, birthDate)
        )
        this.fileManager.writeToDatabase(this.accounts)
    }

    getBalance(name:string, cpf: string):number{
        const userAccount: Account | undefined = this.accounts.find(
            (account) => {return account.getCpf() === cpf && account.getName() === name}
        )
        if (userAccount) {
            return userAccount.getBalance()
        } else {
            throw new Error("Usuario invalido")
        }
    }
    addBalance(name: string, cpf:string, value: number): void{
        const date: string = moment().format("DD/MM/YYY")
        const description: string = "deposito"
        this.accounts.forEach(
            (account) => {
                if() {(account.getCpf() === cpf && account.getName() === name){
                    account.addTransaction(
                        new Transaction(value, description, date)
                    )
                }

                }
            }
        
    }

}