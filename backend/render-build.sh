#!/usr/bin/env bash

# Install Flutter
echo "Downloading Flutter SDK..."
git clone https://github.com/flutter/flutter.git -b stable

export PATH="$PATH:/opt/render/project/src/flutter/bin"

# Ensure Flutter is available
flutter doctor

# Continue with normal Python requirements
pip install -r backend/requirements.txt
