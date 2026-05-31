# Lesson 4 — Repeat Yourself

**Duration:** 40 minutes  
**SOLO Level:** Multi-structural — You will use TWO types of loops and see how they connect  
**Computational Thinking Pillar:** Pattern Recognition

---

## NSW Outcomes
- **TE4-DIG-01** — Demonstrates technological literacy to safely interact in digital environments
- **TE4-DIG-02** — Uses data and digital systems to code, design and produce projects
- *Contributing:* TE4-PPM-01 — Applies processes in planning, management and production of projects

---

## Learning Intentions

By the end of this lesson, you will be able to:

1. Explain what a **loop** is and why it saves time
2. Write a `for` loop that repeats a fixed number of times
3. Write a `while True` loop that repeats until a condition changes
4. Identify a pattern in real life that could be coded as a loop

---

## Success Criteria

You'll know you've got it when you can:
- [ ] Write a `for` loop that makes the display count from 1 to 5
- [ ] Write a `while` loop that keeps flashing until a button is pressed
- [ ] Explain the difference between a `for` loop and a `while` loop
- [ ] Identify at least one real-world example of each type of loop

---

## Key Vocabulary

| Word | What it means |
|------|--------------|
| **Loop** | A block of code that repeats |
| **`for` loop** | A loop that repeats a set number of times |
| **`while` loop** | A loop that repeats as long as a condition is True |
| **Iteration** | One single run-through of a loop |
| **`range()`** | A Python function that creates a sequence of numbers |
| **`break`** | A command that exits a loop early |

---

## HOOK — When Does Life Repeat? (5 minutes)

Your teacher asks: *"Name something you do every day that repeats — and how many times?"*

Examples students often give:
- Breathing — forever, until… not great to think about
- Checking your phone — maybe 100 times a day?
- Heartbeat — about 70 times per minute

> *Two types of repetition exist. Some things repeat a FIXED number of times. Some things repeat FOREVER (or until something changes). Can you spot which is which in your examples?*

---

## THEORY — Loops in Python (10 minutes)

### Why loops?

Without loops, if you wanted to show the numbers 1 to 10, you'd write:

```python
display.scroll("1")
display.scroll("2")
display.scroll("3")
# ... 7 more lines
```

That's tedious and creates lots of repeated code. A loop solves this.

### Type 1: The `for` loop — repeat a fixed number of times

```python
from microbit import *

for i in range(5):
    display.scroll(str(i))
```

This counts 0, 1, 2, 3, 4 — five times through.

**Breaking it down:**
- `for i in range(5):` — "For each number i in the range 0 to 4..."
- `display.scroll(str(i))` — "Display that number" (`str()` converts the number to text)

> 💡 `range(5)` gives you 0, 1, 2, 3, 4 — it **starts at 0**, not 1. To count from 1 to 5, use `range(1, 6)`.

**`range()` options:**

| Code | What it counts |
|------|----------------|
| `range(5)` | 0, 1, 2, 3, 4 |
| `range(1, 6)` | 1, 2, 3, 4, 5 |
| `range(0, 10, 2)` | 0, 2, 4, 6, 8 (every 2nd number) |

### Type 2: The `while` loop — repeat until a condition changes

You already know `while True` — it repeats forever.

But you can also use a condition:

```python
from microbit import *

count = 0
while count < 3:
    display.show(Image.HEART)
    sleep(500)
    display.clear()
    sleep(500)
    count = count + 1
```

This flashes a heart 3 times, then stops.

**Breaking it down:**
- `count = 0` — start at zero
- `while count < 3:` — keep looping while count is less than 3
- `count = count + 1` — add 1 to count each time around

### `while True` with a `break`

Sometimes you want to loop forever BUT stop when something specific happens:

```python
from microbit import *

while True:
    display.show(Image.HEART)
    sleep(500)
    display.clear()
    sleep(500)
    if button_a.is_pressed():
        break  # Exit the loop when A is pressed

display.scroll("Done!")
```

---

## MODEL — Teacher Codes Live (10 minutes)

**Goal:** Build a simple countdown timer that counts down from 5 to 0 then shows a HAPPY face.

```python
from microbit import *

display.scroll("GO!")

for i in range(5, 0, -1):    # Count from 5 down to 1
    display.show(str(i))
    sleep(1000)               # Wait 1 second each number

display.show(Image.HAPPY)
display.scroll("Time's up!")
```

**IPO Breakdown:**

| | What it is |
|--|------------|
| **Input** | The range of numbers (5 down to 1) |
| **Processing** | The `for` loop counts down, `sleep` creates the timing |
| **Output** | Numbers 5–1 on display, then a happy face and message |

**Watch for:**
- `range(5, 0, -1)` — start at 5, stop before 0, step of -1 (going backwards)
- `str(i)` — converts the number `i` to text so `display.show()` can use it
- The `sleep(1000)` — this is what creates the 1-second pause between numbers

---

## PRACTICE — Your Turn With Loops (10 minutes)

### Task 1: Count Up (everyone)

Write a program that counts from 1 to 5 on the display, with a 0.5 second pause between each number.

```python
from microbit import *

for i in range(1, 6):
    display.show(str(i))
    sleep(500)

display.scroll("Done!")
```

Test it in the simulator.

### Task 2: Heartbeat

Write a program that flashes a heart on and off exactly 5 times, then shows the number "5".

Hint: Use a `for` loop. Inside the loop, show the heart, sleep, clear, sleep.

### Task 3: Keep Flashing Until A

Write a program that flashes an image repeatedly until Button A is pressed.

```python
from microbit import *

while True:
    display.show(Image.HEART)
    sleep(400)
    display.clear()
    sleep(400)
    if button_a.is_pressed():
        break

display.scroll("Stopped!")
```

**Question to answer in your log:** What is the **input**, **processing**, and **output** in Task 3?

### 🚀 Extension: Step Counter Simulation

```python
from microbit import *

steps = 0

while True:
    if accelerometer.was_gesture("shake"):
        steps = steps + 1
        display.scroll(str(steps))
```

This counts "steps" (actually shakes). Try it in the simulator by clicking the shake button. What happens to `steps` each time you shake?

---

## PROGRESS LOG ENTRY — Lesson 4 (5 minutes)

---

**Lesson 4 Log — [Today's Date]**

**I learned…**  
*(Explain the difference between a `for` loop and a `while` loop. When would you use each one?)*

**I tried…**  
*(Which tasks did you finish? Write the IPO for Task 3.)*

**I wonder…**  
*(What could you build with a loop and a sensor? What would you want to count or repeat?)*

---

## Lesson Summary

Today you learned:

✅ A **loop** repeats code without you writing it over and over  
✅ A **`for` loop** repeats a fixed number of times using `range()`  
✅ A **`while` loop** repeats as long as a condition is True  
✅ `break` exits a loop early  
✅ `range()` can count up, down, or in steps  

Next lesson, you'll learn how to store and use data using **variables**!

---

*Lesson 4 of 10 | Think Like a Computer: Micro:bit & Computational Thinking*  
*NSW Technology 7–8 (2023) | TE4-DIG-01, TE4-DIG-02*
