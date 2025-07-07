#!/usr/bin/env bash
set -o errexit

# Install Flutter
git clone https://github.com/flutter/flutter.git -b stable --depth 1
export PATH="$PWD/flutter/bin:$PATH"

# Show Flutter version (for debug)
flutter doctor

# Install Python requirements
pip install -r backend/requirements.txt
