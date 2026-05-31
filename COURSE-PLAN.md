# Think Like a Computer: Micro:bit & Computational Thinking

## About This Course

**Title:** Think Like a Computer: Micro:bit & Computational Thinking
**Target Audience:** Year 7–8 students (approx. age 13), no prior coding or computational thinking experience
**Duration:** 10 lessons × 40 minutes
**Hardware:** BBC micro:bit V1 or V2 (both supported)
**Coding Environment:** [python.microbit.org/v/3](https://python.microbit.org/v/3) — the official MicroPython online editor
**Literacy Level:** Plain English, short sentences, vocabulary explained in context

---

## NSW Curriculum Alignment

**Syllabus:** Technology 7–8 Syllabus (2023) — Implementation from 2026
**Focus Area:** Digital and Communication Technologies

### Primary Outcomes

| Code                 | Outcome                                                                        |
| -------------------- | ------------------------------------------------------------------------------ |
| **TE4-DIG-01** | Demonstrates technological literacy to safely interact in digital environments |
| **TE4-DIG-02** | Uses data and digital systems to code, design and produce projects             |

### Contributing Outcomes

| Code       | Outcome                                                                  |
| ---------- | ------------------------------------------------------------------------ |
| TE4-PPM-01 | Applies processes in the planning, management and production of projects |
| TE4-DES-01 | Communicates and evaluates design ideas and solutions                    |
| TE4-MSC-01 | Explains how materials, systems and components contribute to solutions   |

---

## About the micro:bit Python Editor

**URL:** [https://python.microbit.org/v/3](https://python.microbit.org/v/3)

- Works with **both V1 and V2** micro:bits
- Runs in any modern web browser — no installation needed
- Includes a built-in **simulator** (shows a V2 screen; V1 users can still use it)
- Features **drag-and-drop code blocks** to help beginners
- Features that are **V2 only** are clearly labelled in the editor's Reference panel
- Students can **save** their code as a `.hex` file or `.py` Python file
- Works offline once the page has loaded

> **V1 vs V2 Note for Teachers:** V2 adds a built-in speaker, microphone, and more memory. All 10 lessons are written to work on both. Any V2-only extension activity is clearly marked with a 🔊 icon.

---

## Pedagogical Framework

### Biggs SOLO Taxonomy — Increasing Depth Over 10 Lessons

This course uses the **SOLO Taxonomy** (Structure of Observed Learning Outcomes) by John Biggs to deliberately increase cognitive complexity:

| SOLO Level                  | Description                       | Lessons                      |
| --------------------------- | --------------------------------- | ---------------------------- |
| **Pre-structural**    | No understanding yet              | Entry point for all students |
| **Uni-structural**    | One idea, one connection          | Lessons 1–2                 |
| **Multi-structural**  | Multiple ideas, not yet connected | Lessons 3–4                 |
| **Relational**        | Ideas connected to form a whole   | Lessons 5–7                 |
| **Extended Abstract** | Generalises to new situations     | Lessons 8–10                |

### Computational Thinking Pillars

Each lesson addresses at least one of the four CT pillars:

| Pillar                        | Description                                 |
| ----------------------------- | ------------------------------------------- |
| **Decomposition**       | Breaking a big problem into smaller parts   |
| **Pattern Recognition** | Spotting similarities and repetition        |
| **Abstraction**         | Focusing on what matters, ignoring the rest |
| **Algorithm Design**    | Creating step-by-step solutions             |

---

## The 10-Lesson Sequence at a Glance

| #  | Title                        | CT Pillar(s)        | SOLO Level        | Key Concept                      |
| -- | ---------------------------- | ------------------- | ----------------- | -------------------------------- |
| 1  | What Is a Computer Thinking? | Decomposition       | Uni-structural    | Input → Process → Output model |
| 2  | Hello, micro:bit!            | Algorithm Design    | Uni-structural    | Sequence & syntax                |
| 3  | Making Decisions             | Pattern Recognition | Multi-structural  | Selection (if/else)              |
| 4  | Repeat Yourself              | Pattern Recognition | Multi-structural  | Loops (while/for)                |
| 5  | Talking to the World         | Abstraction         | Relational        | Variables & data                 |
| 6  | Sensing the World            | Decomposition       | Relational        | Input from sensors               |
| 7  | Build a Mini-Game            | All four            | Relational        | Combining concepts               |
| 8  | Fixing What's Broken         | Abstraction         | Extended Abstract | Debugging & testing              |
| 9  | Design Your Own              | All four            | Extended Abstract | Problem-solving process          |
| 10 | Show What You Know           | All four            | Extended Abstract | Reflect, present & review        |

---

## Lesson Structure Template

Every lesson follows this structure (40 minutes):

```
HOOK          (5 min)  — Engage students with a real-world question
THEORY        (10 min) — Teach the concept with clear explanation and diagram
MODEL         (10 min) — Teacher live-codes / demonstrates step by step
PRACTICE      (10 min) — Students code their own version
LOG           (5 min)  — Students write their personal progress log entry
```

---

## Student Progress Log

Every student keeps a **Personal Progress Log** throughout the course. This is a record of their thinking, not just their code.

### Log Format (per lesson)

Students respond to three prompts at the end of each lesson:

1. **I learned…** *(one new concept in their own words)*
2. **I tried…** *(what code they wrote or task they attempted)*
3. **I wonder…** *(one question they still have, or something they want to try)*

Log entries can be:

- A physical notebook
- A digital document (Word, Google Docs, Notion)
- A markdown file in their GitHub repo (if using the full GitHub Pages setup)

---

## Input, Processing, Output Framework

Every lesson makes explicit the **IPO model**:

> **Input** — What data goes IN to the micro:bit (button press, sensor reading, etc.)
> **Processing** — What the micro:bit DOES with that data (math, decision, loop)
> **Output** — What comes OUT (LED display, sound, number, message)

This framework threads through all 10 lessons and is introduced formally in Lesson 1.

---

## GitHub Pages Hosting Plan

This course is designed to be hosted as a **GitHub Pages site** with a supporting teacher repository.

### Recommended Repository Structure

```
microbit-ct-course/
├── README.md                    ← Landing page / course overview
├── COURSE-PLAN.md               ← This document
├── index.html                   ← GitHub Pages site entry (or use Jekyll)
├── lessons/
│   ├── lesson-01.md
│   ├── lesson-02.md
│   ├── ...
│   └── lesson-10.md
├── teacher-notes/
│   ├── teacher-guide.md         ← How to use this course
│   ├── lesson-01-teacher.md     ← Per-lesson teacher notes
│   └── ...
├── assets/
│   ├── diagrams/
│   └── code-examples/
│       ├── lesson-01-starter.py
│       └── ...
└── _config.yml                  ← Jekyll config for GitHub Pages
```

### GitHub Pages Options

- **Simple:** Push markdown files and use GitHub's default rendering
- **Intermediate:** Use Jekyll with a clean theme (e.g., Minima or Just the Docs)
- **Advanced:** Use MkDocs or Docusaurus for a full documentation site feel

---

## Equipment & Setup Checklist

### Per Student / Pair

- [ ] 1× BBC micro:bit (V1 or V2)
- [ ] 1× USB micro cable
- [ ] Computer with Chrome or Edge browser (recommended for USB flashing)

### Classroom

- [ ] Teacher computer with projector / screen share
- [ ] Internet connection (to access python.microbit.org)
- [ ] Printed or digital copy of progress log template

### No Hardware Option

All lessons can be completed using the **simulator** in the Python Editor — no physical micro:bit is required for core tasks.

---

## Differentiation Notes

| Student Need     | Strategy                                                               |
| ---------------- | ---------------------------------------------------------------------- |
| Early finishers  | Extension tasks marked 🚀 in each lesson                               |
| V2-only features | Extra activities marked 🔊 in each lesson                              |
| No hardware      | Use the built-in simulator at python.microbit.org                      |
| EAL/D students   | Key vocabulary defined in each lesson; short sentences throughout      |
| Lower literacy   | Pair with a peer; teacher models all steps before independent practice |

---

## Assessment Notes (TE4-DIG-01, TE4-DIG-02)

- The **Progress Log** provides formative evidence across all 10 lessons
- **Lesson 7** (Mini-Game) serves as a mid-point performance task
- **Lesson 10** (Show What You Know) is the summative showcase task
- Teachers can use the **IPO Framework** as a marking scaffold
- SOLO rubrics are included in `teacher-notes/teacher-guide.md`

---

*This course is open source under the MIT License. Teachers are encouraged to adapt, remix and share.*

*Aligned to: NSW Technology 7–8 Syllabus (2023) — TE4-DIG-01, TE4-DIG-02 — Implementation from 2026*
