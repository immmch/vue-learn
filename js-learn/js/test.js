function Shape() {
    this.x = 0;
    this.y = 0;
}

Shape.prototype.move = function (x, y) {
    this.x += x;
    this.y += y;
    console.info('Shape moved.');
};

// 第一步，子类继承父类的实例
function Rectangle() {
    Shape.call(this); // 调用父类构造函数
}
// 另一种写法
function Rectangle() {
    this.base = Shape;
    this.base();
}

// 第二步，子类继承父类的原型
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();
console.log(rect);