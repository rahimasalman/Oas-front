export declare class InfernoEffect {
    private effect;
    private dependency;
    private destroy?;
    constructor(effect: () => (() => void) | void, dependency: Array<any>);
    update(dependency?: Array<any>): void;
    dispose(): void;
}
