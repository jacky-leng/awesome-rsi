# Taxonomy

RSI brings together several research communities. This collection organizes work by its primary improvement or evaluation object, then describes the improvement loop itself with a six-part loop profile.

## Scope

A work is in scope when its central contribution is one of:

1. An AI system that proposes changes to an artifact in the AI-development chain — serving systems, kernels and compilers, model weights, architectures, optimizers, training recipes and data, agent harnesses, memory and skills, or research and search procedures — and keeps or rejects those changes using feedback.
2. An evaluation, benchmark, environment or analysis whose object is such a loop: can agents do AI research and development, do self-improvement gains persist, does the loop reward-hack.
3. A conceptual framework, survey, forecast or safety analysis specifically about recursive self-improvement or automated AI research and development.

Out of scope: domain applications where the improved artifact is not part of AI development (robot navigation, biology results, theorems obtained with an existing tool), general alignment work not about improvement loops, and libraries with no improvement loop. Search-procedure papers stay in scope when their demonstrations are mathematical, because the procedure is the artifact.

## Research directions

| Direction | Main object |
|---|---|
| Specialized systems | Serving runtimes, scheduling, communication and deployment |
| Kernels and compilers | Operators, hardware mappings and low-level implementations |
| Kernel benchmarks | Operator tasks, correctness contracts and performance protocols |
| Model development | Architectures, data, optimizers, training recipes and weight-level self-improvement |
| Research agents | Tools, prompts, memory, search policies, self-modifying agents and AI-scientist systems |
| Research evaluation | Research-task interfaces, evaluation methods and reward-hacking studies |
| Concepts and foundations | Conceptual frameworks, surveys, forecasts and historical context |

Each work has one primary home. Code search, retained experience, coordination and weight updates can cross these categories. Historical work can retain its object-based category.

The change / evaluation target filter links entries across directions. Tags identify objects changed, evaluated or discussed: systems code and policies, kernel code, model weights, training recipes and data, agent harnesses, memory and skills, search and research procedures, evaluation protocols, and field-wide frameworks. Multiple tags describe scope; they do not assert separately measured effects for each component.

## Loop profile

Directions say *what* is improved. The loop profile says *how the improvement loop is built and what the paper shows about it*. Every entry carries all six axes. Each axis is a closed vocabulary validated by `scripts/build_site.py`; the labels and definitions shown in the browser live in the `taxonomy` block of `catalog/browser.json`.

### Loop closure (`loop`, one value)

Does the improvement flow back into the improver? The values form a ladder from open to closed loops.

| Value | Meaning |
|---|---|
| `artifact` | A fixed improver improves an external artifact: a kernel, a serving system, a recipe, a program, or another agent's design. A fixed meta-agent that designs other agents is `artifact`. |
| `self-harness` | The running system edits the prompts, tools, memory or skills that it uses for its own later work. |
| `self-weights` | A model's weights are updated from rollouts, data or rewards the model itself generated or selected: self-play, self-rewarding, RL on its own attempts, test-time training during search. |
| `meta` | The procedure that produces improvements is itself changed: evolving meta-prompts, meta-evolved search algorithms, self-referential improvers. |
| `cross-generation` | Outputs are used to build, train or operate the next model generation or the organization's own AI stack. |
| `framework` | Conceptual, survey, forecast or safety-taxonomy work that does not run a loop. |

Benchmarks and environments take the loop level they test.

### Feedback signal (`feedback`, 0–3 values)

What decides which change is kept: `tests` (executable correctness checks), `measurement` (real hardware or system measurements), `benchmark` (task score), `training-run` (the outcome of actually training a model), `model-judge` (LLM judge, reward or preference model), `self-generated` (self-consistency, self-play, self-rewarding without external ground truth), `human` (review, grading, merge), `formal` (verification, compiler legality checks), `simulator` (simulator or analytic model). Frameworks use an empty list.

### Search method (`search`, 0–3 values)

How candidates are generated and selected: `refinement` (single lineage), `population` (evolutionary, archive, islands), `tree` (MCTS, best-first, trees of drafts), `parallel-agents` (role-specialized or parallel agents), `rl` (reinforcement-learning updates), `distillation` (fine-tuning on the system's own filtered traces). Benchmarks and frameworks that propose no search method use an empty list.

### What persists (`persistence`, 1–3 values)

What carries over beyond one task or run: `episodic` (nothing; each run outputs only its best artifact — never combined with other values), `memory` (notes, insights, skills, archives or playbooks), `weights` (model weights), `codebase` (changes merged into a codebase or production system that later work runs on).

### Human role (`autonomy`, one value)

`autonomous` (runs without intervention after humans supply task, evaluator and budget), `human-gated` (humans review, select, approve or merge between iterations), `human-led` (humans do the main work with AI assistance), `unspecified` (benchmarks and frameworks).

### Evidence reported (`evidence`, 1–5 values)

What kinds of evidence the work actually reports: `benchmark`, `transfer` (held-out tasks, models, hardware or domains), `production` (deployed, merged upstream or measured on a production workload), `ablation`, `multi-round` (performance across successive rounds or generations), `cost` (compute, tokens, dollars or wall-clock of the improvement process), `negative` (failure modes, reward hacking, collapse or fragility as a main finding), `theory` (formal analysis, survey synthesis, forecast or position).

Evidence tags record what a paper reports, not whether it is convincing. The reading notes keep baselines, model roles and metric definitions next to each number.

## Classification procedure

1. Apply the scope rule.
2. Choose one direction by the primary object improved or evaluated.
3. Tag change / evaluation targets.
4. Fill the loop profile. For loop closure, ask in order: does the work run a loop at all (`framework` if not)? Are its outputs used to build the organization's next model or AI stack (`cross-generation`)? Is the procedure that generates improvements itself modified (`meta`)? Are the improver's own weights updated (`self-weights`)? Does the system edit the harness, memory or skills it runs with (`self-harness`)? Otherwise `artifact`.
5. When a work fits several loop values, choose the most closed value that the paper actually demonstrates, and describe the rest in the reading notes.

These are descriptive categories, not quality grades. Sources, model roles, target environments, baselines and metric definitions remain visible so readers can make their own comparisons.
