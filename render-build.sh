#!/usr/bin/env bash

set -o errexit
set -o nounset

# Flutter install
curl -O https://storage.googleapis.com/flutter_infra_release/releases/stable/linux/flutter_linux_3.19.6-stable.tar.xz
tar xf flutter_linux_3.19.6-stable.tar.xz
export PATH="$PWD/flutter/bin:$PATH"

# Install Flutter dependencies
flutter precache
flutter doctor

# Python deps
pip install -r backend/requirements.txt
