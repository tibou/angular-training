export class Customer {

    constructor(private _firstName: string, private l_astName: string){}
    
   public get firstName(): string {
    return this._firstName;
   }
}