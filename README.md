# Awesome RSI Work

A community-oriented map of approaches to recursive self-improvement: systems, kernels, model development, research agents and evaluation.

[**Interactive browser**](https://jacky-leng.github.io/awesome-rsi/) · [Research insights](https://jacky-leng.github.io/awesome-rsi/#insights) · [Taxonomy](TAXONOMY.md)

Reviewed through **2026-09-25** · **102 works**.

Research directions describe the primary object being improved or evaluated. Mechanisms such as code search, memory, coordination and weight updates can span several directions. The categories are descriptive, not a quality ranking.

## Preview

```sh
python3 -m http.server 8123 --bind 127.0.0.1
```

Open http://localhost:8123/. The browser needs HTTP to load the catalog.

## Publish with GitHub Pages

Push this clean source tree to a new GitHub repository with a `main` branch. Under **Settings → Pages**, choose **GitHub Actions**. Run **Deploy reading desk to GitHub Pages** or push a change to `main`.

The workflow builds `_site` from public files only. Both `USERNAME.github.io` and `USERNAME.github.io/REPOSITORY/` paths are supported. Automatic paper discovery is not enabled.

## Maintain

Edit `catalog/browser.json`, then run `python3 scripts/build_site.py`. This public repository is self-contained; no local research archive, credentials or model service is required. The reading desk is English-only for this release. Bookmarks stay in the reader’s browser.

## Collection

### AI for specialized systems (16)

- **[VibeServe: Can AI Agents Build Bespoke LLM Serving Systems?](https://arxiv.org/abs/2605.06068v1)** · 2026-05
  Generates a serving implementation for a specified model, hardware platform and workload.
- **[SkyDiscover-Synthesize (SkySynth): Building Specialized Systems We Can Trust with Agents](https://skydiscover-ai.github.io/blog-skysynth.html)** · 2026-09; JIT precursor 2026-05
  Synthesizes a specialized engine while strengthening specifications and tests.
- **[SGLang Agent-Assisted Development: Skills and Real Serving Patches](https://www.lmsys.org/blog/2026-07-02-agent-assisted-sglang-development)** · 2026-07; PRs merged 2026-04 and 2026-06
  Public skills and merged patches document concrete agent-assisted serving development.
- **[Asari: automated inference optimization](https://asari.ai/blog/inference-optimization)** · 2026-07
  Optimizes mature large-model serving across kernels, scheduling and configuration.
- **[GLM builds its inference infrastructure](https://z.ai/blog/glm-built-its-inference-infrastructure)** · 2026-09
  Reports substantial gains during human–AI development of production infrastructure.
- **[FlashVector](https://arxiv.org/html/2609.17391v1)** · 2026-09
  Optimizes kernels, model graphs, the model server and CPU feature processing.
- **[RoofLang: Enabling AI-Driven Architecting of LLM Inference Systems](https://arxiv.org/abs/2609.12551v1)** · 2026-09
  Searches legal computation, placement and communication graphs before implementation.
- **[Glia: A Human-Inspired AI for Automated Systems Design and Optimization](https://arxiv.org/abs/2510.27176v5)** · 2025-10; reviewed revision 2026-04
  Generates system policies, with both simulator results and a manually integrated real-stack transfer.
- **[Improving Coherence and Persistence in Agentic AI for System Optimization](https://arxiv.org/abs/2603.21321v1)** · 2026-03
  Uses an Archive and Research Digest to sustain research across fresh agent contexts.
- **[Let the Barbarians In: How AI Can Accelerate Systems Research](https://arxiv.org/abs/2512.14806v4)** · 2025-12
  Packages systems research into editable programs with executable evaluators.
- **[AdaEvolve: Adaptive LLM-Driven Zeroth-Order Optimization (SkyDiscover)](https://arxiv.org/abs/2602.20133v1)** · 2026-02
  Adapts exploration and search-budget allocation across populations of candidate programs.
- **[InferenceBench](https://arxiv.org/abs/2607.20468v1)** · 2026-05† / identifier 2607
  Tests whether an agent can deliver a working, faster inference endpoint within two hours.
- **[ISO-Bench](https://arxiv.org/abs/2602.19594v1)** · 2026-02
  Reconstructs real serving performance work from merged patches.
- **[AMD Apex](https://github.com/AMD-AGI/Apex)** · 2026-02*; repository inspected 2026-09
  Connects serving profiles to kernel generation, validation and reintegration.
- **[LLM4LLM: Bridging Kernel Benchmarks and Real Deployment via Closed-Loop Agentic Optimization](https://arxiv.org/abs/2608.21836v1)** · 2026-08-22
  Selects code changes by their behavior inside a target inference workload.
- **[IntentLab: Turn Your Intent into Production Systems](https://intentlab.ai/blog/turn-your-intent-into-production-systems)** · 2026-07-28
  An autonomous engineering fleet combines system design, implementation and verification for specialized software.

### Kernels and compilers (15)

- **[CUDA Agent](https://arxiv.org/abs/2602.24286v1)** · 2026
  RL updates kernel-generation weights using synthetic tasks and executable rewards.
- **[AVO: Agentic Variation Operator](https://arxiv.org/abs/2603.24517v1)** · 2026
  Agent-driven profiling/editing with lineage, knowledge and supervision.
- **[AKO: Autonomous Kernel Optimization](https://tongminglaic.github.io/AKO/)** · 2026
  AKO4ALL exposes a skill; AKO4X maintains per-operator archives and fresh-context search.
- **[NVIDIA Kernel Design Agents (KDA)](https://github.com/NVlabs/kda)** · 2026
  Public research → implementation → hardware-validation workflow and prompts.
- **[KernelAgent: hardware-guided optimization](https://pytorch.org/blog/kernelagent-hardware-guided-gpu-kernel-optimization-via-multi-agent-orchestration/)** · 2026
  NCU profiling, diagnosis, planning and parallel kernel revisions with expert knowledge and memory.
- **[MaxKernel](https://arxiv.org/abs/2609.04523v1)** · 2026
  Autonomous JAX/Pallas kernel search on TPUs, comparing search and human-intervention settings.
- **[Atrex / AKA](https://arxiv.org/abs/2607.14541v1)** · 2026
  Production traces define operator shapes and weights; AKA adds profiling and search for FlyDSL implementations.
- **[Harness Engineering for GPU Kernel Optimization](https://arxiv.org/abs/2607.17979v1)** · 2026
  Compares agent-assisted and fully agent-driven optimization.
- **[KOPE: Experience Graph for Kernel Optimization](https://arxiv.org/abs/2608.25570v1)** · 2026
  Retrieves structured optimization experience for Ascend CANN kernels.
- **[KernelEvolve](https://arxiv.org/html/2512.23236v4)** · 2025
  Graph search, retrieved knowledge and hardware feedback for recommendation kernels.
- **[AccelOpt](https://arxiv.org/abs/2511.15915v2)** · 2025
  Trainium NKI search with cross-task implementation comparisons and memory.
- **[AlphaEvolve: A coding agent for scientific and algorithmic discovery](https://arxiv.org/abs/2506.13131v1)** · 2025
  Executable program evaluation with evolutionary archives; applied to AI infrastructure.
- **[KernelArc: A Multi-Agent Framework for GPU Kernel Optimization](https://arxiv.org/abs/2608.17071v1)** · 2026-08-17
  Coordinates specialized agents through shared conclusions and deterministic benchmark guards.
- **[KernelOPT: Dispatch-Aware Agentic Search for GPU Kernel Optimization](https://arxiv.org/abs/2609.30059v1)** · 2026-09-24
  Optimizes generated Triton kernels while retaining vendor-library dispatch and checking the reconstructed model.
- **[Compiler-Grounded Hierarchical Diagnosis for LLM-Based Triton Kernel Optimization](https://arxiv.org/abs/2607.23089v1)** · 2026-07-25
  Escalates from profiling to intermediate representations and compiler-source analysis when shallow diagnostics are insufficient.

### Kernel benchmarks (9)

- **[ParallelKernelBench: Can LLMs Write Fast Multi-GPU Kernels?](https://www.together.ai/blog/parallelkernelbench)** · 2026-06
  PyTorch+NCCL reference, tensor/rank layout and hardware topology → custom multi-GPU implementation.
- **[KernelBench: Can LLMs Write Efficient GPU Kernels?](https://arxiv.org/abs/2502.10517v1)** · 2025-02
  PyTorch Model plus input/initialization generators → interface-compatible ModelNew.
- **[FlashInfer-Bench: Building the Virtuous Cycle for AI-driven LLM Systems](https://arxiv.org/abs/2601.00227v1)** · 2026-01; project 2025-10
  Kernel Definition + traced Workload → Solution + measured Trace, with optional serving integration.
- **[BackendBench: An Evaluation Suite for Testing How Well LLMs and Humans Can Write PyTorch Backends](https://github.com/meta-pytorch/BackendBench)** · 2025-06*; inspected 2026-09
  PyTorch operator interfaces and test suites → a dynamically registered backend.
- **[KernelBench-Verified: Do LLM-Generated Kernels Actually Beat PyTorch?](https://arxiv.org/abs/2607.16241v1)** · 2026-07†
  KernelBench tasks with a specified TF32 baseline, hidden input distributions and memory measurement.
- **[TritonBench: Benchmarking Large Language Model Capabilities for Generating Triton Operators](https://arxiv.org/abs/2502.14752v1)** · 2025-02
  Two entry points: descriptions/interfaces for real Triton operators, and PyTorch composite programs.
- **[MultiKernelBench: A Multi-Platform Benchmark for Kernel Generation](https://arxiv.org/abs/2507.17773v1)** · 2025-07
  Shared semantic tasks plus platform instructions → CUDA, AscendC or Pallas implementations.
- **[KernelBench-X: A Comprehensive Benchmark for Evaluating LLM-Generated GPU Kernels](https://arxiv.org/abs/2605.04956v1)** · 2026-05
  176 tasks in 15 categories with shared interface, reference and constraints.
- **[KernelGenBench: A Multi-Source and Multi-Chip Benchmark for LLM-based Kernel Generation](https://arxiv.org/abs/2607.27231v1)** · 2026-07-22
  Measures kernel correctness, performance and generation cost across operator sources and accelerators.

### Model development (20)

- **[Recursive: first steps toward automated AI research](https://www.recursive.com/articles/first-steps-toward-automated-ai-research)** · 2026
  Searches architecture, training and data-processing code under fixed run budgets.
- **[rekursiv.ai: autoautoresearch](https://rekursiv.ai/blog/autoautoresearch/)** · 2026
  Changes research organization periodically while parallel agents search training recipes.
- **[Karpathy autoresearch](https://raw.githubusercontent.com/karpathy/autoresearch/master/README.md)** · 2026
  Agent edits train.py, runs a fixed-duration experiment, and retains or reverts by validation BPB.
- **[Specialist agents for training recipes](https://arxiv.org/abs/2605.05724v1)** · 2026
  Specialist agents combine training ideas using parallel search, shared results and lineage.
- **[PostTrainBench](https://arxiv.org/abs/2603.08640v2)** · 2026
  Agents find data, train, tune and submit a checkpoint.
- **[AIBuildAI](https://arxiv.org/abs/2604.14455v1)** · 2026
  Manager/designer/coder/tuner coordinate seven parallel solution repositories.
- **[Tencent Hunyuan Hyra results](https://github.com/Tencent-Hunyuan/Hyra-results)** · 2026
  Publishes research artifacts and selected reproduction scripts across AI tasks.
- **[Hiloop: search is enough](https://github.com/hiloopai/search-is-enough)** · 2026
  Continues recipe search from an existing Recursive artifact, with interleaved final evaluation.
- **[Search over Self-Edit Strategies for LLM Adaptation](https://arxiv.org/abs/2601.14532v1)** · 2026
  Searches self-edit templates and next-token-prediction update settings with an archive.
- **[Absolute Zero: Reinforced Self-play Reasoning with Zero Data](https://arxiv.org/abs/2505.03335v3)** · 2025
  Generates executable tasks and verification signals for RL weight updates.
- **[Self-Adapting Language Models](https://arxiv.org/abs/2506.10943v2)** · 2025
  Generates adaptation data/instructions and evaluates gradient-based updates.
- **[Automated Researchers Can Reliably Mitigate Alignment Failures](https://arxiv.org/abs/2608.28945v1)** · 2026-08-28
  Searches training methods and data for ten measured alignment-failure categories while checking general capabilities.
- **[Co-Harness: Co-Evolving Harnesses and Model Weights for LLM Agents](https://arxiv.org/abs/2607.22688v1)** · 2026-07-17
  Alternates validated harness edits with supervised learning from trajectories generated by the improved harness.
- **[Frontis-MA1: Training an AI4AI Model towards Recursive Self-Improvement in Machine Learning Engineering](https://arxiv.org/abs/2607.28568v1)** · 2026-07-30
  Trains reusable program-evolution operators and composes them into long-horizon machine-learning search.
- **[Self-Improving Large Language Models via Progressive Experience Evolution](https://arxiv.org/abs/2608.02139v1)** · 2026-08-03
  Builds a validated experience pool, distills it into model weights and follows with reward-driven optimization.
- **[Skill Self-Play: Pushing the Frontier of LLM Capability with Co-Evolving Skills](https://arxiv.org/abs/2607.22529v1)** · 2026-07-24
  Co-evolves a skill library, task proposer and solver using executable task checks.
- **[Intology Locus: Scaling Automated Post-Training](https://intology.ai/blog/scaling-automated-post-training)** · 2026-08-03
  Runs parallel, multi-day post-training experiments and reports both benchmark and production outcomes.
- **[XYZ-Aquila: AI4AI at Scale](https://xyz-lab.ai/blogs/ai4ai-at-scale/)** · 2026-07
  Uses gated interventions across data, training, runtime and context management to develop open-weight search agents.
- **[RISE: Recursive Improvement via Self-Extrapolating Policy Distillation](https://arxiv.org/abs/2609.05295v1)** · 2026-09-04
  Alternates verifiable-reward learning with distillation from an extrapolation of the model’s own training trajectory.
- **[Experience Funnel: A State–Policy Alternating Loop for Self-Evolving Agents](https://arxiv.org/abs/2609.08919v1)** · 2026-09-08
  Alternates editable skills and harness state with distillation into a deployment policy.

### Research agents (24)

- **[Dream-RSI: Recursive Self-Improvement through Evolving Worlds](https://arxiv.org/abs/2609.14858v1)** · 2026
  Uses offline replay of search trees to revise parent selection, branching and stopping policies, then gathers new trees.
- **[RSIAgent: Autonomous Exploration for Recursive Self-improvement in New Environments](https://arxiv.org/abs/2609.15364v1)** · 2026
  Task-aware practice, verification and skill/memory updates.
- **[Meta$^n$: Recursive Self-Improvement through Emergent Depth](https://arxiv.org/abs/2608.24735v1)** · 2026
  Recursively composes improver levels while keeping the generator fixed.
- **[Hyperagents](https://arxiv.org/abs/2603.19461v1)** · 2026
  Makes both task agent and meta-agent editable and studies improver transfer.
- **[Group-Evolving Agents (GEA)](https://arxiv.org/abs/2602.04837v1)** · 2026
  Shares patches, trajectories and failures across an evolving population.
- **[RQGM](https://arxiv.org/abs/2606.26294v2)** · 2026
  Co-evolves agents and evaluators, fixing objectives within epochs and recalibrating between them.
- **[Self Improvement via Fast Tree-search](https://arxiv.org/abs/2609.19526v1)** · 2026
  Pairwise code judging, Bradley–Terry ranking and asynchronous tree search over coding-agent implementations.
- **[Test-time Recursive Thinking: Self-Improvement without External Feedback](https://arxiv.org/abs/2602.03094v1)** · 2026
  Per-problem strategy search, self-ranking and accumulated knowledge.
- **[MetaSkill-Evolve: Recursive Self-Improvement of LLM Agents via Two-Timescale Meta-Skill Evolution](https://arxiv.org/abs/2607.05297v1)** · 2026
  Evolves reusable skills and the policies that manage them.
- **[Darwin Godel Machine: Open-Ended Evolution of Self-Improving Agents](https://arxiv.org/abs/2505.22954v3)** · 2025
  Archive-based search over a coding agent’s own tools and implementation.
- **[A Self-Improving Coding Agent](https://arxiv.org/abs/2504.15228v2)** · 2025
  Modifies its coding harness using prior run feedback and reevaluation.
- **[Self-Taught Optimizer (STOP): Recursively Self-Improving Code Generation](https://arxiv.org/abs/2310.02304v3)** · 2023
  Rewrites an improver program and applies it to other programs.
- **[AIDE²: Recursive Self-Improvement of AI Research Agents](https://arxiv.org/abs/2609.26457v1)** · 2026-09-22
  Rewrites a research agent under fixed evaluation budgets and tests the resulting agents on unseen research tasks.
- **[RRSI: Regularized Recursive Self-Improvement of Agent Harnesses](https://arxiv.org/abs/2609.24972v1)** · 2026-09-21
  Constrains harness edits and candidate acceptance to improve transfer beyond the evolution tasks.
- **[Knowledge-Centric Self-Improvement](https://arxiv.org/abs/2607.19592v1)** · 2026-07-21
  Makes a shared, curated knowledge base the object retained across otherwise disposable agents.
- **[AI4AI at Test-Time: Strong-to-Weak Capability Transfer via Harnesses](https://arxiv.org/abs/2608.12307v1)** · 2026-08-12
  Uses stronger builder models to improve weaker target models through executable harnesses without changing weights.
- **[ModularRSI: Modular and Generalizable Recursive Harness Self-Improvement](https://arxiv.org/abs/2609.14857v1)** · 2026-09-14
  Evolves separate harness modules using contrasting successful and failed trajectories and validation gates.
- **[AutoResearch: Insight In, Hallucination Out](https://arxiv.org/abs/2608.17906v1)** · 2026-08-18
  Connects grounded research ideas to implementation, diagnosis and independent review of experiment artifacts.
- **[Prime Agent: A Self-Improving RLM Harness](https://github.com/PrimeIntellect-ai/prime-agent)** · 2026-08-24
  Combines a persistent Python control environment with revisable prompts, memories, skills and subagent specifications.
- **[ShinkaEvolve: Open Program Evolution](https://github.com/SakanaAI/ShinkaEvolve)** · 2025-09-25 · ongoing project
  Maintains program populations and evaluated archives for LLM-guided scientific-code search.
- **[GEPA: Reflective Optimization of Prompts, Code and Agent Systems](https://github.com/gepa-ai/gepa)** · 2025-08 · ongoing project
  Combines trace-based reflection with Pareto-aware evolution over textual system parameters.
- **[Databricks Agent Bricks: Automated Prompt Optimization on IE Bench](https://www.databricks.com/blog/building-state-art-enterprise-agents-90x-cheaper-automated-prompt-optimization)** · 2025-09-24
  Evaluates automated prompts on held-out enterprise information-extraction tasks and separates search from serving cost.
- **[LIMBO: Lifelong Inference-Time Memory and Budget Optimization for LLM Agents](https://arxiv.org/abs/2609.14138v1)** · 2026-09-12
  Learns when retained experience is useful and how much inference budget to spend on each task.
- **[Self-Evolving Embodied Agents via Skill-Harness Evolution](https://arxiv.org/abs/2608.11350v1)** · 2026-08-11
  Evolves reusable skills and context-handling code around a frozen embodied planner and executor.

### Research evaluation (14)

- **[FastKernels](https://arxiv.org/abs/2605.23215v1)** · 2026
  Captures real kernel interfaces/tensors and evaluates integration in actual backends and distributed contexts.
- **[CANN-Bench](https://arxiv.org/abs/2607.20518v1)** · 2026
  Ascend operator tasks separating compilation, correctness and performance.
- **[NVIDIA SOL-ExecBench](https://research.nvidia.com/benchmarks/sol-execbench/blog/introducing-sol-execbench)** · 2026
  Real-model kernels with executable validation and hardware speed-of-light references.
- **[AutoResearchExam](https://benchmarks.bespokelabs.ai/autoresearchexam/)** · 2026
  A 24-hour ML-research protocol with private holdout evaluation.
- **[Can AI agents conduct open-ended AI research? Early evidence from two case studies](https://arxiv.org/abs/2607.27191v2)** · 2026
  Agents tackle two previously unpublished research problems assessed by the original researchers.
- **[Reflections on Trusting Trust, Revisited: Contaminating Self-Modifying AI Coding Agents with Poisoned Benchmarks](https://arxiv.org/abs/2609.17817v1)** · 2026
  Studies how manipulated benchmarks and feedback decouple self-modification scores from capability.
- **[RSIBench-Data: Benchmarking Data-Centric Research for Recursive Self-Improvement](https://arxiv.org/abs/2607.25886v1)** · 2026-07-28
  Isolates training-data research by holding the model, training infrastructure and evaluation stack fixed.
- **[On the Fragility of Self-Improving Agents: Variance, Task Order, and Underspecification](https://arxiv.org/abs/2608.18066v1)** · 2026-08-18
  Tests how memory-based agent improvements depend on random runs, curriculum and environmental specifications.
- **[Rethinking the Evaluation of Harness Evolution for Agents](https://arxiv.org/abs/2607.12227v1)** · 2026-07-14
  Compares harness evolution with direct sampling and refinement under explicit feedback and compute conditions.
- **[GDPevo: Evaluating Agent Self-Evolution on Real Business Tasks](https://arxiv.org/abs/2608.03764v1)** · 2026-08-04
  Distributes decision rules across training tasks and recombines them in held-out business workflows.
- **[PAST-Bench: Benchmarking the Foundations of Recursive Self-Improvement in Personal Agents](https://arxiv.org/abs/2608.04003v1)** · 2026-08-04
  Uses matched persistence-on and persistence-off runs to test whether retained experience helps future episodes.
- **[S3Gym: Can LLMs Turn Self-Testing and Self-Judging into Self-Improvement?](https://arxiv.org/abs/2608.31100v1)** · 2026-08-31
  Separates exploration from held-out play to compare raw history, summarized memory and weight training.
- **[OpenRSI Index: An Open Benchmark for Model-Development Research](https://index.openrsi.foundation/index.html)** · Ongoing · reviewed 2026-09-25
  Packages open model-development projects as bounded research environments with separate verifiers and released trajectories.
- **[EvoAgentBench: Benchmarking Agent Self-Evolution via Ability Transfer](https://arxiv.org/abs/2607.05202v1)** · 2026-07-06
  Constructs train/test relations around reusable abilities to measure transfer from retained agent experience.

### Concepts and foundations (4)

- **[The Last AI Built by Humans: Toward Genuine Recursive Self-Improvement](https://arxiv.org/abs/2609.11873v2)** · 2026
  Discusses organizations and pathways for continuing self-improvement.
- **[Recursive Self-Improvement in AI: From Bounded Self-Refinement to Autonomous Research Loops](https://arxiv.org/abs/2607.07663v2)** · 2026
  Organizes improvement targets, mechanisms and historical work.
- **[Self-Improvements in Modern Agentic Systems: A Survey](https://arxiv.org/abs/2607.13104v1)** · 2026-07-14
  Organizes persistent agent updates by the component changed and the feedback that drives them.
- **[The Economics of Recursive Self-Improvement](https://arxiv.org/abs/2609.15802v1)** · 2026-09-14
  Models when AI-assisted research could produce sustained acceleration rather than improvements within a fixed task.

## Research coverage

Date-bounded arXiv web searches across the seven research directions, cross-checked against four community lists and original papers. Selected full-text methods and results were inspected; experiments were not independently reproduced.

A targeted literature scan, not an exhaustive arXiv census. The direct arXiv API request was rejected (HTTP 406), so discovery used indexed arXiv pages and bibliography links. Older ongoing projects and industry reports are dated separately.

Companion collections used for discovery:

- [lobehub / awesome-rsi](https://github.com/lobehub/awesome-rsi)
- [pinkbubblebubble / awesome-rsi](https://github.com/pinkbubblebubble/awesome-rsi)
- [Token-Rhythm / awesome-rsi](https://github.com/Token-Rhythm/awesome-rsi)
- [Prism-Shadow / awesome-rsi](https://github.com/Prism-Shadow/awesome-rsi)

## Design acknowledgement

The reading desk is an original implementation inspired by the serif typography and three-pane layout of [Awesome Loop Models](https://github.com/huskydoge/Awesome-Loop-Models). Paper and project sources are linked in each entry.
