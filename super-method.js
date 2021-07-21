class Shape {
    paint() {
        console.log("Paint Message");
    }
}

class Circle extends Shape {
    paint() {
        super.paint(); // Memanggil parent Paint pada class Shape
        console.log("Circle Message")
    }
}

const circle = new Circle();
circle.paint();