# SOLID Design Principles
***

## S - Single Responsibility Principle

[Single Responsibility Principle Example](https://sinisavukmirovic.github.io/SOLID-Design-Principles/1.%20Single%20Responsibility%20Principle/index.html)

#### The main idea of the single responsibility principle is that every class/function/module/section of your code should have only one responsibility. This means that the code should only have one single reason to change. If there are two different reasons for the code to change, or if it does two distinctly different things then it is in violation of this principle and is potentially poorly designed code.
___

## O - Open/Closed Principle

[Open/Closed Principle Example](https://sinisavukmirovic.github.io/SOLID-Design-Principles/2.%20Open-Closed%20Principle/index.html)

#### The main idea of the open/closed principle is that every class/function/module/section of your code should be open for extension and closed for modification. This means that a class/function/module should be able to be extended in functionality without having to go into the class and change it. Essentially you shouldn't need to change existing code to add new functionality and instead should only have to add new code.
___

## L - Liskov Substitution Principle

[Liskov Substitution Principle Example](https://sinisavukmirovic.github.io/SOLID-Design-Principles/3.%20Liskov%20Substitution%20Principle/index.html)

#### The main idea of the Liskov substitution principle is that any function/module that interacts with a class should also be able to interact with all subclasses of that class without breaking. This essentially means that a class is interchangeable with its subclasses.
#### If X is a subtype of Z, then objects of type Z may be replaced with objects of type X.
#### If you have a class of Animal, every single place that you used the Animal class, you should be able to replace it with one of its subclasses. If you have another class of Dog that inherits from Animal class, then every single place that you used Animal class, you should be able to use Dog class and its going to work just as well as it did before.
#### Anywhere that you use one type of class, you need to be able to use all of the subclasses of that class.
___

## I - Interface Segregation Principle

[Interface Segregation Principle Example](https://sinisavukmirovic.github.io/SOLID-Design-Principles/4.%20Interface%20Segregation%20Principle/index.html)

#### The main idea of the interface segregation principle is that any class that implements an interface must use all functions/properties of the interface. JavaScript does not have actual interfaces, but a class inheritance structure is similar enough that it works in this instance. This means that any class that inherits from another class needs to use all of the methods/properties from the base class. This encourages writing small classes instead of large classes.
___

## D - Dependency Inversion Principle

[Dependency Inversion Principle Example](https://sinisavukmirovic.github.io/SOLID-Design-Principles/5.%20Dependency%20Inversion%20Principle/index.html)

#### The Dependency Inversion Principle (DIP) states that high level modules should not depend on low level modules; both should depend on abstractions. Abstractions should not depend on details.