#!/bin/bash
REMOVE=${REMOVE:-false}

CONTAINER=$(docker ps | grep LetsTalkPostgres)

if [[ $CONTAINER == *'LetsTalkPostgres'* ]]; then
    if [ "$REMOVE" = true ]; then
        echo "Container is running. Killing the container"
        docker kill LetsTalkPostgres
        echo "Container killed. Removing the container"
        docker rm LetsTalkPostgres
    else
        echo "Container is running. Stopping the container"
        docker stop LetsTalkPostgres
    fi
fi



