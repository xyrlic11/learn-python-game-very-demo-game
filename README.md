# RUNTIME: Code the World

## R-01 character model

`js/game/RobotModel.js` builds the robot as a reusable model with rounded armor, visor, expressive eyes, articulated arms/boots, rear battery, vents and serial decal. It returns named joints for the existing movement and expression animations. Materials separate ceramic shell, metal joints, rubber, glass and orange trim. Geometry is generated locally; no external character asset is downloaded.

Click **Meet R-01** to orbit the character up close. Click it again or **Home view** to return to the board. Executing a movement also returns to the board automatically. The local server additionally serves the Three.js RoundedBoxGeometry module.

## English interface and larger layout

All player-facing UI, missions, hints, starter comments, runtime messages and accessibility labels now use English. The editor uses 15 px monospace text on desktop (14 px on narrow screens), larger buttons and a 400 px desktop dock. The default camera is closer so the board and robot appear larger. Gameplay rules and command syntax are unchanged.

เกมใช้ HTML, CSS และ JavaScript พร้อม Three.js สำหรับโลก 3D ที่หมุนและซูมได้ รันคำสั่งเดินได้จริง มีแอนิเมชัน การชน ปุ่มหยุด และทำทีละขั้น

## Launch

ครั้งแรกให้รัน `npm install --ignore-scripts` แล้ว `npm start` จากโฟลเดอร์นี้ เปิด http://127.0.0.1:8000 เครื่องนี้ติดตั้ง Three.js ไว้ให้แล้ว ไม่ต้องใช้ CDN ตอนเล่น เปิดไฟล์ HTML ตรง ๆ อาจทำให้ browser บล็อก JavaScript modules หากพอร์ต 8000 ถูกใช้อยู่ให้หยุดเซิร์ฟเวอร์เดิมก่อน

## โลก 3D และวิธีนำเสนอ

รอบปรับภาพล่าสุด: แต่ละด่านมีฉากเฉพาะ (สถานีเมฆ / คลังอำพัน / สวนแรงโน้มถ่วง / แกนพลังงาน) หุ่นยนต์หัวมนกระพริบตา เดินขยับแขนขา และกระโดดดีใจเมื่อผ่าน ประตูเลื่อนลง สะพานยกขึ้น และของที่เก็บหดหายพร้อมเอฟเฟกต์

ปุ่ม **♪ เสียงปิด** เปิดเสียงสังเคราะห์สั้น ๆ สำหรับเดิน ชน เก็บของ เปิดสะพาน และผ่านด่าน ค่าเริ่มต้นปิดเสียง ไม่มีไฟล์เสียงภายนอก หน้าจอแคบตรึงฉากไว้ขณะเลื่อนดูโค้ด เปิด **เป้าหมายด่านนี้** เพื่ออ่านโจทย์เต็ม ลดการเคลื่อนไหวตามการตั้งค่า reduced motion ของอุปกรณ์

ไฟล์ใหม่: `js/game/Atmosphere.js` กำหนดโทนสีและของตกแต่งแต่ละฉาก ส่วน `js/ui/Sound.js` สร้างเสียงและควบคุมเปิด–ปิดโดยไม่ยุ่งกับกฎเกม

## ภารกิจที่เล่นได้

เลือกจากเมนู **เลือกภารกิจ** ด้านบน เล่นได้ทุกด่านโดยไม่ต้องปลดล็อก เริ่มเปิดที่ด่านกุญแจเพื่อแนะนำกลไกใหม่

1. **คำสั่งแรก** — ทดลองลำดับการเดินและการชน
2. **ทางลัดที่ยังเปิดไม่ได้** — ต้องเก็บกุญแจ ก่อนจะผ่านประตูล็อก แผนที่แบ่งเป็นสองฝั่ง
3. **ถอยเพื่อไปต่อ** — ต้องเดินไปเหยียบสวิตช์ แล้วกลับมาข้ามสะพานที่เพิ่งเกิดขึ้น
4. **อีกก้าวเดียวก็ดับ** — พลังงานเริ่มต้น 6 หน่วย แบตเตอรี่เติม 4 ได้ครั้งเดียว ทุกคำสั่งรวมถึงการชนใช้พลังงาน เป้าหมายอยู่ไกล 10 ก้าว

