#!/bin/sh
# This is a comment!


# change these variables :)
students=("github-username")
cohort="COHORT-YEAR"

# create your own access token (with repo permissions)
# https://github.com/settings/tokens/new?scopes=repo&description=Foundations%20records%20script
my_access_token="asecret"

# change these at your own risk ;)
# (aka pls don't)
remote="git@github.com:dev-academy-foundations-records"
out="$(pwd)/records-output-$cohort.txt"

function get_records {
    echo "Copying foundations records file...\n" 
    echo "Foundations work recorded - $(date '+%a %d %b %Y')" > $out

    create_records_repo
    git clone $remote/$cohort.git

    cd $cohort

    for name in "${students[@]}"; do
        echo "\n\n"
        ( mkdir $name ) || ( echo "Student already exists. Copying to existing folder" )
        
        echo "\n------ $name ------" && log "\n------ $name ------"
        cd $name 

        repos=("$name.github.io" "reflections" "tic-tac-toe" "javascript-carnival")

        for repo in "${repos[@]}"; do
            copy_repo $repo
        done
        cd ..
    done

    echo "\n\n\nFinished all students\n"
    cp ../records-output-$cohort.txt records-output-$cohort.txt
    echo "\nRecords copied :)\n"
    git add -A
    git commit -qm "$cohort - $(date '+%a %d %b %Y')"
    echo "--> Commited: $(date '+%a %d %b %Y')\n\n" 

    git push origin main
    echo "\nEverything pushed to repo\nRemoving repo folder..."

    cd ..
    rm -rf $cohort
    echo "\nDone :)"
}

function create_records_repo {
    new_repo_data='{"name":"'"$cohort"'", "private": true}'

    ( curl -H "Authorization: token $my_access_token" -X POST --data "$new_repo_data" https://api.github.com/orgs/dev-academy-foundations-records/repos > /dev/null ) && ( echo "\n\nCreated repo $cohort\n" )
}

function copy_repo {
    repo=$1

    echo "\n\nCopying $repo - git@github.com:$name/$repo.git\n"

    ( git ls-remote git@github.com:$name/$repo.git -q ) && ( 

        git clone git@github.com:$name/$repo.git original-$repo

        # if [ -d "$repo" ]; then
        #     rm -rf $repo
        # fi

        mkdir $repo

        cd original-$repo
        git fetch
        allBranches=$(git branch -r)
        cd ..

        allBranches=${allBranches#*origin/HEAD -> origin/main}

        for branch in $allBranches; do
            copy_branch ${branch#*origin/}
        done
 
        log "$repo  -  Done"
        rm -rf original-$repo

    ) || ( echo "Moving on....." && log "$repo  -  No such repo git@github.com:$name/$repo.git")
}

function copy_branch {
    branch=$1
    echo "\nCopying branch $branch"
    # log "    -  $branch"

    cd original-$repo
    git checkout $branch
    cd ..

    if [ -d "$repo/$branch" ]; then
        rm -rf $repo/$branch
    fi
    
    cp -r original-$repo $repo/$branch
    rm -rf $repo/$branch/.git
}

function log {
    echo $1 >> $out
}

get_records
