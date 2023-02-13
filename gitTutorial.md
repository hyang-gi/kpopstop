## Git Tutorial (Using Terminal)

### Clone a repository

1. Visit the repository, click on the Code option. 
2. Copy the link (https://github.com/hyang-gi/kpopstop.git)
3. Open the terminal/command prompt on your system and use `cd` to select the folder you want to store this repository in
4. Type `git clone https://github.com/hyang-gi/kpopstop.git` on the terminal and enter


### How to Pull

1. To update your remote/local repository with the main branch, use `git pull origin main`

### How to create a new branch
Run checkout -b "Your branch name"

### How to push changes
1. Modify your files
2. Run 'git status' to check the modified files
3. Stage the change: 'git add' + the name of the changed file
4. Run git commit -m "Notes for this change"
5. Run "git push --set-upstream origin 'your branch name'" (Next time just use git push)

### How to make pull request
Go to github website and find your branch, click on "New pull request"
or run gh pr create
