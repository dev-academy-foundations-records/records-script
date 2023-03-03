#Figure 1

The user has inputted 'git status' and is asking for the state of the working directory. The working directory tells the user that two commits have been made (and saved locally), but remote has not received these changes (GitHub). The commits have been made on the git-track-and-commit-challenge.md file which has been staged.

The user has deleted the git-and-github-deepdive/README.md and the git-reflection-tidy-track-challenge.md files, but they have not been added to the staging process.

In conclusion the users branch is ahead by 2 commits, has 1 file staged, and 2 files deleted (but not staged) in the working directory.

#Figure 2

The user has used the 'verbose' key and essentially has asked for what does 'git remote' do which points to the remote repository (Dev Academy Foundations) which is both the push and pull location.

'Git pull' is used to download content from the remote repository and bring the (local) working repository up to date.

There has been a merge conflict and the user asks for the status of the repo. The local repo master branch has diverged from the remote origin. The local has 1 commit, and the remote origin has 7.

User has staged README.md and git-track-and-commit-challenge.md (newly created). The user has deleted the git-reflection-tidy-track-challenge.md file which is causing the conflict.

User has deleted git-and-github-deepdive.README.md, but has not staged the changes.

#Figure 3

Git log HEAD..origin/master is used to log the changes that had been made in the remote branch. Jaime has been working on several files here, and one of them is a modification to the git-reflection-tidy-track-challenge.md file.

User needs to restore the modified file on his end before he can merge paths.
