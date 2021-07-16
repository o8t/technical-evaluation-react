#!/bin/bash
port=${1:-3000}

docker build --build-arg port=$port . -t clown-tracker-5000

docker run -p $port:$port clown-tracker-5000
