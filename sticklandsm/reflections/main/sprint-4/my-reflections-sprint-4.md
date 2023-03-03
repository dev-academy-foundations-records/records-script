# My Reflections - Sprint Four

# Code Readability

### What makes code more readable for you?

I haven't really come across badly written code yet, so I'm not entirely sure. I guess when it's spaced out, has good variable names, and is indented properly.

### Do you prefer tabs or spaces when indenting?

I've always used Tab.

### What is your workspace like in real life? Clean? Messy? Is your code a reflection of that?

My workspace is reasonably clean, hopefully my code will be the same.

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
function sum(x, y){
  return x + y;
}

```

### Do you think you would prefer using Test Driven Development? Why?

I really don't know, I haven't done enough coding to say yes or no. Possibly no because I generally like to just start working on problems, rather than plan things meticulously.

# Kata

### How did you find using repl.it in practice? Confusing? Useful?

I didn't use this. Were we supposed to?

### Was it helpful to look at the tests while coding the kata?

Yes, but I was also using an extension called Code Runner which I found a bit more helpful

### What problem solving techniques did you implement in your coding flow?

I used psuedocoding at a couple of points.
I asked my partner for help with .map
I googled a lot of stuff when I couldn't remember how they worked.

### What was the most challenging part of Super FizzBuzz for you?

Honestly I don't want to sound like one of those people, but I finished it quickly but then I got stuck because the comments in the actual document told me to name the function something that the tests didn't pick up. Then I spent quite a long time trying to figure out if I had done something wrong.

### Did you want to change and refactor your code once you were finished?

A tiny bit. There was a few places I could have used a different method.
