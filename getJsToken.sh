#!/bin/bash

source ./.env

# curl -X POST "$ROOT"'/auth/claim?token='$TOKEN'&origin='"$ORIGIN" -s | jq '.token'

response=$(curl -X POST "$ROOT"'/auth/claim?token='$TOKEN'&origin='"$ORIGIN" -s)

# echo $response | jq '.token'

# set $token = {$response | jq '.token'}
# set exp = $response | jq '.exp'

token=$(echo $response | jq '.token')
exp=$(echo $response | jq '.expiration')

echo $(sed -e "s/!TOKEN!/$token/" -e "s/!EXP!/$exp/" -e "s/!ROOT!/\"${ROOT//\//\\\/}\"/" -e "s/!ORIGIN!/\"${ORIGIN//\//\\\/}\"/" ./.class.pattern) > ./env.js