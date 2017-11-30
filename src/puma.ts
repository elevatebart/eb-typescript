import { Animal } from "./animal";

export interface IEdible {
    giveEnergy(): number;
}
export class Puma extends Animal {
    private energy: number = 0;
    private readonly food: IEdible;
    constructor(food: IEdible = {giveEnergy() {
            return 8;
        },
    }) {
        super({
            name: "Big Cat",
        });
        this.food = food;
        console.log(`puma created ${this.name}`); // if you move this before super() compiler will cry
    }
    public eat() {
        this.food.giveEnergy();
    }
    public shout(): void {
        this.head.open();
        console.log("grouaaaaaaa !!!");
    }
}
