import os
import shutil
import subprocess
import re
from fastapi import HTTPException
def slugify(text):
    return re.sub(r'[^a-z0-9]+', '_', text.lower()).strip('_')

def copy_flutter_template(dest_path):
    template_path = os.path.join(os.path.dirname(__file__), "flutter_template")


    for item in os.listdir(template_path):
        s = os.path.join(template_path, item)
        d = os.path.join(dest_path, item)
        if os.path.isdir(s):
            shutil.copytree(s, d, dirs_exist_ok=True)
        else:
            shutil.copy2(s, d)

def save_flutter_project(prompt: str, dart_code: str) -> str:
    folder_name = slugify(prompt)
    project_path = os.path.join("backend", "generated_apps", folder_name)
    os.makedirs(os.path.join(project_path, "lib"), exist_ok=True)

    # Save main.dart
    with open(os.path.join(project_path, "lib", "main.dart"), "w", encoding="utf-8") as f:
        f.write(dart_code)

    # Create pubspec.yaml
    with open(os.path.join(project_path, "pubspec.yaml"), "w", encoding="utf-8") as f:
        f.write(f"""name: {folder_name}
description: A generated Flutter web app.
version: 1.0.0
environment:
  sdk: ">=2.17.0 <4.0.0"

dependencies:
  flutter:
    sdk: flutter

flutter:
  uses-material-design: true
""")
    # Optional README
    with open(os.path.join(project_path, "README.md"), "w", encoding="utf-8") as f:
        f.write(f"# {folder_name}\n\nGenerated using prompt: '{prompt}'\n")

    # Copy template assets if needed
    copy_flutter_template(project_path)
    return project_path

def zip_flutter_project(project_path: str) -> str:
    zip_path = f"{project_path}.zip"
    if os.path.exists(zip_path):
        os.remove(zip_path)
    shutil.make_archive(project_path, 'zip', project_path)
    return zip_path



def build_web_project(project_path: str) -> str:
    print(f"[DEBUG] Building Flutter web for path: {project_path}")
    flutter = "flutter"  # use from PATH

    def run_cmd(cmd):
        print(f"Running: {' '.join(cmd)}")
        result = subprocess.run(cmd, cwd=project_path, capture_output=True, text=True)
        print("STDOUT:", result.stdout)
        print("STDERR:", result.stderr)
        result.check_returncode()

    try:
        run_cmd([flutter, "clean"])
        run_cmd([flutter, "pub", "get"])
        run_cmd([flutter, "build", "web"])
    except subprocess.CalledProcessError as e:
        raise HTTPException(status_code=500, detail=f"Build failed: {e.stderr}")

    build_dir = os.path.join(project_path, "build", "web")
    zip_path = f"{project_path}_web.zip"

    if not os.path.exists(build_dir):
        raise HTTPException(status_code=500, detail=f"❌ Web build folder not found: {build_dir}")

    shutil.make_archive(zip_path.replace(".zip", ""), "zip", build_dir)
    return zip_path


