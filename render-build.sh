#!/usr/bin/env bash
set -o errexit

echo "🔧 Installing Flutter..."

# Download & extract Flutter SDK
git clone https://github.com/flutter/flutter.git -b stable
export PATH="$PWD/flutter/bin:$PATH"

# Preload Flutter so it's ready
flutter --version
flutter doctor

echo "✅ Flutter installed and ready"
