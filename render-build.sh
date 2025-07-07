#!/usr/bin/env bash

# Exit on error
set -o errexit

# Install Flutter (headless install)
git clone https://github.com/flutter/flutter.git -b stable --depth 1
export PATH="$PWD/flutter/bin:$PATH"

# Run flutter doctor just to verify
flutter doctor

# Install backend dependencies
pip install -r backend/requirements.txt
