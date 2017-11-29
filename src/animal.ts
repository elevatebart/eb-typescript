
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
        this.poopable = {
            poop() {
                console.log("poop");
            },
        };
    }

    public abstract shout(): void;

    public async swallow(): Promise<IPoopable> {
        await wait(100);
        return this.poopable;
    }
}
