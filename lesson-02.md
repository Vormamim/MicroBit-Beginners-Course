# Lesson 2 — Hello, micro:bit!

**Duration:** 40 minutes  
**SOLO Level:** Uni-structural — You will follow ONE algorithm (a sequence of steps)  
**Computational Thinking Pillar:** Algorithm Design

---

## NSW Outcomes
- **TE4-DIG-01** — Demonstrates technological literacy to safely interact in digital environments
- **TE4-DIG-02** — Uses data and digital systems to code, design and produce projects
- *Contributing:* TE4-PPM-01 — Applies processes in planning, management and production of projects

---

## Learning Intentions

By the end of this lesson, you will be able to:

1. Open the micro:bit Python Editor and describe what you see
2. Write a Python program that uses **sequence** (steps in order)
3. Identify **syntax** (the rules of writing code correctly)
4. Flash your code to the micro:bit OR run it in the simulator

---

## Success Criteria

You'll know you've got it when you can:
- [ ] Write a program that scrolls a message on the micro:bit display
- [ ] Write a program that shows an image on the display
- [ ] Fix at least one syntax error yourself
- [ ] Explain what "sequence" means in your own words

---

## Key Vocabulary

| Word | What it means |
|------|--------------|
| **Sequence** | Steps that happen in order, one after another |
| **Syntax** | The rules of writing code — like grammar, but for programs |
| **Function** | A named command that does a specific job (e.g. `display.scroll()`) |
| **String** | A piece of text in code, always inside quotes: `"Hello"` |
| **Flash** | Copying your program onto the micro:bit so it runs |
| **Simulator** | A fake micro:bit on your screen — you can test code without real hardware |

---

## HOOK — Recipes are Algorithms (5 minutes)

Your teacher will show you two recipe cards. One is in the right order. One is mixed up.

> *Question: What goes wrong if you follow the steps in the wrong order?*

This is why **sequence** matters in coding. If your steps are in the wrong order, your program won't work — just like a recipe gone wrong.

---

## THEORY — Python, Syntax, and Sequence (10 minutes)

### Why Python?

Python is one of the most popular coding languages in the world. It's used in:
- Science and data analysis
- Game development
- Robotics and hardware projects
- Artificial intelligence

On the micro:bit, we use a version called **MicroPython** — it has the same rules as Python, but is designed to run on tiny hardware.

### The Python Editor — What You're Looking At

Go to [python.microbit.org/v/3](https://python.microbit.org/v/3). You'll see:

```
┌────────────────┬──────────────────────────────┐
│  SIMULATOR     │   CODE EDITOR                │
│  (micro:bit    │                              │
│   on screen)   │  from microbit import *      │
│                │                              │
│                │  display.scroll("Hello!")    │
│  [Send to      │                              │
│   micro:bit]   │                              │
└────────────────┴──────────────────────────────┘
```

- **Left side:** The simulator — a virtual micro:bit you can test with
- **Right side:** The code editor — where you write your Python
- **Top bar:** Buttons to run in simulator or flash to the real device

### Sequence in Python

Python reads your code from **top to bottom**, one line at a time. This is called **sequence**.

```python
from microbit import *          # Line 1 — load the micro:bit tools
display.scroll("Hello!")        # Line 2 — scroll text across the display
display.show(Image.HAPPY)       # Line 3 — show a happy face
```

Line 2 happens before Line 3. Always.

### Syntax Rules to Know

| Rule | Example |
|------|---------|
| Text (strings) go inside quotes | `"Hello"` or `'Hello'` |
| Brackets come in pairs | `display.scroll("Hi")` |
| Python is case-sensitive | `Display.scroll` ≠ `display.scroll` |
| The first line must import micro:bit tools | `from microbit import *` |

### What is `from microbit import *`?

This line loads all the tools that let you control the micro:bit. Think of it like opening your toolbox before you start building. You must include this line at the top of every micro:bit program.

---

## MODEL — Teacher Codes Live (10 minutes)

Watch your teacher type this program step by step. Don't type yet — just watch and listen.

```python
from microbit import *

display.scroll("Hello, World!")
display.show(Image.HAPPY)
sleep(1000)
display.show(Image.SAD)
```

**What each line does:**

| Line | Input | Processing | Output |
|------|-------|------------|--------|
| `from microbit import *` | — | Loads micro:bit tools | — |
| `display.scroll("Hello, World!")` | The text "Hello, World!" | Scrolls it across display | Text on LEDs |
| `display.show(Image.HAPPY)` | The built-in HAPPY image | Shows the image | 😊 on LEDs |
| `sleep(1000)` | Time (1000 milliseconds = 1 second) | Waits | Nothing |
| `display.show(Image.SAD)` | The built-in SAD image | Shows the image | 😢 on LEDs |

> 💡 `sleep(1000)` pauses the program for 1000 milliseconds. How many milliseconds is 2 seconds? (Hint: 1 second = 1000 ms)

---

## PRACTICE — Write Your Own Programs (10 minutes)

### Task 1: The Basics (everyone)

Type this program exactly as shown. Then click **Run** in the simulator.

```python
from microbit import *

display.scroll("My name is [YOUR NAME]")
display.show(Image.HAPPY)
```

Replace `[YOUR NAME]` with your actual name.

**IPO check:**
- What is the **input**?
- What is the **output**?
- What is the **processing**?

### Task 2: Add More Steps

Add two more lines to make the micro:bit do something after showing the happy face. Try any of these images:

```python
Image.HEART
Image.SURPRISED
Image.YES
Image.NO
Image.DUCK
Image.DIAMOND
```

Example:
```python
from microbit import *

display.scroll("My name is Alex")
display.show(Image.HAPPY)
sleep(2000)
display.show(Image.HEART)
```

### Task 3: Break It (on purpose!)

Try deliberately making a **syntax error**. For example:
- Remove one bracket: `display.scroll("Hello"`
- Change the case: `Display.scroll("Hello")`
- Remove the quotes: `display.scroll(Hello)`

What error message do you get? Write it in your log.

Now fix the error and make it work again.

### 🚀 Extension: Your Own Image

You can draw your OWN image! Each number represents how bright an LED is (0 = off, 9 = brightest).

```python
from microbit import *

my_face = Image("09090:"
                "09090:"
                "00000:"
                "90009:"
                "09990")

display.show(my_face)
```

Can you design a different image? Try a star, a letter, or a shape.

### 🔊 V2 Extension: Add Sound

```python
from microbit import *
import audio

display.show(Image.HAPPY)
audio.play(Sound.HAPPY)
```

---

## PROGRESS LOG ENTRY — Lesson 2 (5 minutes)

Write your log entry using the format below:

---

**Lesson 2 Log — [Today's Date]**

**I learned…**  
*(Explain what sequence means. How is it like a recipe?)*

**I tried…**  
*(What programs did you write? What did your micro:bit display? Did you manage to create your own image or break the code on purpose?)*

**I wonder…**  
*(What question do you still have? What would you like your micro:bit to do that you don't know how to do yet?)*

---

## Lesson Summary

Today you learned:

✅ The **Python Editor** has a simulator and a code editor  
✅ Python reads code **line by line**, from top to bottom — this is **sequence**  
✅ **Syntax** is the grammar of code — small mistakes break your program  
✅ `from microbit import *` must be at the top of every program  
✅ `display.scroll()` and `display.show()` are outputs  

Next lesson, you'll learn how to make decisions in your code — "if this, then that"!

---

*Lesson 2 of 10 | Think Like a Computer: Micro:bit & Computational Thinking*  
*NSW Technology 7–8 (2023) | TE4-DIG-01, TE4-DIG-02*
