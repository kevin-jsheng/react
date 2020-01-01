
if [ -z "$1" ]
then
    echo "wait"
    echo "message is mandatory."
    exit 0
else
    echo "commit message:"$1;
fi

git add .
git commit -m "$1"
git push
echo "done"