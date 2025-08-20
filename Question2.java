abstract class Shape {
    abstract double calculateArea();
    void display() {
        System.out.println("This is a shape.");
    }
}

class Circle extends Shape {
    private double radius;
    public Circle(double radius) {
        this.radius = radius;
    }
    @Override
    double calculateArea() {
        return Math.PI * radius * radius;
    }
}

class Rectangle extends Shape {
    private double length;
    private double width;
    public Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }
    @Override
    double calculateArea() {
        return length * width;
    }
}

public class Question2 {
    public static void main(String[] args) {
        Shape circle = new Circle(5.0);
        circle.display();
        System.out.println("Circle Area: " + circle.calculateArea());

        Shape rectangle = new Rectangle(4.0, 6.0);
        rectangle.display();
        System.out.println("Rectangle Area: " + rectangle.calculateArea());
    }
}
