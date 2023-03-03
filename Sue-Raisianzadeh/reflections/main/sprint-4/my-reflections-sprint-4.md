# My Reflections - Sprint Four 

# Code Readability

### What makes code more readable for you?

distance between lines and indenting first lines of tags and elements

### Do you prefer tabs or spaces when indenting?

i thought my vs do it automatically, as I installed prettier on it. but I have to use tab or space for indenting

### What is your workspace like in real life? Clean? Messy? Is your code a reflection of that?

I try to keep it clean, but it's mostly somewhere between clean and messy.
I think when my mind is so busy with my code, I forget what my workspace is like


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
` ``
function sum(num1, num2) {
  return num1 + num2;
} 
```

### Do you think you would prefer using Test Driven Development? Why?

I don't know how to use TDD. so, I prefer to use console.log()



# Kata

### How did you find using repl.it in practice? Confusing? Useful?

unfortunately, I didn't didn't know about it and used bootcamp and w3schools and some other useful websites. mostly I google the question and i can find some similar ones, then I try to write my code based on them and in the end I use console.log(); to be   sure about my answer. but I will get help from repl.it from now on 

### Was it helpful to look at the tests while coding the kata?
surely it would be very helpful and faster. 

### What problem solving techniques did you implement in your coding flow?
it depend on the code and its difficulty, totally, I think I use all of them when I found a problem

### What was the most challenging part of Super FizzBuzz for you?
fizzbuzz was a very difficult challenge. but that was good that Joseph sent 2 video about it on Discord. they were very helpful

### Did you want to change and refactor your code once you were finished?
I did. 
checked my code with console.log and they were fine. But "npm test" shows that they often fail.
I don't know what to do...
