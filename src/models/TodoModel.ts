//not rendering a DOM so we can keep this file .ts

class TodoModel{
    rowNumber: number;
    rowDescription: string;
    rowAssigned: string;

    constructor(rowNumber: number, rowDescription: string, rowAssigned:string){
        this.rowNumber = rowNumber;
        this.rowDescription = rowDescription
        this.rowAssigned = rowAssigned;
    }
}