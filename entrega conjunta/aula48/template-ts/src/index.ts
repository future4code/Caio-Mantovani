import { Bank } from "./Bank"
import { Account } from "./Accounts"
import { Transaction } from './Transaction'

const bank: Bank = new Bank()
const action: string = process.argv[2]

switch (action) {
    case 'createAccount':
        bank.createAccount(
            process.argv[3],
            process.argv[4],
            process.argv[5]
        )
        break;
        default: break;
}