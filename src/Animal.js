define(["require", "exports"], function(require, exports) {
    var Animal = (function () {
        function Animal(eats) {
            this.eats = eats;
        }
        Animal.prototype.eat = function () {
            console.log('Eating ' + this.eats);
        };

        Animal.prototype.speak = function () {
            console.log('An animal has spoken');
        };
        return Animal;
    })();
    
    return Animal;
});
//# sourceMappingURL=Animal.js.map
