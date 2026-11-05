# Milestone 1

## Visual personality pass

- [x] Distinct level palettes, floating foundations and off-board scenery.
- [x] Rounded expressive robot with gait, blinking and victory reaction.
- [x] Animated gate, bridge and pickup transitions with opt-in sound cues.
- [x] Compact sticky world and mission disclosure on narrow screens.
- [x] Syntax checks and all 11 gameplay tests pass.

## Creative puzzle levels

- [x] Add three distinct puzzle levels, selector, next-level button and per-level drafts.
- [x] Implement key/door, switch/bridge and limited-energy battery rules.
- [x] Add visible 3D props and state labels, plus 2D symbols.
- [x] Test all four solutions and failure conditions (11 tests pass).
- [x] Browser verified key collection/door opening, switch activation/bridge crossing, next-level navigation and energy-level success at exactly zero energy; no console errors.

- [x] Read the brief and select Milestone 1 scope.
- [x] Create UI and responsive styling.
- [x] Render data-driven 8×8 grid, robot, walls and goal.
- [x] Connect Hint and Reset; mark future controls as unavailable.
- [x] Document every file and future execution flow.
- [x] Verify all three JavaScript files with `node --check`.
- [x] Verify browser load, code editing, Hint, Reset and disabled execution controls.
- [x] Inspect narrow viewport; set explicit equal-height grid rows to keep tiles square.

## Follow-up: runnable experiments

- [x] Enable Run, Step and Stop; preserve edited code on Reset.
- [x] Add bounded movement-command parsing without eval.
- [x] Animate actions one at a time, continue after collision, and report source lines.
- [x] Preserve valid prefix before unreadable code and show robot confusion.
- [x] Add local server and six passing runtime tests.
- [x] Browser verified: valid prefix runs, collision continues, bad command stops at line 4, Stop cancels queue, Step consumes one action, Reset restores position and preserves code.

## 3D studio redesign

- [x] Add pinned local Three.js, procedural robot/portal/board, shadows and effects.
- [x] Preserve game rules and add a playable 2D fallback.
- [x] Add orbit/zoom, camera presets, demo and presentation mode.
- [x] Redesign Thai UI with compact editor, quick commands and collapsible help/history.
- [x] Verify desktop/narrow layout, orbit and zoom, successful demo and six runtime tests.
