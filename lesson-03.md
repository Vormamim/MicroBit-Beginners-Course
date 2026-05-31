# Lesson 3 — Making Decisions

**Duration:** 40 minutes  
**SOLO Level:** Multi-structural — You will connect TWO ideas (buttons as input + if/else as processing)  
**Computational Thinking Pillar:** Pattern Recognition

---

## NSW Outcomes
- **TE4-DIG-01** — Demonstrates technological literacy to safely interact in digital environments
- **TE4-DIG-02** — Uses data and digital systems to code, design and produce projects
- *Contributing:* TE4-MSC-01 — Explains how materials, systems and components contribute to solutions

---

## Learning Intentions

By the end of this lesson, you will be able to:

1. Explain what **selection** means in programming
2. Write an `if` statement that reacts to a button press
3. Write an `if/else` statement that handles two different situations
4. Identify the button press as an **input** that controls **processing**

---

## Success Criteria

You'll know you've got it when you can:
- [ ] Write a program where pressing Button A shows one thing and pressing Button B shows another
- [ ] Explain what happens when neither button is pressed
- [ ] Draw a simple flowchart showing an if/else decision

---

## Key Vocabulary

| Word | What it means |
|------|--------------|
| **Selection** | When a program makes a choice — "IF this happens, THEN do that" |
| **Condition** | A question that is either True or False |
| **`if` statement** | Code that runs only when a condition is True |
| **`else`** | Code that runs when the condition is NOT True |
| **`while True`** | A loop that keeps running forever — the program stays active |
| **Indentation** | The spaces at the start of a line that tell Python what belongs inside an `if` block |

---

## HOOK — Flowcharts Are Everywhere (5 minutes)

Your teacher will show you a **flowchart** of what happens when your phone rings.

```
      Phone rings
           │
           ▼
    Do you know the
      caller? ────── NO ──▶ Ignore it
           │
          YES
           │
           ▼
       Answer it
```

> *Question: Can you think of two other everyday decisions that could be shown as a flowchart?*

This is selection — making a choice based on a condition. Your code can do this too.

---

## THEORY — Selection: if, else, and while True (10 minutes)

### The problem with sequence alone

In Lesson 2, your code ran once from top to bottom and stopped. But what if you want your micro:bit to **keep watching for button presses**?

You need two things:
1. A **loop** to keep the program running (`while True`)
2. A **decision** to check what happened (`if` / `else`)

### `while True` — Keep the program alive

```python
from microbit import *

while True:
    # This code keeps running FOREVER
    # until you unplug the micro:bit
    display.show(Image.HEART)
```

The `while True:` block keeps looping. Everything **indented** underneath it runs again and again.

### `if` — Make a decision

```python
from microbit import *

while True:
    if button_a.is_pressed():
        display.show(Image.HAPPY)
```

Read this as: "While the program is running, **if** Button A is pressed, **then** show a happy face."

### `if` / `else` — Two options

```python
from microbit import *

while True:
    if button_a.is_pressed():
        display.show(Image.HAPPY)
    else:
        display.show(Image.SAD)
```

Read this as: "If Button A is pressed, show happy. Otherwise (else), show sad."

### Indentation — Why spaces matter

Python uses **indentation** (spaces at the start of a line) to know what belongs inside an `if` block. If you get this wrong, your code won't work.

```python
while True:
    if button_a.is_pressed():   # This is INSIDE while True
        display.show(Image.YES) # This is INSIDE the if block
    display.show(Image.NO)      # This is inside while True but OUTSIDE the if
```

> 💡 In the Python Editor, pressing **Tab** automatically adds the right indentation for you.

---

## MODEL — Teacher Codes Live (10 minutes)

Watch your teacher build this program step by step.

**Goal:** Press A to show a tick (YES). Press B to show a cross (NO). If nothing is pressed, show a blank display.

```python
from microbit import *

while True:
    if button_a.is_pressed():
        display.show(Image.YES)
    elif button_b.is_pressed():
        display.show(Image.NO)
    else:
        display.clear()
```

**New thing:** `elif` means "else if" — another condition to check before going to `else`.

**IPO Breakdown:**

| | What it is |
|--|------------|
| **Input** | Button A press, Button B press, or nothing |
| **Processing** | The `if`/`elif`/`else` checks which button was pressed |
| **Output** | YES image, NO image, or blank display |

**Flowchart of this program:**

```
      Start
        │
        ▼
  ┌─ while True ─────────────────┐
  │                              │
  │  Is Button A pressed?        │
  │    YES → show Image.YES      │
  │    NO ▼                      │
  │  Is Button B pressed?        │
  │    YES → show Image.NO       │
  │    NO ▼                      │
  │  else → clear display        │
  │                              │
  └──────────────────────────────┘
        (loops back to start)
```

---

## PRACTICE — Program Your own Decisions (10 minutes)

### Task 1: Magic 8-Ball (everyone)

Write a program where:
- Pressing **Button A** shows Image.YES on the display
- Pressing **Button B** shows Image.NO on the display
- When nothing is pressed, the display shows a question mark: `display.show("?")`

```python
from microbit import *

while True:
    if button_a.is_pressed():
        # YOUR CODE HERE
    elif button_b.is_pressed():
        # YOUR CODE HERE
    else:
        # YOUR CODE HERE
```

### Task 2: Happy / Sad Switch

Modify your program so:
- Button A shows a HAPPY face
- Button B shows a SAD face
- Nothing pressed = SURPRISED face

Test it in the simulator by clicking the A and B buttons on the virtual micro:bit.

### Task 3: Draw the Flowchart

In your notebook, draw a flowchart for your Task 2 program. Use diamond shapes for decisions and rectangles for actions. Show what happens for each button, and what happens when neither is pressed.

### 🚀 Extension: Temperature Check

Can you use `if` to make the micro:bit show a hot or cold image based on temperature?

```python
from microbit import *

while True:
    temp = temperature()   # Get the current temperature (in Celsius)
    if temp > 25:
        display.scroll("HOT")
    else:
        display.scroll("COOL")
    sleep(2000)
```

Try changing the number `25`. What happens if you use `20`? Or `30`?

---

## PROGRESS LOG ENTRY — Lesson 3 (5 minutes)

---

**Lesson 3 Log — [Today's Date]**

**I learned…**  
*(Explain what selection means and what `if`/`else` does. Why do we need `while True`?)*

**I tried…**  
*(Which tasks did you complete? Did your flowchart match your code?)*

**I wonder…**  
*(Can you think of a time where you would need more than 2 options? What if there were 3 conditions to check?)*

---

## Lesson Summary

Today you learned:

✅ **Selection** lets your program make choices  
✅ `while True` keeps the program running in a loop  
✅ `if` runs code when a condition is **True**  
✅ `else` runs code when the condition is **False**  
✅ `elif` checks another condition before going to `else`  
✅ **Indentation** tells Python what is inside each block  

Next lesson, you'll learn how to make your program repeat actions using **loops**!

---

*Lesson 3 of 10 | Think Like a Computer: Micro:bit & Computational Thinking*  
*NSW Technology 7–8 (2023) | TE4-DIG-01, TE4-DIG-02*
