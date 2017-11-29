import { Animal } from "./animal";

export class Puma extends Animal {
    constructor() {
        super({
            name: "Big Cat",
        });
    }
    public shout(): void {
        this.head.open();
        console.log("grouaaaaaaa !!!");
    }
}
