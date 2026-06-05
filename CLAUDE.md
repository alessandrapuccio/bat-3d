# bat-3d

3D bat animation driven by frame-by-frame tracking data, built to embed in a Shiny app — same architecture pattern as `baseball-3d`.

## Project goal

Render a bat GLB model whose position and rotation change over time according to data frames sent from R/Shiny. Each "frame" in the animation corresponds to one timestep of bat tracking data (e.g. position XYZ, rotation quaternion, or Euler angles per frame). Playback is controlled from Shiny.

## Architecture (mirroring baseball-3d)

### Stack

| Layer | Tool |
|---|---|
| UI framework | React 19 |
| 3D rendering | Three.js via @react-three/fiber |
| 3D helpers | @react-three/drei (OrbitControls, useGLTF, etc.) |
| Dev server | react-scripts (CRA) — `npm start` |
| Shiny build | Vite lib mode → `batapp.es.js` — `npx vite build` |
| UI controls | MUI (as needed) |

### Key difference from baseball-3d

In baseball-3d, Shiny sends a single set of spin parameters that set a static orientation + continuous spin loop. In bat-3d, Shiny will send **an array of frames**, each with a timestamp and bat pose (position + rotation). The React app will:

1. Receive the full frame array via `postMessage`.
2. Store frames in state.
3. Step through frames on play, or jump to a specific frame index on scrub.

### Shiny ↔ React communication

All data flows **one way: Shiny → React** via `window.postMessage`. The React app listens with `window.addEventListener("message", handler)`. The same pattern used in baseball-3d. Expected message types (to be finalized when real data arrives):

| type | payload | effect |
|---|---|---|
| `load_frames` | `{ frames: [...] }` | Load full animation data |
| `play_toggle` | `{ value: bool }` | Play / pause animation |
| `seek_frame` | `{ index: number }` | Jump to specific frame |
| `reset` | — | Return to frame 0 |

### Build for Shiny

`npx vite build` produces `dist/batapp.es.js` — a self-contained ES module that Shiny loads as an htmlwidget or via `tags$script`. The Vite config aliases React, ReactDOM, and Three.js to esm.sh CDN URLs so they are not bundled twice if already on the page (same approach as baseball-3d's active vite.config.js).

## File layout

```
bat-3d/
├── CLAUDE.md             — this file
├── package.json
├── vite.config.js        — Vite lib-mode build for Shiny
├── public/
│   ├── index.html        — CRA dev server entry
│   └── models/
│       └── bat.glb       — 3D bat model
└── src/
    ├── index.jsx         — React DOM mount point
    └── App.jsx           — Main component (bat model + animation logic)
```

## Current status

- [ ] Project initialized (package.json, vite.config.js, public/index.html, src/)
- [ ] Bat GLB loads and renders in browser (`npm start`)
- [ ] Frame-by-frame animation wired to state
- [ ] postMessage listener wired to Shiny data shape
- [ ] Shiny integration tested end-to-end

## Development workflow

```bash
npm install          # first time only
npm start            # dev server at localhost:3000
npx vite build       # produces dist/batapp.es.js for Shiny
```

## Notes / constraints

- Never commit directly — all git interactions handled by the developer.
- bat.glb lives at `public/models/bat.glb` (served as a static asset by CRA dev server and included in the Vite build output).
- Keep Shiny compatibility: no browser-only APIs called at module load time; mount point must be injectable by an htmlwidget container.
