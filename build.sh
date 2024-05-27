#!/bin/bash

npx tailwindcss -i pages/style.css -o pages/output.css

mkdir build
cp pages/* build
cp -r assets build
rm build/style.css
