# Lesson 1 — What Is a Computer Thinking?

**Duration:** 40 minutes
**SOLO Level:** Uni-structural — You will identify ONE key idea (the IPO model)
**Computational Thinking Pillar:** Decomposition

---

## NSW Outcomes

- **TE4-DIG-01** — Demonstrates technological literacy to safely interact in digital environments
- **TE4-DIG-02** — Uses data and digital systems to code, design and produce projects
- *Contributing:* TE4-MSC-01 — Explains how materials, systems and components contribute to solutions

---

## Learning Intentions

By the end of this lesson, you will be able to:

1. Explain what **computational thinking** means in your own words
2. Identify the **Input → Process → Output** model in everyday technology
3. Label the parts of a BBC micro:bit using correct names

---

## Success Criteria

You'll know you've got it when you can:

- [ ] Name at least 3 inputs and 3 outputs on a micro:bit
- [ ] Draw or describe a real-world example using the IPO model
- [ ] Write your first log entry using the I learned / I tried / I wonder format

---

## Key Vocabulary

| Word                             | What it means                                                                                       |
| -------------------------------- | --------------------------------------------------------------------------------------------------- |
| **Computational thinking** | A way of solving problems by thinking like a computer — breaking them down into small, clear steps |
| **Input**                  | Information that goes INTO a device (e.g. pressing a button)                                        |
| **Processing**             | What the device DOES with that information (e.g. checks if the button was pressed)                  |
| **Output**                 | What comes OUT of the device (e.g. a light turns on)                                                |
| **Algorithm**              | A step-by-step set of instructions for solving a problem                                            |
| **micro:bit**              | A small, programmable computer the size of your hand                                                |

---

## HOOK — What Does Your Brain Do? (5 minutes)

Your teacher will ask you this question:

> *"When you catch a ball, what steps does your brain follow?"*

Think about it, then share with a partner. You'll probably come up with something like:

1. **See** the ball coming ← *this is INPUT*
2. **Calculate** where it will land ← *this is PROCESSING*
3. **Move your hand** to catch it ← *this is OUTPUT*

🧠 Congratulations — you just described computational thinking!

---

## THEORY — The IPO Model (10 minutes)

Every computer — from your phone to a giant supercomputer — follows the same basic idea:

```
[ INPUT ] ──▶ [ PROCESSING ] ──▶ [ OUTPUT ]
```

### What is INPUT?

Input is any information that comes **into** a system.

Examples on a micro:bit:

- Pressing Button A or Button B
- Tilting or shaking the micro:bit (accelerometer)
- Temperature reading from the temperature sensor
- Light level reading from the LED display
- (V2 only 🔊) Sound detected by the microphone

### What is PROCESSING?

Processing is what happens **in the middle**. The computer follows your instructions (your code) to decide what to do.

Example: *If Button A is pressed AND the temperature is above 30, turn on the display.*

### What is OUTPUT?

Output is what comes **out** of the system — how it responds.

Examples on a micro:bit:

- Lighting up the 5×5 LED display
- Displaying a number or message
- (V2 only 🔊) Playing a sound through the speaker

### The IPO Model in real life

| Device           | Input                     | Processing                      | Output         |
| ---------------- | ------------------------- | ------------------------------- | -------------- |
| Automatic door   | Motion sensor detects you | Checks if motion was detected   | Door opens     |
| Traffic light    | Timer counts down         | Checks if time is up            | Changes colour |
| Your phone alarm | Clock reaches set time    | Checks if it matches alarm time | Sound plays    |

---

## MEET YOUR MICRO:BIT (10 minutes)

Look at the micro:bit your teacher has set up on the board (or open [python.microbit.org/v/3](https://python.microbit.org/v/3) and look at the simulator on the left).

### Label the parts

Here is a diagram of the micro:bit. Match each label to the correct part:

```
         ┌─────────────────────────────┐
         │  . . . . .   LED DISPLAY    │
         │  . . . . .   (5×5 grid)     │
         │  . . . . .                  │
         │  . . . . .                  │
         │  . . . . .                  │
         │                             │
         │  [A]              [B]       │
         │  Button           Button    │
         └───────────────────────────  │
              USB        Battery
             (micro)     connector
```

**Inputs on the micro:bit:**

- Button A (left button)
- Button B (right button)
- Accelerometer (detects movement, tilt, shake)
- Temperature sensor
- Light sensor (uses the LED display)
- Compass (magnetometer)
- 🔊 V2 only: Microphone

**Outputs on the micro:bit:**

- 25 LEDs on the display (5 rows × 5 columns)
- 🔊 V2 only: Built-in speaker
- Pins on the bottom edge (can connect buzzers, motors, etc.)

---

## PRACTICE — The IPO Sort (10 minutes)

### Task 1: Sort the list

Look at the list below. Write each item in the correct column of your book or workbook.

**Items to sort:** button press, LED lights up, shake detected, number displayed, temperature read, sound played, compass reading, message scrolls across screen

| INPUT | PROCESSING (the code does this) | OUTPUT |
| ----- | ------------------------------- | ------ |
|       |                                 |        |
|       |                                 |        |
|       |                                 |        |

### Task 2: Design an IPO

Choose ONE real-world device (not a micro:bit). Draw or write:

- What is its **input**?
- What does it **process**?
- What is its **output**?

Examples: a toaster, a smoke alarm, a calculator, a lift/elevator, a hand dryer.

### Extension Task

Open [python.microbit.org/v/3](https://python.microbit.org/v/3). Look at the example code that loads when you first open the editor.

Can you spot:

- What is the **input**?
- What is the **output**?
- What do you think the **processing** does?

Write your answers in your log.

---

## PROGRESS LOG ENTRY — Lesson 1 (5 minutes)

Open your progress log (notebook, doc, or file) and write today's entry. Use this format every lesson:

---

**Lesson 1 Log — [Today's Date]**

**I learned…**
*(Write one thing you learned today in your own words. Don't copy — say it how you'd explain it to a friend.)*

**I tried…**
*(Describe the practice task you did. What did you sort? What device did you design an IPO for?)*

**I wonder…**
*(Write one question you still have, or one thing you'd like to try next time.)*

---

> 💡 **Tip:** Your log is for YOU. There are no wrong answers. Be honest — if something confused you, write that! It helps you learn.

---

## Lesson Summary

Today you learned:

✅ Computers follow the **Input → Process → Output** model
✅ The micro:bit has many **inputs** (buttons, sensors) and **outputs** (LEDs, speaker)
✅ **Computational thinking** means breaking problems into clear steps

Next lesson, you'll write your very first Python program on the micro:bit!

---

*Lesson 1 of 10 | Think Like a Computer: Micro:bit & Computational Thinking*
*NSW Technology 7–8 (2023) | TE4-DIG-01, TE4-DIG-02*
