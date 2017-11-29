import { Animal } from "./animal";

export class Bear extends Animal {
    constructor() {
        super({
            name: "Big guyzz",
        });
    }
    public shout(): void {
        this.head.open();
        console.log("grouoooo but of a bear !!!");
    }
}
