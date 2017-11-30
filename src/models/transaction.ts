import { Account } from './account';
import { Category } from './category';
export class Transaction {
    id: string;
    describe: string;
    value: number;
    date: Date;
    category: Category;
    account: string;
    type: string;

    constructor() {
        this.id = '';
        this.describe = ''
        this.value = 0;
        this.date = new Date(Date.now());
    }
}