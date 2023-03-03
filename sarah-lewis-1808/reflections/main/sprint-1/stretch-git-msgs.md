Figure 1.
User checks status of repository
- Computer returns that current local is ahead of main by 2 commits (there are changes in local that are not reflected in main)
- git-track-and-commit-challenge.md file has been modified and added to staging - could be pushed to main
-Two deleted files have not been staged and need to be added to staging or deletions could be discarded.

Figure 2.
- User requests full name of remote repos
- Computer returns url of remote repos
- User pulls from remote
- Computer identifies conflict where a file was deleted in a particular remote commit but in local it still exists (user hasn't commited the deletion above)
- User requests git status
- Computer states that a modification to a README.md file hasn't yet been committed along with a new file that has been created. Also states that there is a file that was deleted in main that has been pulled through. Also states there is a file that has been deleted locally that hasn't been staged.

Figure 3.
I've just realised these images are in succession.

- User requests log of commits from the HEAD of the main branch.
- Computer lists commits from HEAD along with commit messages, and their users. First commit listed is the one where the file was deleted. 

What did I learn? 
I learned that when you merge from a remote repo it only merges with your committed work. Also good to chat through with Cade as we were both a bit confused. Learned that I can focus on things for extended periods which is insane as this is a new thing for me! 