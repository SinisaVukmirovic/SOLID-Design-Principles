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

#### If X is a subtype of Z, then objects of type Z may be replaced with objects of type X.
#### If you have a class of Animal, every single place that you used the Animal class, you should be able to replace it with one of its subclasses. If you have another class of Dog that inherits from Animal class, then every single place that you used Animal class, you should be able to use Dog class and its going to work just as well as it did before.
#### Anywhere that you use one type of class, you need to be able to use all of the subclasses of that class.
___