# Teacher Guide — Think Like a Computer: Micro:bit & Computational Thinking

## For Teachers — How to Use This Course

**Target Year:** 7–8 (age 12–14)
**Subject:** Technology — Digital and Communication Technologies Focus Area
**NSW Syllabus:** Technology 7–8 (2023), implementation from 2026
**Primary Outcomes:** TE4-DIG-01, TE4-DIG-02
**Duration:** 10 × 40-minute lessons

---

## Quick Start

1. **Hardware check:** One micro:bit per student or pair. V1 and V2 both work for all core tasks.
2. **Browser check:** Chrome or Edge strongly recommended. Direct USB flashing requires Chrome.
3. **Editor URL:** [https://python.microbit.org/v/3](https://python.microbit.org/v/3) — test access before lesson 1.
4. **No hardware?** All lessons work in the built-in simulator. You don't need physical devices.
5. **Print or share:** Lessons are student-facing markdown files. Share as PDFs, Google Docs, or via GitHub Pages.

---

## Curriculum Alignment Detail

### Primary Outcomes

**TE4-DIG-01** — Demonstrates technological literacy to safely interact in digital environments
*Addressed through:* All lessons — students use the online Python Editor safely and appropriately, understand how digital systems work (IPO model), and develop awareness of hardware components and their functions.

**TE4-DIG-02** — Uses data and digital systems to code, design and produce projects*Addressed through:*

- Lessons 1–6: Building coding skills (sequence, selection, iteration, variables, sensors)
- Lesson 7: Producing a working mini-game (design and produce)
- Lessons 8–9: Debugging and independent project design
- Lesson 10: Evaluation and presentation

### Contributing Outcomes

**TE4-PPM-01** — Applies processes in the planning, management and production of projects
*Addressed through:* Lesson 9 (design plan template), Lesson 10 (evaluation)

**TE4-DES-01** — Communicates and evaluates design ideas and solutions
*Addressed through:* IPO planning in every lesson, Lesson 10 presentation and self-evaluation

**TE4-MSC-01** — Explains how materials, systems and components contribute to solutions
*Addressed through:* Lessons 1, 6 (understanding sensors, hardware components)

---

## SOLO Taxonomy in Practice

This course uses John Biggs' SOLO taxonomy deliberately. Here is how to see it in student work:

### Uni-structural (Lessons 1–2)

Student can identify ONE aspect:

> "I know that `display.scroll()` shows text on the screen."

### Multi-structural (Lessons 3–4)

Student lists multiple aspects without connecting them:

> "I know about loops, and I know about if statements, and I know about buttons."

### Relational (Lessons 5–7)

Student connects the parts into a coherent system:

> "I used a variable to store the button press count, and an if statement to decide what to display based on that count."

### Extended Abstract (Lessons 8–10)

Student generalises beyond what was taught:

> "Debugging is like the scientific method — you form a hypothesis about what's wrong, test it, and revise. I use the same process when I troubleshoot anything, not just code."

---

## SOLO Assessment Rubric (TE4-DIG-02)

Use this rubric for the Lesson 9 project and/or Lesson 10 final log.

| SOLO Level        | Descriptor                                                            | Lesson 9 Evidence                                                                                  |
| ----------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Pre-structural    | No evidence of understanding                                          | No program submitted; log entries missing                                                          |
| Uni-structural    | Demonstrates one concept (e.g. only sequence)                         | Program runs but uses only display.scroll with no loops/variables/decisions                        |
| Multi-structural  | Uses multiple concepts but not well connected                         | Program uses loops, variables, and if statements but they don't work together coherently           |
| Relational        | Concepts work together in a complete, functional system               | Program solves the stated problem; IPO is clear; all parts serve a purpose                         |
| Extended Abstract | Generalises; evaluates; suggests improvements; connects to real world | Student explains trade-offs, identifies specific improvements, connects to real-world applications |

---

## Progress Log as Assessment Evidence

The 10-lesson log provides formative evidence for both outcomes. Look for:

**TE4-DIG-01:** Does the student understand what the device is doing? Do they use correct terminology (input, output, processing, sensor)? Do they demonstrate awareness of safe and responsible use?

**TE4-DIG-02:** Does the student describe what they coded? Do they reflect on whether it worked? Do they identify problems and solutions?

**Red flags in log entries:**

- "I learned to code" (too vague — ask "what specific concept?")
- Blank or one-word "I wonder" entries (prompt with "what confused you?")
- No "I tried" evidence (student may not have engaged with practical tasks)

---

## Differentiation

### For students who finish early (Extension tasks)

Each lesson has extension tasks clearly marked. For consistent early finishers:

- Challenge them to combine extensions: "Can you add a high score to the reaction timer that persists using a variable?"
- Direct to micro:bit project ideas: [microbit.org/projects](https://microbit.org/projects)
- Suggest they create their own "lesson challenge" for a classmate

### For students who struggle

| Challenge               | Strategy                                                                                                 |
| ----------------------- | -------------------------------------------------------------------------------------------------------- |
| Syntax errors frustrate | Ensure they type exactly — use a physical checklist: brackets closed? quotes closed? capital T in True? |
| Can't connect concepts  | Work through the IPO diagram first; always answer "what is the input?" before coding                     |
| Freeze at blank screen  | Give them starter code from the lesson to modify, rather than typing from scratch                        |
| EAL/D students          | Pair with a supportive peer; vocabulary tables in each lesson are a reference                            |
| No hardware             | Simulator works for all core tasks — assure the student their work is valid                             |

### V1 vs V2 Hardware

All lessons are written for both. The key differences:

| Feature    | V1               | V2          |
| ---------- | ---------------- | ----------- |
| Speaker    | ❌ External only | ✅ Built-in |
| Microphone | ❌ No            | ✅ Yes      |
| RAM        | 16KB             | 128KB       |
| Flash      | 256KB            | 512KB       |

V2-only activities are marked 🔊. Students with V1 hardware skip these — there is no disadvantage to core tasks.

---

## Lesson Timing Notes

Each lesson is 40 minutes. The template is:

| Phase    | Time   | Notes                                                                     |
| -------- | ------ | ------------------------------------------------------------------------- |
| Hook     | 5 min  | Keep brisk — the hook is a warm-up, not deep discussion                  |
| Theory   | 10 min | Use your projector; cold-call students to check understanding             |
| Model    | 10 min | Live code — resist the urge to paste pre-written code                    |
| Practice | 10 min | Circulate; use the "3 before me" rule (ask 3 peers before asking teacher) |
| Log      | 5 min  | Non-negotiable — this is where consolidation happens                     |

**If time is short:** Cut from the practice extension tasks, never from the log.

---

## GitHub Pages Hosting Guide

### Option 1 — Simple (Recommended to Start)

1. Create a GitHub account at [github.com](https://github.com)
2. Create a new repository named `microbit-ct-course`
3. Set visibility to **Public**
4. Upload all markdown files from the `lessons/` folder
5. Go to **Settings → Pages → Source → main branch → /root**
6. GitHub will publish your site at `https://[your-username].github.io/microbit-ct-course`

Students can view lesson files directly on GitHub — markdown renders automatically.

### Option 2 — Styled Site with Jekyll

Add a `_config.yml` file:

```yaml
theme: minima
title: Think Like a Computer
description: Micro:bit Computational Thinking — NSW Technology 7-8
```

GitHub will automatically build a clean styled site.

### Option 3 — Just the Docs (Professional)

For a documentation-style site with sidebar navigation:

1. Use the [just-the-docs](https://just-the-docs.com) Jekyll theme
2. Add front matter to each lesson file:

```yaml
---
layout: default
title: Lesson 1
nav_order: 1
parent: Lessons
---
```

### Repository Structure

```
microbit-ct-course/
├── README.md            ← Describes the course (shown on GitHub front page)
├── COURSE-PLAN.md       ← Full course plan
├── lessons/
│   ├── lesson-01.md
│   ├── lesson-02.md
│   ├── ...
│   └── lesson-10.md
├── teacher-notes/
│   └── teacher-guide.md ← This file
├── assets/
│   └── code-examples/
│       ├── lesson-02-starter.py
│       ├── lesson-07-reaction-timer.py
│       └── ...
└── _config.yml          ← Jekyll config (if using themes)
```

### Making it a Template for Other Teachers

1. On GitHub, go to **Settings → Template repository ✓**
2. Other teachers can click "Use this template" to create their own copy
3. They can then edit it to suit their school context

---

## Frequently Asked Questions

**Q: Do students need their own GitHub accounts?**
A: Not for viewing. If you want students to submit their code, yes — but for classroom use, students can save `.py` files to their school drives.

**Q: Can I use this with MakeCode instead of the Python Editor?**
A: The lessons are written specifically for the Python Editor. MakeCode uses a different version of Python and a different interface. The CT concepts all transfer, but code examples would need to be rewritten.

**Q: How long does it take to flash code to a real micro:bit?**
A: In Chrome with WebUSB enabled, about 5–10 seconds. Via file download and drag-and-drop, about 30 seconds. Budget an extra 5 minutes for Lessons 2–4 if using real hardware for the first time.

**Q: What if the school blocks python.microbit.org?**
A: Request an IT whitelist for `python.microbit.org` and `microbit.org`. Both are educational sites. There is also an offline app available at [microbit.org/code](https://microbit.org/code/).

**Q: Can I split a lesson across two periods?**
A: Yes. The natural split points are after Theory (before Model) or after Model (before Practice). Make sure students complete the log entry in the second period.

---

*This resource is open source under the MIT License.*
*Aligned to: NSW Technology 7–8 Syllabus (2023) | TE4-DIG-01, TE4-DIG-02 | Implementation from 2026*
