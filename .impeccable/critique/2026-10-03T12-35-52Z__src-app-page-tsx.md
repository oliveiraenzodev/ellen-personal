---
target: landing page atual
total_score: 22
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
target_identity: "file:/home/enzo/Documentos/Fabrica/helen-personal/src/app/page.tsx"
target_fingerprint: "sha256:87f1f8d48b639de1365743974978a3acf904d8f99ab9b6c99fe9f1b1e636b021"
target_path: /home/enzo/Documentos/Fabrica/helen-personal/src/app/page.tsx
timestamp: 2026-10-03T12-35-52Z
slug: src-app-page-tsx
---
## Design Health

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3/4 | Navigation does not indicate the current section. |
| 2 | Match System / Real World | 4/4 | Clear Brazilian Portuguese and a logical persuasion sequence. |
| 3 | User Control and Freedom | 3/4 | The contact flow depends almost exclusively on WhatsApp. |
| 4 | Consistency and Standards | 3/4 | Strong visual system, but identical destinations use changing CTA promises. |
| 5 | Error Prevention | 2/4 | No visible phone fallback when WhatsApp is unavailable. |
| 6 | Recognition Rather Than Recall | 3/4 | Main actions are clear; mobile gallery behavior is not discoverable enough. |
| 7 | Flexibility and Efficiency | n/a | Not applicable to this Persuade surface. |
| 8 | Aesthetic and Minimalist Design | 2/4 | Background, oversized headings, borders, and motion sustain maximum intensity too long. |
| 9 | Error Recovery | 2/4 | No visible alternate path for contact failure. |
| 10 | Help and Documentation | n/a | Not applicable to this Persuade surface. |
| **Total** | | **22/32** | **Acceptable; important corrections remain.** |

## Design Specificity Verdict

The site feels authored through Ellen's real photography, black/lime palette, angular crops, and assertive typography. Its weakness is not identity but sustained visual intensity and a proposition that remains interchangeable with many personal-trainer sites.

The file-scoped detector returned no findings for `src/app/page.tsx`. Browser injection found 40 rendered anti-pattern occurrences, mainly small text, low contrast, extreme tracking, layout transitions, and repeated decorative patterns. Some are stylistic false positives; `.results__index` contrast and text readability over the continuous background are real issues.

## Overall Impression

The page creates energy and professional presence immediately. The largest opportunity is to make the first conversion action visible sooner, reduce mobile visual noise, and make the evidence and next step more credible.

## What's Working

- Memorable hero grounded in Ellen's real presence and a coherent fitness identity.
- Correct persuasion sequence: promise, coach, offer, proof, process, objections, action.
- Solid responsive foundation with no horizontal overflow, adequate mobile targets, and reduced-motion support.

## Priority Issues

### [P1] Hero is too tall and delays the CTA

The primary action finishes below a 1000px desktop viewport, while the mobile hero reaches roughly 1441px. Reduce maximum display size and vertical rhythm while keeping the updated hero photo.

Suggested command: `$impeccable typeset`.

### [P1] Continuous background is distorted and especially weak on mobile

The 793x1983 image is stretched to approximately 390x9276 and 1440x8448 by `object-fit: fill`, which distorts the composition, increases noise, and weakens contrast. Remove global stretching and use calmer mobile surfaces.

Suggested command: `$impeccable quieter`.

### [P1] Results lack enough context to support the promise

Four images use nearly identical captions and provide no duration, modality, objective, or client voice. Improve presentation without inventing claims, and reserve structured fields for verified details later.

Suggested command: `$impeccable clarify`.

### [P2] Contact and proof have confidence gaps

No visible phone fallback, no explanation of what happens after the WhatsApp click, and no clear mobile swipe cue for results. Add a phone path, next-step reassurance, and a swipe hint.

Suggested command: `$impeccable harden`.

### [P2] Contrast and microinteractions need correction

`.results__index` renders near 4.1:1, footer icon hover can disappear, and some transitions animate padding. Raise contrast and remove layout-triggering motion.

Suggested command: `$impeccable audit`.

## Persona Red Flags

**Jordan, first-timer:** Understands the promise but cannot tell exactly what is included or what happens after contacting Ellen.

**Riley, stress tester:** Finds insufficient context behind the real-results claim and no alternate contact path.

**Casey, distracted mobile user:** Encounters a very long, visually intense page, a distorted background, and a horizontal gallery without an explicit gesture cue.

## Minor Observations

- Anchor navigation worked in browser evidence; an earlier blank-state signal was a capture artifact.
- Keep `ellen-barra` as the final CTA background per the owner's explicit constraint.
- The global PNG weighs roughly 1.8 MB and is priority-loaded on mobile.
- `/favicon.ico` returns 404.
- No horizontal overflow was found at 390px or 1440px.

## Questions to Consider

- If the before-and-after photos disappeared, what would uniquely prove Ellen is the right coach?
- What does Ellen do in week one that another trainer in Salvador does not?
- Which anxiety actually prevents contact: price, embarrassment, injury, schedule, or uncertainty about online coaching?
