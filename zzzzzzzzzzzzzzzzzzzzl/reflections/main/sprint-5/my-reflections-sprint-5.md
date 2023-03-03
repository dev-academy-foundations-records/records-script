# My Reflections - Sprint Five 


# Tic-Tac-Toe

### What was the most challenging part of this exercise for you?

so during week 4 I spent quite a lot of time working on a chess game in js, which i spent quite a lot of time on.
working on the chess has been a huge learning experince for working with DOM and javascript and so the chess game.But every problem that I encounterd in the chess 
I re-encounterd this week with js carnival and tictactoe.

a problemt that I faced with the tictactoe, was finding a way to see if 3 conected, Initialy I wanted to do it in a bunch of for loops where it would check every horizontal
then vertical then diagonal, which in my mind would be the smart and more dynamic way of solving this, but really since there are only 8 differnt ways that you can 
achieve a win its easier just to have 8 if statments that just look for 3 in a row.


### What learning(s) are you going to takeaway from this exercise?

well, im much more comfortable using event listeners now.


# Pair Programming

### Do you have any prior experience pair coding? If so, what was the experience like for you? If not, what is your initial reaction to pair programming?




### Do you personally think working and pairing with others will be a challenge for you during Bootcamp? Why so?




# Inflate the Unicorn

### Did you learn anything new during this exercise? What was it?

like yea im pretty confident working in js and at chess I would say. I dont know if i learned that much from this exercise.

Im pretty happy with the way I programed it though, it felt pretty clean, where i created a unicorn class and then I iterated through the html 'img' tags
and created a class for each one, so yea. it felt quite nice.




### Did you encounter issues completing any of the steps of this exercise? How did you resolve this?

not really, i was in a pretty good headspace, where I was dialed in and focused,it felt like one of those rare moments of focus where everything makes sense and you can arange the ideas that you have in your head neatly and everything falls into place, I didnt feel like my attention wandered or really like i got stuck or had to look anything up at any point, my mind was clear and I created a solution that was consise and implemented it quickly.




### If you were to replace the unicorn with another mystical animal of your choice, what would it be?
probably a sasquatch



# Whack-a-mole

### What was the hardest part of this exercise?

I had some problems with getting the mole to go to a random div when it gets clicked, because of a problem with the way the code was set up which I didnt understand imediatley. but it went pretty smoothly i just copied and pasted the code from the unicornz challange and added some class functions to fit this challange




### Can you think of any different ways you could have accomplished the same outcome?




# Dress the Clown

### How did you find the process of refactoring your code?

so initialy I had

arr=documetnt.getelementsbytag('img')
head=arr[0]
body=arr[1]
feet=arr[2]

which is ok , but is kind of redundent.

instead I changed each part to be an object, which is much more organized.
somthing that Ive recently come to appreciate about programming is that so much of it is about organization.
like all the good coding practice stuff, is just organization having thing be clear what they do and be understandable.
I do tend toward wanting to do things in less lines for some reason because it can feel a litle bit like the old the simpler you can say somthing the more elequant it is
and somtimes I do a piece of code which is consise and really nice and somtimes I do a piece of code which is just kind of all mushed into a few lines and pretty bad.
so yea, but all that to say, doing the challange in the prior way is not organizing the code better its just adding more variables that you have to bear in mind.

var head={
  part:clown[0],
  string:'head',
  index:0,
  arrow_style:'transform: translate(-250px,100px);'

}
var body={
  part:clown[1],
  string:'body',
  index:0,
  arrow_style:'transform: translate(-250px,225px);'
}
var shoes={
  part:clown[2],
  string:'shoes',
  index:0,
  arrow_style:'transform: translate(-250px,450px);'
}
like this is just a much nicer way, where I can now visualize much better how I can interact with each peice of the div in my head



### Would you do anything differently if you were to start this challenge again?
I didnt leave any coments,it feels like there is a bit of an art to leaving coments, when are you saying somthing that is too obvious and when there is complexity
are you sufficiently explaining what it does, i think that you need the right levev of macro and micro view, like you dont want to be to micro with your coments.
like if a line is adding 2 values together , writing 'adds values together' is just beyond stupid, a better coment would be explaining what the sum of the values would be used for later or what the values represent.




### What piece of code are you proudest of from this exercise?

console.log("Inflate The Unicorn!")
var unicorns=document.getElementsByTagName("img")

console.log("Inflate The Unicorn!")
var unicorns=document.getElementsByTagName("img")

class unicorn{
  constructor(unicorn){
    this.inflated=0
    this.div=unicorn
  }
  inflate(){
    if(this.inflated==4){return}
    this.inflated++
    this.div.src=`./images/unicorn-${this.inflated}.png`
  }
}
arr=[]
for(let i=0;i<unicorns.length;i++){
  arr.push(new unicorn(unicorns[i]))
  unicorns[i].addEventListener('click',function(){arr[i].inflate()});
}

the one I did for the unicorn. I think that it is clean and understandable.
It needs coments on it though.



# JS Carnival

### What parts of these challenges did you enjoy? If we were to add more challenges, what would you like to have more of?

since Ive got some programing experince, I had a pretty good idea of how I would solve the problems. somthing that has really stuck with me was the clean code thing.
where code that cant be understood or maintained is pointless, so ive been thinking a lot about that when i try to program and keep in the back of my mind, if i come back and look at this in a year from now am i still going to understand what it does, if the answer I think is yes, I dont thnik I will coment that much on it, if not I will try to give a clear and consise explantion to what it does.So yea, I quite liked all of the challanges.

I would have liked to have more of problems that are not given a clear solution but, you are kind of told try figure this out on your own.





### What parts weren't so good? Were there any parts that you felt stuck on?




### Which parts made you feel confident?




### What personally would you want changed to improve the carnival?


# Stretch


## Calculator

### What was the most challenging part of this calculator exercise for you?



### What was a highlight?



### Which pairing role did you enjoy most? Why?



# Minesweeper

### What was the hardest moment(s) of this challenge for you? How did you overcome them?



### What learnings are you going to take away from this challenge?


