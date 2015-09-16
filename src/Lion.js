var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "Animal"], function(require, exports, Animal) {
    var Lion = (function (_super) {
        __extends(Lion, _super);
        function Lion() {
            _super.call(this, 'meat');
        }
        Lion.prototype.speak = function () {
            console.log('Lion roared');
            _super.prototype.speak.call(this);
        };
        return Lion;
    })(Animal);
    
    return Lion;
});
//# sourceMappingURL=Lion.js.map
