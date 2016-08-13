# Contributing

Dr. Dick development follows these 4 major steps:

1. Local development, which involves forking the central repo, creating a local version of the forked repo and developing on a feature branch

2. Submitting a pull request, which involves updating your forked repo and local master branch with changes from the central repo while resolving any merge conflicts

3. Flattening commits, which involves condensing all commits on a feature branch into one single commit

4. Merging a pull request, which involves having another engineer review, test, and provide feedback on your code before it is merged into the central repo

At a high level, Dr. Dick developers work off of individual forks of a central repository, and integrating our work to the central repository through pull requests. This workflow is based (nearly verbatim) on the workflow described [here](https://github.com/sevntu-checkstyle/sevntu.checkstyle/wiki/Development-workflow-with-Git%3A-Fork,-Branching,-Commits,-and-Pull-Request). 

### Step 1: Local Development

1. Fork the central repo at [https://github.com/doctordick/doctordick](https://github.com/doctordick/doctordick)

1. Clone the forked repo to your local machine

    ```bash
    $ git clone https://github.com/USERNAME/doctordick.git
    ```

1. Configure the remotes by adding the central repository as 'upstream'

    ```bash
    $ git remote add upstream https://github.com/doctordick/doctordick
    ```

1. Create a new branch for the feature you'd like to work on. Please try to name the branch as appropriately as possible (be terse, yet descriptive).

    ```bash
    $ git checkout -b doctordick-new-branch
    ```

1. Develop on **doctordick-new-branch** only. **DO NOT merge the upstream master with your development branch!**

1. Commit your changes to your **doctordick-new-branch**. Be descriptive, but not too much so. Later, we'll be condensing all of your work into one big commit - that's where you'll want to tell us all of the work you did in a bit more detail. 

    ```bash
    $ git add FILE
    $ git commit -m "add new feature"
    ```

1. Push your work to your origin repo (the fork). 

    ```
    $ git push origin doctordick-new-branch
    ```

1. Repeat the last few steps until development is complete, and you're ready to submit a pull request to the central repository.

### Step 2: Submitting a Pull Request

Now's the time to add your contributions to the team's central repository through a pull request.

1. You might be significantly behind the central repository. Fix this by fetching all the changes that have occurred since you forked the repo and began working on it.

    ```bash
    $ git fetch upstream
    ```

1. Update the local master branch

    ```bash
    $ git checkout master
    $ git pull upstream master
    ```

1. Rebase **doctordick-new-branch** on top of the upstream master

    ```bash
    $ git checkout doctordick-new-branch
    $ git rebase master
    ```

1. In the process of the rebase, git may discover conflicts. In that case, git will stop and allow you to fix the conflicts. For instance, if the rebase says there is a CONFLICT in `myNewClass.js` checkout both versions of the file to see where the conflict arises. For instance

    ```bash
    $ git checkout master myNewClass.js
    # Check out the upstream/master version of the file
    $ git checkout doctordick-new-branch myNewClass.js
    # Check out your version of the file and see if you indeed want the changes
    ```

    Occasionally, a file may have differences between the two versions that you'd like to combine. Go through the code and manage those differences, making sure to be **VERY** deliberate as you move forward.

    Once all conflicts have been resolved, simply add the file using

    ```bash
    $ git add myNewClass.js
    ```
NOTE: The Dr. Dick development team will review all merge conflict resolution and reserve the right to reject any merge conflict resolution that is deemed unsatisfactory.

1. After fixing conflicts, use `git add FILENAME` to update the index with the resolved files. When all conflicts are resolved, continue the rebase

    ```bash
    $ git rebase --continue
    ```

1. Once all of the conflicts are resolved, and your feature branch is rebased on top of upstream master, you'll want to squash all of your commits into a single commit. This will make the history of the central repository much easier to read.

### Step 3: Flatten Your Commits

1. Now we flatten all commits on the feature branch into one single large commit for the upcoming pull request. First, identify the hash of the commit at the top of upstream/master, in this case 95f4a52.  

    ```bash
    * ba5599a 2015-01-24 | Even more cool stuff (HEAD, doctordick-new-branch) 
    * c294daf 2015-01-24 | Some cool new stuff
    * d603a49 2015-01-24 | Sample Commit
    *   95f4a52 2015-01-24 | Merge pull request #27 (upstream/master)
    ```

1. We'll be rebasing to this point - think of it as the base under a stack of commits you'll be squashing together. To do this, use:

    ```bash
    git rebase -i `hash of (upstream/master)`
    ```

1. This will open up your text editor and show you something like this:

    ```sh
    pick d603a49 Sample Commit
    pick c294daf Some cool new stuff
    pick ba5599a Even more cool stuff
    ```

1. Change every commit but the first to 'fixup' (or 'f' for short), winding up with something like this:

    ```sh
    pick d603a49 Sample Commit
    f c294daf Some cool new stuff
    f ba5599a Even more cool stuff
    ```
`fixup` melds the current commit into the previous commit but discards the current commit’s log message.

1. If all goes well, another text editor will open prompting you for a new commit message for the entire 'squashed' commit. Rename it appropriately, and if all goes well you'll have a new history with all recent commits rolled into one, ready for a pull request.

    ```bash
    * sa92dh2 2015-01-24 | All the commits! #d1M76W4j (HEAD, doctordick-new-branch) 
    *   95f4a52 2015-01-24 | Merge pull request #27 (upstream/master)
    ```

    Adding the task token `#d1M76W4j` to your commit message closes the corresponding task in MeisterTask automatically. Appending the checklist number to the task token (e.g., `#d1M76W4j:1`) closes the MeisterTask checklist item automatically.   

1. Now that your history has been condensed to a single commit message, you'll want to push to your fork so that you can submit a pull request. Since your local branch is the condensed single commit, and the origin branch has the full commit history, github is not going to be happy. In order to make it work, you'll have to force the push to your remote repo. **NEVER force push to the upstream repository!**

    ```bash
    $ git push origin doctordick-new-branch --force
    ```

1. Once the condensed feature branch is pushed to your origin, you can [submit a pull request](https://help.github.com/articles/using-pull-requests/)! At minimum, the PR should contain:
    * A link to the MeisterTask story (only applies to internal dev team)
    * A description of what the branch does
    * Steps to reproduce and test, including URLs to hit, all use cases, and screenshots (optional)


### Step 4: Merging Pull Requests

1. You should assign your PR to a member of the internal dev team for code review, through either tagging others in the PR or commenting with `@<github username>`. 

1. The reviewer will test and provide feedback on the PR, usually within 24-48 hours. The reviewer should pull down the PR and make sure it works locally. **PLEASE** check the history to ensure that the rebase process went smoothly and merging the pull request will maintain a clear and concise commit history on the master repo. As needed, the reviewer will re-assign the PR back to the author for further development. The author re-assigns the PR back to the reviewer after addressing the reviewer’s feedback for any final feedback.

1. After all PR feedback has been satisfactorily addressed, the reviewer should add `Approved` as a comment to the github PR conversation form and tag a member of the internal dev team. The author should once again squash all commits (see Flattening Your Commits).

1. The internal dev team can now merge the PR. To merge a PR, follow the steps outlined next to the "Merge Pull Request" button. For more information, please read [how to check out pull requests locally](https://help.github.com/articles/checking-out-pull-requests-locally/)

