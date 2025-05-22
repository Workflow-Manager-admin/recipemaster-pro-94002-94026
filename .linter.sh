#!/bin/bash
cd /home/kavia/workspace/code-generation/recipemaster-pro-94002-94026/recipe_master_container
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

