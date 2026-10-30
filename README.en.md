# Project Pioneer
<p align="center">
<img width="860" src="preview.jpg">
</p>
<p align="center">
  English | <a href="README.md">简体中文</a>
</p>

## 📌 Project Introduction
Project Pioneer is a web‑based video platform replicating the desktop‑side layout of YouTube. It adopts a classic two‑column layout, with a built‑in video player and comment module, and supports multi‑language extension.

This project is an independent video website and has no connection with any Minecraft launcher.

> ⚠️ **Disclaimer**: This project is a frontend interface technical demo for learning and communication purposes only.

## 🛠 Technical Architecture
### Web Version
- **Front‑end Framework**: Native HTML5 + CSS3 + JavaScript
- **Responsive Design**: Supports modern browsers (Chrome, Edge, Firefox, etc.)

### Desktop Client
- **Solution A**: Electron (cross‑platform desktop application framework)
- **Solution B**: Win32 C++ Native Development (Windows‑only)

#### Core Desktop Client Modules
| Module | Description |
|------|------|
| `main.js` / `mainpro.js` | Electron main process, responsible for window management and application lifecycle |
| `main.cpp` | Win32 entry point, simple native Windows boot |
| `mainpro.cpp` | Full Win32 implementation, including system tray, settings dialog and diagnostic tools |

## 📦 Installation Instructions
### Web Version
No installation required. Simply visit the online site in your browser:
🌐 **Online Site**: https://the1234556789.github.io/project-pioneer/

### Windows Desktop Client
#### System Requirements
| Item | Minimum Requirement |
|--------|----------|
| Operating System | Windows 7 SP1 / Windows 10 / Windows 11 |
| Memory | ≥ 2GB |

#### Installation Steps
1. Download the latest release from [Releases](https://gitee.com/Wanderlust-Code/ProjectPioneer/releases)
2. Run the installer
3. The installer supports **Simplified Chinese** / **English**
4. Launch the client once installation completes

> ℹ️ **Upgrade Suggestion**: Uninstall the old version before installing a new one.

### Desktop Client Features (Win32 Version)
- **System Tray**: Minimize‑to‑system‑tray support. Tray menu includes Show, Repair, Settings, Check for Updates, About and Exit options.
- **Settings Management**: Custom remote URL configuration available.
- **Diagnostic Tool**: Built‑in diagnostics to detect runtime environment.
- **Auto‑Update**: Ability to check for software updates.

## 💻 Core Features
- [x] Video playback
- [x] Comment module
- [x] Classic two‑column layout
- [x] Windows desktop client
- [ ] Multi‑language support (in development)

## 🤝 Contribution Guide
Issues and Pull Requests are welcome!

## 📄 Copyright
Copyright © 2024‑2026 Huize Studio All Rights Reserved

---
<p align="center">
  Made with ❤️ by <a href="https://gitee.com/Wanderlust-Code">Huize Studio</a>
</p>
