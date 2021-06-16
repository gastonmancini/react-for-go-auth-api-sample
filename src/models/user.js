import { Role } from './role';

export class User {
    constructor(id, firstName, lastName, email, role, image) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.role = role;
        this.image = image;
    }

    get name() {
        return this.firstName + " " + this.lastName;
    }
}