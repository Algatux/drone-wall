#!/bin/bash
make build-no-cache
docker run -it -p 80:3000 -v `pwd`/../:/drone-wall -w /drone-wall --rm --name drone-wall drone-wall npm install
