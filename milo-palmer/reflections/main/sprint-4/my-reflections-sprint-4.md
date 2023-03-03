# My Reflections - Sprint Four 

# Code Readability

### What makes code more readable for you?
  Nice short lines with concise var names, I also really like using `` for breaking up strings into different lines


### Do you prefer tabs or spaces when indenting?
  Tabs 


### What is your workspace like in real life? Clean? Messy? Is your code a reflection of that?
  I wouldn't say it is perfectly clean and I also wouldn't refer to it as messy my code does also reflect that sort of pattern using prettier when I save there are some things that move around. I do try to keep everything indented and use multiple lines when I can.



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
  const sum = (a, b) => a + b
```

### Do you think you would prefer using Test Driven Development? Why?
  In some aspects yes. Trying to figure out how to turn a problem into pseudo code can be difficult when complex so seeing a test and reading what passes may break that down into easier steps such as "have variable be an array" would ake the first step easier. I'll need some more practise to really know.  



# Kata

### Was it helpful to look at the tests while coding the kata?
  Very there was also at point if the questions didn't make complete sense looking at what the tests were looking for made it much easier to decipher

### What problem solving techniques did you implement in your coding flow?
  Rubber ducky, Pseudo code and console logging alot 

### What was the most challenging part of Super FizzBuzz for you?
  That was very straight forward for me seeing the funciton being imported from the prevoius challenge was a good hint as to waht to do

### Did you want to change and refactor your code once you were finished?
  Going and learning new and better methods wants me to go back to old challenges and change them so the knowledge I am applying is the best use case
