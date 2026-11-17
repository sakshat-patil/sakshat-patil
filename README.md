<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f2027,50:203a43,100:2c5364&height=180&section=header&text=Sakshat%20Patil&fontSize=48&fontColor=ffffff&fontAlignY=38&desc=Software%20Engineer%20%7C%20Backend%2C%20Distributed%20Systems%20%26%20Applied%20AI&descAlignY=60&descSize=16" width="100%" />

<a href="https://github.com/sakshat-patil">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=500&size=20&duration=3000&pause=800&color=2C9AB7&center=true&vCenter=true&width=640&lines=Backend+engineer+with+2.5%2B+years+at+Reliance+Jio;SWE+Intern+%40+Intuit+(Summer+2026);MS+Software+Engineering+%40+San+Jos%C3%A9+State;Go+%7C+Java+%7C+Python+%7C+Kafka+%7C+AWS+%7C+Kubernetes;Building+systems+that+scale+and+AI+you+can+audit" alt="Typing intro" />
</a>

<br/>

<a href="https://www.linkedin.com/in/sakshat-patil"><img src="https://img.shields.io/badge/LinkedIn-sakshat--patil-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" /></a>
<a href="mailto:sakshatpatil25@gmail.com"><img src="https://img.shields.io/badge/Email-sakshatpatil25%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white" /></a>
<a href="https://sakshat-patil.github.io"><img src="https://img.shields.io/badge/Portfolio-sakshat--patil.github.io-111111?style=for-the-badge&logo=githubpages&logoColor=white" /></a>
<img src="https://komarev.com/ghpvc/?username=sakshat-patil&style=for-the-badge&color=2C9AB7&label=Profile+views" />

</div>

---

### About me

```yaml
name:        Sakshat Patil
location:    San Jose, CA  (open to roles anywhere in the US)
education:   MS Software Engineering, San Jose State University   # 2025 - 2027
             BE Electronics & Telecommunications, University of Mumbai
experience:
  - Software Engineer Intern      @ Intuit         # Summer 2026
  - Software Engineer             @ Reliance Jio   # 2022 - 2025, backend for millions of users
  - Teaching Assistant            @ SJSU           # Business Systems Innovation Labs (Salesforce)
focus:       [backend, distributed systems, cloud infra, applied ML / LLMs]
looking_for: Software Engineering roles (new grad, entry-level, mid-level)
```

<details>
<summary><b>Where I've been</b> (click to expand)</summary>
<br/>

```mermaid
flowchart LR
    A["University of Mumbai<br/>BE, EXTC<br/>2018 - 2022"] --> B["Reliance Jio<br/>Software Engineer<br/>2022 - 2025"]
    B --> C["San Jose State<br/>MS Software Engineering<br/>2025 - 2027"]
    C --> D["Intuit<br/>SWE Intern<br/>Summer 2026"]
    D --> E(("Next:<br/>your team?"))
    style E fill:#2C9AB7,color:#fff,stroke:#2C9AB7
```

</details>

---

### Tech stack

<div align="center">

**Languages**<br/>
<img src="https://skillicons.dev/icons?i=go,java,cpp,python,ts,js,bash&perline=7" />

**Backend & Data**<br/>
<img src="https://skillicons.dev/icons?i=fastapi,flask,spring,nodejs,kafka,postgres,redis,mongodb&perline=8" />

**Cloud & DevOps**<br/>
<img src="https://skillicons.dev/icons?i=aws,docker,kubernetes,terraform,linux,githubactions,prometheus,git&perline=8" />

**Frontend**<br/>
<img src="https://skillicons.dev/icons?i=react,nextjs,tailwind,materialui,vite&perline=5" />

**ML / AI**<br/>
<img src="https://skillicons.dev/icons?i=pytorch,tensorflow,sklearn,opencv&perline=4" />
<img src="https://img.shields.io/badge/LangChain-1C3C3C?style=flat-square&logo=langchain&logoColor=white" />
<img src="https://img.shields.io/badge/vLLM-30A2FF?style=flat-square" />
<img src="https://img.shields.io/badge/Ray%20Serve-028CF0?style=flat-square&logo=ray&logoColor=white" />
<img src="https://img.shields.io/badge/YOLOv8-111F68?style=flat-square" />
<img src="https://img.shields.io/badge/RAG-6E40C9?style=flat-square" />

