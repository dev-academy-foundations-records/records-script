# My Reflections - Sprint Four 

# Code Readability

### What makes code more readable for you?

For what I have learnt, good indentation, and captions for a big chunk of features will help me understand the code. I have been glanced some 
rules like YAGNI rule(You Ain't Gonna Need It)， KISS Rule(Keep It Simple, Stupid), Sandi Metz's four rules and SRP (Single Responsibility Principle)，
some comments that they are really useful, obiviouosly, I did not get it, I think I will pick these up when I am coding a lots and reading a lots codes.

### Do you prefer tabs or spaces when indenting?

I did not realise Tabs and spaces can cause so many argument, before I studied this section, I use tabs most of time, and use space to have sophisticated 
adjustment. After this learning I would switch to using spaces, as Tabs, when programmer copy and paste, the editor may confirgue it another may, messing 
up the clean code.

### What is your workspace like in real life? Clean? Messy? Is your code a reflection of that?

I am moving at moment, so my stuff is a mess, but I do believe that what a person's working space looks like can reflect his/her working style. 
A nice, tidy working space will have positive influences on the clean and organised codes. It is a habit that I need to raise from the beginning.




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
function sum(a,b){
  return a+b
}

```

### Do you think you would prefer using Test Driven Development? Why?

Comparing the Unit Test, I consider TTD is harder, as programmers need to plan the code and write test before they actul start coding.
However, if using TDD well, it will save amount of time for debugging compared to Unit Test, plus TDD test has a built-in step called
refactoring, which helps to create a cleaner codebase. In conclusion, TDD test seems required more logical thinking than Unit Test to 
me, but it can foresee problem and make the code clean, which may save a lots of effort and time in the future. Hence, I would love 
to challenge myselft by to adapt it as my basic coding skill. 


# Kata

### How did you find using repl.it in practice? Confusing? Useful?
It was confusing when first time I used repl.it I created a wrong file,somthing else instead of 'node' JS, I could not run my test. Afterwards, when I figured it out, I run all my kata test there, it is very handy

### Was it helpful to look at the tests while coding the kata?
compared to write the code all at once and run the test, it is efficient to test every line of code, so I will knoe which line I got wrong.

### What problem solving techniques did you implement in your coding flow?
What I found is that, I was good with psedocode, I can see my logic about codeing is usually right. The step after it which is to code it out was quite challenging for me, I know how to make it work, but when I put my finger on the keyboard, I mind was blank. The way to solve it is to use google to search the result I wanted to achieve, and find the right methods to solve it, learning how to use the right syntax is also part of this. When I get stuck again, I would go back to pesudocode again, to see if my first step was right, I sometimes write it again.

### What was the most challenging part of Super FizzBuzz for you?
When I did the Super FizzBuzz, I wrote the code without using `fuction fizzBuzz()` from the last kata practice, and I made it, what got me is how to apply the function I already finished to achieve Super FizzBuzz challenge.


### Did you want to change and refactor your code once you were finished?

Thas definetly positive, just like I said, from the FizzBuzz challenge, I tried two different way to code. And for the gradebook, I went along with Joseph's clip to finish the step 3 and 4. It was a long code, me and myfriend cracked it another way by using '.indexOf()' method, which allows as shorten the code to 2 lines. Quite often when I went review the code I found the long code actually took less time to read and understand it and short code made me thinking longer. So at this stage I would say change and refactor code are challenges for me, but keeping the original code helps me undertsand the code better.