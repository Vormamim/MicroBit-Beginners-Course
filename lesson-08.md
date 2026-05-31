# Lesson 8 — Fixing What's Broken

**Duration:** 40 minutes  
**SOLO Level:** Extended Abstract — You will diagnose unknown bugs and apply your knowledge to fix them  
**Computational Thinking Pillar:** Abstraction

---

## NSW Outcomes
- **TE4-DIG-01** — Demonstrates technological literacy to safely interact in digital environments
- **TE4-DIG-02** — Uses data and digital systems to code, design and produce projects
- *Contributing:* TE4-DES-01 — Communicates and evaluates design ideas and solutions

---

## Learning Intentions

By the end of this lesson, you will be able to:

1. Distinguish between **syntax errors** and **logic errors**
2. Use a systematic process to **debug** a broken program
3. Read Python error messages and understand what they mean
4. Apply debugging skills to code you didn't write yourself

---

## Success Criteria

You'll know you've got it when you can:
- [ ] Fix three broken programs provided in this lesson
- [ ] Explain the difference between a syntax error and a logic error
- [ ] Describe the debugging process you used
- [ ] Write a program with an intentional bug, then swap with a partner to fix

---

## Key Vocabulary

| Word | What it means |
|------|--------------|
| **Bug** | A mistake in code that causes unexpected behaviour |
| **Debugging** | The process of finding and fixing bugs |
| **Syntax error** | Code that doesn't follow Python's grammar rules |
| **Logic error** | Code that runs without crashing but does the wrong thing |
| **`print()`** | Displays a value in the console — useful for checking variables |
| **Trace** | Following a program's execution line by line in your head |

---

## HOOK — Find the Bug in This Recipe (5 minutes)

Your teacher displays this "recipe" for making toast:

```
1. Put bread in the toaster
2. Eat the toast
3. Push the lever down
4. Wait for the toast to pop up
5. Butter the toast
```

> *"What's wrong? Steps 2 and 3 are in the wrong order — that's a logic error. The steps are all valid actions, but the ORDER is wrong. This is different from writing nonsense (a syntax error)."*

Both types of error happen in code. Today you learn to find both.

---

## THEORY — Two Types of Bugs (10 minutes)

### Type 1: Syntax Errors — the code is written incorrectly

Python tells you straight away. The program won't run at all.

```python
# BROKEN:
from microbit import *
display.scroll("Hello"       # Missing closing bracket

# ERROR: SyntaxError: '(' was never closed
```

Common syntax errors:
- Missing brackets `(` `)` or quotes `"` `"`
- Wrong capitalisation (`Display` instead of `display`)
- Missing colon after `if`, `while`, `for`
- Wrong indentation (inconsistent spaces)

### Type 2: Logic Errors — the code runs but does the wrong thing

Python doesn't tell you — YOU have to notice.

```python
# This runs fine but counts backwards when it should count up:
from microbit import *
for i in range(5, 0, -1):    # This counts DOWN, not up
    display.show(str(i))
    sleep(500)
```

Logic errors are trickier because you need to understand what the code SHOULD do and compare it to what it ACTUALLY does.

### The Debugging Process

Use this process every time something doesn't work:

```
STEP 1: READ the error message (if there is one)
         What line? What type of error?

STEP 2: LOOK at the relevant code carefully
         Is there a typo? Missing bracket? Wrong indentation?

STEP 3: TRACE the code in your head
         What does each line do? What values do variables hold?

STEP 4: CHANGE one thing at a time
         Don't change everything at once — you won't know what fixed it

STEP 5: TEST after each change
         Does it work now? If not, go back to step 1
```

### Adding Debug Output

You can add `print()` statements to see what your variables are doing:

```python
from microbit import *

score = 0
while True:
    if button_a.is_pressed():
        score = score + 1
        print("Score is now:", score)   # Shows in the Python Editor console
        display.show(str(score))
```

The `print()` output appears in the bottom panel of the Python Editor.

---

## MODEL — Teacher Debugging Live (10 minutes)

Your teacher shows a broken program on the screen.

**Broken program:**
```python
from microbit Import *

score = 0
while true:
    if button_a.is_pressed()
        score = score + 1
        display.show(str(score)
    elif button_b.is_pressed():
        display.scroll("Score: " + score)
```

Teacher uses the 5-step debugging process out loud, finding each error one by one.

**Bugs in this program:**
1. `Import` should be `import` (capital I — syntax error)
2. `true` should be `True` (capital T — syntax error)
3. Missing colon after `if button_a.is_pressed()` (syntax error)
4. Missing closing bracket in `display.show(str(score)` (syntax error)
5. `"Score: " + score` — can't add string + integer (logic/type error — need `str(score)`)

---

## PRACTICE — Debug These Programs (10 minutes)

### Task 1: Fix the Syntax Errors

Copy each broken program into the editor. Find and fix all the errors.

**Broken Program A:**
```python
from microbit import *

while True
    if button_a.is_pressed():
        display.Show(Image.HAPPY)
    else
        display.show(image.SAD)
```

**Broken Program B:**
```python
from microbit import *

for i in range(1 6):
    display.scroll(i)
    sleep(500
```

### Task 2: Fix the Logic Errors

These programs run without crashing — but they do the wrong thing. Figure out what they SHOULD do, then fix them.

**Broken Program C** — should count UP from 0 to 9, but it doesn't:
```python
from microbit import *

for i in range(9, -1, -1):
    display.show(str(i))
    sleep(500)
```

**Broken Program D** — should show HAPPY when warm (>22°C) and SAD when cold, but it's backwards:
```python
from microbit import *

while True:
    temp = temperature()
    if temp < 22:
        display.show(Image.HAPPY)
    else:
        display.show(Image.SAD)
    sleep(2000)
```

### Task 3: Write a Bug for Your Partner

1. Write a working program (any topic from this course)
2. Introduce exactly TWO deliberate bugs — one syntax, one logic
3. Swap with a partner
4. Fix each other's bugs
5. Explain to each other what bugs you found and how you fixed them

### 🚀 Extension: Trace Before You Run

Before running Broken Program B above, **trace it on paper**:
- What do you think `range(1 6)` was trying to do?
- Write out what each iteration of the loop would do IF it ran
- Then fix it and verify your prediction was correct

---

## PROGRESS LOG ENTRY — Lesson 8 (5 minutes)

---

**Lesson 8 Log — [Today's Date]**

**I learned…**  
*(Explain the difference between a syntax error and a logic error. Which do you find harder to fix, and why?)*

**I tried…**  
*(Which broken programs did you fix? What bugs did your partner put in their code? What bugs did you find?)*

**I wonder…**  
*(Professional programmers spend a lot of time debugging. Why do you think it's impossible to write perfect code the first time?)*

---

## Lesson Summary

Today you learned:

✅ **Syntax errors** stop the program running — Python tells you where  
✅ **Logic errors** let the program run but it does the wrong thing  
✅ The **5-step debugging process** helps you find any bug systematically  
✅ `print()` is your best friend for watching variables during debugging  
✅ Changing **one thing at a time** is essential when fixing bugs  

Next lesson, you'll design and build your own project from scratch!

---

*Lesson 8 of 10 | Think Like a Computer: Micro:bit & Computational Thinking*  
*NSW Technology 7–8 (2023) | TE4-DIG-01, TE4-DIG-02*
