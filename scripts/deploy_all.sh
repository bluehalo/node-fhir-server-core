#!/bin/bash
set -e

# Define the subprojects in deployment order
subprojects=(
  "fhir-gql-schema-utils"
  "fhir-json-schema-validator"
  "fhir-sanitize-param"
  "fhir-qb-mongo"
  "fhir-qb"
  "fhir-response-util"
  "fhir-secrets"
  "sof-scope-checker"
  "sof-graphql-invariant"
  "node-fhir-server-core"
)

current_directory="$(dirname "$(realpath "$0")")"
parent_directory="$(dirname "$current_directory")"
packages_dir="$current_directory/../packages"

cd $current_directory
NPM_REGISTRY="https://registry.npmjs.org/"
VERDACCIO_REGISTRY="http://localhost:4873/"

# For dev or prod
read -p "Is this for production? (Enter  lowercase 'y' or 'n'): " is_prod

if [ "$is_prod" = "y" ]; then
  echo "This is for production."
  REGISTRY_URL=$NPM_REGISTRY

else
  echo "This is for development."
  REGISTRY_URL=$VERDACCIO_REGISTRY

  # Check if verdaccio is running on port 4873
  is_verdaccio_running=$(lsof -i :4873 > /dev/null; echo $?)
  if [ "$is_verdaccio_running" -eq 0 ]; then
    echo " > Assuming verdaccio is running on port 4873"
  else
    cd "$parent_directory/scripts/verdaccio"
    echo " > Start verdaccio private npm repo under $(pwd)"
    docker compose up -d

    # Wait for Verdaccio to be ready
    sleep 10
  fi
fi

# Log in to npm via browser
echo "Please log in to npm via the browser if not already logged in."
npm login --scope @bluehalo --registry=$REGISTRY_URL

# Process each subproject
for subproject in "${subprojects[@]}"; do
  sub_project_path="$packages_dir/$subproject"
  echo "Processing subproject $subproject..."

  # Check subproject exists
  if [ ! -d "$sub_project_path" ]; then
    echo " > The subproject '$sub_project_path' does not exist."
    exit 1
  fi

  cd "$sub_project_path" || { echo "Failed to enter directory $sub_project_path"; exit 1; }
  # Make path prettier
  sub_project_path=$(pwd)
  echo " > Current dir $sub_project_path"

  # Pre publish cleanup
  echo " > Installing dependencies in $sub_project_path..."
  if [ -f "yarn.lock" ]; then
    rm yarn.lock
  fi

  # Pre publish install dependencies
  yarn install

  # Pre publish for node-fhir-server-core only
  if [ "$var" = "node-fhir-server-core" ]; then
    echo " > Running prepublish in $sub_project_path..."
    yarn prepublish
  fi

  # Publish the subproject
  yarn publish --access restricted

  # Give it some time.  The next subproject might require it as a dependency
  sleep 2

  # Return to the original directory
  cd - || { echo "Failed to return to the original directory"; exit 1; }
done

if [ "$is_prod" != "y" ]; then
  echo "=============== NOTES ================="
  echo "You have published to local npm repo"
  echo "When you are done testing: "
  echo " > run `yarn config set registry ${NPM_REGISTRY}`"
  echo " > Stop verdaccio service via `docker compose down` from ./scripts/verdaccio directory"
  echo "======================================="
fi

echo "Done."
