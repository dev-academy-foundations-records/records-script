# My Reflections - Sprint Four 

# Code Readability

### What makes code more readable for you?

Indentation, descriptive and accurate names for functions and variables.

### Do you prefer tabs or spaces when indenting?

VS Code defaults to 2 spaces when tab is pressed. This is a good size to give clear readability without making the code too wide when there is a lot of nesting.

### What is your workspace like in real life? Clean? Messy? Is your code a reflection of that?

Mostly clean and tidy, but definitely not meticulous. Some of the cables could be organised in a way that they look less chaotic if I had the patience to deal with them. I really hate cables. I think my approach to my code is probably similar. Tidy enough, but not meticulously so.


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
//regular function

function sum(a, b){
  return a + b
}

//arrow function

const sum = (a, b) => a + b
```

### Do you think you would prefer using Test Driven Development? Why?

Yes. I think it would be good for keeping track of all the parts of the code and their intended purpose. Especially as someone who can not rely on their memory, working from the top down, looking at the big picture and then figuring out what we need all the functions to do first would help me to stay clear headed and on track.



# Kata

### How did you find using the tests? Confusing? Useful?

Confusing at first, but ultimately useful in breaking up each part of the code to make sure it was working before moving on. Definitely easier to see where bugs or problems were coming from.

### What problem solving techniques did you implement in your coding flow?

Breaking up the task into simple steps and writing code for each of these steps. This also meant that it was easy to identify the holes in my knowledge and what to search for when I was unsure. 
A few times I tried console.log() on simple things as well to see if lines of code were outputting what I thought they would be.

### What was the most challenging part of Super FizzBuzz for you?

Super Fizzbuzz was pretty intuitive to me, but I definitely struggled a little following the syntax in Gradebook at first. The dot vs. bracket notation article was helpful here, as well as breaking up each statement to understand exactly what it was doing. 

### Did you want to change and refactor your code once you were finished?

I am always thinking in efficiency as I write the code. Sometimes I chose to add extra lines that initialised local variables to add to the readability, as well as lines of pseudo code.