</div>

---

### Featured projects

> Click any project to open the details.

<details open>
<summary><b><a href="https://github.com/sakshat-patil/edgefleet">EdgeFleet</a></b> &nbsp;|&nbsp; IoT camera fleet control plane &nbsp;
<img src="https://img.shields.io/badge/Go-00ADD8?style=flat-square&logo=go&logoColor=white" />
<img src="https://img.shields.io/badge/Kafka-231F20?style=flat-square&logo=apachekafka&logoColor=white" />
<img src="https://img.shields.io/badge/AWS%20EKS-FF9900?style=flat-square&logo=amazonaws&logoColor=white" />
<img src="https://img.shields.io/badge/Terraform-7B42BC?style=flat-square&logo=terraform&logoColor=white" />
</summary>
<br/>

A control plane for a fleet of edge cameras: remote config, **staged firmware rollouts with automatic rollback**, per-device health, and a Kafka pipeline for detection events.

- Rollouts release devices healthy-first in cumulative stages (5% -> 25% -> 100%), promote only after a soak period, and roll everything back if the failure rate crosses a threshold
- ESP32-CAM firmware with A/B OTA slots: a new image only becomes valid after its first good heartbeat, otherwise the bootloader reverts
- At-least-once command delivery via SQS + Redis with a dead-letter queue and CloudWatch alarm
- Raspberry Pi CV agent (OpenCV MOG2 + HOG person detection), VLAN-isolated edge networking
- Full AWS infra in Terraform (VPC, EKS, ElastiCache, SQS, ECR, S3, IRSA), Strimzi Kafka on Kubernetes, Prometheus metrics

```mermaid
flowchart LR
    CAM["ESP32-CAM / Pi agents"] -- heartbeat + events --> CP["Go control plane"]
    OP["Operator API"] --> CP
    CP -- desired state --> R[("Redis")]
    CP -- commands --> Q["SQS (+DLQ)"]
    Q --> W["Dispatcher workers"] --> R
    CAM -- detections --> K["Kafka"] --> CP
```

</details>

<details>
<summary><b><a href="https://github.com/sakshat-patil/crewquarters">Crewquarters</a></b> &nbsp;|&nbsp; Your own local AI crew &nbsp;
<img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" />
<img src="https://img.shields.io/badge/vLLM-30A2FF?style=flat-square" />
<img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" />
<img src="https://img.shields.io/badge/NVIDIA%20GB10-76B900?style=flat-square&logo=nvidia&logoColor=white" />
</summary>
<br/>

A locally deployed AI-agent marketplace for NVIDIA GB10 (DGX Spark-class) machines. Install open-weight models, add agents from a curated catalog, run them in isolated containers, schedule them, and approve their actions from a web UI. Built with Nikhil Ghind and team.

- On-demand vLLM model loading with an admission controller that only co-locates models when the memory budget is safe
- Demo agents: a Twilio caller agent driven by Google Sheets, and a daily Gmail digest agent that classifies and summarizes mail with a local model
- One-command install for both `arm64` (DGX OS) and laptop dev paths, CI on every push

</details>

<details>
<summary><b><a href="https://github.com/sakshat-patil/Symptom-Based-Disease-Identification-via-RAG">Record-Based Medical Diagnostic Assistant</a></b> &nbsp;|&nbsp; Auditable clinical decision support &nbsp;
<img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" />
<img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white" />
<img src="https://img.shields.io/badge/RAG-6E40C9?style=flat-square" />
</summary>
<br/>

Given a patient's symptoms, ranks the most likely diseases and shows **why**: the FP-Growth association rule that fired plus the biomedical passages retrieved from MedQuAD. The goal is that every prediction is auditable, not just accurate.

- Hybrid ranking with a live alpha slider to blend association rules and retrieval
- `/suggest` endpoint predicts likely next symptoms; `/differential` writes a short differential across the top 3 candidates
- Next.js 14 front end with symptom autocomplete and clinical presets (CMPE 255, team of 3)

</details>

