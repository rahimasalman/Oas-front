export class InfernoEffect {
    constructor(effect, dependency) {
        this.effect = effect;
        this.dependency = dependency;
        this.destroy = effect();
    }
    update(dependency) {
        if (!dependency || dependency.some((d, i) => this.dependency[i] !== d)) {
            this.dispose();
            this.destroy = this.effect();
        }
        if (dependency) {
            this.dependency = dependency;
        }
    }
    dispose() {
        if (this.destroy) {
            this.destroy();
        }
    }
}
