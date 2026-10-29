# Garv Jalhotra — Full-Stack Developer & Creative Technologist Portfolio

A cutting-edge, high-performance personal portfolio website inspired by the award-winning design architecture of **Nesil Noble's "Lucid Dreams"** ([nesilnoble.com](https://nesilnoble.com/)).

Fused with a **Cyberpunk / Terminal Dev aesthetic** featuring dark slate/obsidian canvas, monospaced coordinates, neon cyan/violet glowing accents, and interactive design-tool elements.

---

## ⚡ Signature Interactive Features Included

1. **Boundary Canvas Rulers (Top & Left)**
   - High-DPI Canvas 2D rendered boundary rulers mimicking Figma, Photoshop, and CAD workspaces.
   - Live hairline mouse guide indicators (`guideLineX`, `guideLineY`) and real-time pixel coordinates display chip (`X: 1042px · Y: 430px`).

2. **Figma Selection Box Intro**
   - Interactive bounding frame surrounding the hero profile, complete with corner and midpoint resize handles and a live dimensions tag: `Frame: Garv_Jalhotra_Core · 1280 × 640 · Active`.

3. **Perception Engine: "Eyes That Follow"**
   - Interactive cybernetic sockets whose pupils calculate Euclidean angle and distance vectors to follow your mouse cursor smoothly across the viewport, paired with natural blinking intervals.

4. **Procedural Ambient Soundscape & Equalizer**
   - Built-in Web Audio API generative synthesizer playing a dreamlike pentatonic ambient drone with slow lowpass filter breathing.
   - Live 4-bar equalizer visualizer in the sticky navigation bar displaying frequency dynamics.
   - 100% self-contained: no external `.mp3` dependencies that can 404 or buffer!

5. **Scroll-Driven Travel Narrative Track**
   - Localized timeline expedition with a glowing circuit line and a Cyber Glider/Rover that travels horizontally as you scroll through evolutionary milestones.

6. **Slide-Up Case Study Viewer Drawer**
   - Smooth modal drawer overlay revealing full technical deep-dives: Problem statement, Architectural Solution, Throughput/Latency Metrics, Deliverables, and Live Links.

7. **Interactive Cyber Terminal (CLI)**
   - Functional zsh-style terminal prompt (`garv@lucid:~$`) supporting commands like `help`, `projects`, `skills`, `bio`, `contact`, `audio`, `coffee`, `matrix`, and `clear`.

8. **Closing Doodles & Warm Coffee**
   - Interactive coffee mug with animated steam particles and a live cup counter.
   - Neon phosphor doodle board allowing visitors to draw signatures or sketches and export them as PNG.

9. **Multiplayer Custom Cursor**
   - Floating cursor dot with Garv's name tag `[Garv · cursor]` and magnetic scale animations on clickable elements.

---

## 🚀 How to Run Locally

You can preview the website immediately using Python's built-in HTTP server:

```bash
# In the project directory:
python3 -m http.server 8000
```

Then open your browser to [http://localhost:8000](http://localhost:8000).

---

## 🛠️ How to Customize Your Details

All your personal details, projects, skills, and links are centralized in a single clean configuration file:

📁 **`js/config.js`**

You can easily update:
- Your name, role, handle, tagline, bio, and social links.
- Your project case studies (titles, metrics, problem/solution, tags, images, repo/demo URLs).
- Your career timeline and work experience.
- Your core tech stack skills.
