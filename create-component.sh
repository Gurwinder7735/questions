#!/bin/bash

# Function to convert kebab-case to PascalCase without spaces
kebab_to_pascal_no_spaces() {
  echo "$1" | awk -F'-' '{for(i=1;i<=NF;i++) printf toupper(substr($i,1,1)) tolower(substr($i,2))}' | sed 's/-//g'
}

# Check if the component name is provided
if [ -z "$1" ]; then
  echo "Please provide a component name."
  exit 1
fi

# Get the component name from the first argument and convert it to PascalCase
KEBAB_CASE_NAME=$1
PASCAL_CASE_NAME=$(kebab_to_pascal_no_spaces "$KEBAB_CASE_NAME")

# Get the path from the second argument or use the current directory if not provided
TARGET_PATH=${2:-./src/components}

# Create a directory with the name in PascalCase without spaces
mkdir -p "$TARGET_PATH/$KEBAB_CASE_NAME"

# Create the index.tsx file
cat <<EOL > "$TARGET_PATH/$KEBAB_CASE_NAME/index.tsx"
import ${PASCAL_CASE_NAME} from "./${KEBAB_CASE_NAME}.component";

export default ${PASCAL_CASE_NAME};
EOL

# Create the component file
cat <<EOL > "$TARGET_PATH/$KEBAB_CASE_NAME/${KEBAB_CASE_NAME}.component.tsx"
import React from "react";
import { I${PASCAL_CASE_NAME} } from "./types";

const ${PASCAL_CASE_NAME} = ({}: I${PASCAL_CASE_NAME}) => {
  return <div>${PASCAL_CASE_NAME}</div>;
};

export default ${PASCAL_CASE_NAME};
EOL



# Create the types file
cat <<EOL > "$TARGET_PATH/$KEBAB_CASE_NAME/types.ts"
export interface I${PASCAL_CASE_NAME} {}
EOL

# Create an empty style.css file
touch "$TARGET_PATH/$KEBAB_CASE_NAME/style.css"

echo "Component $KEBAB_CASE_NAME has been created in folder $TARGET_PATH/$KEBAB_CASE_NAME with the necessary files."

