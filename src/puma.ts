import { Animal } from "./animal";

export class Puma extends Animal {
    constructor() {
        super({
            name: "Big Cat",
        });
    }
    public shout(): void {
        this.head.open();
        // tslint:disable-next-line:no-console
        console.log("grouaaaaaaa !!!");
    }
}
