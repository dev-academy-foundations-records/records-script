# My Reflections - Sprint Four

# Code Readability

### What makes code more readable for you?

Personally, I can already see how much good indentation makes it more pleasing to read code. It also helps visually when there is a lot of nesting.
Comments also help as they allow me to pick on the code quicker. Sometimes it can be confusing trying to figure out what is going on and comments
can be helpful. I also find it easier to read when the code is divided into different blocks with extra spacing. Again this helps with overall
understanding of where things are happening.

### Do you prefer tabs or spaces when indenting?

To be honest. I haven't been intentionally indenting much until now haha. But I will definitely be doing that from now on. I definitely think tabs is the way to go for me though.

### What is your workspace like in real life? Clean? Messy? Is your code a reflection of that?

I love keeping my workspace clean in real life. It makes me feel better about starting work and also means less distractions. Unfortunately this hasn't reflected in my code yet. I think it's maybe
because I'm still relatively new to it so all my focus and energy has gone into functionability. But I do want my code from now on to be clean and easily readable.

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

```const sum = (a,b) => a + b

```

### Do you think you would prefer using Test Driven Development? Why?

I don't think so. But then again, what do I know haha. It doesn't sound too appealing the idea of working like that. It seems more natural to finish the code then write a test and comeback to the code if you need to. I guess doing TDD would better prepare you for when writing the actual code comes into play. I'm not too sure yet haha.

# Kata

### How did you find using repl.it in practice? Confusing? Useful?

I found it quite useful for practise because it has a big console right next to your code.
I also like how it's completely web based. It also has a lot of collaboration features.
I will definitely be using it more often.

### Was it helpful to look at the tests while coding the kata?

Yes! It really helped me understand more specifically what was needed in my code.

### What problem solving techniques did you implement in your coding flow?

I would say I used a wide range of techniques depending on the exercise. I found myself trying things, console.logging and working with error messages most of the time. I tried to implement some pseudocode here and there. I was googling a lot and using the web to remember and learn new concepts. When I got stuck for longer periods of time, then I reached out to my peers and the facilitators for help.

### What was the most challenging part of Super FizzBuzz for you?

Definitely understanding how to incorparate the previous FizzBuzz function. Trying to get my head around the
forEach() method and how to use it.

### Did you want to change and refactor your code once you were finished?

Most of the time, I left the code as short and clean as I could without affecting my understanding of what was happening. But yes, I was often looking for ways to eliminate code that wasn't needed. Or using something like
an arrow function instead of the traditional function.
