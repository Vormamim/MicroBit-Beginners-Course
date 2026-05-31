# Lesson 9 — Design Your Own

**Duration:** 40 minutes  
**SOLO Level:** Extended Abstract — You will independently apply ALL concepts to a new, self-chosen problem  
**Computational Thinking Pillar:** All four (student-directed)

---

## NSW Outcomes
- **TE4-DIG-01** — Demonstrates technological literacy to safely interact in digital environments
- **TE4-DIG-02** — Uses data and digital systems to code, design and produce projects
- *Contributing:* TE4-PPM-01, TE4-DES-01

---

## Learning Intentions

By the end of this lesson, you will be able to:

1. Use the **design process** (plan → code → test → improve) independently
2. Choose and justify which sensors and concepts to use for your own project
3. Write, test, and debug a complete original program
4. Evaluate your program against your original design

---

## Success Criteria

You'll know you've got it when you can:
- [ ] Complete a written plan BEFORE starting to code
- [ ] Build a working program that does what your plan says
- [ ] Identify one thing that worked and one thing you would improve
- [ ] Explain your project using the IPO model

---

## Key Vocabulary

| Word | What it means |
|------|--------------|
| **Design brief** | A short description of the problem you're trying to solve |
| **Prototype** | An early, working version of your solution — not perfect, but functional |
| **Evaluate** | Check your solution against your original plan |
| **Iterate** | Improve by making small changes and testing each one |

---

## HOOK — Technology Solves Problems (5 minutes)

Your teacher shows images of three everyday devices:
- A smoke alarm
- A pedometer (step counter)
- A parking sensor in a car

> *"Each of these started with someone noticing a PROBLEM and thinking: could a small computer help solve this? Today, you're that person. What problem can your micro:bit help solve?"*

---

## THEORY — The Design Process (10 minutes)

### The 4-Step Design Process

Good programmers don't just start typing. They follow a process:

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  1. PLAN    │────▶│  2. CODE    │────▶│  3. TEST    │────▶│  4. IMPROVE │
│             │     │             │     │             │     │             │
│ What will   │     │ Write your  │     │ Does it do  │     │ Fix bugs,   │
│ it do?      │     │ program     │     │ what you    │     │ add features│
│ Draw IPO    │     │             │     │ planned?    │     │ ──▶ back to │
│             │     │             │     │             │     │ step 3      │
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘
```

**This process loops.** You go from Test back to Improve many times before a program is finished. That's normal — it's not a sign you're doing it wrong.

### The Design Plan Template

Before you write any code, complete this planning template:

---

**My Project Plan**

**Project name:** ___________________________________

**The problem I am solving:**  
*(In one sentence, what will your program do?)*

**IPO Plan:**

| Input | Processing | Output |
|-------|-----------|--------|
| | | |
| | | |

**Concepts I will use:**  
*(tick all that apply)*
- [ ] Sequence
- [ ] Selection (if/elif/else)
- [ ] Loops (for / while)
- [ ] Variables
- [ ] Sensors
- [ ] Random numbers

**Hardware I will use:**
- [ ] Button A
- [ ] Button B
- [ ] LED Display
- [ ] Accelerometer
- [ ] Temperature sensor
- [ ] Light sensor
- [ ] 🔊 Microphone (V2 only)

---

### Project Ideas (if you need inspiration)

Choose from this list, or invent your own:

| Project | Description | Sensors used |
|---------|-------------|-------------|
| Coin flipper | Press A to flip a virtual coin — heads or tails | Buttons |
| Step counter | Count shakes as steps; press B to display | Accelerometer |
| Digital dice | Shake to roll 1–6 | Accelerometer, random |
| Compass display | Point in a direction, see N/S/E/W | Compass |
| Mood tracker | Press A/B throughout the day to log mood | Buttons, variables |
| Thermometer | Shows temperature with a visual indicator | Temperature sensor |
| Secret message | Shake to decode a hidden message | Accelerometer |
| Night light alert | Warns if room gets too dark | Light sensor |
| Mini quiz | Ask a question, A = True, B = False | Buttons |

---

## PRACTICE — Plan, Build, Test (25 minutes combined model + practice)

Your teacher will walk around and help while you work through the design process.

### Step 1: Plan (5 minutes)

Complete the Design Plan Template above in your notebook or log.

**Do not skip this step.** If you start coding without a plan, your teacher will ask you to go back.

### Step 2: Code (15 minutes)

Open [python.microbit.org/v/3](https://python.microbit.org/v/3) and build your program.

**Tips as you code:**
- Start with a simple version that does the basics — get that working first
- Add one feature at a time
- If something breaks, use the 5-step debug process from Lesson 8
- Use `print()` to check what your variables are doing

**Code starter — copy this structure:**
```python
from microbit import *

# --- Your variables here ---


# --- Your setup code here (things that run once) ---
display.scroll("My Project")

# --- Your main loop ---
while True:
    # --- Your main code here ---
    pass  # Delete this line when you add your own code
```

### Step 3: Test (5 minutes)

When your program runs, test it properly:
- Does it do what your plan said it would?
- What happens if you press buttons in an unexpected order?
- Does it handle edge cases? (e.g. what if no button is pressed for 10 seconds?)

Write your test results in your log.

---

## PROGRESS LOG ENTRY — Lesson 9 (5 minutes)

---

**Lesson 9 Log — [Today's Date]**

**I learned…**  
*(What is the 4-step design process? Why is it important to plan before coding?)*

**I tried…**  
*(Describe your project. What was your plan? Did the program do what you planned? Paste or write your code if you can.)*

**I wonder…**  
*(What would you add to your project if you had more time? What new feature would make it better?)*

---

## Lesson Summary

Today you learned:

✅ The **design process**: Plan → Code → Test → Improve (and repeat)  
✅ A **design plan** with an IPO diagram saves time and reduces bugs  
✅ Starting **simple** then adding features one at a time works better than trying to build everything at once  
✅ Testing against your **original plan** tells you if you succeeded  

Next lesson is your final showcase — you'll present and reflect on your learning across the whole course!

---

*Lesson 9 of 10 | Think Like a Computer: Micro:bit & Computational Thinking*  
*NSW Technology 7–8 (2023) | TE4-DIG-01, TE4-DIG-02*
