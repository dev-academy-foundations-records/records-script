# My Reflections - Sprint Four 

# Code Readability

### What makes code more readable for you?

In case of HTML and CSS, good comments at appropriate place at both starting, ending point of each element help so I can easily recognise the codes.
Good use of indentation at where there are long paragraph elements is helpful too.

For backend language like javascript in this case, comment of each function to explain what it actually does and use of good naming for variables, parameters and etc. is helpful and readible.

### Do you prefer tabs or spaces when indenting?

I prefer to use tabs for indenting in which set as 4 spaces for a tab in my VS code environment.
It saves more time and accurate rather than pressing spaces.

### What is your workspace like in real life? Clean? Messy? Is your code a reflection of that?

Between them I think, I really have many stuffs organised tidy in my way.
My code is not that clean too :) trying to make it cleaner later but write codes first.

# Testing

```
function testSum(){
    let expected = 7
    let actual = sum(5, 2)

    if (actual != expected) {
        console.log("It's broken..")
    } else {
        console.log("It works!")
    }
}
```
### Have a go at writing a "sum" function below that would make the above function print out `"It works!"`: 
```
function sum(a, b) {
    return a + b;
}
```

### Do you think you would prefer using Test Driven Development? Why?

Yes, I would prefer to use this TDD method as it has many advantages when writing codes such as;

1. Producing solid codes in OOP (Object Oriented Programming) methodology.
2. Shortens the redesigning time.
3. Shortens the debugging time.
4. Facilitates additional implementations.

# Kata

### Was it helpful to look at the tests while coding the kata?

Yes, browsing the test files was helpful to understand what I really need to do to satisfy these tests.

### What problem solving techniques did you implement in your coding flow?

I often have used two techniques while doing this challenge.

1. Placing console.log() at where I wanted to test for, to check if I could get desired results for specific codes.
2. Trying other alternative methods until it works.

### What was the most challenging part of Super FizzBuzz for you?

Not challeging really but I tried to understand what the arrow (=>) for using map() actually does in the specific code which was worth to know.

### Did you want to change and refactor your code once you were finished?

I wanted to refactor the codes to make them simple as possible however I do not know much technique to do it efficiently. 
Definitely I should study about this further :)
