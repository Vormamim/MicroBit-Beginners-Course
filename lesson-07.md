# Lesson 7 — Build a Mini-Game

**Duration:** 40 minutes  
**SOLO Level:** Relational — You will combine ALL previous concepts into one working system  
**Computational Thinking Pillar:** All four — Decomposition, Pattern Recognition, Abstraction, Algorithm Design

---

## NSW Outcomes
- **TE4-DIG-01** — Demonstrates technological literacy to safely interact in digital environments
- **TE4-DIG-02** — Uses data and digital systems to code, design and produce projects
- *Contributing:* TE4-PPM-01, TE4-DES-01

---

## Learning Intentions

By the end of this lesson, you will be able to:

1. Use **decomposition** to plan a game by breaking it into smaller parts
2. Combine sequence, selection, loops, variables, and sensors in one program
3. Test your program and identify at least one thing you would improve
4. Explain your program's IPO to a partner

---

## Success Criteria

You'll know you've got it when you can:
- [ ] Complete a working version of the Reaction Timer game (or your own variant)
- [ ] Describe how each concept from Lessons 1–6 appears in your program
- [ ] Name one bug you found and how you fixed it
- [ ] Explain your game to someone else using IPO language

---

## Key Vocabulary

| Word | What it means |
|------|--------------|
| **Decomposition** | Breaking a big problem into smaller, manageable parts |
| **`import random`** | Loads Python's random number tools |
| **`random.randint(a, b)`** | Gives a random whole number between a and b (inclusive) |
| **Testing** | Running your program and checking if it does what you intended |
| **Bug** | A mistake in code that causes it to behave unexpectedly |

---

## HOOK — What Makes a Good Game? (5 minutes)

Your teacher asks: *"Think of a simple game on a phone or console. What does it need to work?"*

Students brainstorm and usually land on:
- A **start** state
- Something that **challenges** the player
- A way to **score** or win/lose
- Some **randomness** so it's not always the same
- A way to **reset** and play again

> *"Today you'll build a micro:bit game that has ALL of these things — using code you already know."*

---

## THEORY — Decomposition and Random Numbers (10 minutes)

### Decomposition: Planning Before Coding

Before you write a single line, **break the game into parts**.

**The Reaction Timer Game:**
- The player waits for a signal to appear on screen
- When they see it, they press Button A as fast as possible
- The game measures how long they took (in milliseconds)
- It shows their reaction time and a rating

**Breaking it down:**

| Part | What it does | Concepts used |
|------|-------------|---------------|
| Wait to start | Show "Ready?" and wait for A | sequence, display |
| Random delay | Wait a random time before showing signal | `random`, `sleep` |
| Show signal | Display a smiley/target | display output |
| Measure time | Record when signal appeared, check time after button press | variable, loop |
| Show score | Display the reaction time | variable, display |
| Rating | Classify the time as fast/okay/slow | selection (if/elif/else) |

### Random Numbers

```python
import random

delay = random.randint(1000, 4000)  # Random number between 1000 and 4000
sleep(delay)                         # Wait that many milliseconds
```

This makes the game unpredictable — you don't know when the signal will appear!

### Measuring Time

```python
start = running_time()    # Returns milliseconds since micro:bit turned on
# ... (player reacts here) ...
end = running_time()
reaction = end - start    # Difference = reaction time in milliseconds
```

---

## MODEL — Teacher Codes Live (10 minutes)

Watch your teacher build the Reaction Timer step by step. Note which concept each section uses.

```python
from microbit import *
import random

# --- INTRO ---
display.scroll("Reaction!")
display.scroll("Press A when you see :)")
sleep(1000)

# --- GAME LOOP ---
while True:
    # Step 1: Wait for player to be ready
    display.show(Image.ASLEEP)
    while not button_a.is_pressed():
        sleep(100)
    
    display.clear()
    
    # Step 2: Random delay (so you can't predict it)
    delay = random.randint(1000, 4000)
    sleep(delay)
    
    # Step 3: Show the signal
    display.show(Image.HAPPY)
    start = running_time()    # Start the clock
    
    # Step 4: Wait for button press
    while not button_a.is_pressed():
        sleep(10)
    
    end = running_time()     # Stop the clock
    
    # Step 5: Calculate and display result
    reaction = end - start
    display.scroll(str(reaction) + "ms")
    
    # Step 6: Rate the result
    if reaction < 300:
        display.scroll("FAST!")
    elif reaction < 600:
        display.scroll("Good")
    else:
        display.scroll("Slow")
    
    sleep(2000)
```

**IPO Breakdown:**

| | What it is |
|--|------------|
| **Input** | Button A press (to start, and to react) |
| **Processing** | Random delay, time difference calculation, rating comparison |
| **Output** | Instructions, signal image, reaction time, rating text |

---

## PRACTICE — Build Your Game (10 minutes)

### Task 1: Type and Test the Reaction Timer (everyone)

Type the game above exactly. Test it in the simulator — click the A button when you see the happy face.

Fix any errors you encounter. What was the fastest reaction time you got?

### Task 2: Personalise It

Make at least TWO changes to the game. Ideas:

- Change the signal from Image.HAPPY to something else
- Add a different message for very slow reactions (> 1000ms)
- Change the random delay range to make it harder
- Add a "best score" tracker using a second variable
- Use Image.NO as a fake signal that appears sometimes and SHOULDN'T be clicked

### Task 3: Concept Check

In your notebook, write next to each concept which part of the game uses it:

| Concept | Where does it appear in the game? |
|---------|----------------------------------|
| Sequence | |
| Selection (if/elif/else) | |
| Loop (while) | |
| Variable | |
| Sensor / Input | |
| Output | |
| Random | |

### 🚀 Extension: Shake to React

Modify the game so the player has to **shake** the micro:bit to react, instead of pressing A.

Hint: Replace `button_a.is_pressed()` with `accelerometer.was_gesture("shake")`

---

## PROGRESS LOG ENTRY — Lesson 7 (5 minutes)

---

**Lesson 7 Log — [Today's Date]**

**I learned…**  
*(What does decomposition mean? How did you use it to plan the game today?)*

**I tried…**  
*(Did you complete the game? What two changes did you make? What was your best reaction time?)*

**I wonder…**  
*(What game would YOU build if you had more time? Describe it in 2–3 sentences using IPO language.)*

---

## Lesson Summary

Today you learned:

✅ **Decomposition** — break a big project into small steps before coding  
✅ `random.randint()` creates unpredictability in programs  
✅ `running_time()` measures time in milliseconds  
✅ All six previous concepts work **together** in one program  
✅ **Testing** reveals bugs that only show up when you actually run the code  

Next lesson, you'll learn how to find and fix bugs — one of the most important coding skills!

---

*Lesson 7 of 10 | Think Like a Computer: Micro:bit & Computational Thinking*  
*NSW Technology 7–8 (2023) | TE4-DIG-01, TE4-DIG-02*
