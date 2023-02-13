## How to use Git in the terminal

### How to pull
After clone, run 'git pull'

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
