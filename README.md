# VidConvert 🎬⚡

**VidConvert** is a fast, free, and 100% client-side web application for converting video and audio files directly inside your browser. Powered by **WebAssembly (FFmpeg.wasm)**, VidConvert converts videos locally on your device—meaning your files are **never uploaded to any server**.

![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![WebAssembly](https://img.shields.io/badge/WebAssembly-FFmpeg.wasm-654ff0)

---

## ✨ Features

* **🔒 100% Private & Secure:** Conversions happen strictly inside your browser. No data ever leaves your computer.
* **🔍 Automatic Input Format Detection:** Supports legacy, rare, and obscure video formats (including **`.dat`**, **`.vob`**, **`.avi`**, **`.mkv`**, **`.flv`**, and more) by probing internal file signatures.
* **🔄 25+ Output Formats:** Convert to popular video containers, extract audio, or create animated GIFs/WebP.
* **🏷️ Preserves Original Filenames:** Converted files are automatically saved as `{original_filename}.{new_extension}`.
* **🚀 GitHub Pages Ready:** Uses single-threaded WebAssembly binaries via CDNJS, allowing seamless deployment on static site hosts without special CORS or COOP/COEP header configurations.

---

## 📽️ Supported Formats

### **Input Formats (Auto-Detected)**
VidConvert reads binary headers directly, so it automatically supports virtually any video or audio file:
> `.dat`, `.avi`, `.mkv`, `.flv`, `.wmv`, `.mov`, `.mp4`, `.webm`, `.3gp`, `.ts`, `.mts`, `.m2ts`, `.vob`, `.mpg`, `.mpeg`, `.rm`, `.divx`, `.ogv`, `.mp3`, `.wav`, `.aac`, `.flac`, `.ogg`, and more.

### **Output Formats**
* **Video:** `MP4`, `WebM`, `MKV`, `AVI`, `MOV`, `WMV`, `FLV`, `3GP`, `OGV`, `MPG`, `TS`, `VOB`, `M4V`
* **Audio Extraction:** `MP3`, `WAV`, `AAC`, `M4A`, `OGG`, `FLAC`, `OPUS`, `WMA`, `AIFF`
* **Animated Graphics:** Animated `GIF`, Animated `WebP`

---

## 🛠️ Built With (CDNJS Libraries)

* **[FFmpeg.wasm](https://cdnjs.com/libraries/ffmpeg)** – WebAssembly port of FFmpeg for browser-based video encoding/decoding.
* **[FileSaver.js](https://cdnjs.com/libraries/FileSaver.js)** – Triggers native browser downloads for converted file blobs.

---

## 🚀 Live Demo & Deployment

### **Deploying to GitHub Pages**

1. Fork or clone this repository:
   ```bash
   git clone https://github.com/your-username/vidconvert.git
   cd vidconvert

2.  Commit and push the index.html file to your GitHub repository.
3.  On GitHub, go to your repository Settings → Pages.
4.  Under Source, select Deploy from a branch, choose main (or master), and
    click Save.
5.  Your app will be live at https://<your-username>.github.io/vidconvert/!

### 💻 Running Locally

Because VidConvert uses WebAssembly loaded via CDNJS, you don't need Node.js or
any build steps. Simply serve the directory with a local HTTP server:

Using Python:
```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 in your web browser.

## ⚠️ Notes & Limitations

  - Memory Usage: Because conversion runs in WebAssembly, browser memory limits
    apply (usually up to 2–4 GB depending on your device). Very large video
    files (>2 GB) may cause browser tab crashes.
  - Conversion Speed: Browser-based transcoding speed depends on your device's
    CPU performance.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for
details.

