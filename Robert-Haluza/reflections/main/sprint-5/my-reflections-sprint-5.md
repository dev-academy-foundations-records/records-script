# My Reflections - Sprint Five 


# Tic-Tac-Toe

### What was the most challenging part of this exercise for you?

Would have to say refactoring the logic to check if a player had won the game.

### What learning(s) are you going to takeaway from this exercise?

The concept of pseudocode, writing up the steps that are needed to complete the task is very handy and something I need to try work with more.

# Pair Programming

### Do you have any prior experience pair coding? If so, what was the experience like for you? If not, what is your initial reaction to pair programming?


I had never tried pair coding before but it does seem like a good way to increase the quality and efficiency of code.

### Do you personally think working and pairing with others will be a challenge for you during Bootcamp? Why so?

Maybe at the start it could be a bit of a challenge for me as I can take a while to get comfortable with people but I think after that I would benefit from that kind of work set up as being able to bounce ideas off each other is very helpful.


# Inflate the Unicorn

### Did you learn anything new during this exercise? What was it?

Only really realised during this exercise, but the different ways you can pass an argument in HTML.


### Did you encounter issues completing any of the steps of this exercise? How did you resolve this?

Had problems with the unicorn images not cycling through the balloon inflation, I realised had not properly implmented increment operator to the changeImage function.


### If you were to replace the unicorn with another mystical animal of your choice, what would it be?

Gnome. Gnomes are cool.


# Whack-a-mole

### What was the hardest part of this exercise?

For me I struggled a bit with generating the mole picture randomly in one of the cells in the randomIndex function.


### Can you think of any different ways you could have accomplished the same outcome?

Maybe using a forEach loop instead of a for loop to access the elements e.g.:

const board = document.getElementById("board")
const rows = board.getElementsByTagName("tr")
let cells = []
Array.from(rows).forEach((row, i) => {
  cells[i] = row.getElementsByTagName("td")
})


# Dress the Clown

### How did you find the process of refactoring your code?

Refactoring code is something I actually really enjoy doing, something so satisfying about making the code more efficient and readable.


### Would you do anything differently if you were to start this challenge again?

Maybe spend a bit time on writing out pesuocode and planning out what needs to be done.


### What piece of code are you proudest of from this exercise?

Probably the implementation of the switch statments in the keydown event that listens for the ArrowRight and ArrowLeft key.


# JS Carnival

### What parts of these challenges did you enjoy? If we were to add more challenges, what would you like to have more of?

Id probably say with some of the later challenges having the option on tackling task in your own way was enjoyable.


### What parts weren't so good? Were there any parts that you felt stuck on?

Pretty normal but just trying some of the new cocepts like the Ternary Operator and Switch statements took some time to implment and wrap my head around.


### Which parts made you feel confident?


Using Loops mainly For Loops, to scan over or perform the repetitive tasks.

### What personally would you want changed to improve the carnival?

Nothing to be honest. The way the challenges are layed out make them super fun and straight forward to follow.


# Stretch


## Calculator

### What was the most challenging part of this calculator exercise for you?



### What was a highlight?



### Which pairing role did you enjoy most? Why?



# Minesweeper

### What was the hardest moment(s) of this challenge for you? How did you overcome them?



### What learnings are you going to take away from this challenge?


