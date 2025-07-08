from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from fastapi.responses import FileResponse
import os
from fastapi.staticfiles import StaticFiles
import os

from backend.generator import generate_flutter_code
from backend.utils import save_flutter_project, zip_flutter_project, build_web_project
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

zip_dir = os.path.join(os.path.dirname(__file__), "web_zips")
app.mount("/web_zips", StaticFiles(directory=zip_dir), name="web_zips")
# ✅ MUST come immediately after app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For development only
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Prompt(BaseModel):
    prompt: str

@app.get("/ping")
def ping():
    return {"message": "Backend is working ✅"}

@app.post("/generate")
def generate_code(prompt: Prompt):
    code = generate_flutter_code(prompt.prompt)
    project_path = save_flutter_project(prompt.prompt, code)
    return {
        "prompt": prompt.prompt,
        "generated_code": code,
        "project_path": project_path,
        "slug": os.path.basename(project_path)
    }

@app.get("/build-web/{slug}")
def build_web(slug: str):
    project_path = os.path.join("backend", "generated_apps", slug)
    

    if not os.path.exists(project_path):
        print(f"[DEBUG] Looking for project at: {os.path.abspath(project_path)}")
        raise HTTPException(status_code=404, detail="Project not found")

    try:
        zip_path = build_web_project(project_path)
        return FileResponse(zip_path, media_type="application/zip", filename=f"{slug}_web.zip")
    except Exception as e:
        print(f"[DEBUG] Build failed: {e}")
        raise HTTPException(status_code=500, detail=f"Build failed: {str(e)}")

@app.get("/download-zip/{slug}")
def download_zip(slug: str):
    project_path = os.path.join("backend", "generated_apps", slug)


    if not os.path.exists(project_path):
        raise HTTPException(status_code=404, detail="Project not found")

    zip_path = zip_flutter_project(project_path)
    return FileResponse(zip_path, filename=f"{slug}.zip", media_type="application/zip")

# @app.get("/preview/{slug}")
# def preview_web_app(slug: str):
#     web_build_path = os.path.join("backend", "generated_apps", slug, "build", "web")

#     if not os.path.exists(web_build_path):
#         raise HTTPException(status_code=404, detail="Web build not found")

#     app.mount(
#         f"/preview/{slug}",
#         StaticFiles(directory=web_build_path, html=True),
#         name=f"preview-{slug}"
#     )
#     return {"message": f"Preview mounted at /preview/{slug}/index.html"}

# @app.get("/preview/{slug}/index.html")
# def serve_preview(slug: str):
#     web_build_path = os.path.join("backend", "generated_apps", slug, "build", "web")
#     index_file = os.path.join(web_build_path, "index.html")

#     if not os.path.exists(index_file):
#         raise HTTPException(status_code=404, detail="Web build not found")

#     return FileResponse(index_file, media_type="text/html")


# Mount static files for the web build (if needed for assets)
# from fastapi.staticfiles import StaticFiles
# generated_root = os.path.abspath("backend/generated_apps")

# # Serve all generated web apps statically
# if os.path.exists(generated_root):
#     for folder in os.listdir(generated_root):
#         web_path = os.path.join(generated_root, folder, "build", "web")
#         if os.path.exists(web_path):
#             app.mount(
#                 f"/preview/{folder}",
#                 StaticFiles(directory=web_path, html=True),
#                 name=f"preview-{folder}"
#             )

@app.get("/preview/{slug}", response_class=HTMLResponse)
async def preview_app(slug: str):
    project_path = os.path.join("backend", "generated_apps", slug, "build", "web")
    
    if not os.path.exists(project_path):
        raise HTTPException(status_code=404, detail="Web build not found")
    
    index_path = os.path.join(project_path, "index.html")
    if not os.path.exists(index_path):
        raise HTTPException(status_code=404, detail="index.html not found")

    with open(index_path, "r", encoding="utf-8") as f:
        return HTMLResponse(f.read())



