export class Contact {
    firstname = '';
    lastname = '';
    email = '';
    connected = false;

    constructor(firstname, lastname, email, connected) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.connected = connected;        
    }
}