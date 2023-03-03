# My Reflections - Sprint One 

In addition to the challenge specific reflections, answer the following questions:

# Command Line Primer 

<!-- Copy the answers you wrote in your temporary file earlier, under the sections below -->

### In a couple of sentences, how would you describe the command line in plain English? Can you think of an analogy for it?

We speak to each other in a language that both parties can understand so, the command line is a way for humans to communicate with a computer in a way that the computer can understand.

### Did you stick to the timebox guidelines? If not, what change would you make next time?

No I did not stick to the timebox guidelines. This is mainly due to the fact that I am very new to programming and it takes me reading something or watching it a few times to process the information given. What I might look at doing is spending a few more hours going through the material a few times after I have completed everything, just to solidify my understanding. And also look through future materials in advance to get an idea of how to better allocate time for each topic.

### Name 5 commands you used, and what they do.

1. cd (name of directory)---> this is to "change directory" in to a directory you want to look at. You can also (cd ..) to go back to the parent directory of the current one.
2. pwd ---> this is to print the current directory and its path. You can use this to check that you are currently in the directory of your choosing.
3. ls ---> this is to list all the files in the current directory you are in. You can also use (ls -a) to list all the hidden files within that directory.
4. rm ---> this is to remove a file or folder in the current directory. (rmdir) will remove a folder if it is empty, (rm -r) would remove a directory and its <b>ENTIRE</b> content. You can use (rm -ri name-of-directory/) to have an interactive mode to allow you to choose which files to keep or delete. Using (rm) must be done with care, as this is not intermediary and cannot be reversed once an item is deleted.
5. touch ---> this allows you to create a file. You can type (touch name-of-file) to make a file or supply the file with an extension like (touch name-of-file.html), or (touch name-of-file.pdf), or (touch name-of-file.txt). The extension provided would depend on individual operating system on how they are opened, but it is not used to determine the actual file type, they are just empty files being created.


### Did you learn anything unexpected?

Being new to programming, almost everything is being experienced for the first time. So I'm not sure if I have learned anything unexpected as per say, because you can't expect something without knowing what to expect.

# Version Control with Git 

<!-- Copy your reflection answers into this file -->

### What's the difference between git and GitHub?

Version Control enables different people to work on the same project at the same time, without overwriting each other unintentionally. Git is a distributed version control system. GitHub is a central hub for all the people using Git, to share changes that are made on their local Git and also obtain information that others have shared to GitHub as well.

### Can you think of an analogy to describe them?

Git is like a filing cabinet to store your files, or have different versions of files stored in the filing cabinet. GitHub is like a library that holds all the files that are being shared. Where you can show the files you want to share, from your filing cabinet, or make copies of other people's files that they have shared to the library. 

### Do you think you would still remember the difference a week from now if you didn't revisit the material?

There is a small chance I might not. But I know where to find this information if I need to.

### Did you stick to the timebox suggestions? If not, why not?

No I did not stick to the timebox suggestions. I find myself watching video after video just to gain a proper understanding of the topic, spending a few more hours than the timebox suggestion. In doing so I find myself learning more information on the other topics that are coming up, that overlaps with this current topic.

# Install and Explore Git

<!-- Copy your reflection answers into this file -->

### What is a Git workflow?

As explained by https://www.atlassian.com/git/tutorials/comparing-workflows, A Git workflow is a recipe or recommendation for how to use Git to accomplish work in a consistent and productive manner.

### What did you notice about your own learning? What did you do when you were confused or blocked?

I noticed I tend to give things a few go initially, doing some searches on the internet to better understand something. I feel very reluctant to ask for help because subconsciously I view this as a sign of weakness. 

I did however started to ask my first question on Discord ( — 01/10/2023 2:17 PM). I didn't know what to do after accidentally installing Homebrew (and seeing the error message on the terminal), when I already have Git installed on my Mac.

### Is there anything you'd do differently if you were to repeat the learning exploration again?

I would read the instructions on the Dev Academy Student Handbook a bit clearer where it states "Also, please skip the computer set-up instructions in Lesson 1. Git will have been configured when you did your computer set-up"

I am also keeping in mind that I do take some time to process the information I am given, as most (if not all) are very new to me.

# Track and Commit

<!-- Copy your reflection answers into this file -->

