interface Drivable {
    void drive();
}

class Vehicle {
    String brand;
    int speed;

    Vehicle(String brand, int speed) {
        this.brand = brand;
        this.speed = speed;
    }

    void move() {
        System.out.println(brand + " is moving at speed " + speed + " km/h.");
    }
}
class Car extends Vehicle implements Drivable {
    int seats;

    Car(String brand, int speed, int seats) {
        super(brand, speed);
        this.seats = seats;
    }
    public void drive() {
        System.out.println(brand + " is being driven smoothly.");
    }

    void display() {
        System.out.println("Car Brand: " + brand);
        System.out.println("Speed: " + speed + " km/h");
        System.out.println("Seats: " + seats);
    }
}

public class Question1 {
    public static void main(String[] args) {
        Car myCar = new Car("Toyota", 120, 5);
        myCar.move();
        myCar.drive();
        myCar.display();
    }
}
