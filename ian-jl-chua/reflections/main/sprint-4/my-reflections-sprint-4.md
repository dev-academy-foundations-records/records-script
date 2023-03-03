# My Reflections - Sprint Four

# Code Readability

### What makes code more readable for you?

When things are categorized neatly. Having tags align neatly where they need to be.

### Do you prefer tabs or spaces when indenting?

I actually prefer tabs as they give a more visible indentation. But reading a few areas on that, it seems like spaces are the more preferred option for Code Readability.

### What is your workspace like in real life? Clean? Messy? Is your code a reflection of that?

Fairly clean, I tend to unclutter things when I find that things are piling up. However for times when I work on multiple things at a time, my workspace can get a bit messy, so its kind of like "Organized Chaos" if you can call it that.

People that see my workspace might think it looks messy, but I know exactly where to locate everything that I need. So its organized enough for me to find things, but it looks chaotic to others who are looking in from outside

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
function sum (x, y){
  return (x+y) ? "It works!" :"It's broken.."
  }
}
```

### Do you think you would prefer using Test Driven Development? Why?

Yep. From reading the article on Freecodecamp, this seems to be an effective way to minimize bugs and errors, this allows you to see when a change is being made and when it is not going to work. Saving on time that would otherwise be spent on just fixing bugs.

# Kata

### How did you find using repl.it in practice? Confusing? Useful?

Somewhat useful, I didn't use this method a lot, it was mainly testing it in node in the terminal and just looking at error message to try figure out what went wrong

### Was it helpful to look at the tests while coding the kata?

Yes, as a beginner, this definitely does help. Although I find myself not looking into this much and am more focused on finding a solution to pass the test.

### What problem solving techniques did you implement in your coding flow?

Googling and YouTubing. Also I have been talking to Ilse when I'm a bit stuck to see what her thought processes are and then working with her to find a solution.

### What was the most challenging part of Super FizzBuzz for you?

Trying to use multiple methods to try and solve the problem, which made it even more confusing. Like trying to write something with `.map()` and `.push()` when its a matter of using one or the other. I ended up just watching the video that Gerard put up, just to get through it as I was already exiting the timebox guide.

### Did you want to change and refactor your code once you were finished?

Yes, there are MANY occasions where I want to do this.... but I do find myself struggling to keep to the timebox so I end up not refactoring and just moving on to the next task so I don't fall behind....
