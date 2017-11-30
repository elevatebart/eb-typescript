import { Animal } from "./animal";

export class Puma extends Animal {
    constructor() {
        super({
            name: "Big Cat",
        });
        console.log(`puma created ${this.name}`); // if you move this before super() compiler will cry
    }
    public shout(): void {
        this.head.open();
        console.log("grouaaaaaaa !!!");
    }
}
