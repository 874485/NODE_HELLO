#!/usr/bin/env bash
git add .
git commit -m "update code1"
git push
ssh ubuntu@3.134.113.123 -i /home/abhishek/Documents/kofi_gh.pem 'bash -s' < /home/abhishek/Documents/Node_Hello/index.sh
