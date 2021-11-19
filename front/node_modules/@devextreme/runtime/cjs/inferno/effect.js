"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InfernoEffect = /** @class */ (function () {
    function InfernoEffect(effect, dependency) {
        this.effect = effect;
        this.dependency = dependency;
        this.destroy = effect();
    }
    InfernoEffect.prototype.update = function (dependency) {
        var _this = this;
        if (!dependency || dependency.some(function (d, i) { return _this.dependency[i] !== d; })) {
            this.dispose();
            this.destroy = this.effect();
        }
        if (dependency) {
            this.dependency = dependency;
        }
    };
    InfernoEffect.prototype.dispose = function () {
        if (this.destroy) {
            this.destroy();
        }
    };
    return InfernoEffect;
}());
exports.InfernoEffect = InfernoEffect;
