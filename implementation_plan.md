# Milestone 1 plan

## Visual personality and feedback pass

Keep puzzle mechanics intact. Add four environment palettes and off-board landmarks in Atmosphere.js, a rounded robot with expressive face and gait, animated gate/bridge/pickups and victory reaction in World3D.js. Add opt-in synthesized cues in Sound.js. On narrow screens pin a compact world above the editor and move mission details into an accessible disclosure. Verify gameplay, sound controls, switching scenes and responsive composition.

## Creative puzzle expansion

Add three new playable challenges (key/door, switch/bridge, battery budget), four-level selector and progression controls. Keep supported movement syntax unchanged. PuzzleRules owns state changes; level data owns maps; World3D only mirrors state. Switching levels cancels execution and rebuilds the scene while preserving editor drafts per level for this session. Validate all solutions and failure cases in unit tests and browser.

## Authorized 3D redesign

Visual direction: floating sci-fi laboratory, dark navy shell, ice-blue robot, warm orange portal, readable Thai typography, intentional movement feedback. Keep the scene dominant; editor is a compact side dock, help and history are disclosed on demand. Use Three.js for actual geometry and OrbitControls for mouse/touch orbit and zoom. Preserve vanilla JS and existing rules; no physics engine needed for grid movement.

- Add `World3D.js` for scene, models, camera and animation.
- Adapt Renderer with a WebGL fallback to existing 2D tiles.
- Redesign HTML/CSS; add demonstration, camera reset/top view, command insertion and presentation mode.
- Serve pinned local Three.js modules; no runtime CDN dependency.
- Verify movement, collision, completion, orbit, mobile layout and existing safety tests.

Build only the UI, grid and robot using vanilla HTML, CSS and JavaScript.

- [NEW] `index.html`: mission, editor, controls, world and status panels.
- [NEW] `css/game.css`: responsive layout, grid tiles and CSS robot.
- [NEW] `js/levels/level1.js`: editable 8×8 map and starting code.
- [NEW] `js/game/Renderer.js`: render map data and robot into the DOM.
- [NEW] `js/app.js`: connect screen, level, hint and reset.
- [NEW] `README.md`: launch instructions, file guide and manual checks.
- [NEW] `system_architecture.md`: data flow and future extension points.
- [NEW] `task.md`: completion checklist.

Original Milestone 1 shipped as a preview. Follow-up authorized by user: enable Run so even unsuccessful code produces observable results. Add restricted movement parsing, bounded queue, movement/collision rules, animation, Step/Stop, Thai diagnostics, runtime tests, and a reusable local server. Keep unsupported syntax explicit and preserve valid earlier commands as a preview.
