#!/bin/bash

# 1. Install Flutter
echo "🔧 Installing Flutter..."
git clone https://github.com/flutter/flutter.git -b stable
export PATH="$PATH:$PWD/flutter/bin"

# 2. Run Flutter doctor
flutter doctor

# 3. Set backend working directory
cd backend

# 4. Install Python packages
pip install --upgrade pip
pip install -r requirements.txt