เก็บกุญแจ แบตเตอรี่ และเปิดสวิตช์โดยเดินเหยียบอัตโนมัติ สถานะเปลี่ยนทั้งบน HUD และวัตถุ 3D กดเริ่มใหม่คืนของ/ประตู/พลังงานทั้งหมด แต่เก็บโค้ดไว้ สลับด่านเก็บโค้ดแยกด่านในหน่วยความจำ รีเฟรชจะล้างความคืบหน้า ปุ่ม **ดูเฉลยและรันด่านนี้** จะแทนที่โค้ดด้วยตัวอย่างที่ผ่านได้ ปุ่มด่านถัดไปใช้ได้เมื่อผ่าน แต่เมนูเลือกด่านใช้ได้ตลอด

ไฟล์ `js/levels/levels.js` เก็บข้อมูลด่านทั้งสี่ (แผนที่ ภารกิจ กลไก และตัวอย่างคำตอบ) ส่วน `js/game/PuzzleRules.js` คำนวณผลจากกุญแจ ประตู สวิตช์ และพลังงานเป็นข้อมูลธรรมดา ภาพ 3D อ่านผลไปแสดง ไม่เป็นผู้ตัดสินกฎ

- ลากบนฉากเพื่อหมุน ใช้ล้อเมาส์หรือบีบสองนิ้วเพื่อซูม ปุ่มมองจากบนช่วยอ่านเส้นทาง และมุมเริ่มต้นคืนกล้อง
- กด **ดูเฉลยและรันด่านนี้** เพื่อใส่โค้ดตัวอย่างของด่านที่เลือกและรันทันที (ปุ่มนี้แทนที่โค้ดในช่อง)
- กด **โหมดนำเสนอ** เพื่อซ่อนแผงโค้ด มีปุ่มเล่นเดโมและหยุดบนฉาก กดกลับไปเขียนโค้ดเพื่อคืนแผง
- ปุ่มลูกศรเพิ่มคำสั่งลงท้ายโค้ด กด Ctrl+Enter เพื่อรัน
- แกน X/Y ผูกกับแผนที่ หมุนกล้องแล้วคำสั่งเดินยังคงทิศเดิม
- เครื่องที่เปิด WebGL ไม่ได้จะใช้แผนที่ 2D สำรอง ส่วน reduced motion ลดการกระเด้งและประกาย

## ไฟล์ที่เพิ่มสำหรับ 3D

| ไฟล์ | ทำหน้าที่อะไร |
| --- | --- |
| `js/game/World3D.js` | สร้างฉาก โมเดลหุ่นยนต์ แสง ประตู รอยทาง แอนิเมชัน และกล้อง Three.js โดยไม่คำนวณกฎเกม |
| `js/ui/Studio.js` | เชื่อมกล้อง โหมดนำเสนอ เดโม ปุ่มเพิ่มคำสั่ง เลขบรรทัด และคีย์ลัด |
| `css/studio.css` | ธีมหน้าเกม 3D แผงโค้ด และเลย์เอาต์มือถือ |
| `package.json` / `package-lock.json` | กำหนดและล็อก Three.js 0.180.0 พร้อมคำสั่ง start/test |
| `.gitignore` | กัน node_modules และแคช npm ไม่ให้เข้า Git |

