# Awesome RSI Work

A community-oriented map of approaches to recursive self-improvement: systems, kernels, model development, research agents and evaluation.

[**Interactive browser**](https://jacky-leng.github.io/awesome-rsi/) · [Research landscape](https://jacky-leng.github.io/awesome-rsi/#landscape) · [Research insights](https://jacky-leng.github.io/awesome-rsi/#insights) · [Taxonomy](TAXONOMY.md)

<!-- generated:reviewed -->
Reviewed through **2026-10-07** · **200 works**.
<!-- /generated:reviewed -->

Research directions describe the primary object being improved or evaluated. A six-part loop profile then describes the improvement loop itself: where it closes, what feedback decides a change, how candidates are searched, what persists, where humans sit and what evidence is reported. The categories are descriptive, not a quality ranking.

## Preview

```sh
python3 -m http.server 8123 --bind 127.0.0.1
```

Open http://localhost:8123/. The browser needs HTTP to load the catalog.

## Publish with GitHub Pages

Push this clean source tree to a new GitHub repository with a `main` branch. Under **Settings → Pages**, choose **GitHub Actions**. Run **Deploy reading desk to GitHub Pages** or push a change to `main`.

The workflow builds `_site` from public files only. Both `USERNAME.github.io` and `USERNAME.github.io/REPOSITORY/` paths are supported. Automatic paper discovery is not enabled.

## Maintain

Edit `catalog/browser.json`, then run `python3 scripts/build_site.py`. The build validates every entry, including its loop profile, and regenerates the landscape table, collection and coverage sections of this README; CI fails if the README is out of date. This public repository is self-contained; no local research archive, credentials or model service is required. The reading desk is English-only for this release. Bookmarks stay in the reader’s browser.

## Landscape

<!-- generated:landscape -->
Does the improvement flow back into the improver? Rows are research directions; columns are loop closure. See [TAXONOMY.md](TAXONOMY.md) for all six loop-profile axes.

| Direction | Artifact optimization | Self-modifying harness | Self-updating weights | Improves the improver | Feeds the next generation | Framework or survey | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| AI for specialized systems | 11 | 4 | · | · | 1 | · | 16 |
| Kernels and compilers | 13 | 3 | 11 | · | 1 | · | 28 |
| Kernel benchmarks | 10 | · | · | · | · | · | 10 |
| Model development | 17 | · | 24 | 1 | 1 | · | 43 |
| Research agents | 21 | 25 | 2 | 10 | · | · | 58 |
| Research evaluation | 25 | 7 | 1 | · | · | · | 33 |
| Concepts and foundations | · | · | · | · | · | 12 | 12 |
| **All** | **97** | **39** | **38** | **11** | **3** | **12** | **200** |
<!-- /generated:landscape -->

## Collection

<!-- generated:collection -->
### AI for specialized systems (16)

- **[VibeServe: Can AI Agents Build Bespoke LLM Serving Systems?](https://arxiv.org/abs/2605.06068v1)** · 2026-05 · *Artifact optimization*
  Generates a serving implementation for a specified model, hardware platform and workload.
- **[SkyDiscover-Synthesize (SkySynth): Building Specialized Systems We Can Trust with Agents](https://skydiscover-ai.github.io/blog-skysynth.html)** · 2026-09; JIT precursor 2026-05 · *Self-modifying harness*
  Synthesizes a specialized engine while strengthening specifications and tests.
- **[SGLang Agent-Assisted Development: Skills and Real Serving Patches](https://www.lmsys.org/blog/2026-07-02-agent-assisted-sglang-development)** · 2026-07; PRs merged 2026-04 and 2026-06 · *Artifact optimization*
  Public skills and merged patches document concrete agent-assisted serving development.
- **[Asari: automated inference optimization](https://asari.ai/blog/inference-optimization)** · 2026-07 · *Self-modifying harness*
  Optimizes mature large-model serving across kernels, scheduling and configuration.
- **[Toward Recursive Self-Improvement: How GLM Built Its Own Inference Infrastructure](https://z.ai/blog/glm-built-its-inference-infrastructure)** · 2026-09 · *Feeds the next generation*
  Reports substantial gains during human–AI development of production infrastructure.
- **[FlashVector](https://arxiv.org/html/2609.17391v1)** · 2026-09 · *Self-modifying harness*
  Optimizes kernels, model graphs, the model server and CPU feature processing.
- **[RoofLang: Enabling AI-Driven Architecting of LLM Inference Systems](https://arxiv.org/abs/2609.12551v1)** · 2026-09 · *Artifact optimization*
  Searches legal computation, placement and communication graphs before implementation.
- **[Glia: A Human-Inspired AI for Automated Systems Design and Optimization](https://arxiv.org/abs/2510.27176v5)** · 2025-10; reviewed revision 2026-04 · *Artifact optimization*
  Generates system policies, with both simulator results and a manually integrated real-stack transfer.
- **[Improving Coherence and Persistence in Agentic AI for System Optimization](https://arxiv.org/abs/2603.21321v1)** · 2026-03 · *Artifact optimization*
  Uses an Archive and Research Digest to sustain research across fresh agent contexts.
- **[Let the Barbarians In: How AI Can Accelerate Systems Performance Research](https://arxiv.org/abs/2512.14806v4)** · 2025-12 · *Artifact optimization*
  Packages systems research into editable programs with executable evaluators.
- **[AdaEvolve: Adaptive LLM-Driven Zeroth-Order Optimization (SkyDiscover)](https://arxiv.org/abs/2602.20133v1)** · 2026-02 · *Artifact optimization*
  Adapts exploration and search-budget allocation across populations of candidate programs.
- **[InferenceBench](https://arxiv.org/abs/2607.20468v1)** · 2026-05† / identifier 2607 · *Artifact optimization*
  Tests whether an agent can deliver a working, faster inference endpoint within two hours.
- **[ISO-Bench](https://arxiv.org/abs/2602.19594v1)** · 2026-02 · *Artifact optimization*
  Reconstructs real serving performance work from merged patches.
- **[AMD Apex](https://github.com/AMD-AGI/Apex)** · 2026-02*; repository inspected 2026-09 · *Self-modifying harness*
  Connects serving profiles to kernel generation, validation and reintegration.
- **[LLM4LLM: Bridging Kernel Benchmarks and Real Deployment via Closed-Loop Agentic Optimization](https://arxiv.org/abs/2608.21836v1)** · 2026-08-22 · *Artifact optimization*
  Selects code changes by their behavior inside a target inference workload.
- **[IntentLab: Turn Your Intent into Production Systems](https://intentlab.ai/blog/turn-your-intent-into-production-systems)** · 2026-07-28 · *Artifact optimization*
  An autonomous engineering fleet combines system design, implementation and verification for specialized software.

### Kernels and compilers (28)

- **[CUDA Agent](https://arxiv.org/abs/2602.24286v1)** · 2026-02-27 · *Self-updating weights*
  RL updates kernel-generation weights using synthetic tasks and executable rewards.
- **[AVO: Agentic Variation Operators for Autonomous Evolutionary Search](https://arxiv.org/abs/2603.24517v1)** · 2026-03-25 · *Artifact optimization*
  Agent-driven profiling/editing with lineage, knowledge and supervision.
- **[AKO: Agentic Kernel Optimization](https://tongminglaic.github.io/AKO/)** · 2026-03-24 · *Self-modifying harness*
  AKO4ALL exposes a skill; AKO4X maintains per-operator archives and fresh-context search.
- **[Kernel Design Agents (KDA)](https://github.com/NVlabs/kda)** · 2026 · *Artifact optimization*
  Public research → implementation → hardware-validation workflow and prompts.
- **[KernelAgent: hardware-guided optimization](https://pytorch.org/blog/kernelagent-hardware-guided-gpu-kernel-optimization-via-multi-agent-orchestration/)** · 2026-03-06 · *Artifact optimization*
  NCU profiling, diagnosis, planning and parallel kernel revisions with expert knowledge and memory.
- **[MaxKernel](https://arxiv.org/abs/2609.04523v1)** · 2026-09-03 · *Artifact optimization*
  Autonomous JAX/Pallas kernel search on TPUs; a human-in-the-loop mode is described but not evaluated.
- **[Harness Engineering for LLM-Driven GPU Kernel Generation](https://arxiv.org/abs/2607.17979v1)** · 2026-07-20 · *Artifact optimization*
  Compares agent-assisted and fully agent-driven optimization.
- **[Beyond Scaling: Self-Evolving LLM Agents for Hardware Kernel Optimization via an Experience-Driven Workflow and Experience Graph Memory](https://arxiv.org/abs/2608.25570v1)** · 2026-08-26 · *Self-modifying harness*
  Retrieves structured optimization experience for Ascend CANN kernels.
- **[KernelEvolve](https://arxiv.org/html/2512.23236v4)** · 2025-12-29 · *Self-modifying harness*
  Graph search, retrieved knowledge and hardware feedback for recommendation kernels.
- **[AccelOpt](https://arxiv.org/abs/2511.15915v2)** · 2025-11-19 · *Artifact optimization*
  Trainium NKI beam search with a per-problem optimization memory of slow–fast kernel pairs and summarized insights.
- **[AlphaEvolve: A coding agent for scientific and algorithmic discovery](https://arxiv.org/abs/2506.13131v1)** · 2025-06-16 · *Feeds the next generation*
  Executable program evaluation with evolutionary archives; applied to AI infrastructure.
- **[KernelArc: A Multi-Agent Framework for GPU Kernel Optimization](https://arxiv.org/abs/2608.17071v2)** · 2026-08-17 · *Artifact optimization*
  Coordinates specialized agents through shared conclusions and deterministic benchmark guards.
- **[KernelOPT: Dispatch-Aware Agentic Search for GPU Kernel Optimization](https://arxiv.org/abs/2609.30059v1)** · 2026-09-24 · *Artifact optimization*
  Optimizes generated Triton kernels while retaining vendor-library dispatch and checking the reconstructed model.
- **[Compiler-Grounded Hierarchical Diagnosis for LLM-Based Triton Kernel Optimization](https://arxiv.org/abs/2607.23089v1)** · 2026-07-25 · *Artifact optimization*
  Escalates from profiling to intermediate representations and compiler-source analysis when shallow diagnostics are insufficient.
- **[AI as a Compiler: Compiling Triton Kernels Without the Triton Compiler](https://arxiv.org/abs/2609.36800v1)** · 2026-09-29 · *Artifact optimization*
  An LLM agent lowers fixed Triton kernels directly to PTX, keeping only candidates that assemble, pass differential tests and run faster.
- **[KernelZero: Co-Evolving Proposer and Coder for Continuously Improved GPU Kernel Generation](https://arxiv.org/abs/2609.33074v1)** · 2026-09-27 · *Self-updating weights*
  Alternates GRPO on a module Proposer rewarded for near-50% Coder success and a CUDA/Triton Coder rewarded with correctness-gated speedup.
- **[AMDKernelVault: Large-Scale Datasets and Agentic Training for AMD GPU Kernel Optimization](https://arxiv.org/abs/2609.12471v1)** · 2026-09-11 · *Self-updating weights*
  Agentic generate–evaluate–reflect pipelines build execution-verified AMD HIP and Triton kernels, which train a Qwen3-8B kernel agent through SFT and execution-rewarded RL.
- **[CUDA-Harness: Harnessing Agentic CUDA Kernel Generation and Optimization from Natural Language](https://arxiv.org/abs/2609.00058v1)** · 2026-08-30 · *Artifact optimization*
  Plans kernels from natural-language prompts, synthesizes isolated test data, and refines CUDA over three rounds, reverting to conservative code whenever validation fails.
- **[Multi-turn RL with Structural and Performance Aware Rewards for CUDA Kernel Generation](https://arxiv.org/abs/2607.20908v1)** · 2026-07-23 · *Self-updating weights*
  GRPO trains Qwen-3-32B to write CUDA using execution rewards plus a learned ranker's score over static code features such as coalescing and occupancy.
- **[Optimizing CUDA like a Human: Micro-Profiling Tools as Expert Surrogates for LLM-Based GPU Kernel Optimization](https://arxiv.org/abs/2606.26453v1)** · 2026-06-24 · *Artifact optimization*
  Turns Nsight Compute, Nsight Systems and SASS metrics into rule-based diagnostic advice that guides an MCTS search over complete CUDA kernels.
- **[daVinci-kernel: Co-Evolving Skill Selection, Summarization, and Utilization via RL for GPU Kernel Optimization](https://arxiv.org/abs/2606.16497v1)** · 2026-06-15 · *Self-updating weights*
  Jointly RL-trains one model to select, apply and write kernel-optimization skills; new skills enter the library only after re-execution confirms speedup.
- **[DRTriton: Large-Scale Synthetic Data Driven Reinforcement Learning for Triton Kernel Generation](https://arxiv.org/abs/2603.21465v1)** · 2026-03-23 · *Self-updating weights*
  A 7B model is RL-trained on 100K solver-generated PyTorch programs of rising difficulty, with decoupled correctness and log-speedup rewards and fragment-level test-time search.
- **[Dr. Kernel: Reinforcement Learning Done Right for Triton Kernel Generations](https://arxiv.org/abs/2602.05885v1)** · 2026-02-05 · *Self-updating weights*
  Multi-turn RL in a distributed GPU gym trains Qwen3 models to write Triton kernels, with execution-based hacking checks and profiling-weighted rewards against lazy optimization.
- **[CudaForge: An Agent Framework with Hardware Feedback for CUDA Kernel Optimization](https://arxiv.org/abs/2511.01884v1)** · 2025-10-23 · *Artifact optimization*
  A Coder agent writes CUDA kernels; a Judge agent reads test failures and selected Nsight Compute metrics and requests one fix or optimization per round.
- **[TritonRL: Training LLMs to Think and Code Triton Without Cheating](https://arxiv.org/abs/2510.17891v1)** · 2025-10-18 · *Self-updating weights*
  Qwen3-8B is distilled then GRPO-trained on KernelBook tasks, with rule-plus-LLM-judge validity gates and separate speedup and correctness rewards for plan and code tokens.
- **[CUDA-L1: Improving CUDA Optimization via Contrastive Reinforcement Learning](https://arxiv.org/abs/2507.14111v1)** · 2025-07-18 · *Self-updating weights*
  DeepSeek-V3 is trained by SFT, self-filtered fine-tuning and GRPO on prompts holding scored prior kernels, rewarded by measured A100 speedup.
- **[Kevin: Multi-Turn RL for Generating CUDA Kernels](https://arxiv.org/abs/2507.11948v1)** · 2025-07-16 · *Self-updating weights*
  Multi-turn GRPO trains QwQ-32B to write and refine inline CUDA kernels, crediting each turn with discounted future correctness and speedup.
- **[AutoTriton: Automatic Triton Programming with Reinforcement Learning in LLMs](https://arxiv.org/abs/2507.05687v1)** · 2025-07-08 · *Self-updating weights*
  Seed-Coder-8B is fine-tuned on verified PyTorch-to-Triton pairs, then GRPO-trained with a correctness-only reward gated by a Triton-syntax rule.

### Kernel benchmarks (10)

- **[Are LLM-Generated GPU Kernels Production-Ready? A Trace-Driven Benchmark and Optimization Agent](https://arxiv.org/abs/2607.14541v1)** · 2026-07-16 · *Artifact optimization*
  Production traces define operator shapes and weights; AKA adds profiling and search for FlyDSL implementations.
- **[ParallelKernelBench: Can LLMs Write Fast Multi-GPU Kernels?](https://www.together.ai/blog/parallelkernelbench)** · 2026-06 · *Artifact optimization*
  PyTorch+NCCL reference, tensor/rank layout and hardware topology → custom multi-GPU implementation.
- **[KernelBench: Can LLMs Write Efficient GPU Kernels?](https://arxiv.org/abs/2502.10517v1)** · 2025-02 · *Artifact optimization*
  PyTorch Model plus input/initialization generators → interface-compatible ModelNew.
- **[FlashInfer-Bench: Building the Virtuous Cycle for AI-driven LLM Systems](https://arxiv.org/abs/2601.00227v1)** · 2026-01; project 2025-10 · *Artifact optimization*
  Kernel Definition + traced Workload → Solution + measured Trace, with optional serving integration.
- **[BackendBench: An Evaluation Suite for Testing How Well LLMs and Humans Can Write PyTorch Backends](https://github.com/meta-pytorch/BackendBench)** · 2025-06*; inspected 2026-09 · *Artifact optimization*
  PyTorch operator interfaces and test suites → a dynamically registered backend.
- **[KernelBench-Verified: Do LLM-Generated Kernels Actually Beat PyTorch?](https://arxiv.org/abs/2607.16241v1)** · 2026-07† · *Artifact optimization*
  KernelBench tasks with a specified TF32 baseline, hidden input distributions and memory measurement.
- **[TritonBench: Benchmarking Large Language Model Capabilities for Generating Triton Operators](https://arxiv.org/abs/2502.14752v1)** · 2025-02 · *Artifact optimization*
  Two entry points: descriptions/interfaces for real Triton operators, and PyTorch composite programs.
- **[MultiKernelBench: A Multi-Platform Benchmark for Kernel Generation](https://arxiv.org/abs/2507.17773v1)** · 2025-07 · *Artifact optimization*
  Shared semantic tasks plus platform instructions → CUDA, AscendC or Pallas implementations.
- **[KernelBench-X: A Comprehensive Benchmark for Evaluating LLM-Generated GPU Kernels](https://arxiv.org/abs/2605.04956v1)** · 2026-05 · *Artifact optimization*
  176 tasks in 15 categories with shared interface, reference and constraints.
- **[KernelGenBench: Can LLMs and Agents Write Efficient Kernels Across Operator Sources and Hardware Platforms?](https://arxiv.org/abs/2607.27231v1)** · 2026-07-22 · *Artifact optimization*
  Measures kernel correctness, performance and generation cost across operator sources and accelerators.

### Model development (43)

- **[Recursive: first steps toward automated AI research](https://www.recursive.com/articles/first-steps-toward-automated-ai-research)** · 2026-06-11 · *Artifact optimization*
  Searches architecture, training and data-processing code under fixed run budgets.
- **[rekursiv.ai: autoautoresearch](https://rekursiv.ai/blog/autoautoresearch/)** · 2026-09-14 · *Improves the improver*
  Changes research organization periodically while parallel agents search training recipes.
- **[Karpathy autoresearch](https://raw.githubusercontent.com/karpathy/autoresearch/master/README.md)** · 2026 · *Artifact optimization*
  Agent edits train.py, runs a fixed-duration experiment, and retains or reverts by validation BPB.
- **[Auto Research with Specialist Agents Develops Effective and Non-Trivial Training Recipes](https://arxiv.org/abs/2605.05724v1)** · 2026-05-07 · *Artifact optimization*
  Specialist agents combine training ideas using parallel search, shared results and lineage.
- **[PostTrainBench](https://arxiv.org/abs/2603.08640v2)** · 2026-03-09 · *Artifact optimization*
  Agents find data, train, tune and submit a checkpoint.
- **[AIBuildAI](https://arxiv.org/abs/2604.14455v1)** · 2026-04-15 · *Artifact optimization*
  Manager/designer/coder/tuner coordinate seven parallel solution repositories.
- **[Tencent Hunyuan Hyra results](https://github.com/Tencent-Hunyuan/Hyra-results)** · 2026 · *Artifact optimization*
  Publishes research artifacts and selected reproduction scripts across AI tasks.
- **[Hiloop: search is enough](https://github.com/hiloopai/search-is-enough)** · 2026-07-02 · *Artifact optimization*
  Stock coding agents search training recipes from the stock baseline; the final recipe derives from Recursive’s published solution.
- **[Search over Self-Edit Strategies for LLM Adaptation](https://arxiv.org/abs/2601.14532v1)** · 2026-01-20 · *Self-updating weights*
  Searches self-edit templates and next-token-prediction update settings with an archive.
- **[Absolute Zero: Reinforced Self-play Reasoning with Zero Data](https://arxiv.org/abs/2505.03335v3)** · 2025-05-06 · *Self-updating weights*
  Generates executable tasks and verification signals for RL weight updates.
- **[Self-Adapting Language Models](https://arxiv.org/abs/2506.10943v2)** · 2025-06-12 · *Self-updating weights*
  Generates adaptation data/instructions and evaluates gradient-based updates.
- **[Automated Researchers Can Mitigate Well-characterized Alignment Failures](https://arxiv.org/abs/2608.28945v1)** · 2026-08-28 · *Artifact optimization*
  Searches training methods and data for ten measured alignment-failure categories while checking general capabilities.
- **[Co-Harness: Co-Evolving Harnesses and Model Weights for LLM Agents](https://arxiv.org/abs/2607.22688v1)** · 2026-07-17 · *Self-updating weights*
  Alternates validated harness edits with supervised learning from trajectories generated by the improved harness.
- **[Frontis-MA1: Training an AI4AI Model towards Recursive Self-Improvement in Machine Learning Engineering](https://arxiv.org/abs/2607.28568v1)** · 2026-07-30 · *Self-updating weights*
  Trains reusable program-evolution operators and composes them into long-horizon machine-learning search.
- **[Self-Improving Large Language Models via Progressive Experience Evolution](https://arxiv.org/abs/2608.02139v1)** · 2026-08-03 · *Self-updating weights*
  Builds a validated experience pool, distills it into model weights and follows with reward-driven optimization.
- **[Skill Self-Play: Pushing the Frontier of LLM Capability with Co-Evolving Skills](https://arxiv.org/abs/2607.22529v1)** · 2026-07-24 · *Self-updating weights*
  Co-evolves a skill library, task proposer and solver using executable task checks.
- **[Intology Locus: Scaling Automated Post-Training](https://intology.ai/blog/scaling-automated-post-training)** · 2026-08-03 · *Artifact optimization*
  Runs parallel, multi-day post-training experiments and reports both benchmark and production outcomes.
- **[XYZ-Aquila: AI4AI at Scale](https://xyz-lab.ai/blogs/ai4ai-at-scale/)** · 2026-07 · *Feeds the next generation*
  Uses gated interventions across data, training, runtime and context management to develop open-weight search agents.
- **[RISE: Recursive Improvement via Self-Extrapolating Policy Distillation](https://arxiv.org/abs/2609.05295v1)** · 2026-09-04 · *Self-updating weights*
  Alternates verifiable-reward learning with distillation from an extrapolation of the model’s own training trajectory.
- **[Experience Funnel: A State–Policy Alternating Loop for Self-Evolving Agents](https://arxiv.org/abs/2609.08919v1)** · 2026-09-08 · *Self-updating weights*
  Alternates editable skills and harness state with distillation into a deployment policy.
- **[SkillForge: Co-Evolving Skills and Agents via Dynamic Skill Lifecycles](https://arxiv.org/abs/2610.09832v1)** · 2026-10-07 · *Self-updating weights*
  Moves skills through trial, active, stable and retired states by rollout success during GRPO training, with teacher-model mutation of mid-fitness skills.
- **[RLDISCOVER: LLM-driven co-evolution of reinforcement learning algorithms](https://arxiv.org/abs/2610.09218v1)** · 2026-10-06 · *Artifact optimization*
  An LLM edits five component functions of SAC, PPO or DQN, first one component at a time, then jointly, screening candidates by staged training.
- **[Evolving in Thought Space: Training a Small Model at Test Time Unlocks Better Discoveries](https://arxiv.org/abs/2610.06269v1)** · 2026-10-05 · *Self-updating weights*
  Trains only a small guidance model with test-time RL to propose high-level edits, which a frozen larger executor turns into complete candidate solutions.
- **[CURIO: Curiosity-Driven Test-Time Learning for Open-Ended Discovery](https://arxiv.org/abs/2610.04851v1)** · 2026-10-04 · *Self-updating weights*
  Adds a learned prediction-error curiosity bonus at sampled non-top-1 tokens to entropic test-time RL for program discovery.
- **[Self-Evaluating Recursive Agents](https://arxiv.org/abs/2610.04902v1)** · 2026-10-04 · *Self-updating weights*
  Trains one policy to delegate, solve and write pre-committed subtask rubrics whose scores reward its own child agents, anchoring rubric training to verified outcomes.
- **[Group-Marginalized Self-Rewarding RL Drives Zero-Label Self-Evolving](https://arxiv.org/abs/2609.36750v1)** · 2026-09-29 · *Self-updating weights*
  Trains with self-rewarding GRPO on unlabeled math prompts, averaging each response's pseudo-label reward over resampled group contexts before computing its advantage.
- **[Gödel Forest: Balancing Search Depth and Breadth for Data-Centric Recursive Self-Improvement](https://arxiv.org/abs/2609.36675v1)** · 2026-09-29 · *Artifact optimization*
  Parallel agent workers grow persistent search trees over data-synthesis programs, fine-tune a fixed base model per candidate, and share compact lessons and a global leaderboard.
- **[Training AI Scientists to Replicate Research](https://arxiv.org/abs/2608.13331v1)** · 2026-08-13 · *Self-updating weights*
  Post-trains a 27B agent with GRPO on 242 figure-replication tasks, rewarded by a rubric-based coding-agent judge, to direct a frontier coding agent.
- **[Self-Play Meets Skill Evolution: Self-Evolving Search Agents that Pose, Solve, and Remember](https://arxiv.org/abs/2607.29468v1)** · 2026-07-31 · *Self-updating weights*
  Adds a failure-distilled skill bank to search self-play: a proposer poses frontier questions, the solver retrieves skills, and failures become new skills.
- **[Agentic Neural Architecture Search](https://arxiv.org/abs/2607.07984v1)** · 2026-07-08 · *Artifact optimization*
  An LLM designs and trains a seed network, decomposes it into slots with alternative modules, and regularized evolution searches the resulting space.
- **[OPTScientist: Multi-Agent Discovery of Typed Optimizer Programs for Transformer Pretraining](https://arxiv.org/abs/2607.20486v1)** · 2026-06-02 · *Artifact optimization*
  Role agents propose optimizer programs in a typed DSL, compile them, train transformers across scales, and add DSL macros when search stalls.
- **[Agentic Discovery of Neural Architectures: AIRA-Compose and AIRA-Design](https://arxiv.org/abs/2605.15871v1)** · 2026-05-15 · *Artifact optimization*
  Agents in AIRA-dojo arrange attention, MLP and Mamba layers on small proxies, write long-range attention code, and edit an Autoresearch training script.
- **[G-Zero: Self-Play for Open-Ended Generation from Zero Data](https://arxiv.org/abs/2605.09959v1)** · 2026-05-11 · *Self-updating weights*
  A Proposer learns query–hint pairs that most shift the Generator's log-probabilities; the Generator is DPO-trained to prefer its hint-assisted answers over unassisted ones.
- **[Scaling Self-Play with Self-Guidance](https://arxiv.org/abs/2604.20209v1)** · 2026-04-22 · *Self-updating weights*
  A Conjecturer writes simpler Lean variants of unsolved theorems, scored by Solver solve rate times a Guide quality score; the Solver learns from compiler-verified proofs.
- **[ASI-Evolve: AI Accelerates AI](https://arxiv.org/abs/2603.29640v1)** · 2026-03-31 · *Artifact optimization*
  An evolutionary agent loop with a literature-derived cognition base and an analyzer evolves linear-attention layers, pretraining-data cleaning strategies and RL policy-gradient objectives.
- **[Tool-R0: Self-Evolving LLM Agents for Tool-Learning from Zero Data](https://arxiv.org/abs/2602.21320v1)** · 2026-02-24 · *Self-updating weights*
  A Generator learns to synthesize tool-calling tasks with tool menus and gold calls near the Solver's competence band; the Solver trains on the filtered curriculum.
- **[Self-Evolving Recommendation System: End-To-End Autonomous Model Optimization With LLM Agents](https://arxiv.org/abs/2602.10226v1)** · 2026-02-10 · *Artifact optimization*
  An offline agent proposes optimizer, architecture and reward diffs scored by proxy loss or log analyses; an online agent A/B-tests survivors on YouTube traffic.
- **[Learning to Discover at Test Time](https://arxiv.org/abs/2601.16175v1)** · 2026-01-22 · *Self-updating weights*
  Trains the solution-generating LLM with reinforcement learning on one test problem, using a max-seeking entropic objective and PUCT reuse of earlier solutions.
- **[ThetaEvolve: Test-time Learning on Open Problems](https://arxiv.org/abs/2511.23473v1)** · 2025-11-28 · *Self-updating weights*
  Extends an OpenEvolve-style program database with batched sampling, lazy penalties and optional GRPO updates that train the proposing model during evolution.
- **[Language Self-Play For Data-Free Training](https://arxiv.org/abs/2509.07414v1)** · 2025-09-09 · *Self-updating weights*
  One model alternates between posing challenging prompts and answering them, updated with group-relative RL on reward-model scores plus a self-judged quality reward.
- **[R-Zero: Self-Evolving Reasoning LLM from Zero Data](https://arxiv.org/abs/2508.05004v1)** · 2025-08-07 · *Self-updating weights*
  A Challenger learns to pose math questions at the Solver's 50% uncertainty frontier; the Solver trains on majority-vote pseudo-labels, with no seed data.
- **[AlphaGo Moment for Model Architecture Discovery](https://arxiv.org/abs/2507.18074v1)** · 2025-07-24 · *Artifact optimization*
  LLM agents evolve linear-attention layer code from a DeltaNet root, training each candidate and selecting by loss, benchmarks and an LLM judge.
- **[Self-Rewarding Language Models](https://arxiv.org/abs/2401.10020v1)** · 2024-01-18 · *Self-updating weights*
  One model generates responses, scores them as its own LLM-as-a-Judge, and trains on the resulting preference pairs with iterative DPO.

### Research agents (58)

- **[Dream-RSI: Recursive Self-Improvement through Evolving Worlds](https://arxiv.org/abs/2609.14858v1)** · 2026-09-14 · *Improves the improver*
  Uses offline replay of search trees to revise parent selection, branching and stopping policies, then gathers new trees.
- **[RSIAgent: Autonomous Exploration for Recursive Self-improvement in New Environments](https://arxiv.org/abs/2609.15364v1)** · 2026-09-14 · *Self-modifying harness*
  Task-aware practice, verification and skill/memory updates.
- **[Meta$^n$: Recursive Self-Improvement through Emergent Depth](https://arxiv.org/abs/2608.24735v1)** · 2026-08-25 · *Artifact optimization*
  Recursively composes improver levels while keeping the generator fixed.
- **[Hyperagents](https://arxiv.org/abs/2603.19461v1)** · 2026-03-19 · *Improves the improver*
  Makes both task agent and meta-agent editable and studies improver transfer.
- **[Group-Evolving Agents: Open-Ended Self-Improvement via Experience Sharing](https://arxiv.org/abs/2602.04837v1)** · 2026-02-04 · *Self-modifying harness*
  Shares patches, trajectories and failures across an evolving population.
- **[The Red Queen Gödel Machine: Co-Evolving Agents and Their Evaluators](https://arxiv.org/abs/2606.26294v2)** · 2026-06-24 · *Improves the improver*
  Co-evolves agents and evaluators, fixing objectives within epochs and recalibrating between them.
- **[Self Improvement via Fast Tree-search](https://arxiv.org/abs/2609.19526v1)** · 2026-09-17 · *Self-modifying harness*
  Pairwise code judging, Bradley–Terry ranking and asynchronous tree search over coding-agent implementations.
- **[Test-time Recursive Thinking: Self-Improvement without External Feedback](https://arxiv.org/abs/2602.03094v1)** · 2026-02-03 · *Artifact optimization*
  Per-problem strategy search, self-ranking and accumulated knowledge.
- **[MetaSkill-Evolve: Recursive Self-Improvement of LLM Agents via Two-Timescale Meta-Skill Evolution](https://arxiv.org/abs/2607.05297v1)** · 2026-07-06 · *Improves the improver*
  Evolves reusable skills and the policies that manage them.
- **[Darwin Godel Machine: Open-Ended Evolution of Self-Improving Agents](https://arxiv.org/abs/2505.22954v3)** · 2025-05-29 · *Self-modifying harness*
  Archive-based search over a coding agent’s own tools and implementation.
- **[A Self-Improving Coding Agent](https://arxiv.org/abs/2504.15228v2)** · 2025-04-21 · *Self-modifying harness*
  Modifies its coding harness using prior run feedback and reevaluation.
- **[Self-Taught Optimizer (STOP): Recursively Self-Improving Code Generation](https://arxiv.org/abs/2310.02304v3)** · 2023-10-03 · *Improves the improver*
  Rewrites an improver program and applies it to other programs.
- **[AIDE²: Recursive Self-Improvement of AI Research Agents](https://arxiv.org/abs/2609.26457v1)** · 2026-09-22 · *Improves the improver*
  Rewrites a research agent under fixed evaluation budgets and tests the resulting agents on unseen research tasks.
- **[RRSI: Regularized Recursive Self-Improvement of Agent Harnesses](https://arxiv.org/abs/2609.24972v1)** · 2026-09-21 · *Self-modifying harness*
  Constrains harness edits and candidate acceptance to improve transfer beyond the evolution tasks.
- **[Knowledge-Centric Self-Improvement](https://arxiv.org/abs/2607.19592v1)** · 2026-07-21 · *Self-modifying harness*
  Makes a shared, curated knowledge base the object retained across otherwise disposable agents.
- **[AI4AI at Test-Time: Strong-to-Weak Capability Transfer via Harnesses](https://arxiv.org/abs/2608.12307v1)** · 2026-08-12 · *Artifact optimization*
  Uses stronger builder models to improve weaker target models through executable harnesses without changing weights.
- **[ModularRSI: Modular and Generalizable Recursive Harness Self-Improvement](https://arxiv.org/abs/2609.14857v1)** · 2026-09-14 · *Self-modifying harness*
  Evolves separate harness modules using contrasting successful and failed trajectories and validation gates.
- **[AutoResearch: Insight In, Hallucination Out](https://arxiv.org/abs/2608.17906v1)** · 2026-08-18 · *Artifact optimization*
  Connects grounded research ideas to implementation, diagnosis and independent review of experiment artifacts.
- **[Prime Agent: A Self-Improving RLM Harness](https://github.com/PrimeIntellect-ai/prime-agent)** · 2026-08-24 · *Self-modifying harness*
  Combines a persistent Python control environment with revisable prompts, memories, skills and subagent specifications.
- **[ShinkaEvolve: Open Program Evolution](https://github.com/SakanaAI/ShinkaEvolve)** · 2025-09-25 · ongoing project · *Artifact optimization*
  Maintains program populations and evaluated archives for LLM-guided scientific-code search.
- **[GEPA: Reflective Optimization of Prompts, Code and Agent Systems](https://github.com/gepa-ai/gepa)** · 2025-08 · ongoing project · *Artifact optimization*
  Combines trace-based reflection with Pareto-aware evolution over textual system parameters.
- **[Databricks Agent Bricks: Automated Prompt Optimization on IE Bench](https://www.databricks.com/blog/building-state-art-enterprise-agents-90x-cheaper-automated-prompt-optimization)** · 2025-09-24 · *Artifact optimization*
  Evaluates automated prompts on held-out enterprise information-extraction tasks and separates search from serving cost.
- **[LIMBO: Lifelong Inference-Time Memory and Budget Optimization for LLM Agents](https://arxiv.org/abs/2609.14138v1)** · 2026-09-12 · *Self-modifying harness*
  Learns when retained experience is useful and how much inference budget to spend on each task.
- **[Self-Evolving Embodied Agents via Skill-Harness Evolution](https://arxiv.org/abs/2608.11350v1)** · 2026-08-11 · *Self-modifying harness*
  Evolves reusable skills and context-handling code around a frozen embodied planner and executor.
- **[Stateless Language Agents: Scaling Long-Horizon Automated Research](https://arxiv.org/abs/2610.07625v1)** · 2026-10-06 · *Artifact optimization*
  Keeps research state in the harness and rebuilds fresh, role-specific contexts so a stateless Advisor assigns experiments to parallel stateless Workers over 1B-token runs.
- **[AgentDiscover: Autonomous Discovery with Minimal Search Scaffolding](https://arxiv.org/abs/2610.05334v1)** · 2026-10-04 · *Self-modifying harness*
  Lets a coding agent direct the search, querying a graph database of past candidates, resetting context between sessions and reusing its own tools and skills.
- **[FrugalEvo: Towards Cost-Aware LLM-Guided Program Evolution](https://arxiv.org/abs/2610.03675v1)** · 2026-10-02 · *Artifact optimization*
  Splits program evolution between a strong model that proposes strategies and a cheap model that implements and refines them, under fixed dollar budgets.
- **[SEDIMA: Cross-Run Hierarchical Insight Memory for Evolutionary Search Agents](https://arxiv.org/abs/2610.02361v1)** · 2026-10-01 · *Self-modifying harness*
  Distills evaluation traces into clustered natural-language insights that persist across runs and problems and are retrieved into OpenEvolve and ShinkaEvolve mutation prompts.
- **[CollabFlow: Recursive Self-Improvement of Agent Collaboration](https://arxiv.org/abs/2609.38662v1)** · 2026-09-29 · *Self-updating weights*
  A trainable director designs agent teams and message protocols for a frozen executor and is retrained each round on its own team outcomes.
- **[Video-RSI: Recursive Self-Improvement of Video Understanding Agents via Harness Evolution](https://arxiv.org/abs/2609.37950v1)** · 2026-09-29 · *Self-modifying harness*
  The frozen answering model revisits training videos to diagnose failures, edits its own harness code, and keeps revisions that improve accuracy within frame-cost bounds.
- **[R² Flow: Recursive Self-Improvement via Recursive Skill Evolution](https://arxiv.org/abs/2609.33867v1)** · 2026-09-27 · *Self-modifying harness*
  Alternates flow-based training of an orchestration policy with verifier-gated edits to the skill library it uses, so each phase trains on the previous phase's library.
- **[ScienceBuddy: Recursive-in-Recursive Self-Improvement for Interactive Scientific Agents](https://arxiv.org/abs/2609.17523v1)** · 2026-09-15 · *Self-updating weights*
  Alternates harness edits by a fixed auxiliary model with GRPO training of the task model under the selected harness, using rubric-scored scientific tasks.
- **[AlgoEvo: Self-Evolving Agentic Search for Automated Algorithm Discovery](https://arxiv.org/abs/2609.15820v1)** · 2026-09-14 · *Self-modifying harness*
  Replaces fixed evolutionary pipelines with an agent that edits heuristic code, records experience cards in a UCB tree and refines reusable design skills.
- **[Auto-RecSys: Harnessing Autonomous Research Agents for Industry-Scale Recommender System](https://arxiv.org/abs/2609.10922v1)** · 2026-09-10 · *Self-modifying harness*
  Agents run parallel multi-day recommender experiments and rewrite per-model playbooks of dead ends and submission recipes that later sessions read.
- **[WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution](https://arxiv.org/abs/2608.27454v1)** · 2026-08-27 · *Self-modifying harness*
  Co-evolves agent skills with a persistent wiki of failure patterns and proposal history, accepting skill edits only when validation accuracy improves.
- **[Recursive Experiential–Working Memory Evolution for Long-Horizon Agent Harnesses](https://arxiv.org/abs/2608.24876v1)** · 2026-08-25 · *Artifact optimization*
  A fixed Meta-Agent localizes failures to skills, working-memory schema, invocation policy or checkers and admits scoped patches through a regression gate.
- **[EVO-HARNESS: Context-to-Harness Skill Compilation for Self-Evolving Agents](https://arxiv.org/abs/2608.15071v1)** · 2026-08-15 · *Self-modifying harness*
  Reflects on failed executions in a task stream and has an LLM evolver merge lessons into a capped Markdown skill harness for a frozen solver.
- **[AI Research Preference Models](https://arxiv.org/abs/2608.13940v1)** · 2026-08-14 · *Artifact optimization*
  Adds a frozen-LLM preference model that ranks 15 unexecuted child solutions, optionally after short pilot runs, so AIRA-dojo executes only the most promising.
- **[Ouroboros: A Self-Developing Frontier Coding Agent with Reviewed Core Evolution](https://arxiv.org/abs/2608.08311v1)** · 2026-08-08 · *Self-modifying harness*
  A deployed coding agent commits changes to its own tools, prompts and core code through a multi-model LLM review gate during a 161-day deployment.
- **[Mendel Godel Machine: Recursive Self-Improving Coding Agents via Comparative Evolution](https://arxiv.org/abs/2608.07645v1)** · 2026-08-07 · *Self-modifying harness*
  Extends HGM-style archive search with self-edits conditioned on an agent's multi-task failure profile or on another lineage's trajectory for the same task.
- **[EurekAgent: Agent Environment Engineering is All You Need For Autonomous Scientific Discovery](https://arxiv.org/abs/2606.13662v1)** · 2026-06-11 · *Artifact optimization*
  Coordinates off-the-shelf CLI agents through propose–implement rounds in an engineered environment with hidden evaluators, isolation, Git artifacts, budgets and human-oversight interfaces.
- **[MLEvolve: A Self-Evolving Framework for Automated Machine Learning Algorithm Discovery](https://arxiv.org/abs/2606.06473v1)** · 2026-06-04 · *Artifact optimization*
  Searches over full ML pipelines with Monte Carlo graph search, cross-branch reference edges, within-task retrieval memory, and a planner-coder split with diff edits.
- **[MUSE-Autoskill: Self-Evolving Agents via Skill Creation, Memory, Management, and Evaluation](https://arxiv.org/abs/2605.27366v1)** · 2026-05-26 · *Self-modifying harness*
  An agent creates skill packages from its own successful trajectories, tests them in a sandbox, stores per-skill notes and refines failing skills.
- **[Effective Harness Engineering for Algorithm Discovery with Coding Agents](https://arxiv.org/abs/2605.15221v1)** · 2026-05-13 · *Artifact optimization*
  Replaces stateless LLM mutation calls with multi-step coding agents in isolated git worktrees, adding an agent-based evaluation-hack filter to island-model evolution.
- **[SkillOS: Learning Skill Curation for Self-Evolving Agents](https://arxiv.org/abs/2605.06614v1)** · 2026-05-07 · *Improves the improver*
  Trains a skill curator with RL to insert, update and delete Markdown skills that a frozen executor retrieves on later related tasks.
- **[SkillClaw: Let Skills Evolve Collectively with Agentic Evolver](https://arxiv.org/abs/2604.08377v1)** · 2026-04-09 · *Self-modifying harness*
  Aggregates multi-user agent sessions by skill and lets an LLM evolver refine or create shared skills, deploying only validated updates.
- **[POLARIS: A Godel Agent Framework for Small Language Models through Experience-Abstracted Policy Repair](https://arxiv.org/abs/2603.23129v1)** · 2026-03-24 · *Self-modifying harness*
  A 7B-model Godel-style agent turns batches of validation failures into abstracted strategies and minimal code patches to its own policy.
- **[EvoX: Meta-Evolution for Automated Discovery](https://arxiv.org/abs/2602.23413v1)** · 2026-02-26 · *Improves the improver*
  Co-evolves candidate programs and the search strategy that selects parents, inspirations and variation operators, rewriting the strategy when progress stalls.
- **[Huxley-Godel Machine: Human-Level Coding Agent Development by an Approximation of the Optimal Self-Improving Machine](https://arxiv.org/abs/2510.21614v1)** · 2025-10-24 · *Self-modifying harness*
  Coding agents edit their own code in a tree search that expands nodes by clade-level descendant success rather than each agent's own benchmark score.
- **[CodeEvolve: An open source evolutionary coding agent for algorithm discovery and optimization](https://arxiv.org/abs/2510.14150v1)** · 2025-10-15 · *Artifact optimization*
  Evolves programs and their prompts across islands with rank-based depth refinement, inspiration-based crossover, meta-prompted exploration and, in later versions, CVT-MAP-Elites archives.
- **[Scientific Algorithm Discovery by Augmenting AlphaEvolve with Deep Research](https://arxiv.org/abs/2510.06056v1)** · 2025-10-07 · *Artifact optimization*
  Adds web-grounded research proposals, cross-file code edits and a debugging agent to an AlphaEvolve-style island and MAP-Elites program database.
- **[DeepScientist: Advancing Frontier-Pushing Scientific Findings Progressively](https://arxiv.org/abs/2509.26603v1)** · 2025-09-30 · *Artifact optimization*
  Runs month-long Bayesian-optimization-style research loops that rank ideas with an LLM surrogate, implement the top pick on a SOTA codebase, and log findings to memory.
- **[AI Research Agents for Machine Learning: Search, Exploration, and Generalization in MLE-bench](https://arxiv.org/abs/2507.02554v1)** · 2025-07-03 · *Artifact optimization*
  Recasts ML research agents as graph search over code, varying operators and greedy, MCTS or evolutionary policies on MLE-bench lite in a sandboxed dojo.
- **[The AI Scientist-v2: Workshop-Level Automated Scientific Discovery via Agentic Tree Search](https://arxiv.org/abs/2504.08066v1)** · 2025-04-10 · *Artifact optimization*
  Replaces v1's code templates with a four-stage, experiment-manager-guided agentic tree search over experiment code, then writes and VLM-reviews a workshop paper.
- **[Godel Agent: A Self-Referential Agent Framework for Recursive Self-Improvement](https://arxiv.org/abs/2410.04444v1)** · 2024-10-06 · *Improves the improver*
  An LLM agent reads and monkey-patches its own runtime code, rewriting both its task policy and the routine it uses to improve itself.
- **[Automated Design of Agentic Systems](https://arxiv.org/abs/2408.08435v1)** · 2024-08-15 · *Artifact optimization*
  A fixed GPT-4o meta agent programs new agents as Python forward functions, conditioning on a growing archive of evaluated designs.
- **[The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery](https://arxiv.org/abs/2408.06292v1)** · 2024-08-12 · *Artifact optimization*
  Generates ML research ideas, edits a human-written code template to run experiments, writes a LaTeX paper, and scores it with an LLM reviewer.
- **[Promptbreeder: Self-Referential Self-Improvement Via Prompt Evolution](https://arxiv.org/abs/2309.16797v1)** · 2023-09-28 · *Improves the improver*
  Evolves a population of task prompts with an LLM whose mutation prompts are themselves mutated and selected, so the improvement operator also evolves.

### Research evaluation (33)

- **[FastKernels: Benchmarking GPU Kernel Generation in Production](https://arxiv.org/abs/2605.23215v2)** · 2026-05-22 · *Artifact optimization*
  Captures real kernel interfaces/tensors and evaluates integration in actual backends and distributed contexts.
- **[CANN Bench: Benchmarking Agent Generated Kernels against Real NPU and Algorithmic Limits](https://arxiv.org/abs/2607.20518v1)** · 2026-07-08 · *Artifact optimization*
  Ascend operator tasks separating compilation, correctness and performance.
- **[NVIDIA SOL-ExecBench](https://research.nvidia.com/benchmarks/sol-execbench/blog/introducing-sol-execbench)** · 2026-03-19 · *Artifact optimization*
  Real-model kernels with executable validation and hardware speed-of-light references.
- **[AutoResearchExam](https://benchmarks.bespokelabs.ai/autoresearchexam/)** · 2026-09-09 · *Artifact optimization*
  A 24-hour ML-research protocol with private holdout evaluation.
- **[Can AI agents conduct open-ended AI research? Early evidence from two case studies](https://arxiv.org/abs/2607.27191v2)** · 2026-07-29 · *Artifact optimization*
  Agents tackle two previously unpublished research problems assessed by the original researchers.
- **[Reflections on Trusting Trust, Revisited: Contaminating Self-Modifying AI Coding Agents with Poisoned Benchmarks](https://arxiv.org/abs/2609.17817v1)** · 2026-09-15 · *Self-modifying harness*
  Studies how manipulated benchmarks and feedback decouple self-modification scores from capability.
- **[RSIBench-Data: Benchmarking Data-Centric Research for Recursive Self-Improvement](https://arxiv.org/abs/2607.25886v1)** · 2026-07-28 · *Artifact optimization*
  Isolates training-data research by holding the model, training infrastructure and evaluation stack fixed.
- **[On the Fragility of Self-Improving Agents: Variance, Task Order, and Underspecification](https://arxiv.org/abs/2608.18066v1)** · 2026-08-18 · *Self-modifying harness*
  Tests how memory-based agent improvements depend on random runs, curriculum and environmental specifications.
- **[Rethinking the Evaluation of Harness Evolution for Agents](https://arxiv.org/abs/2607.12227v4)** · 2026-07-14 · *Self-modifying harness*
  Compares harness evolution with parallel sampling and sequential refinement under matched budgets, on held-out Terminal-Bench tasks and long-horizon games.
- **[GDPevo: Evaluating Agent Self-Evolution on Real Business Tasks](https://arxiv.org/abs/2608.03764v1)** · 2026-08-04 · *Self-modifying harness*
  Distributes decision rules across training tasks and recombines them in held-out business workflows.
- **[PAST-Bench: Benchmarking the Foundations of Recursive Self-Improvement in Personal Agents](https://arxiv.org/abs/2608.04003v1)** · 2026-08-04 · *Self-modifying harness*
  Uses matched persistence-on and persistence-off runs to test whether retained experience helps future episodes.
- **[S3Gym: Can LLMs Turn Self-Testing and Self-Judging into Self-Improvement?](https://arxiv.org/abs/2608.31100v1)** · 2026-08-31 · *Self-modifying harness*
  Separates exploration from held-out play to compare raw history, summarized memory and weight training.
- **[OpenRSI Index: An Open Benchmark for Model-Development Research](https://index.openrsi.foundation/index.html)** · Ongoing · reviewed 2026-09-25 · *Artifact optimization*
  Packages open model-development projects as bounded research environments with separate verifiers and released trajectories.
- **[EvoAgentBench: Benchmarking Agent Self-Evolution via Ability Transfer](https://arxiv.org/abs/2607.05202v1)** · 2026-07-06 · *Self-modifying harness*
  Constructs train/test relations around reusable abilities to measure transfer from retained agent experience.
- **[RSI-Forge: From Research Papers to Environments for Recursive Self-Improvement](https://arxiv.org/abs/2610.09426v1)** · 2026-10-07 · *Artifact optimization*
  Converts published papers into executable research tasks with evaluators and reproduced baselines, then measures agents over three sessions that inherit code and notes.
- **[RSIGym: A Flexible Environment for Recursive Self-Improvement](https://arxiv.org/abs/2610.10310v1)** · 2026-10-07 · *Artifact optimization*
  Exposes training, inference, rollout, evaluation and sandbox services under budget and permission controls so research agents can improve another model's data, training settings and harness.
- **[CATCH: A Controllable Analysis Testbed for Reward Hacking in Coding RL](https://arxiv.org/abs/2609.39533v1)** · 2026-09-30 · *Self-updating weights*
  Wraps coding problems in repositories with exploitable test loopholes and tracks proxy versus audited true reward as RL training amplifies and conceals hacking.
- **[Reward Hacking Challenges Oversight of Autonomous Research Agents](https://arxiv.org/abs/2609.28614v1)** · 2026-09-23 · *Artifact optimization*
  Measures spontaneous reward hacking, permitted exploit success and adaptive evasion of LLM review across 17 models and 38 research tasks.
- **[Evolution or Illusion? Rethinking Evaluation in LLM Evolutionary Search](https://arxiv.org/abs/2609.19799v1)** · 2026-09-17 · *Artifact optimization*
  Replays 40 seeds × 200 iterations per strategy and task, showing that the best budget split and method ranking change with seed count.
- **[SAEScientist-Bench: Can AI Agents Conduct Autonomous SAE Interpretability Research?](https://arxiv.org/abs/2609.09113v1)** · 2026-09-08 · *Artifact optimization*
  Agents design contrastive probes to select one SAE feature per concept; scoring compares activation rank, selectivity and causal steering with expert references.
- **[RSI-Index: Measuring Autonomous LLM R&D in Frontier Agent Systems](https://www.vals.ai/benchmarks/rsi_index)** · 2026-09 preprint · leaderboard updated 2026-10-01 · *Artifact optimization*
  Scores provider-native agents on budgeted LLM-development tasks (compression, LM training, judge-harness engineering, post-training) against baseline, published-reference and ceiling anchors.
- **[BAITBENCH: Measuring Agent Reward Hacking with Optional Shortcuts Planted in ML Tasks](https://arxiv.org/abs/2608.30724v1)** · 2026-08-31 · *Artifact optimization*
  Plants optional data shortcuts in synthetic tabular ML tasks and measures how often agents submit solutions that inflate public scores but fail held-out data.
- **[DeltaML-Bench: Evaluating Machine Learning Agents on Real-World Research Repositories](https://arxiv.org/abs/2608.19653v1)** · 2026-08-20 · *Artifact optimization*
  Agents must beat published baselines inside 48 real research repositories, while layered audits flag fabricated or gamed improvements.
- **[Automated Discovery Has No Universally Superior Harness](https://arxiv.org/abs/2607.18235v1)** · 2026-07-20 · *Artifact optimization*
  Decomposes OpenEvolve- and TTT-Discover-style search into components and tests 30 rollout-matched harnesses against repeated sequential best-of-N baselines.
- **[PERFOPT-Bench: Evaluating Coding Agents on Software Performance Optimization](https://arxiv.org/abs/2607.07744v1)** · 2026-07-08 · *Artifact optimization*
  Agents profile, patch and verify 12 deliberately slowed C codebases; verified speedup counts only after hidden correctness tests and trajectory audits for shortcuts.
- **[AIRS-Bench: a Suite of Tasks for Frontier AI Research Science Agents](https://arxiv.org/abs/2602.06855v1)** · 2026-02-06 · *Artifact optimization*
  Agents solve 20 ML tasks drawn from recent papers without baseline code; scores are normalized between the worst observed run and the published human SOTA.
- **[AlgoTune: Can Language Models Speed Up General-Purpose Numerical Programs?](https://arxiv.org/abs/2507.15887v1)** · 2025-07-19 · *Artifact optimization*
  Agents rewrite 154 reference numerical solvers for speed; verifiers check outputs on held-out inputs and the score is the harmonic-mean speedup over library baselines.
- **[The Automated LLM Speedrunning Benchmark: Reproducing NanoGPT Improvements](https://arxiv.org/abs/2506.22419v1)** · 2025-06-27 · *Artifact optimization*
  Agents start from one NanoGPT speedrun record's training script and must reproduce the next record's wall-clock training speedup, with or without hints.
- **[PaperBench: Evaluating AI's Ability to Replicate AI Research](https://arxiv.org/abs/2504.01848v1)** · 2025-04-02 · *Artifact optimization*
  Agents rebuild 20 ICML 2024 papers from scratch; an LLM judge grades re-executed submissions against 8,316 author-approved rubric leaves.
- **[Measuring AI Ability to Complete Long Software Tasks](https://arxiv.org/abs/2503.14499v1)** · 2025-03-18 · *Artifact optimization*
  Measures the human task length at which agents succeed 50% of the time; reports it doubled about every 7 months, 2019–2025.
- **[MLGym: A New Framework and Benchmark for Advancing AI Research Agents](https://arxiv.org/abs/2502.14499v1)** · 2025-02-20 · *Artifact optimization*
  A Gym-style environment and 13 open-ended research tasks where agents edit baseline code, train and validate models, and submit artifacts scored against baselines.
- **[RE-Bench: Evaluating frontier AI R&D capabilities of language model agents against human experts](https://arxiv.org/abs/2411.15114v1)** · 2024-11-22 · *Artifact optimization*
  Seven open-ended ML research-engineering environments compare frontier agents with 71 eight-hour human expert attempts under identical GPUs and scoring functions.
- **[MLE-bench: Evaluating Machine Learning Agents on Machine Learning Engineering](https://arxiv.org/abs/2410.07095v1)** · 2024-10-09 · *Artifact optimization*
  Agents train models end to end on 75 offline Kaggle competitions; submissions are graded locally and ranked against private-leaderboard medal thresholds.

### Concepts and foundations (12)

- **[The Last AI Built by Humans: Toward Genuine Recursive Self-Improvement](https://arxiv.org/abs/2609.11873v2)** · 2026-09-10 · *Framework or survey*
  Discusses organizations and pathways for continuing self-improvement.
- **[Recursive Self-Improvement in AI: From Bounded Self-Refinement to Autonomous Research Loops](https://arxiv.org/abs/2607.07663v2)** · 2026-07-08 · *Framework or survey*
  Organizes improvement targets, mechanisms and historical work.
- **[Self-Improvements in Modern Agentic Systems: A Survey](https://arxiv.org/abs/2607.13104v1)** · 2026-07-14 · *Framework or survey*
  Organizes persistent agent updates by the component changed and the feedback that drives them.
- **[The Economics of Recursive Self-Improvement](https://arxiv.org/abs/2609.15802v1)** · 2026-09-14 · *Framework or survey*
  Models when AI-assisted research could produce sustained acceleration rather than improvements within a fixed task.
- **[What if automating AI R&D triggers an intelligence explosion?](https://arxiv.org/abs/2609.36054v1)** · 2026-09-28 · *Framework or survey*
  Assesses whether automating AI R&D could compress years of AI progress into months, models the software feedback loop, and proposes visibility, steering and adaptation policies.
- **[Evolutionary Safety of Recursive Self-Improving AI: Taxonomy, Risk Discovery, and Evaluation](https://arxiv.org/abs/2609.31186v1)** · 2026-09-25 · *Framework or survey*
  Treats safety under recursive self-improvement as how safety properties persist, erode and propagate across retained updates, and proposes evaluation units and governance controls.
- **[The Dynamics of Intelligence Explosions](https://arxiv.org/abs/2608.14426v1)** · 2026-08-14 · *Framework or survey*
  Analyzes recursive self-improvement as a feedback loop with a generation time, showing singular growth requires that time to shrink toward zero, unlike merely super-exponential growth.
- **[Self-Evolving Coding Agents](https://arxiv.org/abs/2608.03392v1)** · 2026-08-04 · *Framework or survey*
  Surveys 108 methods that turn coding experience into retained updates to an agent's assets, architecture or weights, and argues gains must be shown after reuse.
- **[Self-Improvement of Large Language Models: A Technical Overview and Future Outlook](https://arxiv.org/abs/2603.25681v1)** · 2026-03-26 · *Framework or survey*
  Organizes LLM self-improvement as a closed loop of data acquisition, data selection, model optimization and inference refinement, overseen by an autonomous evaluation layer.
- **[Measuring AI R&D Automation](https://arxiv.org/abs/2603.03992v1)** · 2026-03-04 · *Framework or survey*
  Proposes 14 experimental, survey, operational and organizational metrics for tracking how far AI R&D is automated and how automation affects AI progress and oversight.
- **[Will Compute Bottlenecks Prevent an Intelligence Explosion?](https://arxiv.org/abs/2507.23181v1)** · 2025-07-31 · *Framework or survey*
  Estimates how substitutable research compute and cognitive labor are at four frontier AI labs, a key parameter for whether compute caps a software-only intelligence explosion.
- **[Will AI R&D Automation Cause a Software Intelligence Explosion?](https://www.forethought.org/research/will-ai-r-and-d-automation-cause-a-software-intelligence-explosion)** · 2025-03-26 · *Framework or survey*
  Argues that AI systems able to fully automate AI R&D could trigger accelerating software-only progress on fixed hardware if returns to software R&D exceed one.
<!-- /generated:collection -->

## Research coverage

<!-- generated:coverage -->
New work through 2026-10-07, extending the original 2026-06-25 to 2026-09-25 window. Foundational work from 2023 to 2025 was backfilled in the 2026-10-07 update.

Date-bounded arXiv web searches across the seven research directions, cross-checked against four community lists and original papers. The 2026-10-07 update added alphaXiv topic discovery across thirteen themes; each candidate was read in full text against a written scope rule and the loop-profile vocabulary, and existing entries were relabeled and checked against their primary sources. Experiments were not independently reproduced.

A targeted literature scan, not an exhaustive arXiv census. The original pass could not use the arXiv API (HTTP 406) and relied on indexed arXiv pages and bibliography links. Out-of-scope candidates, such as domain applications of self-improvement, were excluded. Numbers follow the cited version of each paper; when versions disagree, the entry says which it uses. Older ongoing projects and industry reports are dated separately.

Companion collections used for discovery:

- [lobehub / awesome-rsi](https://github.com/lobehub/awesome-rsi)
- [pinkbubblebubble / awesome-rsi](https://github.com/pinkbubblebubble/awesome-rsi)
- [Token-Rhythm / awesome-rsi](https://github.com/Token-Rhythm/awesome-rsi)
- [Prism-Shadow / awesome-rsi](https://github.com/Prism-Shadow/awesome-rsi)
<!-- /generated:coverage -->

## Design acknowledgement

The reading desk is an original implementation inspired by the serif typography and three-pane layout of [Awesome Loop Models](https://github.com/huskydoge/Awesome-Loop-Models). Paper and project sources are linked in each entry.
