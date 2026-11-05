# Architecture

## Character model

RobotModel.js owns the reusable procedural R-01 model and returns robot/head/eyes/feet/arms handles. World3D retains animation control. RoundedBoxGeometry smooths hard-surface armor; joints and materials remain separate for future poses. Inspect mode lowers the camera minimum distance and targets the robot; Home or the next movement restores the board camera. Model rules remain independent of puzzle state.

## English UI

Player-facing copy is now English throughout HTML, levels, runtime messages, renderer labels and UI modules. The final typography block in studio.css sets the larger English reading scale and responsive overrides. World3D uses a 15.5-unit baseline camera distance rather than 18. No locale-switching abstraction was added; this replaces the previous Thai UI as requested.

## Presentation polish

Atmosphere.js owns level palettes and off-board procedural scenery; decorations never affect collisions. World3D tracks visual puzzle transitions separately from logical puzzle state: key/battery pickup shrink, door lowers, bridge rises over 450 ms. Reset restores props immediately. Robot face/feet/arms and victory motion respect reduced motion. Scene disposal also releases WebGL context so repeated level changes do not retain contexts.

Sound.js creates a user-enabled AudioContext and short oscillator cues; sound starts disabled and never gates gameplay. app.js triggers cues on actual action results and completion. Mobile CSS keeps a compact sticky scene while editing; mission details remain available in a disclosure populated from the same level objective.

## Puzzle levels

`levels/levels.js` contains four unlocked data-driven levels: original sequence, key/door, switch/bridge, and battery budget. `PuzzleRules.js` wraps pure Movement with dynamic blockers and a separate puzzle state (key, bridge, energy, collected battery indices). Pickups are automatic on entry. Every attempted move costs one energy; reaching the exit on the last unit succeeds. Exhaustion cancels remaining actions after the last animation.

`app.js` tracks the selected level, puzzle state, per-level in-memory editor drafts and completed IDs. Switching cancels timers before resetting puzzle state. Renderer disposes the old 3D scene and creates the selected map; World3D.syncPuzzle updates prop visibility without moving rule logic into meshes. 2D fallback uses symbols for the same props. No persistent save yet. Eleven tests cover all demo routes, gate prerequisites, bridge latch, battery uniqueness and exhaustion.

## 3D view upgrade

Three.js 0.180.0 is pinned in package-lock and served locally through the server allowlist/import map. No runtime CDN. `Renderer.js` dynamically loads `World3D.js`, creates one persistent scene, and retains the old 2D renderer as fallback. Simulation coordinates remain plain `{x,y}`; map x becomes scene x and map y becomes scene z, centered around the board. Movement rules and parser are unchanged.

`World3D.js` owns procedural geometry, light/shadows, bounded reusable particles, trails, OrbitControls, resize/context lifecycle and reduced motion. Render sets player state; animate interpolates from the previous tile for 350 ms. Camera resize refits the board; Run/Reset preserve current camera otherwise. `Studio.js` owns camera buttons, presentation mode, demo code, insertion buttons and line numbers. `studio.css` layers the 3D studio layout over the original CSS needed by the 2D fallback. Extend visuals in World3D; extend rules in Movement; extend syntax in a future interpreter.

Validated desktop and narrow layouts, mouse orbit/zoom, demo route ending at (6,1) with one collision, and all six runtime tests. Touch uses OrbitControls but was not tested on a physical touch device. Presentation mode keeps Play demo/Stop reachable. Demo replaces editor contents explicitly, while Run/Reset preserve them.

The prototype uses ES modules without a framework or build system. Data, movement rules, command parsing, rendering, wiring, markup and styles have separate small files.

Current flow: Run → `CommandRunner.parseCommands` → bounded array of movement actions with source lines → `app.js` consumes one action every 500 ms → `Movement.movePlayer` checks walls/bounds → Renderer draws and animates for 350 ms. Step consumes one movement. Stop cancels the timer; Step resumes. Run always starts fresh. Reset cancels execution and preserves edited code. All player-facing text is Thai.

`CommandRunner.js` accepts only the four movement calls, whitespace, comments and semicolons. The first unreadable statement becomes a final diagnostic after the valid prefix has played. This is an educational command preview, not full JavaScript evaluation: even if a later statement is invalid, earlier commands can visibly run. Collisions leave position unchanged but continue the queue. End-of-program goal checks use final position. No loops or variables yet. Add a real bounded interpreter for those features rather than extending this regex into a full language parser.

Never pass player input to eval or Function. Current limits: 20,000 source characters and 1,000 queued actions. Unsupported syntax, browser API calls and loops stop with a visible question mark on the robot and a source-line diagnostic. Future loop support must count condition checks and empty loops too. `server.mjs` is a loopback-only static server with an explicit asset allowlist; add newly imported browser modules to that allowlist. `tests/runtime.test.mjs` tests parsing, restrictions, limits, collisions and a successful route.
