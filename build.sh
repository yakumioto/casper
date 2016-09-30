#!/bin/bash
cp -r ~/Volumes/ghost/themes/my-casper/* ~/Gits/my-casper
git add --all
git commit -am "update."
git push -u origin master
