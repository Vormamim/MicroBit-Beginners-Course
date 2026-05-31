# Lesson 6 — Sensing the World

**Duration:** 40 minutes  
**SOLO Level:** Relational — You will connect sensor inputs to variables to outputs in a complete system  
**Computational Thinking Pillar:** Decomposition

---

## NSW Outcomes
- **TE4-DIG-01** — Demonstrates technological literacy to safely interact in digital environments
- **TE4-DIG-02** — Uses data and digital systems to code, design and produce projects
- *Contributing:* TE4-MSC-01 — Explains how materials, systems and components contribute to solutions

---

## Learning Intentions

By the end of this lesson, you will be able to:

1. Name and describe at least four sensors on the micro:bit
2. Write programs that use sensor data as **input**
3. Store sensor readings in **variables** and use them in **decisions**
4. Design a complete IPO system using a real sensor

---

## Success Criteria

You'll know you've got it when you can:
- [ ] Write a program using the accelerometer to detect a shake gesture
- [ ] Write a program that reacts to light levels
- [ ] Draw a full IPO diagram for a sensor-based program
- [ ] Explain the difference between a sensor that gives a number and one that gives True/False

---

## Key Vocabulary

| Word | What it means |
|------|--------------|
| **Sensor** | A component that detects information from the physical world |
| **Accelerometer** | Measures movement and tilt in 3 directions (X, Y, Z) |
| **Gesture** | A recognised movement — like "shake", "tilt_left", "face_up" |
| **`accelerometer.get_x()`** | Returns the tilt left/right as a number (-1023 to 1023) |
| **`accelerometer.was_gesture()`** | Returns True if a gesture happened since last checked |
| **`display.read_light_level()`** | Returns current light level (0 = dark, 255 = bright) |

---

## HOOK — What Can Your Body Detect? (5 minutes)

Your teacher asks: *"Without using your eyes, what can your body sense right now?"*

Students might say: temperature, touch, sound, balance (are you standing straight?), pressure.

> *"Your micro:bit has sensors too — it can feel temperature, light, movement, tilt, magnetic field, and (if V2) sound. Today you'll learn to read those sensors and use them as inputs."*

---

## THEORY — Sensors on the micro:bit (10 minutes)

### Overview of Built-in Sensors

| Sensor | Function to call | Returns | Example use |
|--------|-----------------|---------|-------------|
| Accelerometer (movement) | `accelerometer.get_x()` | Number (-1023 to 1023) | Detect tilt left/right |
| Accelerometer (gesture) | `accelerometer.was_gesture("shake")` | True / False | Detect shaking |
| Temperature | `temperature()` | Number (°C) | Show temperature |
| Light level | `display.read_light_level()` | Number (0–255) | React to brightness |
| Compass | `compass.heading()` | Number (0–360 degrees) | Show direction |
| 🔊 V2 Microphone | `microphone.sound_level()` | Number (0–255) | React to noise |

### Two types of sensor output

**Type 1: A number** — tells you HOW MUCH

```python
tilt = accelerometer.get_x()  # e.g. -450 (tilted left)
temp = temperature()           # e.g. 23 (degrees Celsius)
light = display.read_light_level()  # e.g. 180 (moderately bright)
```

You use `if` with comparisons: `if tilt > 200:` or `if temp < 15:`

**Type 2: True/False** — tells you YES or NO

```python
shaking = accelerometer.was_gesture("shake")  # True or False
pressed = button_a.is_pressed()               # True or False
```

You use `if` directly: `if accelerometer.was_gesture("shake"):`

### Available Gestures

The accelerometer can detect these gestures:

| Gesture string | What it detects |
|---------------|----------------|
| `"shake"` | Device shaken |
| `"tilt_left"` | Left side down |
| `"tilt_right"` | Right side down |
| `"face_up"` | Screen facing up |
| `"face_down"` | Screen facing down |
| `"freefall"` | Dropped (use carefully!) |

