#!/bin/bash

conda create -n react_practice -y --file conda.env -c conda-forge
source activate react_practice
npm install -y
