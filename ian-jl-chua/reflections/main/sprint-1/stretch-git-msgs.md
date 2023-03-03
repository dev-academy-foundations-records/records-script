# Figure 1

This user is currently working on the master branch.
They have added the file 'git-track-and-commit-challenged.md' to the staging area. This file is ready to be committed.
There are 2 files that have been deleted, '../git-and -github-deepdive/README.md' and 'git-reflection-tidy-track-challenge.md'. These files were not tracked by git, so in order for git to track the deletion of these files and add these changes, the user needs to "git add/rm <file>..." before the commit will recognize these changes.

The command "git add -A" can be used and this will add all modified files from the whole repo, including files that were removed.

# Figure 2

There was a conflict when a git pull was done.

The message says that the 'week-1/git-and github....-challenge.md' was deleted, followed by the hash route. This was modified in HEAD. But this version was left in tree.

The user then used git status to figure out what needs to be done.

Git status shows the following:

1) the 2 changes made that can be committed. Modified file and the new file created.

2) the deleted file that was not tracked, this needs to be staged to be committed. User should use "git rm <file>..." to remove deleted file

3) the deleted file that was not staged. Again the user needs to use "git rm <file>..." to remove deleted file

# Figure 3

User is using "git log" to get a bit more information on who made the changes. The log shows us Jaime made the changes and the date and time the changes were made, along with the message Jaime has written.