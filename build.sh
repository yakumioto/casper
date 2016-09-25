#!/bin/bash
cp -r ~/Volumes/ghost/themes/my-casper/* ~/Gitwork/my-casper
git add --all
git commit -am "update."
git push -u origin master
