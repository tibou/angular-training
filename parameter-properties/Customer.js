"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(_firstName, l_astName) {
        this._firstName = _firstName;
        this.l_astName = l_astName;
    }
    get firstName() {
        return this._firstName;
    }
}
exports.Customer = Customer;
