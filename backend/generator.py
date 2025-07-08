import google.generativeai as genai
import os



api_key = "AIzaSyCfn-yx5iQbUmZu866UELT1DYbv3i85RUQ"

genai.configure(api_key=api_key)
model = genai.GenerativeModel("gemini-1.5-flash")

def generate_flutter_code(prompt: str) -> str:
    try:
        response = model.generate_content(
            f"Write a complete Flutter web app code. No text or explanation. Return only pure Dart code for this prompt such that I can copy and past in IDE: {prompt}"
        )
        code = response.text.strip()
        if code.startswith("```dart"):
            code = code.replace("```dart", "").strip()
        if code.endswith("```"):
            code = code[:-3].strip()
        return code
    except Exception as e:
        return f"❌ Gemini Error: {str(e)}"
