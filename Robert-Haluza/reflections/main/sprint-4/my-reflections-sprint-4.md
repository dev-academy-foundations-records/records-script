# My Reflections - Sprint Four 

# Code Readability

### What makes code more readable for you?

-Proper indentations and formating
-Easy to read names, so you know what they are doing.
-Commenting complicated sections of the code.

### Do you prefer tabs or spaces when indenting?

Tabs mainly because I find it easier and more clear to see the spaces.

### What is your workspace like in real life? Clean? Messy? Is your code a reflection of that?

Goes through phases, but would mainly say pretty cluttered. The code can sometimes definitely be a reflection of that.



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

function sum(x,y){
  return x + y;
}


### Do you think you would prefer using Test Driven Development? Why?

On smaller projects I would prefer to use the Test Driven Development method as I feel like it would be easier to write up the test that the project is intented for, rather than try break down specific bits of code.


# Kata

### How did you find using repl.it in practice? Confusing? Useful?

I haven't really properly integrating it with my workflow yet.
### Was it helpful to look at the tests while coding the kata?

Knowing that the code was working correctly made me feel more comfortable moving on to the next challenge.

### What problem solving techniques did you implement in your coding flow?

A bit of pseudocode, but mainly using the rubberducky method with console logging was the most usefull techniques for tackling any issues I had.

### What was the most challenging part of Super FizzBuzz for you?

Overthinking the soultion on how to loop over that array and return a modifed version of that array. It ended up just needing a simple .map method.



### Did you want to change and refactor your code once you were finished?

Most of the time, yes. I would generally just write out the soultion untill it worked and then refactor it for easier readability.