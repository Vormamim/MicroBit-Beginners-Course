# Lesson 5 — Talking to the World

**Duration:** 40 minutes  
**SOLO Level:** Relational — You will connect variables, data types, and output together  
**Computational Thinking Pillar:** Abstraction

---

## NSW Outcomes
- **TE4-DIG-01** — Demonstrates technological literacy to safely interact in digital environments
- **TE4-DIG-02** — Uses data and digital systems to code, design and produce projects
- *Contributing:* TE4-DES-01 — Communicates and evaluates design ideas and solutions

---

## Learning Intentions

By the end of this lesson, you will be able to:

1. Define what a **variable** is and why it is useful
2. Create, update, and display variables in a Python program
3. Identify the three most common **data types** (integer, string, boolean)
4. Use a variable to store sensor data and display it

---

## Success Criteria

You'll know you've got it when you can:
- [ ] Create a variable and change its value during the program
- [ ] Display a variable's value on the micro:bit screen
- [ ] Explain what would break if you removed the variable from your program
- [ ] Identify the data type of at least three values

---

## Key Vocabulary

| Word | What it means |
|------|--------------|
| **Variable** | A named storage space for data — like a labelled box |
| **Integer** | A whole number (e.g. 3, -7, 100) |
| **String** | Text data (e.g. `"hello"`, `"42"`) |
| **Boolean** | A value that is either `True` or `False` |
| **`str()`** | Converts a number to text so you can display it |
| **`int()`** | Converts text to a number so you can do maths with it |

---

## HOOK — What's in the Box? (5 minutes)

Your teacher holds up a cardboard box labelled **"score"** and puts some pieces of paper inside.

> *"At the start of a game, the box is empty — score is zero. When you earn a point, we add 1 to the box. When you display the score, we look inside. The box is always labelled 'score' — but what's INSIDE changes."*

This is exactly what a **variable** is. A named box whose contents can change.

---

## THEORY — Variables and Data Types (10 minutes)

### Creating a Variable

In Python, you create a variable by giving it a name and a value:

```python
score = 0           # An integer variable
player_name = "Alex"  # A string variable
game_on = True       # A boolean variable
```

The `=` sign means "store this value in this variable." It's not asking "are they equal?" — it's saying "put this inside the box."

### Using and Updating a Variable

```python
score = 0           # Start score at 0
score = score + 1   # Add 1 to score
score = score + 1   # Add 1 again
                    # score is now 2
```

Read `score = score + 1` as: "The new value of score is the old value of score, plus one."

### The Three Main Data Types

| Type | Examples | When to use |
|------|----------|-------------|
| **Integer** (whole number) | `0`, `42`, `-5` | Scores, counts, sensor readings |
| **String** (text) | `"hello"`, `"yes"` | Messages, names, labels |
| **Boolean** (true/false) | `True`, `False` | Flags, on/off states |

> ⚠️ You can't do maths with strings! `"5" + "3"` gives you `"53"`, not `8`. Always use integers for calculations.

### Converting Between Types

```python
temp = temperature()      # temperature() gives an integer
display.scroll(str(temp)) # str() converts it to text for display
```

| Function | What it does | Example |
|----------|-------------|---------|
| `str(42)` | Integer → String | `"42"` |
| `int("42")` | String → Integer | `42` |

### Where Variables Fit in IPO

Variables are the **memory** of your program. They store what happened in the past so the program can make decisions now.

```
INPUT       →    PROCESSING           →    OUTPUT
Button A        score = score + 1          display(score)
pressed         (update the variable)      (read the variable)
```

---

## MODEL — Teacher Codes Live (10 minutes)

**Goal:** Build a score counter. Pressing A adds a point. Pressing B shows the score. Pressing A+B together resets the score.

```python
from microbit import *

score = 0

while True:
    if button_a.is_pressed():
        score = score + 1
        display.show(Image.YES)
        sleep(300)
        display.clear()
    
    elif button_b.is_pressed():
        display.scroll("Score: " + str(score))
    
    elif button_a.is_pressed() and button_b.is_pressed():
        score = 0
        display.scroll("Reset!")
```

**Key things to notice:**
- `score = 0` — the variable starts at zero
- `score = score + 1` — updates the variable
- `"Score: " + str(score)` — joins text and a number (must convert number to string first!)

**IPO Breakdown:**

| | What it is |
|--|------------|
| **Input** | Button A pressed, Button B pressed |
| **Processing** | Update score variable, check which button pressed |
| **Output** | YES image, scrolled score message, "Reset!" message |

---

## PRACTICE — Variables in Action (10 minutes)

### Task 1: Temperature Display (everyone)

Write a program that reads the temperature and displays it every 3 seconds.

```python
from microbit import *

while True:
    temp = temperature()
    display.scroll("Temp: " + str(temp) + "C")
    sleep(3000)
```

**Questions:**
- What data type is `temp`?
- What does `str(temp)` do and why is it needed?
- What is the **input**? What is the **output**?

### Task 2: Button Press Counter

Write a program that:
- Starts `count` at 0
- Adds 1 to `count` every time Button A is pressed
- Shows the count on screen after each press

Use `display.show(str(count))` to display the value.

### Task 3: Hot or Cold?

Combine variables and selection:

```python
from microbit import *

while True:
    temp = temperature()
    
    if temp > 28:
        display.scroll("Hot! " + str(temp) + "C")
    elif temp > 20:
        display.scroll("Warm " + str(temp) + "C")
    else:
        display.scroll("Cold " + str(temp) + "C")
    
    sleep(3000)
```

**Question:** Why do we store `temperature()` in a variable instead of calling it twice?

### 🚀 Extension: Average Temperature

Can you read the temperature 5 times and work out the average?

Hint: You'll need a `for` loop, a variable to add up the total, and `int()` or round division.

```python
from microbit import *

total = 0
for i in range(5):
    total = total + temperature()
    sleep(1000)

average = total // 5    # // means integer division (no decimals)
display.scroll("Avg: " + str(average))
```

---

## PROGRESS LOG ENTRY — Lesson 5 (5 minutes)

---

**Lesson 5 Log — [Today's Date]**

**I learned…**  
*(Explain what a variable is. Use the "labelled box" idea. What are the three data types?)*

**I tried…**  
*(Which tasks did you complete? For Task 1, what type of data is `temp`? Why do you need `str()`?)*

**I wonder…**  
*(What else would you like to store in a variable? Could you track something in real life with a micro:bit and a variable?)*

---

## Lesson Summary

Today you learned:

✅ A **variable** is a named storage space — like a labelled box  
✅ The three main data types are **integer**, **string**, and **boolean**  
✅ You can **update** a variable: `score = score + 1`  
✅ Use `str()` to convert a number to text for displaying  
✅ Variables store data between loops — they give your program **memory**  

Next lesson, you'll use the micro:bit's sensors as inputs to build more interactive programs!

---

*Lesson 5 of 10 | Think Like a Computer: Micro:bit & Computational Thinking*  
*NSW Technology 7–8 (2023) | TE4-DIG-01, TE4-DIG-02*
