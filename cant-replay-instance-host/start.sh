#!/bin/sh

TIME_TO_SHUTDOWN="${IDLE_TIME_TO_SHUTDOWN:-120}"

node server &
/tired-proxy --port 8080 --wait-for-port 10 --origin http://localhost:3000 --idle-time $TIME_TO_SHUTDOWN