### How would you describe stage and commit to your non-tech-savvy friend?

Staging is like putting something on a stage before taking a picture of it.
Commit is actually taking the picture of whatever that was staged.

So each time you can modify something to be staged, then commit it.

# Branch, Pull, Merge

<!-- Copy your reflection answers into this file -->

### What is main?

Main is the file/ collection of files that was sent to the Github repo. 
This main branch can be pull to a local repo where individuals can make changes to the main repo.

### Why create a Branch?

This is where changes can be made to the main branch. This allows for collaborative work, where more than one person can add their own input to the main branch.

A "pull" can be done to keep the main branch updated with any changes (when others have added the work done on their branch to the main branch), before we merge the branch we are working on, back to the main branch.

Merge enables us to merge the branch we are currently working on, back to the main branch.

### Do the concepts introduced feel intuitive or difficult to understand?  

It is a bit difficult to wrap my head around the terms use, but this will most likely get clearer as I get familiar with git. The main change that took a while for me to figure out was that "Main" and "Master" was the same thing. GitHub changed the naming to "main" after the brutal death of George Floyd and the Black Lives Matter protest incident.

# GitHub Fork & Clone

<!-- Answer the following questions -->

### What are some examples of when you would fork?

When you would like to propose changes to an existing repo, or would like to use an existing template on a repo but adding your own ideas to it. Using forking, we would be able to fork the repo into our own personal repo on Github and clone a copy down to the local repo to work on.

### Did you have any moments where it all clicked? What clicked?

It took a while to wrap my head around the difference between forking and branching. Forking is really a clone of a repo, where branching are the different changes inside the forked repo. 

# Setup Repo & Create Blog

### Reflect on this activity. When did you feel frustrated?

I didn't actually feel as frustrated as I did with the previous part about understanding forks and branches. The instructions here were quite straightforward.

### If you didn't already know that this is the way websites are made, was it what you pictured? How does the reality of this process differ from your preconceptions?

I had a very basic understanding of how websites were made so this isn't really surprising or new to me. 

The interesting part is knowing that multiple people can work on designing a single website (or different functionality on the websites) using Github and repos. This is a great way to collaborate with others around the world and share ideas on ways to improve a single project.

# Thinking like a programmer

### What is your process so far for solving problems?

Currently I approach every problem by first by assessing whether or not it is within my skill set to solve. If it is within my skill set, I would attempt to solve it, without even planning my approach or dividing it up in small steps. Once the problem is solved, the learning and reflecting part happens at the same time for me. I would do a brief reflection on what has been solved, and think about possible ways that could have been used to solve it faster, and still have it lead to a desired (if not better) outcome.

However if the problem is not within my skill set, I would spend some time to firstly understand what the problem is then proceed to do some research on what are possible ways that can be used to resolve this problem. I usually omit the planing and dividing phrase and would jump straight into solving the problem. 
If I still get suck while attempting the problem, I would proceed to do more research to see if there are other possible ways of approaching this problem (this includes asking for help where necessary), then proceed to go back to solve the problem again. Normally the process of research and attempt would repeat over and over again until the problem is solved.
Finally once the problem is solved I would do a deep reflection on what has been solved, and think about possible ways that could have been used to solve it faster, and still have it lead to a desired (if not better) outcome.

I will be looking into the planning and dividing phase if the problem gets more complex, but so far have not encountered situations where the planning or dividing phase is needed. Maybe I have been doing it and incorporating this into my standard process unconsciously without me knowing.

Did a bit of reading on flipped learning on the internet and found that this is a way that is quite enjoyable for me. I personally find videos incredibly helpful as I'm dyslexic, and find it very hard to process pages and pages of information. I learn more from audio and visual, than reading through pages of a topic. Being able to revisit a content is incredibly beneficial, as most of the time difficult topics can take a while to be fully understood.

# Introduce yourself

### What was it like trying to summarise yourself to a group of strangers? 

A little bit uncomfortable.

### Could you feel your ego? Were you self conscious? 

Yes, there is a feeling of self consciousness. Certain times I noticed the tendency to over share, this is especially so when I have experienced something incredibly joyful or incredibly horrible. But growing up in a somewhat unfriendly environment in school and at work, one tends to reserve their thoughts to themselves.