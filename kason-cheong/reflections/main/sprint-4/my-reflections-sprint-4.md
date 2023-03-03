# My Reflections - Sprint Four 

# Code Readability

### What makes code more readable for you?
Being indented and formatted properly, with the correct spaces and also for HTML to be indented with appropiate <p> tags and for inline elements to be inserted along the text rather than separately. 


### Do you prefer tabs or spaces when indenting?
Using tab seems more intuitive as you only have to press it once rather than using the keyboard twice which can potentially make it easier to mistype.


### What is your workspace like in real life? Clean? Messy? Is your code a reflection of that?
I try to keep my table as clear as possible when working, and much like my code I also like to use comments to label different parts of the code that does different things so I'm not confused as to what the different things do.



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
TDD seems like a great way to initially start off writing code, so you at least have a baseline version of a code that can be used to get what you need, which can then be refined further for readability or to be more concise, and even if they don't work out you would at least have a version that works. 



# Kata

### How did you find using repl.it in practice? Confusing? Useful?


### Was it helpful to look at the tests while coding the kata?
It was very helpful, as I knew exactly what was going into the functions and what the expected output was to be so I could console.log to check my outputs and making sure that they
matched. I also used it to get hints on the various built in methods I could use to tackle the problems.


### What problem solving techniques did you implement in your coding flow?
I used things like double checking what other people had already asked in discord, looking at pre-recorded videos that Joseph had posted, checking documentation online through Google,
utilizing console.log and also the rubber ducky method to go through the code in a more third-person and descriptive perspective.

### What was the most challenging part of Super FizzBuzz for you?
I got stuck on the super fizbuzz part for a good while as I wasn't sure why only the first number in the array got fizzbuzzed instead of everything in it. I then went back and looked at my
original fizzbuzz function and realized that I needed an "if else" instead of just "if", so what was happening was the function couldn't divide the number by 15 and just returned the number
instead of going down the other ifs in the function, which then broke the super fizzbuzz function in turn.  

### Did you want to change and refactor your code once you were finished?
I did actually change some of the code for my gradebook function after seeing how someone in the discord wanted to make a more elegant solution for entering names, and I went back to use the
same methods and was pleasantly surprised that it worked. I did feel like I have more than one way to tackle an issue now and do feel better for it.
