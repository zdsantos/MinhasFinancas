export class Account {
    id: string;
    name: string;
    type: {name: string, icon: string};
    balance: number = 0;
}