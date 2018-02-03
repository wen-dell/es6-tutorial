class Rectangle {

    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    get width() {
        return this._width;
    }

    set width(width) {
        this._width = width;
    }

    get height() {
        return this._height;
    }

    set height(height) {
        this._height = height;
    }

    get area() {
        return this._height * this._width;
    }

}

rectangle = new Rectangle(12, 15);
console.log(rectangle.area);