โมเดลสร้างจากรูปทรงพื้นฐานในโปรเจกต์ ไม่ใช้โมเดลภายนอก รายละเอียด API อ้างอิง [เอกสาร Three.js](https://threejs.org/docs/)

## What each application file does

| File | Responsibility |
| --- | --- |
| `index.html` | Screen structure: mission, editable code, controls, map and telemetry. |
| `css/game.css` | Responsive two-column layout, colors, tiles and the robot drawn with CSS. |
| `js/levels/level1.js` | Map size, robot start, walls, goal, mission, hint and starter code. Edit this to change the map. |
| `js/game/Renderer.js` | ส่งข้อมูลไปฉาก 3D หรือวาด 64 ช่องแบบ 2D สำรองเมื่อเปิด WebGL ไม่ได้ |
| `js/game/Movement.js` | คำนวณตำแหน่งใหม่ ตรวจขอบแผนที่และกำแพง |
| `js/runtime/CommandRunner.js` | อ่านเฉพาะคำสั่งเดิน เก็บคิวและเลขบรรทัด พร้อมจำกัดขนาดโค้ดและจำนวนคำสั่ง |
| `js/app.js` | เชื่อมปุ่ม คิว ตำแหน่งหุ่นยนต์ ผลการรัน และประวัติ 8 รายการล่าสุด |
| `server.mjs` | เปิดเว็บเฉพาะเครื่องนี้ และให้เข้าถึงเฉพาะไฟล์เกมที่ระบุไว้ |
| `tests/runtime.test.mjs` | ทดสอบคำสั่งที่อนุญาต ขีดจำกัด การชน และเส้นทางถึงเป้าหมาย |

Planning documents: `implementation_plan.md` records scope; `task.md` tracks completion; `system_architecture.md` records data flow and where future systems belong.

## Manual checks and expected results

1. Open the served page. Expect an 8×8 map with one blue robot at (1, 6), six striped walls and a green goal at (6, 1). Coordinates start at zero.
2. กดรันโค้ดเริ่มต้น หุ่นยนต์เดินขวาทีละช่องสองครั้ง ไปที่ (3, 6) และบอกว่ายังไม่ถึงเป้าหมาย
3. Click Hint twice. The hint appears, then disappears.
4. เปลี่ยนโค้ดเป็น `player.moveRight(); player.moveUp(); player.moveRight();` แล้วรัน: เดินขวา ชนกำแพงด้านบน แล้วเดินขวาต่อได้ ลงท้ายที่ (3, 6) ชนหนึ่งครั้ง
5. เพิ่ม `player.fly();` ต่อท้าย: สามคำสั่งก่อนหน้ายังแสดงผล จากนั้นหุ่นยนต์แสดงเครื่องหมายคำถามและแจ้งบรรทัดที่อ่านไม่ได้
6. กดหยุดระหว่างรัน: คำสั่งถัดไปไม่ทำงาน กดทีละขั้นเพื่อทำต่อได้ กดรันเพื่อเริ่มจากต้นใหม่
7. กดเริ่มใหม่ระหว่างรัน: กลับจุดเริ่มต้นและยกเลิกคิว โดยไม่ลบโค้ดที่แก้ไว้
5. Resize to a phone width. Panels stack vertically; the square grid stays within the viewport.
6. Use Tab to reach the editor, Reset and Hint. Focus should be visible.

## Current limitations / possible issues

- รองรับเฉพาะคำสั่งเดินทั้งสี่ทิศ ไม่มีตัวแปร ลูป หรือ JavaScript ทั่วไป คำสั่งที่อ่านไม่ได้หยุดการทดลองหลังแสดงผลคำสั่งก่อนหน้า ไม่ใช้ eval หรือ Function
- Direct file opening can result in a blank map due to browser module restrictions; use HTTP.
- เริ่มใหม่เก็บโค้ดไว้ แต่รีเฟรชหน้าเว็บจะกลับเป็นโค้ดตัวอย่าง ยังไม่มีระบบบันทึก
- Level coordinates are trusted local data; an invalid coordinate may place an entity outside the map. Add level validation when levels become user-editable.

รันทดสอบด้วย `node --test tests/runtime.test.mjs` จำกัดโค้ด 20,000 ตัวอักษร และคิว 1,000 คำสั่ง การเดินใช้ 500 มิลลิวินาทีต่อคำสั่ง จึงกดหยุดได้โดยไม่ต้องรอคิวจบ
#   l e a r n - p y t h o n - g a m e - v e r y - d e m o - g a m e  
 