<details>
<summary><b><a href="https://github.com/sakshat-patil/272-Project">Supply Chain Risk Monitor</a></b> &nbsp;|&nbsp; Multi-agent incident response &nbsp;
<img src="https://img.shields.io/badge/Gemini-8E75B2?style=flat-square&logo=googlegemini&logoColor=white" />
<img src="https://img.shields.io/badge/AWS-FF9900?style=flat-square&logo=amazonaws&logoColor=white" />
<img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB" />
</summary>
<br/>

Six specialized AI agents analyze supply-chain disruption events and produce incident response plans, turning days of manual risk assessment into a 15-30 second run.

- 0-100 risk scoring, financial impact estimates, and multi-tier supplier dependency analysis
- Real-time supplier health and weather monitoring, role-based auth, deployed on AWS (CMPE 272)

</details>

<details>
<summary><b><a href="https://github.com/sakshat-patil/GitTranslate">GitTranslate</a></b> &nbsp;|&nbsp; Hackathon: translate repos and podcasts &nbsp;
<img src="https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white" />
<img src="https://img.shields.io/badge/OpenAI-412991?style=flat-square&logo=openai&logoColor=white" />
<img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white" />
</summary>
<br/>

Browse any GitHub/GitLab repo and translate its comments, filenames and docs into another language. Bonus mode: transcribe a podcast with Whisper, translate it, and synthesize new audio. [Live demo](https://git-translate-indol.vercel.app) | [Devpost](https://devpost.com/software/gitcast)

</details>

<details>
<summary><b>More things I've built</b></summary>
<br/>

| Project | What it is | Stack |
|---|---|---|
| [MedAssist](https://github.com/sakshat-patil/MedAssist) | AI medical triage: risk levels from case notes and clinical docs, PDF reports, Twilio emergency alerts | React, TypeScript, FastAPI |
| [llm-local-inference-rayserve](https://github.com/sakshat-patil/llm-local-inference-rayserve) | Production-style local LLM server | vLLM, Ray Serve, FastAPI |
| [YOLOv8 training optimization](https://github.com/sakshat-patil/sakshat-patil-ultralytics) | Ablation study on detection training; +4.4% mAP@0.5:0.95 over baseline | PyTorch, Ultralytics |
| [scalable-microservices-assignment](https://github.com/sakshat-patil/scalable-microservices-assignment) | Two Flask services talking over HTTP | Python, Flask |
| [Serverless web app](https://github.com/sakshat-patil/Building-a-Serverless-Web-Application-with-AWS-Lambda-and-DynamoDB-Assignment) | Serverless CRUD app | AWS Lambda, DynamoDB |

</details>

---

### GitHub stats

<div align="center">

<img height="165" src="https://github-readme-stats.vercel.app/api?username=sakshat-patil&show_icons=true&hide_border=true&theme=tokyonight&count_private=true&include_all_commits=true" />
<img height="165" src="https://github-readme-stats.vercel.app/api/top-langs/?username=sakshat-patil&layout=compact&hide_border=true&theme=tokyonight&langs_count=8" />

<img src="https://streak-stats.demolab.com?user=sakshat-patil&theme=tokyonight&hide_border=true" />

<img width="100%" src="https://github-readme-activity-graph.vercel.app/graph?username=sakshat-patil&theme=tokyo-night&hide_border=true&area=true" />

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/sakshat-patil/sakshat-patil/output/github-contribution-grid-snake-dark.svg" />
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/sakshat-patil/sakshat-patil/output/github-contribution-grid-snake.svg" />
  <img alt="Contribution snake" src="https://raw.githubusercontent.com/sakshat-patil/sakshat-patil/output/github-contribution-grid-snake.svg" />
</picture>

</div>

---

<div align="center">

**Currently:** finishing my MS at SJSU, grinding LeetCode, and building EdgeFleet.<br/>
**Ask me about:** distributed systems, Kafka, rolling out firmware without bricking things, RAG.<br/>
**Open to:** Software Engineering roles across the US. Say hi at [sakshatpatil25@gmail.com](mailto:sakshatpatil25@gmail.com).

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:2c5364,50:203a43,100:0f2027&height=100&section=footer" width="100%" />

</div>
