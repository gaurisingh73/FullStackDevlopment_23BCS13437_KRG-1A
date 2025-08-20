class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}
class Dog extends Animal {
    void sound() {
        System.out.println("Dog barks: Woof!");
    }
}
class Cat extends Animal {
    void sound() {
        System.out.println("Cat meows: Meow!");
    }
}
public class Question3 {
    public static void main(String[] args) {
        Animal a1 = new Dog();
        Animal a2 = new Cat();
        a1.sound();
        a2.sound();
    }
}
