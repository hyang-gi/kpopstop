## Git Tutorial (Using Terminal)

### Clone a repository

1. Visit the repository, click on the "Code" option. 
2. Copy the link (https://github.com/hyang-gi/kpopstop.git)
3. Open the terminal/command prompt on your system and use `cd` to select the folder you want to store this repository in
4. Type `git clone https://github.com/hyang-gi/kpopstop.git` on the terminal and enter


### How to Pull

1. To update your remote/local repository with the main branch, use `git pull origin main`

### Create a new Branch 

1. `git branch` command lists down all the branches you've created along with the `main`. 
2. `git checkout -b <branch_name>` command creates and new branch and checks the user into it. Use the above command to confirm.

### How to push changes

1. Modify your files
2. Use `git status` to check the list of modified files
3. To stage the changes (ie. add them to be pushed to the repository from local), use `git add <file_name.extension`
4. To add multiple files, use `git add .`
5. To add a message (describe the changes very briefly), use `git commit -m <changes_described_here>`
6. To move your changes from local to the main branch, use `git push origin <branch_name>`
7. If your local branch is always the same, use `git push --set-upstream origin <branch_name>`. (Next time just use `git push`)


### Create a Pull Request

1. Visit [here](https://github.com/hyang-gi/kpopstop/pulls) and select the pull request option 
2. Or use `gh pr create`
