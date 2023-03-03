# My Reflections - Sprint Five

# Tic-Tac-Toe

### What was the most challenging part of this exercise for you?

I tried to do the win detection in a different way, every time a symbol was placed it checks if the surrounding squares make 3 in a row. I kept running into errors because it was trying to check squares that didn't exist which threw an error if you tried to get the innerhtml of undefined. I tried catching those errors so the code would run anyway, but that caused other issues which I didn't pick up on because errors weren't being thrown. I've eventually worked out how to do this without throwing errors through various if statements, but the board still doesn’t work quite right. I’ve spent too long on this now so I’m submitting what I have.

### What learning(s) are you going to takeaway from this exercise?

Don't fall into the sunk cost falacy, if an idea that was supposed to be simple is taking hours to implement then it's probably not simpler. Also don't catch errors in order to make your code function, try to get rid of the errors.

# Pair Programming

### Do you have any prior experience pair coding? If so, what was the experience like for you? If not, what is your initial reaction to pair programming?

No I don't. My initial reaction is that I'm not 100% sure about what the non driver person does. Probably because whenever I hear someone say "focus on the big picture" it's normally business jargon nonsense like "synergy" and "Proactive Paradigm". I understand why it would be useful during the planning stages, and for bouncing ideas of each other. The actual coding I'm a little apprehensive about, but i'm absolutely happy to try it out and see how it works in practice.

### Do you personally think working and pairing with others will be a challenge for you during Bootcamp? Why so?

Yes. I don't like being micromanaged and this sounds a little bit like that. I can't type well if someone is watching me do it. I get self conscious about how I type and how fast I type. I find it hard to work well if someone is watching me do it.

# Inflate the Unicorn

### Did you learn anything new during this exercise? What was it?

I learned it's a mission to try to compare the strings in src tags because it changes depening on how the website is viewed.

### Did you encounter issues completing any of the steps of this exercise? How did you resolve this?

The above problem was solved by giving the unicorns a class and changing that class instead of comparing the src tags.

### If you were to replace the unicorn with another mystical animal of your choice, what would it be?

Esquilax, a horse with the head of a rabbit and the body of a rabbit. Looks it's galloping away.

# Whack-a-mole

### What was the hardest part of this exercise?

I got stuck trying to remove the mole with a click, without removing any of the other formatting of the table.

### Can you think of any different ways you could have accomplished the same outcome?

I could have had the board be represented by a nested Array.

# Dress the Clown

### How did you find the process of refactoring your code?

I decided I wanted to use ternary operators, and use as little If statements as I could. Which meant tieing everything to objects so they could be dynamically referenced. Setting this up took me a very long time and was very frustrating but I think I learned a lot while doing it.
Doing it with just a bunch of if statements would have been really easy.

### Would you do anything differently if you were to start this challenge again?

I was trying to do way too complicated things with the .eval method, in order to try to dynamically reference variables (I think that's what it's called). That turned out to be way too hard to use and understand. I would scratch that idea, and just go straight to putting the variables in objects.

### What piece of code are you proudest of from this exercise?

The logic to make it change what part of the body's clothes are changed is pretty sharp.

# JS Carnival

### What parts of these challenges did you enjoy? If we were to add more challenges, what would you like to have more of?

I enjoyed trying to figure out the how to change the clothes selection on the clown game. Was satisfying.

### What parts weren't so good? Were there any parts that you felt stuck on?

I got stuck on the unicorn game trying to reference the images by their src. Didn't realise the src seemingly changes depending on how you're viewing the website.

### Which parts made you feel confident?

Getting the guy to change his clothes without doing a mess of if statements.

### What personally would you want changed to improve the carnival?

Put a popping sound into the unicorn.

# Stretch

## Calculator

### What was the most challenging part of this calculator exercise for you?

### What was a highlight?

### Which pairing role did you enjoy most? Why?

# Minesweeper

### What was the hardest moment(s) of this challenge for you? How did you overcome them?

### What learnings are you going to take away from this challenge?
