
enum MouthSize {
    small,
    big,
}

export interface IAnimalOption {
    name: string;
}

export interface IHasAMouth {
    open: () => void;
    size: MouthSize;
}

export interface IPoopable {
    poop(): void;
}

function wait(time: number): Promise<void> {
    const ret = new Promise<void>((resolve: () => void) => {
        setTimeout(resolve, time);
    });
    return ret;
}

export abstract class Animal {
    public head: IHasAMouth;
    public readonly name: string;
    private poopable: IPoopable;

    constructor(opts: IAnimalOption) {
        this.name = opts.name;
        this.head = {
            size: MouthSize.big,
            open() {
                console.log("open");
            },
        };
        this.poopable = {
            poop() {
                console.log("poop");
            },
        };
    }

    public abstract shout(): void;

    public async swallow(): Promise<IPoopable> {
        await wait(100);
        setTimeout(() => {
            console.log(`after a couple min : ${this.name}`); // here the value of 'this' is still an animal
        }, 200);
        setTimeout(function() {
            console.log(`after a couple min : ${this.name}`); // here the value of 'this' is window
        }, 200);
        return this.poopable;
    }
}
