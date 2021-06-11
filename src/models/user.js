import { Role } from './role';

export class User {
    constructor(id, firstName, lastName, email, role) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.role = role;
    }

    get name() {
        return this.firstName + " " + this.lastName;
    }
}