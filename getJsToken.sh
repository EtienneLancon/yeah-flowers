#!/bin/bash

source ./.env

response=$(curl -X POST "$ROOT"'/auth/claim?token='$TOKEN'&origin='"$ORIGIN" -s)

token=$(echo $response | jq '.token')
exp=$(echo $response | jq '.expiration')

echo $(sed -e "s/!TOKEN!/$token/" -e "s/!EXP!/$exp/" -e "s/!ROOT!/\"${ROOT//\//\\\/}\"/" -e "s/!ORIGIN!/\"${ORIGIN//\//\\\/}\"/" ./.class.pattern) > ./env.js