---

## MODEL — Teacher Codes Live (10 minutes)

**Goal:** Build a "spirit level" — the micro:bit shows an arrow pointing in the direction it's tilting.

```python
from microbit import *

while True:
    x = accelerometer.get_x()
    
    if x > 300:
        display.show(Image.ARROW_E)    # Tilting right
    elif x < -300:
        display.show(Image.ARROW_W)    # Tilting left
    else:
        display.show(Image.DIAMOND)    # Roughly level
    
    sleep(100)
```

**IPO Breakdown:**

| | What it is |
|--|------------|
| **Input** | Tilt (measured by accelerometer.get_x()) |
| **Processing** | Compare x value to 300 and -300 |
| **Output** | Arrow pointing left, right, or diamond for level |

**Key things to notice:**
- `x = accelerometer.get_x()` — stores sensor reading in a variable
- The comparison numbers (300, -300) are **thresholds** — values where we decide to do something different
- `sleep(100)` — only 0.1 seconds, so the display updates quickly

---

## PRACTICE — Sense and Respond (10 minutes)

### Task 1: Shake Detector (everyone)

```python
from microbit import *

display.show(Image.ASLEEP)

while True:
    if accelerometer.was_gesture("shake"):
        display.show(Image.SURPRISED)
        sleep(1000)
        display.show(Image.ASLEEP)
```

Test in the simulator by clicking the shake button. What is the:
- **Input?**
- **Processing?**
- **Output?**

### Task 2: Light Detector

Write a program that reacts to light levels:
- If light level > 100: show the SUN image or scroll "Bright"
- If light level ≤ 100: show Image.ASLEEP or scroll "Dark"

```python
from microbit import *

while True:
    light = display.read_light_level()
    
    if light > 100:
        display.scroll("Bright: " + str(light))
    else:
        display.scroll("Dark: " + str(light))
    
    sleep(2000)
```

Try covering the simulator's light sensor (or your real micro:bit's display) with your hand. Does it change?

### Task 3: Design Your Own Sensor Program

Choose ONE sensor from the table above. Design a program that:
1. Reads the sensor
2. Stores the value in a variable
3. Makes a decision based on that value
4. Shows an appropriate output

**Plan it first:** Draw the IPO diagram in your notebook BEFORE you code it.

- What is your **input**? (which sensor?)
- What **processing** will you do? (what decision?)
- What is your **output**? (what will the display show?)

Then write and test the code.

### 🔊 V2 Extension: Sound Level Meter

```python
from microbit import *

while True:
    level = microphone.sound_level()
    
    if level > 200:
        display.scroll("LOUD! " + str(level))
    elif level > 100:
        display.scroll("Medium")
    else:
        display.show(Image.ASLEEP)
    
    sleep(500)
```

---

## PROGRESS LOG ENTRY — Lesson 6 (5 minutes)

---

**Lesson 6 Log — [Today's Date]**

**I learned…**  
*(Name two sensors on the micro:bit. For each one: does it return a number or True/False?)*

**I tried…**  
*(Describe your Task 3 program. What sensor did you pick? Draw or write out your IPO plan.)*

**I wonder…**  
*(Could you combine two sensors? What real device uses multiple sensors at once? Think of your phone as an example.)*

---

## Lesson Summary

Today you learned:

✅ The micro:bit has multiple **sensors** that provide input data  
✅ Some sensors return a **number** (temperature, light level, tilt)  
✅ Some sensors return **True/False** (gestures, button presses)  
✅ Store sensor readings in **variables** before using them  
✅ Use **thresholds** (comparison values) to make decisions with sensor numbers  

Next lesson, you'll combine EVERYTHING you've learned into a mini-game!

---

*Lesson 6 of 10 | Think Like a Computer: Micro:bit & Computational Thinking*  
*NSW Technology 7–8 (2023) | TE4-DIG-01, TE4-DIG-02*
