#!/bin/bash
docker run -it -p 80:3000 -v `pwd`/../:/drone-wall -w /drone-wall drone-wall npm start
