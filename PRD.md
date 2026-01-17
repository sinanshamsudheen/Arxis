**Product Requirements Document (PRD)**

**Arxis SOC Platform \- Complete Developer Implementation Guide**

**Version:** 1.0 (Final Production Architecture)  
**Date:** November 3, 2025  
**Target Deployment:** Allianz SOC (Primary), Extensible to Financial Institutions Globally  
**Project Duration:** 9-12 weeks (5-person expert team)  
**Annual Infrastructure Cost:** $2,010,000

**Table of Contents**

1. Executive Summary

2. Business Context & Problem Statement

3. Product Vision & Strategic Goals

4. System Architecture Overview

5. Hybrid AI Infrastructure Design

6. Detailed Technical Architecture

7. Technology Stack Deep Dive

8. Core System Components & Implementation Details

9. Data Models & Schemas

10. API Specifications

11. Machine Learning Pipeline with Intelligent Inference Routing

12. Custom Observability & Explainability Framework

13. AI Agent Architecture

14. Automated Compliance Reporting System

15. Frontend Architecture & UX Specifications

16. Integration Requirements

17. Security & Compliance Architecture

18. Deployment Architecture

19. Performance Requirements & SLAs

20. Development Phases & Milestones

**1\. Executive Summary**

Arxis SOC Platform is a next-generation, AI-native Security Operations Center designed to replace or augment legacy SIEM systems like IBM QRadar in large financial institutions. Built specifically for Allianz's 100M+ user base initially, the platform is architected to be universally applicable to any banking or insurance SOC environment.

**Core Innovation:** Arxis employs a hybrid CPU/GPU inference architecture that intelligently routes AI workloads based on alert severity and priority, achieving enterprise-grade performance at 70% lower infrastructure costs than traditional GPU-only approaches. Combined with automated regulatory compliance reporting and explainable AI throughout, Arxis transforms security operations from reactive alert management to proactive, AI-orchestrated threat defense.

**Key Differentiators:**

* **92%+ detection accuracy** through cohort-based machine learning and graph neural networks

* **Sub-second alert latency** for critical incidents via intelligent GPU routing

* **Hybrid CPU/GPU architecture** optimizing cost without sacrificing performance

* **Automated IRDAI 6-hour compliance reporting** eliminating manual processes and regulatory risk

* **AI-driven natural language explanations** for every alert, reducing investigation time by 60%

* **Scalable to 100M+ users** using only \~1,000 cohort models

**2\. Business Context & Problem Statement**

**2.1 Target Customer: Allianz SOC**

Allianz operates a hybrid SOC infrastructure centered on IBM QRadar with the following critical pain points:

**Current Environment Challenges:**

* IBM QRadar as primary SIEM struggling with scale (50M+ events/day)

* 85-90% false positive rate overwhelming 12+ security analysts

* Mean Time to Detect (MTTD): 120+ minutes

* Mean Time to Respond (MTTR): 200+ minutes

* Fragmented tooling requiring context switching across 8+ systems

* Manual IRDAI compliance reporting with frequent deadline misses

* No explainability: Analysts receive cryptic alerts requiring extensive manual investigation

* Annual operational cost: $7.3M for infrastructure, licensing, and personnel

**Regulatory Pressure:**  
The Insurance Regulatory and Development Authority of India (IRDAI) mandates reporting of cyber incidents within **6 hours of detection** to both IRDAI and CERT-In. Non-compliance results in regulatory penalties and potential license implications. Current manual processes frequently miss this deadline.

**2.2 Market Opportunity**

Arxis is designed as a **universal SOC platform** applicable to:

* Insurance companies (Allianz, HDFC Ergo, ICICI Lombard)

* Banks and financial institutions globally

* Any regulated enterprise requiring advanced threat detection with compliance automation

**2.3: Financial Services Threat Landscape**

Insurance-Specific Attack Scenarios Arxis Detects:

1\. Claim Fraud Rings

   \- Coordinated fake claims across multiple policyholders

   \- GNN detects relationship networks

   \- Correlation with SISU business analytics flags

2\. Underwriting Data Exfiltration

   \- Actuarial models and risk algorithms are crown jewels

   \- Baseline deviation on large file transfers from actuarial systems

   \- Unusual data access patterns by competitors/former employees

3\. Policy Manipulation

   \- Unauthorized premium adjustments

   \- Beneficiary changes without proper authorization

   \- Privilege escalation in claims processing systems

4\. Reinsurance Contract Theft

   \- High-value IP theft targeting reinsurance terms

   \- Nation-state actors targeting treaty negotiations

   \- GNN tracks lateral movement to finance systems

5\. Customer PII Harvesting

   \- Bulk queries of policyholder data

   \- Unusual patterns in customer service representative access

   \- Credential stuffing attacks on customer portals

6\. Insider Threats

   \- Disgruntled adjusters accessing files outside their territory

   \- IT admins exfiltrating customer databases

   \- Cohort-based detection flags anomalous access patterns

7\. Third-Party Risk

   \- Compromised agent networks

   \- Broker system intrusions

   \- Medical provider data breaches affecting health insurance

**3\. Product Vision & Strategic Goals**

**3.1 Vision Statement**

"Enable security teams to transparently detect, investigate, and respond to sophisticated cyber threats with precision, speed, and automation — where analysts focus on strategic defense while AI handles detection, explanation, compliance, and routine response."

**3.2 Strategic Goals**

1. **Replace QRadar as primary detection engine** within 12 months of deployment

2. **Reduce false positives to \<10%** through advanced ML and GNN analysis

3. **Automate 70% of Tier-1 analyst workload** via AI agents and SOAR integration

4. **Achieve \<10 minute MTTR** for critical incidents (20x improvement)

5. **100% automated IRDAI compliance reporting** with zero deadline misses

6. **Enable horizontal scaling** to 500M users without architecture changes

7. **Deliver 65% cost reduction** compared to legacy SOC infrastructure

**4\. System Architecture Overview**

**4.1 Architectural Philosophy**

**Microservices \+ Event-Driven \+ Hybrid AI Infrastructure**

Arxis follows modern cloud-native design principles:

* **Microservices:** Independent, loosely coupled services deployable and scalable independently

* **Event-Driven:** Apache Kafka-based streaming backbone for real-time processing

* **Hybrid AI-First:** Intelligent CPU/GPU routing optimizes cost and performance

* **Immutable Infrastructure:** Container-based deployment with GitOps methodology

* **Compliance-Native:** Regulatory reporting embedded throughout the pipeline

**4.2 High-Level System Context**

Arxis centralizes data ingestion from diverse sources (firewalls, endpoints, applications, authentication systems, business analytics), processes events through stateful streaming pipelines with real-time machine learning, generates AI-explained alerts, and orchestrates automated response workflows while maintaining continuous compliance monitoring.

**External Actors:**

* SOC Analysts (Tier-1, Tier-2)

* SOC Managers

* CISOs and Executive Stakeholders

* Compliance Officers

* External Threat Intelligence Providers

* Corporate Identity Providers (SSO)

* Regulatory Bodies (IRDAI, CERT-In)

**4.3 Deployment Strategy: Full Orchestrator Mode**

Arxis operates as the **primary SOC brain** with the following architecture:

* All security logs flow directly to Arxis (not legacy SIEM first)

* Arxis performs all detection, prioritization, and orchestration

* Legacy systems (QRadar) become secondary data sources or audit trails

* Analysts use Arxis dashboard as primary operational interface

* Bidirectional integration maintains compatibility during transition

**5\. Hybrid AI Infrastructure Design**

**5.1 Architecture Overview**

Arxis employs a **dual-track inference architecture** that intelligently routes AI inference requests between CPU and GPU resources based on alert severity, priority, queue depth, and caching status. This approach delivers enterprise-grade performance while reducing infrastructure costs by 70% compared to GPU-only architectures.

**5.2 Intelligent Inference Router**

The Hybrid Inference Router serves as the central orchestration component for all AI workloads:

**Primary Design Principles:**

* **Critical/High severity alerts** receive immediate GPU inference (50-100ms latency)

* **Medium/Low severity alerts** route to CPU inference (2-5 seconds acceptable latency)

* **Common alert patterns** served from distributed cache (5ms latency)

* **Dynamic queue monitoring** allows CPU alerts to upgrade to GPU when resources available

* **Batched CPU processing** groups multiple low-priority requests for efficiency

**Routing Decision Logic:**

The router evaluates each alert against multiple criteria:

1. **Severity Level:** Critical and High automatically trigger GPU inference

2. **Queue Depth:** Empty GPU queues can handle Medium priority alerts

3. **Cache Status:** Previously seen patterns bypass inference entirely

4. **User Risk Profile:** VIP users and high-risk accounts prioritize GPU resources

5. **Regulatory Requirements:** IRDAI-reportable incidents receive priority routing

**5.3 Infrastructure Components**

**GPU Cluster (3 nodes):**

* AWS EC2 p4d.24xlarge instances with NVIDIA A100 GPUs

* Handles 20% of alert volume (Critical/High severity)

* Runs full-precision or 4-bit quantized models depending on throughput requirements

* Average inference: 50-100ms per request

* Autoscaling based on queue length and latency metrics

**CPU Cluster (30 nodes):**

* AWS EC2 m6i.4xlarge instances optimized for ML inference

* Handles 80% of alert volume (Medium/Low severity)

* Runs 4-bit quantized models optimized for CPU architecture

* Average inference: 2-5 seconds per request (acceptable for non-urgent alerts)

* Batch processing capability groups 8-16 requests for efficiency

**Distributed Cache Layer:**

* Redis cluster for hot path caching of common explanations

* 40-60% cache hit rate for frequently recurring alert patterns

* Template-based personalization adds user/time/IP specifics

* TTL of 24 hours with intelligent invalidation on model updates

**Model Serving Infrastructure:**

* Both GPU and CPU pods run identical fine-tuned SLM (Gemma 9B)

* GPU version: full-precision or float16 for maximum speed

* CPU version: 4-bit quantized with optimized kernels for CPU inference

* Model artifacts synchronized from central registry

* A/B testing framework for gradual model rollouts

**5.4 Performance Characteristics**

**Latency by Alert Severity:**

* Critical alerts: p95 latency 120ms (GPU)

* High alerts: p95 latency 150ms (GPU)

* Medium alerts: p95 latency 3.5s (CPU, batched)

* Low alerts: p95 latency 4.8s (CPU, batched)

* Cached responses: p95 latency 8ms

**Analyst Workflow Integration:**  
Analysts typically spend 20-60 seconds reviewing alert context, historical data, and related events before taking action. CPU inference latency of 2-5 seconds is imperceptible within this workflow for non-critical alerts, while critical alerts receive immediate GPU-accelerated explanations.

**5.5 Cost Optimization Benefits**

The hybrid architecture delivers substantial cost savings:

* **GPU infrastructure:** 3 nodes instead of 10 \= $252K/year (vs $840K GPU-only)

* **CPU infrastructure:** 30 nodes for bulk processing \= $144K/year

* **Total AI inference cost:** $396K/year

* **Savings achieved:** 70% reduction in AI infrastructure costs

* **Performance maintained:** Zero impact on critical path latency

**6\. Detailed Technical Architecture**

**6.1 Container Architecture (Microservices)**

**6.1.1 Ingestion Layer**

* **Filebeat/Fluentd Agents:** Deployed on log sources for real-time collection

* **Kafka Producers:** Custom producers for API-based sources (cloud platforms, SaaS applications)

* **Schema Registry:** Avro schema validation and versioning for all event types

* **Amazon MSK Topics:** Partitioned by log type, priority, and source system

**6.1.2 Processing Layer (Apache Flink)**

* **Parser Job:** Normalizes CEF/LEEF/JSON/Syslog to unified schema

* **Enrichment Job:** Adds threat intelligence, user context, SISU business analytics

* **Cohort Assignment Job:** Maps users to behavioral cohorts using clustering algorithms

* **Baseline Statistics Job:** Maintains rolling 30-day user activity windows

* **River ML Scoring Job:** Executes online learning models per cohort for anomaly detection

* **GNN Analysis Job:** Multi-entity relationship analysis for coordinated attack detection

**6.1.3 AI Services Layer**

**Hybrid Inference Service:**

* Intelligent router directing requests to GPU or CPU clusters

* FastAPI-based microservice architecture

* Health checking and circuit breaker patterns

* Request queue management with priority scheduling

**SLM Inference Pods (GPU):**

* 3 replicas on GPU nodes

* Gemma 9B model (4-bit quantized)

* Average inference: 50-100ms

* Autoscaling on queue depth

**SLM Inference Pods (CPU):**

* 10 replicas on CPU nodes

* Gemma 9B model (4-bit quantized, CPU-optimized)

* Average inference: 2-5 seconds

* Batch processing enabled

**GNN Inference Service:**

* PyTorch Geometric models on GPU

* Temporal graph construction from recent events

* Attack chain detection and visualization

* Risk scoring for multi-hop relationships

**Model Registry:**

* Centralized storage for all model versions

* A/B testing framework for gradual rollouts

* Automated rollback on performance degradation

* Model performance tracking and drift detection

**6.1.4 Agent Orchestration Layer**

All agents implemented as FastAPI microservices:

**Orchestrator Agent:**

* Central coordinator for agent interactions

* Manages conversational context for chatbot

* Routes queries to specialized agents

* Maintains session state and user preferences

**Alert Handler Agent:**

* Consumes alerts from detection pipeline

* Deduplicates and prioritizes based on risk

* Enriches with historical context

* Formats for display and ticketing

**Threat Analyzer Agent:**

* Deep-dive analysis on flagged events

* MITRE ATT\&CK framework mapping

* Calls hybrid inference service for explanations

* Generates attack timeline visualizations

**Root Cause Agent:**

* Backward event chain analysis

* Identifies initial compromise vector

* Maps affected assets and accounts

* Produces forensic investigation packages

**Compliance Agent:**

* Real-time monitoring for IRDAI reportable incidents

* Auto-generates regulatory reports in prescribed formats

* Maintains immutable audit logs with cryptographic signatures

* Schedules and submits reports to regulatory portals

* Countdown timers for 6-hour deadline tracking

**Response Automation Agent:**

* Executes remediation playbooks

* Interfaces with ServiceNow/IBM Resilient

* Triggers automated actions with approval workflows

* Comprehensive audit logging

**6.1.5 Data Storage Layer**

**TimescaleDB (Amazon RDS):**

* User baseline statistics (30-day rolling windows)

* Cohort definitions and membership

* Alert history and investigation notes

* Compliance reports and submission tracking

* Immutable audit logs (append-only tables)

**S3 Object Storage:**

* Raw log archives (7-year retention for compliance)

* Model artifacts and training datasets

* Exported compliance reports (PDF/JSON)

* Automated backup snapshots

**Redis Cache (Optional):**

* Chatbot session state

* Hot path threat intelligence IOCs

* Frequently accessed alert explanations

* Rate limiting state

**6.1.6 Frontend Layer**

* **Svelte Single-Page Application:** Reactive, lightweight, fast

* **ECharts Visualizations:** Canvas-based heartbeat displays and attack graphs

* **WebSocket Manager:** Persistent connections for real-time alert streaming

* **REST API Client:** Standard CRUD operations and queries

**7\. Technology Stack Deep Dive**

**7.1 Infrastructure (AWS)**

| Component | Technology | Specification | Purpose |
| :---- | :---- | :---- | :---- |
| Container Orchestration | AWS EKS | Kubernetes 1.28+, 100 nodes | Managed control plane, auto-scaling, multi-AZ |
| Streaming Platform | Amazon MSK | 24 brokers, Kafka 3.5+ | Managed Kafka, 1M+ events/sec throughput |
| Database | Amazon RDS | TimescaleDB on PostgreSQL 15 | Time-series optimization, managed backups |
| GPU Compute | EC2 p4d.24xlarge | 3 instances, NVIDIA A100 80GB | Critical alert AI inference |
| CPU Compute | EC2 m6i.4xlarge | 30 instances | Bulk AI inference, agent services |
| Object Storage | S3 | Standard \+ Glacier tiers | Archival, compliance, model storage |
| Load Balancing | ALB \+ NLB | Multi-region | SSL termination, health checks |
| Secrets Management | AWS Secrets Manager | Encrypted, auto-rotation | Credential lifecycle management |
| Key Management | AWS KMS | Customer-managed keys | Encryption key operations |

**7.2 Backend Stack**

| Layer | Technology | Version | Purpose |
| :---- | :---- | :---- | :---- |
| Runtime | Python | 3.11+ | High performance, rich ML ecosystem |
| API Framework | FastAPI | 0.104+ | Async, auto-docs, WebSocket support |
| ASGI Server | Uvicorn \+ Gunicorn | 0.24+ | Production-grade ASGI serving |
| Streaming | Apache Flink | 1.18+ | Stateful processing, exactly-once semantics |
| Online ML | River | 0.21+ | Incremental learning, lightweight models |
| GNN | PyTorch Geometric | 2.4+ | Graph neural networks |
| LLM | Hugging Face Transformers | 4.35+ | Model loading, quantization, inference |
| Database ORM | SQLAlchemy | 2.0+ | Async support, TimescaleDB compatible |
| Data Validation | Pydantic | 2.5+ | Type safety, API validation |
| Caching | Redis | 7.2+ | Session state, hot data |

**7.3 Frontend Stack**

| Component | Technology | Purpose |
| :---- | :---- | :---- |
| Framework | Svelte 5.0+ | Reactive UI, minimal bundle size |
| Build Tool | Vite 5.0+ | Fast HMR, optimized builds |
| Visualization | ECharts 5.5+ | WebGL acceleration, complex charts |
| State Management | Svelte Stores | Reactive state management |
| Authentication | OAuth2/SAML | Enterprise SSO integration |

**7.4 ML/AI Stack**

| Component | Technology | Purpose |
| :---- | :---- | :---- |
| Model Training | Lambda Labs / Paperspace | GPU rental for SLM fine-tuning |
| Base LLM | Google Gemma 9B | Specialized language model |
| Quantization | bitsandbytes | 4-bit model compression |
| Anomaly Detection | River (Half-Space Trees) | Online learning for streams |
| Graph Analysis | PyTorch Geometric | GNN inference |
| Model Serving | Custom FastAPI \+ Router | Hybrid CPU/GPU inference |

**7.5 DevOps Stack**

| Purpose | Technology | Notes |
| :---- | :---- | :---- |
| CI/CD | GitHub Actions | Build, test, deploy automation |
| GitOps | ArgoCD | Kubernetes declarative deployments |
| IaC | Terraform | AWS resource provisioning |
| Container Registry | Amazon ECR | Private Docker images |
| Monitoring | Prometheus \+ Grafana | Metrics, dashboards, alerting |
| Logging | ELK Stack | Centralized log aggregation |
| Security Scanning | Trivy, Snyk | Container vulnerability detection |

**8\. Core System Components & Implementation Details**

**8.1 Log Ingestion & Normalization**

**Objective:** Accept logs from any source in any format, normalize to unified schema, publish to Kafka.

**Supported Input Formats:**

* Syslog (RFC 3164/5424) over UDP/TCP/TLS

* Common Event Format (CEF)

* Log Event Extended Format (LEEF)

* JSON (validated against registered schemas)

* REST API POST endpoints for application logs

* S3 batch uploads for historical analysis

**Normalization Process:**  
The normalization service acts as the first processing stage, converting heterogeneous log formats into a unified event schema. The service performs format detection, field extraction, semantic mapping, and metadata enrichment before publishing to Kafka. All transformations are logged for audit purposes.

**Unified Event Schema Structure:**  
Events contain standard fields including unique event ID, timestamp, source and destination information with geolocation, user identification with cohort assignment, event type classification, severity level, raw log preservation, and flexible normalized fields. This schema ensures consistent downstream processing across all data sources.

**8.2 Streaming Pipeline with Apache Flink**

**Architecture Overview:**  
Flink operates multiple parallel jobs consuming from Kafka topics, performing stateful transformations, and writing results to downstream topics or databases. All jobs maintain exactly-once processing guarantees through checkpointing.

**Job 1: Event Parser**  
Consumes raw events from Kafka, deserializes and validates against schemas, extracts features for ML processing, and publishes to parsed-events topic. This job maintains no state and scales linearly with throughput.

**Job 2: Cohort Assignment**  
Reads parsed events, queries TimescaleDB for user profiles, assigns users to appropriate behavioral cohorts based on role, department, device type, geography, and risk level. Updates cohort statistics and publishes cohort-assigned events. This job uses keyed state partitioned by user ID.

**Job 3: Baseline Statistics Update**  
Maintains rolling 30-day windows of user activity using Flink's keyed state. Calculates baseline metrics including login frequency, data transfer volumes, unique IPs contacted, and failed action counts. Detects significant deviations from established baselines and flags anomaly candidates.

**Job 4: River ML Anomaly Scoring**  
The core detection engine maintains one River online learning model per cohort (approximately 1,000 models total) in Flink state. For each event, the job retrieves the appropriate cohort model, scores the event against learned patterns, updates the model incrementally with new observations, and flags high-scoring anomalies for further analysis.

**Job 5: GNN Multi-Entity Analysis**  
Constructs temporal attack graphs from recent events and historical relationships stored in TimescaleDB. The job builds graph structures representing users, IP addresses, assets, and actions as nodes with edges representing interactions. GNN inference detects patterns indicative of coordinated attacks such as reconnaissance, lateral movement, and data exfiltration chains.

**State Management:**  
All Flink jobs use RocksDB for state backend, enabling storage of large state that exceeds memory capacity. Checkpoints occur every 60 seconds to S3 with exactly-once processing guarantees. State can be restored from checkpoints for recovery or job updates.

**8.3 Cohort-Based Machine Learning with River**

**Rationale:**  
Training individual models for 100M users is computationally infeasible and creates maintenance overhead. Arxis clusters users into approximately 1,000 cohorts based on behavioral similarity, then trains one online learning model per cohort. Each model adapts to cohort-specific normal patterns, enabling accurate anomaly detection at scale.

**Cohort Dimensions:**  
Users are assigned to cohorts based on combinations of role (employee, customer, admin, vendor, contractor), department (claims, underwriting, customer service, IT, finance), device type (mobile, desktop, server, IoT), geography (India, EU, US, Asia-Pacific), and risk profile (VIP, standard, elevated, external). This creates approximately 1,000 distinct cohorts covering the user population.

**River Model Architecture:**  
Each cohort uses a River Half-Space Trees ensemble for anomaly detection. The model processes events incrementally, updating its representation of normal behavior with each observation. Anomaly scores above configurable thresholds trigger alerts. Models automatically adapt to concept drift and evolving user behaviors.

**Model Lifecycle:**  
Models initialize with general patterns, then specialize as they observe cohort-specific data. Every hour, model states serialize to S3 for persistence and disaster recovery. On pod restart or deployment, services load the latest model checkpoints. Model performance metrics track prediction accuracy, drift detection, and update frequency.

**8.4 Graph Neural Network for Attack Detection**

**Use Case:**  
Traditional machine learning analyzes events independently, missing coordinated multi-step attacks involving multiple entities. GNNs model security events as graphs where nodes represent users, IP addresses, and assets, while edges represent interactions. The GNN learns patterns of malicious graph structures indicative of advanced persistent threats.

**Attack Scenario Example:**  
A typical multi-stage attack might involve: (1) Attacker compromises User A's credentials via phishing, (2) Uses User A's account to access internal database, (3) Exfiltrates customer PII to external IP, (4) Uses stolen data for social engineering against User B, (5) User B grants elevated privileges, (6) Attacker pivots to financial system. Individual events appear normal, but the graph structure reveals the attack chain.

**Implementation Approach:**  
The GNN service constructs temporal graphs from recent events, with node features encoding entity properties and temporal characteristics. A three-layer Graph Convolutional Network processes the graph structure, with global pooling producing a graph-level prediction. Output probabilities above threshold trigger multi-entity attack alerts with visualization of the detected attack chain.

**Training and Deployment:**  
GNN models train offline on historical labeled attack graphs. Training occurs on GPU rental platforms over 4-6 hours, with target F1 scores above 90%. Trained models deploy to Kubernetes GPU pods for real-time inference. Retraining occurs monthly or when drift detection indicates degraded performance.

**8.5 Specialized Language Model Integration**

**Model Selection:**  
Arxis uses Google Gemma 9B as the base language model, fine-tuned on security domain corpus including historical alert explanations, MITRE ATT\&CK descriptions, CVE documentation, and synthetic security Q\&A pairs.

**Fine-Tuning Process:**  
Fine-tuning occurs on rented GPU infrastructure (Lambda Labs or similar) over approximately 48 hours using LoRA (Low-Rank Adaptation) to keep the base model frozen while training adapter layers. The approach requires 4x A100 GPUs and costs approximately $500 per training run. Models are evaluated on holdout explanation quality, ensuring analyst usefulness.

**Quantization for Deployment:**  
Post-training, models undergo 4-bit quantization using bitsandbytes, reducing size from 36GB to approximately 9GB. This enables deployment on smaller GPUs for the GPU cluster and on CPU for the bulk inference cluster. Quantization introduces minimal accuracy loss (typically under 2%).

**Deployment Architecture:**  
The fine-tuned, quantized model deploys to both GPU pods (for critical alerts) and CPU pods (for bulk processing). Both environments run identical model weights, differing only in optimization for the target hardware. The hybrid inference router directs requests based on priority and available resources.

**9\. Data Models & Schemas**

**9.1 TimescaleDB Schema Design**

**Users Table:**  
Stores core user information including unique identifiers, email, name, organizational role, department, assigned cohort ID, and risk level assessment. The table indexes on user\_id for fast lookups during event processing.

**Cohorts Table:**  
Defines behavioral cohort metadata including cohort ID, descriptive name, member characteristics, current model version, last training timestamp, and member count. This table updates as cohort assignments change and models retrain.

**User Baselines (Hypertable):**  
Time-series optimized table storing per-user activity metrics over rolling 30-day windows. Fields include login counts, data transferred, unique IPs contacted, failed actions, and calculated anomaly scores. TimescaleDB's hypertable structure enables efficient time-range queries and automatic data retention management.

**Alerts Table (Hypertable):**  
Stores all generated alerts with timestamp, user identification, cohort membership, alert type classification, severity level, anomaly and GNN scores, MITRE technique mapping, raw event data as JSONB, AI-generated explanation text, status tracking, analyst assignment, and linked ticket ID. Indexes optimize queries by user, time range, and status.

**Audit Logs Table (Immutable):**  
Append-only table recording all system actions for compliance. Each entry includes timestamp, actor identification, action type, resource details, and cryptographic signature ensuring immutability. No updates or deletes permitted; only inserts. Retention period matches regulatory requirements (7 years).

**Compliance Reports Table:**  
Tracks all generated regulatory reports including report type (IRDAI, GDPR, PCI DSS), generation timestamp, covered period, incident count, report data as JSONB, submission status, and submission timestamp. This table provides audit trail for regulatory compliance.

**9.2 Kafka Topic Schema**

**raw-events:**  
Receives all ingested logs in original format with minimal transformation. Partitioned by source system for parallel processing.

**parsed-events:**  
Contains normalized events in unified schema after parsing and validation. Partitioned by event type for efficient downstream routing.

**cohort-assigned-events:**  
Events enriched with cohort membership and baseline context. Partitioned by cohort ID for parallel ML scoring.

**anomaly-candidates:**  
Events flagged as potentially anomalous by baseline statistics. Partitioned by priority for resource allocation.

**scored-anomalies:**  
Events scored by River ML models with anomaly scores. Partitioned by severity for alert generation.

**gnn-alerts:**  
Multi-entity attack detections from GNN analysis. Partitioned by criticality for immediate processing.

**final-alerts:**  
Deduplicated, prioritized alerts ready for analyst consumption. Partitioned by severity and geographic region.

**10\. API Specifications**

**10.1 Alert Management APIs**

**GET /api/alerts**  
Query interface for retrieving alerts with filtering by status (open, investigating, resolved), severity levels, date ranges, user identification, and pagination parameters. Returns JSON array of alert summaries with metadata including alert ID, timestamp, user, severity, type, explanation snippet, status, and linked ticket ID.

**POST /api/alerts/{alert\_id}/update**  
Updates alert status, assigns to analysts, adds investigation notes. Requires authenticated analyst session. All updates logged to audit trail with timestamp and actor.

**GET /api/alerts/{alert\_id}**  
Retrieves complete alert details including full explanation, event timeline, related alerts, attack graph visualization data, recommended actions, and investigation history. Used for alert detail view in dashboard.

**POST /api/alerts/{alert\_id}/explain-fast**  
Forces immediate GPU inference for any alert regardless of original priority. Enables analysts to request high-priority explanations for deeper investigation. Returns updated explanation with generation timestamp and inference backend used.

**10.2 Chatbot Query API**

**POST /api/chat**  
Natural language query interface accepting analyst questions, session context, and user identification. Routes query through Orchestrator Agent to appropriate specialized agents. Returns conversational response, relevant data (alerts, users, statistics), suggested follow-up questions, and context for next interaction.

**WebSocket /ws/chat**  
Persistent connection for real-time conversational interface. Supports streaming responses for long-running queries, typing indicators, and multi-turn conversations with maintained context.

**10.3 Compliance Reporting API**

**POST /api/compliance/generate**  
Initiates generation of regulatory report for specified type (IRDAI, GDPR, PCI DSS) covering designated time period. System automatically identifies qualifying incidents, formats according to regulatory requirements, and generates report in prescribed format. Returns report ID and estimated completion time.

**GET /api/compliance/reports/{report\_id}**  
Retrieves generated report with metadata, incident list, formatted report data, and download links for PDF and JSON formats. Includes submission status and timestamp if already filed.

**POST /api/compliance/reports/{report\_id}/submit**  
Submits approved report to regulatory portal. Requires manager authorization. Records submission timestamp, confirmation number, and updates audit trail. Implements retry logic for network failures.

**GET /api/compliance/dashboard**  
Returns compliance overview including upcoming deadlines, reports pending approval, submission history, and real-time countdown for 6-hour IRDAI requirement on active incidents.

**10.4 WebSocket Real-Time Updates**

**WebSocket /ws**  
Bidirectional connection for real-time dashboard updates. Clients subscribe to channels (alerts, system health, compliance status) with optional filters. Server pushes updates including new alerts, status changes, system events, and compliance notifications. Implements heartbeat keepalive and automatic reconnection.

**11\. Machine Learning Pipeline with Intelligent Inference Routing**

**11.1 Training Pipeline**

**Cohort Model Training:**  
River models train continuously in production through online learning. No separate offline training phase required. Each event updates the relevant cohort model, enabling real-time adaptation to evolving behaviors. Periodic model snapshots saved to S3 every hour provide rollback capability and disaster recovery.

**GNN Model Training:**  
Graph neural networks train offline on historical labeled attack data. Training process extracts events from TimescaleDB, constructs labeled graphs distinguishing attacks from normal patterns, trains on GPU rental platform over 4-6 hours, evaluates on holdout test set targeting 90%+ F1 score, and deploys to production through CI/CD pipeline. Retraining occurs monthly or when drift detection indicates performance degradation.

**SLM Fine-Tuning:**  
The specialized language model undergoes one-time fine-tuning on security domain corpus comprising historical alerts with analyst explanations, MITRE ATT\&CK framework documentation, CVE descriptions and exploit details, and synthetic security question-answer pairs. Fine-tuning uses LoRA technique on rented A100 GPUs over approximately 48 hours. Post-training quantization reduces model size by 75% for efficient deployment. Periodic updates every 6 months incorporate new security patterns and analyst feedback.

**ML Model Validation Process:**

Pre-Deployment:

\- Historical attack replay: 95% detection on last 12 months of known incidents

\- Synthetic attack generation: 90% detection on MITRE ATT\&CK scenarios

\- Adversarial robustness testing: Model resilient to evasion attempts

\- Cross-cohort validation: Model performs across all cohorts (no bias)

Continuous Validation:

\- A/B testing: New models must beat current production by ≥2% on holdout set

\- Red team exercises: Monthly simulated attacks (must achieve 95% detection)

\- External benchmarking: Annual participation in CSAW or similar CTF

\- Analyst override tracking: \<5% of alerts should be analyst-corrected

**11.2 Hybrid Inference Orchestration**

**Request Flow:**  
When an alert requires explanation, the request enters the hybrid inference router. The router first checks the distributed cache using a key derived from alert type, MITRE technique, and risk score. Cache hits return immediately (5ms latency). Cache misses trigger backend selection based on alert severity, current queue depths, user risk profile, and regulatory requirements.

**GPU Inference Path:**  
Critical and high severity alerts route to GPU cluster. Request enters priority queue with position based on alert criticality. GPU pods process requests using full-precision or float16 models optimized for maximum speed. Target latency remains under 100ms for 95th percentile. Results cache for 24 hours to benefit future similar alerts.

**CPU Inference Path:**  
Medium and low severity alerts route to CPU cluster. The system implements batching logic, grouping up to 16 requests with 500ms maximum wait time. CPU pods process batches using 4-bit quantized models with CPU-optimized kernels. While individual request latency reaches 2-5 seconds, batching achieves 0.3-0.5 seconds per request amortized. This latency remains acceptable as analysts spend 20-60 seconds reviewing context regardless.

**Dynamic Upgrade Path:**  
When GPU queues empty while CPU queues contain medium-priority requests, the router dynamically upgrades those requests to GPU processing. This opportunistic approach maximizes GPU utilization without sacrificing CPU capacity for bulk processing. Analysts can also manually trigger GPU inference for any alert through the dashboard "Explain Faster" button.

**Performance Monitoring:**  
The system tracks inference metrics across all paths: latency distributions by backend and severity, cache hit rates by alert type, queue depths and wait times, model prediction confidence scores, and analyst feedback on explanation quality. Grafana dashboards visualize these metrics enabling real-time performance monitoring and capacity planning.

**11.3 Model Performance Tracking and Drift Detection**

**Continuous Monitoring:**  
Every prediction includes confidence scoring and comparison against analyst actions. When analysts mark alerts as false positives or provide feedback, the system records these ground truth labels. Automated jobs compute rolling accuracy, precision, and recall metrics over 24-hour and 7-day windows for each model type (cohort models, GNN, SLM).

**Drift Detection:**  
Statistical monitoring detects model drift through multiple signals: increasing error rates compared to historical baselines, shifting prediction distributions, declining confidence scores, and analyst feedback patterns. When drift exceeds thresholds, automated alerts notify ML engineers and can trigger model retraining workflows.

**A/B Testing Framework:**  
New model versions deploy gradually through canary releases. Initially, 5% of traffic routes to new models while 95% continues using current production models. If metrics remain stable or improve over 24 hours, gradual rollout increases to 25%, then 50%, then 100%. Degraded performance triggers automatic rollback to previous model version.

**False Negative Mitigation Strategy:**

Target: \<1% false negative rate for critical threats (vs 10% false positive tolerance)

Approach:

\- Conservative thresholds for high-severity threat categories

\- Ensemble voting: Alert triggers if ANY of (River, GNN, Rule-based) flags

\- Human-in-the-loop for borderline cases

\- Red team exercises monthly with simulated attacks

\- Incident post-mortems feed back into model retraining

Monitoring:

\- Track "near-miss" incidents (detected late or via external notification)

\- Analyst "I should have been alerted" feedback mechanism

\- Comparison with threat intel feeds for missed IOCs

**12\. Custom Observability & Explainability Framework**

**12.1 ML Model Observability**

**Challenge:**  
Cutting-edge technologies like River (online ML) and PyTorch Geometric (GNN) lack mature enterprise observability frameworks compared to traditional ML libraries. Arxis addresses this through custom instrumentation wrapping all ML operations.

**River Model Instrumentation:**  
Custom wrapper classes intercept all River model operations including inference scoring, online learning updates, and state snapshots. The wrapper exports Prometheus metrics capturing per-cohort statistics: inference latency distributions, anomaly score distributions and percentiles, model update frequency, feature importance drift, and prediction confidence levels. These metrics enable real-time monitoring of all 1,000 cohort models through Grafana dashboards organized by cohort characteristics.

**GNN Observability:**  
PyTorch profiling hooks instrument GNN inference capturing GPU memory utilization during graph processing, computation time breakdown by layer, graph construction overhead, and inference batch sizes. Custom logging tracks graph statistics including node counts, edge counts, connected components, and detected attack patterns. Structured logs JSON-formatted for ELK stack ingestion enable correlation analysis between graph characteristics and detection outcomes.

**SLM Monitoring:**  
Language model inference tracking captures request queuing times, model loading overhead on cold starts, token generation rates, memory consumption patterns, and explanation quality metrics derived from analyst interactions. The system implements distributed tracing across the hybrid inference router, cache layer, and GPU/CPU pods, enabling end-to-end latency analysis for every explanation request.

**Alerting on Anomalies:**  
Prometheus alerting rules trigger notifications when model performance degrades: high latency percentiles exceeding SLAs, error rate spikes, memory consumption approaching limits, or queue depth growth indicating capacity issues. These alerts integrate with PagerDuty for immediate engineer notification.

**12.2 Explainability-First Design**

**Architectural Principle:**  
Arxis embeds explainability throughout the detection pipeline rather than bolting it on after the fact. Every component producing a decision includes structured reasoning for that decision.

**Cohort Model Explanations:**  
When River models flag anomalies, the system captures which features contributed most to the anomaly score. Feature importance extracted through model introspection highlights unusual characteristics: login time deviating from cohort norm, data transfer volume exceeding typical patterns, connections to never-before-seen IP addresses, or rapid sequence of failed actions. These factors serialize as structured metadata attached to alerts.

**GNN Attack Chain Visualization:**  
Graph neural network detections include complete attack graph serialization showing all involved entities (users, IPs, assets) and their relationships. The system highlights the suspicious subgraph within the larger network context. Graph visualization data exports in standard formats enabling rendering in the dashboard with interactive exploration. Each edge includes temporal ordering and action types enabling analysts to understand attack progression.

**LLM Natural Language Synthesis:**  
The specialized language model consumes structured detection metadata (anomaly features, attack graphs, threat intelligence, user history) and synthesizes natural language explanations. Prompts instruct the model to explain: what happened in 2-3 sentences, why the behavior appears suspicious, how it maps to MITRE ATT\&CK techniques, and recommended investigation steps. Template formatting ensures consistent explanation structure while allowing natural language flexibility.

**Analyst Feedback Loop:**  
Dashboard includes feedback mechanisms on every explanation: "Was this explanation helpful?" rating, "Report explanation issue" for incorrect details, and free-text notes on investigation findings. This feedback trains future model iterations and provides metrics on explanation quality. High-quality explanations reduce investigation time; poor explanations receive automatic escalation for improvement.

**Compliance-Ready Audit Trail:**  
All detection decisions and explanations log to immutable audit tables with cryptographic signatures. Each entry includes complete reasoning chain: which models were invoked, what features contributed to detection, what threat intelligence was consulted, and the final explanation presented to analysts. This audit trail satisfies regulatory requirements for algorithmic decision transparency.

**12.3 Fallback Mechanisms**

**Degraded Performance Handling:**  
If advanced ML components fail or experience high latency, the system gracefully degrades to simpler approaches: River models fall back to threshold-based detection using baseline statistics, GNN failures default to rule-based correlation of related events, SLM unavailability triggers template-based explanations with feature substitution. These fallbacks ensure continuous operation even during component failures, though with reduced sophistication.

**Manual Override Capabilities:**  
Analysts can override ML decisions at any point: mark false positives for exclusion from future training, adjust sensitivity thresholds per cohort or alert type, disable specific detection modules if causing problems, and force re-evaluation of alerts with updated context. All overrides log to audit trail with justifications.

**13\. AI Agent Architecture**

**13.1 Agent Design Pattern**

All agents follow consistent FastAPI microservice architecture deployed as Kubernetes pods. Each agent exposes REST APIs for synchronous requests and subscribes to Kafka topics for asynchronous event processing. Agents communicate via internal Kubernetes DNS using service discovery, with mutual TLS securing all inter-service communication.

**Orchestrator Agent:**  
Serves as the central coordinator managing all agent interactions. For chatbot queries, the orchestrator parses natural language input, determines required capabilities, routes to appropriate specialized agents, aggregates responses, maintains conversational context across turns, and formats final responses. The orchestrator implements circuit breakers preventing cascade failures when downstream agents experience issues.

**Alert Handler Agent:**  
Consumes alerts from the detection pipeline, performs deduplication checking if similar alerts occurred recently, enriches with threat intelligence IOC lookups and user historical behavior queries, calculates priority scores considering severity, user importance, and business context, formats alerts for display and ticketing, and publishes to alert topics for consumption by dashboard and SOAR systems.

**Threat Analyzer Agent:**  
Provides deep-dive analysis on specific alerts including MITRE ATT\&CK technique mapping based on observed behaviors, timeline construction showing event sequence, relationship analysis identifying affected systems and users, calls to hybrid inference service for natural language threat descriptions, and visualization data preparation for attack graphs. This agent handles analyst drill-down requests from the dashboard.

**Root Cause Agent:**  
Conducts forensic investigation tracing attacks back to initial compromise. The agent performs backward event chaining from detected alerts through authentication logs and network flows, identifies patient zero (first compromised account/system), maps lateral movement paths and privilege escalations, assesses blast radius showing all affected resources, and generates incident response packages with complete evidence chains.

**Compliance Agent:**  
Monitors all security events for regulatory reporting thresholds defined by IRDAI, GDPR, and other frameworks. When reportable incidents occur, the agent automatically triggers report generation, extracts relevant incident details from alerts and audit logs, formats according to regulatory specifications (IRDAI XML schema, GDPR structured format), implements countdown timers showing time remaining until 6-hour IRDAI deadline, generates draft reports for manager approval, and submits approved reports to regulatory portals via API integration. The agent maintains complete audit trail of all compliance activities.

**Response Automation Agent:**  
Orchestrates automated remediation actions including ticket creation in ServiceNow with full context, execution of response playbooks for common attack types, coordination with firewalls and EDR systems for containment actions, user account suspension or password resets with approval workflows, and evidence preservation for forensic analysis. All automated actions require risk-based approval: low-risk actions proceed automatically, medium-risk require Tier-2 analyst approval, high-risk require manager authorization.

**13.2 Agent Communication Patterns**

**Synchronous Request-Response:**  
For real-time analyst interactions, agents communicate synchronously via REST APIs. HTTP/2 with connection pooling minimizes latency. Request timeout of 30 seconds with exponential backoff retries handles temporary failures.

**Asynchronous Event-Driven:**  
For background processing, agents subscribe to Kafka topics. This decouples agents enabling independent scaling and fault tolerance. Failed message processing automatically retries with dead letter queues capturing unprocessable events for manual review.

**State Management:**  
Agents maintain minimal internal state, instead querying TimescaleDB or cache for required data. This stateless design enables horizontal scaling and simplified deployment. For conversational context in chatbot interactions, session state stored in Redis with TTL expiration.

**14\. Automated Compliance Reporting System**

**14.1 IRDAI 6-Hour Reporting Requirement**

**Regulatory Context:**  
The Insurance Regulatory and Development Authority of India (IRDAI) mandates that all insurance companies report cyber security incidents to both IRDAI and CERT-In within 6 hours of detection. This requirement, updated in March 2025, applies to data breaches, unauthorized access, ransomware, malware infections, denial-of-service attacks, and system compromises affecting operations or customer data.

**Automatic Detection:**  
The Compliance Agent continuously monitors the alert stream identifying incidents meeting IRDAI reporting criteria through rule-based classification matching incident types against regulatory definitions, severity thresholds requiring critical or high-rated alerts affecting production systems, scope assessment determining if customer data or critical systems impacted, and confirmation checks verifying incidents are not false positives before initiating reports.

**Report Generation Workflow:**  
Upon detecting a reportable incident, the system automatically extracts comprehensive incident details from alerts, audit logs, and investigation notes, formats data according to IRDAI's prescribed XML schema including required fields like incident type, detection timestamp, affected systems, customer impact assessment, initial containment actions, formats according to CERT-In reporting standards simultaneously, generates both machine-readable (XML/JSON) and human-readable (PDF) versions, and creates draft report marked for manager review within the compliance dashboard.

**Countdown Timer and Alerts:**  
The moment a reportable incident is detected, the system activates a countdown timer showing hours and minutes remaining until the 6-hour deadline. Progressive notifications alert SOC managers at 5 hours remaining, 3 hours remaining, 1 hour remaining, and 30 minutes remaining. Red highlighting appears when less than 1 hour remains. Automated escalation notifies CISO if deadline approaches without report submission.

**Approval and Submission:**  
Draft reports appear in the compliance dashboard for manager review. Managers verify accuracy, add additional context if needed, and approve for submission. Upon approval, the system automatically submits via IRDAI and CERT-In API integrations, records submission timestamp and confirmation numbers, updates internal audit trail with complete submission record, and notifies stakeholders of successful filing. If APIs unavailable, manual submission workflows provide download links with submission instructions.

**14.2 GDPR Breach Notification**

**72-Hour Requirement:**  
GDPR requires notification to supervisory authorities within 72 hours of becoming aware of personal data breaches affecting EU residents. Arxis implements similar automated workflow detecting breaches involving EU customer PII, generating notifications in GDPR-prescribed format, tracking 72-hour deadline with progressive alerts, and supporting submission to relevant Data Protection Authorities.

**14.3 Audit Trail and Evidence Preservation**

**Immutable Logging:**  
All compliance-related activities log to append-only TimescaleDB tables with cryptographic signatures preventing tampering. Logs capture incident detection timestamp, classification decisions, report generation events, approval actions with approver identity, submission attempts and confirmations, and any modifications to reports. This comprehensive audit trail demonstrates regulatory compliance during audits.

**Evidence Packaging:**  
For each reportable incident, the system automatically preserves complete evidence including raw event logs, alert details and investigation notes, network flow records, affected user activity history, containment actions taken, and related incidents or context. Evidence packages export in standard formats suitable for regulatory submission or legal proceedings.

**15\. Frontend Architecture & UX Specifications**

**15.1 Technology Stack**

Arxis frontend built with Svelte 5 framework delivers reactive, high-performance user interface with minimal bundle size. Vite build tool provides fast development hot module replacement and optimized production builds. ECharts library renders complex visualizations leveraging WebGL acceleration for smooth performance even with large datasets.

**15.2 Dashboard Layout**

**Main Operations View:**  
Header displays platform name (Arxis SOC), current alert counts by severity with color coding, and authenticated user profile with role indicator. Central heartbeat visualization shows threat activity over last 24 hours as continuous waveform with amplitude representing alert volume and color indicating severity mix. Below heartbeat, active alerts list displays most recent high-priority items with inline summary and action buttons. Right sidebar contains AI chatbot interface with suggested queries and conversational history.

**Navigation:**  
Left sidebar provides access to alerts (with severity filters), investigations (active and historical), compliance dashboard, threat intelligence feeds, system configuration, and user management. Breadcrumb navigation shows current location and supports quick backtracking.

**15.3 Alert Detail View**

**Layout:**  
Alert header shows criticality badge, timestamp, affected user, and current status with assignment dropdown. AI explanation panel displays natural language description of what happened, why it appears suspicious, MITRE ATT\&CK mapping, and recommended actions. Event timeline presents chronological sequence of related events with expandable details. Attack graph visualization shows entities and relationships in interactive canvas supporting zoom and pan. Action buttons enable status updates, ticket creation, additional analysis requests, and evidence export.

**Real-Time Updates:**  
WebSocket connection streams updates when alert status changes, new related events detected, other analysts add notes, or automated containment actions execute. Updates appear with smooth animations highlighting changed elements.

**15.4 Chatbot Interface**

**Interaction Model:**  
Chat panel occupies right sidebar or expands to modal dialog for extended conversations. Users type natural language queries like "Show me all critical alerts in the last hour" or "Explain the lateral movement attack on [john.doe@example.com](mailto:john.doe@example.com)". AI responds with conversational text plus structured data (alerts, users, metrics) rendered inline. Suggested follow-up questions guide analysts through investigation workflows.

**Context Awareness:**  
Chatbot maintains conversation context across turns, referencing previous queries and answers. If analyst views alert details then asks "Is this related to other attacks?", chatbot understands implicit reference. Context clears on session end or explicit reset command.

**15.5 Compliance Dashboard**

**Layout:**  
Overview panel displays upcoming reporting deadlines with countdown timers, active incidents requiring reports with time remaining, recent submissions with status indicators, and compliance metrics like percentage on-time submissions. Draft reports section lists pending manager approvals. Historical reports table enables search and download of past submissions. Audit log shows complete timeline of compliance activities.

**Interactive Features:**  
Clicking countdown timer opens full incident details with draft report preview. Approval workflow presents report content with edit capability before submission. Submission confirmation shows API response and records confirmation numbers.

**15.6 Customer Trust & Security Dashboard**  
Gamified Security Engagement for Policyholders

### **Overview**

A lightweight, embeddable security widget integrated into Allianz's existing policyholder portal that transforms invisible security operations into visible customer value through gamification and real-time transparency.

### **Key Features:**

• Security Shield Gamification System \- Four-tier badge program (Bronze/Silver/Gold/Platinum) with 0-100 point scoring that incentivizes security best practices through tangible rewards including 2-3% premium discounts, priority support, and enhanced claim processing

• Real-Time Protection Analytics \- Customer-facing dashboard displaying personalized security metrics including days protected, threats blocked this month, secure login count, and trusted devices, providing continuous reassurance of account safety

• Transparent Activity Timeline \- Chronological feed of security-relevant events (successful logins, blocked threats, password changes) with plain-language explanations and "Was this you?" confirmation prompts for unusual activity

• Proactive Threat Notifications \- Three-tier alert system (silent protection, optional review, urgent action) that communicates security events in non-technical language while maintaining operational security and preventing alert fatigue

• Minimal Integration Footprint \- Deployed as iframe or web component requiring only JWT authentication integration with existing SSO, leveraging current PostgreSQL infrastructure with three simple tables, achievable in 2-4 weeks with zero disruption to existing portal

### **Business Impact:**

* Churn Reduction: 8-12% improvement through visible security value  
* MFA Adoption: Target 80% (from 22%) via gamification incentives  
* Premium Pricing: 2-3% uplift for Gold/Platinum Shield holders  
* Competitive Moat: Industry-first customer-facing SOC transparency

### **Technical Architecture:**

### ![][image1]

### **Integration Requirements:**

| Component | Technology | Rationale |
| ----- | ----- | ----- |
| Widget Frontend | Svelte 5 web component | 40KB bundle, framework-agnostic |
| Backend API | FastAPI microservice | 5 REST endpoints, \<100ms latency |
| Database | PostgreSQL (3 new tables) | Uses existing Allianz infrastructure |
| Authentication | JWT from existing SSO | No new identity management needed |
| Deployment | Docker on existing K8s | Single container, auto-scaling enabled |

### **Customer-Facing Shield Visualization:**

![][image2]

### **Security Score Algorithm (Transparent):**

* Authentication (40 points): Email verified (10), Phone verified (10), MFA enabled (15), Strong password (5)  
* Account Hygiene (30 points): Password age \<90 days (15), Recognized devices only (10), No incidents (5)  
* Proactive Security (20 points): Security quiz completed (10), Alerts enabled (5), Regular patterns (5)  
* Account History (10 points): Account age \>365 days (10), scaled for newer accounts

### **Data Privacy Safeguards:**

* Customer sees only their own security data (strict isolation)  
* No sensitive operational details exposed (attack vectors, detection methods)  
* Aggregated company statistics only (no individual attacker data)  
* All access logged to immutable audit trail  
* GDPR Article 15 (Right of Access) compliant

### **Deployment Timeline:**

* Week 1: Infrastructure setup, API service deployment  
* Week 2: Security score engine, shield level calculation  
* Week 3: Activity timeline, threat notification UI  
* Week 4: UAT with pilot customers, production rollout

### Success Metrics:

* Adoption Rate: 60% of active customers view dashboard within 90 days  
* MFA Activation: 80% of Gold Shield aspirants enable MFA (vs 22% baseline)  
* Customer Satisfaction: NPS increase of 15-20 points  
* Financial Impact: ₹161-250B additional value over 3 years (churn reduction \+ premium pricing)

---

This section positions Arxis as not just an internal SOC platform, but a customer-facing trust engine that transforms security from cost center to revenue driver.

**16\. Integration Requirements**

**16.1 IBM QRadar Integration**

**Bidirectional Sync:**  
During transition period, Arxis maintains compatibility with existing QRadar deployment. Forward integration sends all Arxis-generated alerts to QRadar as offenses via REST API, formatted with QRadar severity mapping and categorization. Reverse integration imports historical QRadar offenses for ML model training and correlation analysis.

**Data Flow:**  
Arxis formats alerts in CEF over syslog as backup channel ensuring delivery even during API unavailability. QRadar offense webhooks notify Arxis of externally detected events enabling enrichment and correlation. Long-term plan phases out QRadar as primary SIEM while retaining as secondary audit system.

**16.2 ServiceNow Integration**

**Automated Ticketing:**  
Response Automation Agent creates ServiceNow incidents automatically for qualified alerts. Ticket population includes short description summarizing alert type and severity, detailed description with AI-generated explanation, urgency and impact mappings, assignment to appropriate SOC team, caller ID set to affected user, and custom fields linking to Arxis alert ID. Bidirectional sync updates Arxis when tickets status changes in ServiceNow.

**Workflow Orchestration:**  
Arxis triggers ServiceNow workflows for containment actions, approval processes, and escalation procedures. ServiceNow can callback Arxis APIs to request additional context or initiate automated remediation.

**16.3 SISU Business Analytics Integration**

**Fraud Detection Correlation:**  
SISU identifies business-level anomalies including fraudulent claims, unusual transaction patterns, and suspicious customer behaviors. Arxis subscribes to SISU alerts via Kafka topics, correlating business fraud indicators with security events. Combined signals (security anomaly \+ business fraud) trigger high-priority investigations. For example, user compromised account used to process fraudulent claims receives elevated priority over isolated security events.

**Enrichment Data:**  
SISU provides customer risk scoring, transaction histories, and business context enriching security alerts. This enables prioritization based on potential financial impact beyond technical severity.

**16.4 Threat Intelligence Integration**

**Feed Consumption:**  
Arxis ingests threat intelligence from commercial providers (VirusTotal, AbuseIPDB, AlienVault OTX) and open-source feeds (MISP, STIX/TAXII). Feeds update hourly with latest IOCs including malicious IPs, domains, file hashes, and CVE information. All IOCs stored in Redis cache for sub-millisecond lookups during alert enrichment.

**Contextualization:**  
When alerts involve external IPs or file hashes, real-time threat intel lookups determine if indicators appear in feeds. Positive matches escalate alert severity and add context to explanations: "Source IP 192.0.2.1 known malicious (botnet C2 server active since 2024-10-15)".

**16.5 Identity Provider Integration**

**SSO Authentication:**  
Arxis integrates with corporate Active Directory or identity providers via SAML 2.0 for single sign-on. OAuth2 flows support API access with JWT tokens. Multi-factor authentication enforced for all analyst access. Role mappings synchronize from AD groups to Arxis RBAC roles (Viewer, Analyst, Senior Analyst, Manager, Admin).

**17\. Security & Compliance Architecture**

**17.1 Authentication and Authorization**

**Identity Management:**  
All users authenticate via corporate SSO (SAML/OAuth2) with MFA required. Arxis maintains no passwords internally. Service accounts for API integrations use rotated API keys stored in AWS Secrets Manager. Kubernetes pods use IAM roles for AWS service access.

**Role-Based Access Control:**  
Five standard roles with hierarchical permissions: Viewer (read-only dashboard), Analyst (view alerts, update status, use chatbot), Senior Analyst (all analyst permissions plus approve automated actions), Manager (all analyst permissions plus compliance report approval and configuration changes), Admin (full system access including user management and system configuration). Custom roles supported for specific use cases.

**17.2 Data Encryption**

**At Rest:**  
All data encrypted at rest using AWS KMS with customer-managed keys. This includes EBS volumes (AES-256), RDS databases (TDE), S3 objects (SSE-KMS), and backup snapshots. Key rotation occurs automatically every 90 days.

**In Transit:**  
TLS 1.3 enforced for all external connections including analyst browsers, API clients, and external integrations. Internal microservice communication uses mutual TLS with certificate-based authentication. Kafka topics use TLS encryption for inter-broker and client-broker communication.

**PII Tokenization:**  
Sensitive fields like email addresses, phone numbers, and personal identifiers tokenize before storage when not required for analysis. Tokens map to encrypted values in separate datastore accessible only by authorized services.

**17.3 Network Security**

**VPC Isolation:**  
All Arxis components deploy within AWS Virtual Private Cloud with multiple isolated subnets. Public subnets host load balancers only, while private subnets contain all application workloads, databases, and processing infrastructure. No direct internet access exists for internal services; outbound traffic routes through NAT gateways with strict security group rules.

**Security Groups and Network ACLs:**  
Fine-grained security groups restrict traffic between microservices. Each service communicates only with explicitly authorized peers on specific ports. Network ACLs provide additional subnet-level protection. Default deny rules block all traffic except explicitly permitted paths. Ingress limited to ALB health checks and authorized service mesh traffic.

**Service Mesh:**  
Istio service mesh implementation provides mutual TLS authentication between all microservices, traffic encryption, policy enforcement, and observability. Every pod receives sidecar proxy intercepting all network traffic. Certificate rotation occurs automatically every 24 hours. Policy definitions in Kubernetes CRDs enable declarative security controls.

**17.4 Audit and Compliance**

**Immutable Audit Logs:**  
All system actions log to append-only TimescaleDB tables with cryptographic signatures. Logs include timestamp, actor identity, action type, affected resources, and complete context. Signatures use SHA-256 hashing of log entry concatenated with previous entry's signature, creating verifiable chain. Any tampering detected through signature validation.

**Retention Policies:**  
Security event logs retained for 7 years meeting insurance industry regulatory requirements. Compliance reports retained indefinitely. Automated archival moves aged data from TimescaleDB to S3 Glacier for cost-effective long-term storage. Retrieval mechanisms support regulatory audits and legal discovery requests.

**Compliance Certifications:**  
Arxis architecture designed to support SOC 2 Type II, ISO 27001, and PCI DSS certifications. Regular third-party penetration testing validates security controls. Vulnerability scanning integrated into CI/CD pipeline prevents deployment of known vulnerabilities. Annual security audits by external firms verify compliance maintenance.

**18\. Deployment Architecture**

**18.1 Kubernetes Cluster Layout**

**EKS Cluster Configuration:**  
Production cluster named arxis-prod runs in us-east-1 (or Mumbai ap-south-1 for Allianz India). Kubernetes version 1.28 with managed control plane. Worker nodes span three availability zones for high availability.

**Namespaces:**

* **ingestion:** Log collection and normalization services

* **processing:** Flink jobs and stream processing

* **ml-services:** AI inference pods (GPU and CPU)

* **agents:** All AI agent microservices

* **frontend:** Dashboard and API gateway

* **monitoring:** Prometheus, Grafana, alerting infrastructure

* **compliance:** Dedicated namespace for compliance agent and reporting services

**Node Groups:**

1. **General Compute:** m6i.2xlarge instances, 20-100 nodes with cluster autoscaler, hosts stateless microservices and agents

2. **GPU Nodes:** p4d.24xlarge instances, 3 nodes for critical alert AI inference

3. **CPU Inference:** m6i.4xlarge instances, 30 nodes for bulk AI processing

4. **Memory Optimized:** r6i.4xlarge instances, 5 nodes for Flink with large state

5. **System:** t3.large instances, 3 nodes for monitoring and system services

**18.2 Helm Chart Structure**

**Chart Organization:**  
Arxis platform deployed via umbrella Helm chart containing subcharts for each component. Values.yaml defines environment-specific configurations. Secrets injected via external secrets operator reading from AWS Secrets Manager.

**Key Charts:**

* **arxis-ingestion:** Kafka connectors, log normalizers, schema registry

* **arxis-flink:** JobManager, TaskManager deployments with configurable parallelism

* **arxis-ml:** GPU and CPU inference services with HPA configurations

* **arxis-agents:** Six agent microservices with individual scaling policies

* **arxis-frontend:** Svelte SPA and API gateway with ingress rules

* **arxis-data:** TimescaleDB initialization jobs and migration scripts

**18.3 CI/CD Pipeline**

**GitHub Actions Workflow:**  
Code commits to main branch trigger automated pipeline. Build stage compiles application code, runs unit tests (target 80% coverage), builds Docker images with semantic versioning tags, scans images with Trivy for vulnerabilities, and pushes to Amazon ECR.

**Testing Stage:**  
Integration tests run against ephemeral test environment. API contract tests validate all endpoints. Load tests simulate production traffic patterns. Security tests include OWASP ZAP scans and dependency vulnerability checks. All tests must pass before proceeding.

**Deployment Stage:**  
ArgoCD monitors Git repository for Helm chart changes. On detection, ArgoCD syncs changes to target cluster using rolling update strategy. Health checks verify new pods before routing traffic. Automatic rollback occurs if health checks fail. Blue-green deployment option available for major version changes.

**Environments:**

* **Development:** Single-node cluster, synthetic data, fast iteration

* **Staging:** Multi-node cluster mirroring production, realistic data volumes

* **Production:** Full-scale cluster with autoscaling, real customer data

**18.4 Infrastructure as Code**

**Terraform Modules:**  
All AWS infrastructure defined in Terraform. Modular structure enables reusability across environments. State stored in S3 with DynamoDB locking preventing concurrent modifications.

**Key Modules:**

* **networking:** VPC, subnets, security groups, NAT gateways

* **eks-cluster:** EKS control plane, node groups, IAM roles

* **msk-kafka:** MSK cluster configuration, broker nodes, topics

* **rds-timescale:** RDS instances, parameter groups, backup policies

* **s3-storage:** Buckets for logs, models, backups with lifecycle policies

* **monitoring:** CloudWatch dashboards, alarms, SNS topics

**Execution:**  
Infrastructure changes reviewed via pull requests. Terraform plan output shows proposed changes. Approval required before apply. State changes tracked in version control providing audit trail.

**19\. Performance Requirements & SLAs**

**19.1 System Performance Targets**

**Throughput:**

* Kafka ingestion: 5M events per minute sustained, 10M burst

* Flink processing: 1M events per second per job with sub-second latency

* Alert generation: \<1000ms from event ingestion to alert creation (p95)

* API response time: \<200ms for GET requests (p95), \<500ms for POST (p95)

* Dashboard load time: \<2 seconds time to interactive

* WebSocket latency: \<100ms from server event to client update

**AI Inference Performance:**

* GPU inference: 50-100ms per request (p95) for critical alerts

* CPU inference: 2-5 seconds per request (p95) for medium/low alerts

* Cache hits: \<10ms response time

* GNN analysis: \<500ms for typical graph sizes (\<1000 nodes)

**Database Performance:**

* TimescaleDB read queries: \<50ms for recent data (last 24h)

* Write throughput: 100K inserts per second sustained

* Time-series aggregations: \<200ms for 30-day windows

**19.2 Availability and Reliability**

**Uptime SLA:** 99.9% monthly uptime excluding planned maintenance

* Maximum monthly downtime: 43 minutes

* Planned maintenance windows: Weekly 2-hour windows, deployments via rolling updates minimize impact

**Disaster Recovery:**

* Recovery Time Objective (RTO): \<1 hour for full system restoration

* Recovery Point Objective (RPO): \<15 minutes for data loss

* Automated backups: TimescaleDB snapshots every 6 hours, Kafka topic replication factor 3

* Multi-AZ deployment ensures availability during single AZ failure

**Fault Tolerance:**

* Kafka: Min 3 brokers per topic, ISR (in-sync replicas) maintained

* Flink: Checkpoints every 60 seconds, automatic job recovery from checkpoints

* AI Services: Multiple replicas with load balancing, circuit breakers prevent cascade failures

* Databases: Multi-AZ RDS with automatic failover, read replicas for query distribution

**19.3 Scalability Targets**

**Horizontal Scaling:**

* Support 100M users in initial deployment

* Scale to 500M users without architectural changes

* Alert processing capacity: 1M alerts per day currently, 10M with linear cost scaling

**Auto-scaling Triggers:**

* Pod CPU utilization \>70% for 5 minutes

* Memory utilization \>80% for 5 minutes

* Kafka consumer lag \>10K messages

* API request queue depth \>100 requests

* Custom ML inference queue depth \>50 requests

**Cost Efficiency:**

* Target cost per million events processed: \<$5

* Infrastructure cost as percentage of total: \<80%

* Cost per alert generated: \<$0.50

**20\. Development Phases & Milestones**

12 weeks “accelerated proof-of-concept" with full production requiring 24 weeks.

**Phase 0: Project Setup (Week 1\)**

**Objectives:** Establish development infrastructure and team workflows

**Deliverables:**

* AWS account configuration with appropriate IAM roles and policies

* EKS cluster provisioned for development environment

* GitHub repository structure with branch protection rules

* CI/CD pipeline skeleton configured in GitHub Actions

* Development environment setup documentation for team onboarding

* Architecture design review and final approval

**Success Criteria:** All developers can deploy to dev environment independently

**Phase 1: Infrastructure & Ingestion (Weeks 2-4)**

**Objectives:** Build foundational data pipeline

**Deliverables:**

* Amazon MSK cluster deployed with initial topics

* TimescaleDB instance on RDS with schema migrations

* Log normalization service supporting CEF, LEEF, JSON, syslog formats

* Kafka producers for test data generation

* Schema registry operational with first event schemas

* Filebeat/Fluentd agents configured for log collection

**Success Criteria:**

* 1M test events flowing through Kafka to TimescaleDB

* Schema validation catching malformed events

* End-to-end monitoring showing ingestion metrics

**Phase 2: Detection Pipeline (Weeks 5-7)**

**Objectives:** Implement core ML-based anomaly detection

**Deliverables:**

* All five Flink jobs deployed and processing events

* Cohort assignment logic with initial 1000 cohorts defined

* River ML models trained and scoring events in real-time

* GNN model trained on historical attack data

* Baseline statistics computation with 30-day rolling windows

* Alert generation from anomaly scores

**Success Criteria:**

* Synthetic attack scenarios detected with \>85% accuracy

* False positive rate \<15% on test dataset

* Processing latency \<1 second end-to-end

**Phase 3: AI Services & Agents (Weeks 8-10)**

**Objectives:** Deploy hybrid AI infrastructure and agent microservices

**Deliverables:**

* SLM fine-tuned on security corpus (completed on rental GPUs)

* Hybrid inference router with GPU and CPU clusters

* All six AI agents deployed (Orchestrator, Alert Handler, Threat Analyzer, Root Cause, Compliance, Response)

* Agent-to-agent communication tested and optimized

* ServiceNow and QRadar integrations functional

* Natural language explanations generated for all alerts

**Success Criteria:**

* End-to-end flow: event → alert → explanation → ticket creation working

* GPU inference \<100ms, CPU inference \<5s

* Cache hit rate \>30% on recurring alert patterns

* Agent APIs responding within SLA targets

**Phase 4: Frontend Development (Weeks 11-12)**

**Objectives:** Build analyst-facing dashboard and chatbot

**Deliverables:**

* Svelte application framework with routing

* Heartbeat visualization displaying real-time threat levels

* Alert list with filtering, sorting, and pagination

* Alert detail view with timeline and attack graphs

* Chatbot interface with conversational context

* WebSocket real-time updates implemented

* Responsive design supporting desktop and tablet

**Success Criteria:**

* Dashboard loads \<2 seconds on typical broadband

* Real-time updates appear \<500ms after server event

* Chatbot responds to common queries accurately

* UI/UX review passes with score \>8/10

**Phase 5: Compliance & Final Integrations (Week 13\)**

**Objectives:** Complete compliance automation and external integrations

**Deliverables:**

* IRDAI report generation with 6-hour countdown timers

* GDPR breach notification workflows

* Audit log system with cryptographic signatures

* Threat intelligence feed integrations (VirusTotal, AbuseIPDB)

* SISU business analytics correlation

* OAuth/SAML SSO integration

* RBAC implementation with five standard roles

**Success Criteria:**

* Mock IRDAI incident automatically generates compliant report within 5 minutes

* All external API integrations tested and documented

* Security audit passes with no critical findings

**Phase 6: Testing & Performance Optimization (Weeks 14-15)**

**Objectives:** Validate system under production loads and optimize

**Deliverables:**

* Load testing results at 5M events/minute sustained

* Chaos engineering tests verifying failure recovery

* Security penetration testing report

* Performance optimization based on profiling

* User acceptance testing with Allianz SOC analysts

* Production runbook and incident response procedures

* Monitoring dashboards for operations team

**Success Criteria:**

* All performance SLAs met under sustained load

* Zero critical security vulnerabilities

* Analyst satisfaction score \>8/10

* System maintains 99.9% uptime during 7-day stress test

**Phase 7: Production Deployment (Week 16\)**

**Objectives:** Launch to production with Allianz pilot

**Deliverables:**

* Production infrastructure provisioned via Terraform

* Gradual rollout to 10% of production traffic (canary deployment)

* Monitoring and alerting validated in production

* On-call rotation and escalation procedures established

* Training sessions completed for SOC analysts

* Production launch retrospective document

**Success Criteria:**

* Zero critical incidents during first 48 hours

* All baseline metrics within expected ranges

* Analyst adoption \>50% in first week

**21\. Testing Strategy**

**21.1 Unit Testing**

**Coverage Requirements:**

* Minimum 80% code coverage for all Python services

* 90% coverage for critical paths (alert generation, compliance reporting)

* Pytest framework with fixtures for database and Kafka mocking

**Key Test Areas:**

* Log parsing and normalization logic

* Cohort assignment algorithms

* River model scoring functions

* Agent request/response handling

* API input validation and error handling

**21.2 Integration Testing**

**Test Scenarios:**

* End-to-end alert generation from raw log to dashboard display

* Agent collaboration workflows (Orchestrator → Threat Analyzer → Root Cause)

* ServiceNow ticket creation with bidirectional sync

* IRDAI report generation and approval workflow

* Kafka message production and consumption across topics

**Test Environment:**

* Dedicated staging cluster with production-like configuration

* Synthetic data generators producing realistic event volumes

* Automated test suites running on every pull request

**21.3 Load and Performance Testing**

**Tools:** Locust for API load testing, Kafka performance testing tools

**Test Scenarios:**

* Sustained 5M events/minute ingestion for 4 hours

* Burst traffic handling: 10M events/minute for 10 minutes

* 500 concurrent analyst sessions on dashboard

* 1000 alerts generated simultaneously

* Database query performance under load

**Acceptance Criteria:**

* No degradation in response times during sustained load

* Auto-scaling responds within 5 minutes of load increase

* No data loss or processing errors

**21.4 Security Testing**

**Automated Scanning:**

* Trivy container vulnerability scanning in CI/CD pipeline

* OWASP ZAP dynamic application security testing weekly

* Snyk dependency vulnerability scanning on every commit

**Manual Testing:**

* Quarterly penetration testing by third-party security firm

* Social engineering tests for analyst accounts

* Privilege escalation attempts across RBAC roles

* Network segmentation verification

**Compliance Testing:**

* Audit log immutability verification

* Encryption validation (at rest and in transit)

* Access control testing for sensitive endpoints

* Data retention policy compliance checks

**22\. Monitoring & Observability**

**22.1 Metrics Collection (Prometheus)**

**Infrastructure Metrics:**

* Node CPU, memory, disk, network utilization per node group

* Pod resource consumption and restart counts

* Kafka broker health, topic lag, partition distribution

* RDS database connections, query performance, replication lag

* S3 bucket sizes and access patterns

**Application Metrics:**

* API request rates, latency distributions, error rates by endpoint

* Alert generation rate by severity and type

* ML inference latency and throughput (GPU vs CPU paths)

* Cache hit rates and memory usage

* Agent processing times and queue depths

* WebSocket connection counts and message throughput

**Business Metrics:**

* Alerts per hour, day, week with trend analysis

* False positive rates tracked via analyst feedback

* MTTR (Mean Time to Respond) calculated from alert to resolution

* Compliance report submission success rate

* Analyst active sessions and query counts

**22.2 Logging (ELK Stack)**

**Log Aggregation:**

* Fluentd DaemonSet collects logs from all pods

* Structured JSON logging for machine parsing

* Correlation IDs trace requests across microservices

* Log levels: DEBUG, INFO, WARN, ERROR, CRITICAL

**Log Retention:**

* Application logs: 90 days in Elasticsearch, 1 year in S3

* Audit logs: 7 years in TimescaleDB and S3 Glacier

* Alert logs: Permanent retention in TimescaleDB

**Query and Analysis:**

* Kibana dashboards for log exploration

* Saved searches for common troubleshooting scenarios

* Alerting on log patterns indicating issues

**22.3 Dashboards (Grafana)**

**SOC Operations Dashboard:**

* Real-time alert counts by severity (last 24h, 7d, 30d)

* MTTR trends over time

* False positive rate tracked daily

* Analyst workload distribution

* Top users by alert volume

* Compliance deadline countdowns

**System Health Dashboard:**

* Cluster resource utilization (CPU, memory, disk)

* Kafka throughput and lag metrics

* Database query performance and connection pools

* AI inference latency percentiles (p50, p95, p99)

* API error rates and availability

* GPU utilization and memory consumption

**ML Performance Dashboard:**

* Cohort model accuracy metrics per cohort

* GNN detection rates and graph statistics

* SLM explanation quality scores from feedback

* Model drift detection indicators

* Inference backend distribution (GPU/CPU/Cache)

**22.4 Alerting (PagerDuty Integration)**

**Critical Alerts:**

* System downtime or cluster unavailability

* Database failover or replication lag \>5 minutes

* Kafka broker failures or topic lag \>100K messages

* GPU OOM errors or sustained high utilization

* Security incidents (unauthorized access attempts)

* IRDAI deadline \<30 minutes with unreported incident

**Warning Alerts:**

* API latency exceeding SLA targets

* Pod restart loops indicating application issues

* ML model drift detected

* Low cache hit rates suggesting cache invalidation issues

* High false positive rates (\>15%)

**Escalation Policy:**

* Critical: Immediate PagerDuty alert to on-call engineer

* Warning: Slack notification to team channel

* Informational: Email digest sent daily

**23\. Cost Analysis & Resource Planning**

**23.1 Annual Infrastructure Cost Breakdown**

| Component | Specification | Annual Cost | Notes |
| :---- | :---- | :---- | :---- |
| **AWS EKS Cluster** | 100 nodes (m6i.2xlarge) | $240,000 | General compute for microservices |
| **Amazon MSK** | 24 broker nodes | $120,000 | Managed Kafka streaming backbone |
| **RDS TimescaleDB** | r6i.8xlarge primary \+ replicas | $144,000 | Time-series data and persistent storage |
| **GPU Instances** | 3x p4d.24xlarge (NVIDIA A100) | $252,000 | Critical alert AI inference |
| **CPU Inference Nodes** | 30x m6i.4xlarge | $144,000 | Bulk AI processing for medium/low alerts |
| **S3 Storage** | 50TB standard \+ Glacier | $36,000 | Log archives, models, compliance reports |
| **Networking** | Data transfer, NAT, Load Balancers | $18,000 | Traffic costs and network services |
| **Monitoring** | ELK, Prometheus, Grafana | $12,000 | Self-hosted monitoring stack |
| **Backup & DR** | Snapshots, cross-region replication | $24,000 | Business continuity infrastructure |
| **Miscellaneous** | CloudWatch, Secrets Manager, etc. | $20,000 | Additional AWS services |
| **TOTAL INFRASTRUCTURE** |  | **$1,010,000** |  |

**23.2 Software & Services Cost**

| Item | Annual Cost | Notes |
| :---- | :---- | :---- |
| Threat Intelligence Feeds | $18,000 | VirusTotal, AbuseIPDB, commercial feeds |
| Security Tools (Trivy, Snyk) | $25,000 | Vulnerability scanning and SAST/DAST |
| CI/CD Tools (GitLab Ultimate) | $12,000 | Enterprise CI/CD and repository management |
| **TOTAL SOFTWARE** | **$55,000** |  |

**23.3 Personnel Cost (Development & Operations)**

| Role | FTE | Annual Salary | Total |
| :---- | :---- | :---- | :---- |
| Product Manager | 1.0 | $144,000 | $144,000 |
| Solution Architect | 1.0 | $180,000 | $180,000 |
| Backend Engineers (Python/ML) | 2.0 | $120,000 | $240,000 |
| ML Engineer (AI/Models) | 1.0 | $144,000 | $144,000 |
| Frontend Engineer (Svelte) | 1.0 | $108,000 | $108,000 |
| DevOps/Cloud Engineer | 1.0 | $132,000 | $132,000 |
| QA Engineer | 1.0 | $96,000 | $96,000 |
| Security Architect (Part-time) | 0.25 | $180,000 | $45,000 |
| **TOTAL PERSONNEL** | **8.25** |  | **$1,089,000** |

**23.4 Total Cost of Ownership**

| Category | Year 1 Cost |
| :---- | :---- |
| Infrastructure | $1,010,000 |
| Software & Services | $55,000 |
| Personnel | $1,089,000 |
| Training & Onboarding | $20,000 |
| Contingency (5%) | $59,000 |
| **GRAND TOTAL** | **$2,233,000** |

**Cost Per Alert:** Assuming 1M alerts/day \= 365M alerts/year

* Cost per alert: $2,233,000 / 365M \= **$0.0061 per alert**

**Cost Per User:** For 100M users monitored

* Cost per user annually: $2,233,000 / 100M \= **$0.022 per user**

**ROI Justification:**

* Current Allianz SOC cost: $7.3M annually

* Arxis total cost: $2.2M annually

* **Annual savings: $5.1M (70% reduction)**

* Payback period: Immediate (positive ROI from day 1\)

* Additional benefits: Improved detection, faster response, compliance automation, analyst productivity

**24\. Success Metrics & KPIs**

**24.1 Technical Performance KPIs**

* **Alert Accuracy:** False positive rate \<10% (vs 85-90% in legacy systems)

* **Detection Latency:** \<1 second from event to alert (p95)

* **System Uptime:** \>99.9% monthly availability

* **API Performance:** \<200ms response time (p95)

* **Inference Latency:** \<100ms GPU, \<5s CPU (p95)

**24.2 Business Impact KPIs**

* **MTTR Reduction:** \<10 minutes (vs 200 minutes current)

* **Analyst Productivity:** 35% increase in alerts handled per analyst

* **Compliance Success:** 100% on-time IRDAI report submissions

* **Cost Efficiency:** 70% reduction in SOC operational costs

* **Analyst Satisfaction:** Net Promoter Score \>8/10

**24.3 Operational KPIs**

* **Deployment Frequency:** Weekly releases to production

* **Change Failure Rate:** \<5% of deployments require rollback

* **Incident Resolution Time:** \<2 hours for P1 incidents

* **Security Vulnerabilities:** Zero critical CVEs in production

**24.4 Customer Trust KPIs:**

\- Breach Notification Time: \<6 hours (100% of incidents)

\- Customer Data Protection Score: 95%+ (third-party audit)

\- Transparency Dashboard: 80% of corporate customers access security posture

\- Incident Communication: \<2 hours from detection to customer notification

\- Zero Regulatory Penalties: 100% compliance with IRDAI/GDPR deadlines

**25\. Risks & Mitigation Strategies**

**25.1 Technical Risks**

**Risk: ML Model Drift**

* **Probability:** Medium | **Impact:** High

* **Mitigation:** Continuous performance monitoring, automated retraining workflows, A/B testing framework, analyst feedback loops

* **Contingency:** Fallback to rule-based detection if ML accuracy drops below 75%

**Risk: GPU Resource Constraints**

* **Probability:** Low | **Impact:** Medium

* **Mitigation:** Hybrid CPU/GPU architecture, intelligent routing, auto-scaling policies, opportunistic GPU use

* **Contingency:** Additional CPU capacity can handle overflow at acceptable latency

**Risk: Kafka Message Loss**

* **Probability:** Very Low | **Impact:** High

* **Mitigation:** Replication factor 3, exactly-once semantics, checkpointing every 60 seconds

* **Contingency:** Log archival in S3 enables replay of missed events

**25.2 Operational Risks**

**Risk: Analyst Adoption Resistance**

* **Probability:** Medium | **Impact:** High

* **Mitigation:** Parallel deployment with QRadar, comprehensive training, early SOC involvement, iterative feedback incorporation

* **Contingency:** Gradual migration allowing analysts to adapt slowly

**Risk: Integration Failures**

* **Probability:** Medium | **Impact:** Medium

* **Mitigation:** Extensive integration testing, fallback mechanisms, detailed API documentation, vendor support agreements

* **Contingency:** Manual processes for critical workflows during outages

**25.3 Business Risks**

**Risk: Regulatory Compliance Gaps**

* **Probability:** Low | **Impact:** Very High

* **Mitigation:** Legal review of compliance features, third-party audit, automated testing of regulatory workflows

* **Contingency:** Manual oversight of automated compliance processes during initial deployment

**Risk: Budget Overruns**

* **Probability:** Low | **Impact:** Medium

* **Mitigation:** Reserved instances for predictable workloads, cost monitoring and alerts, optimization reviews quarterly

* **Contingency:** 5% contingency budget allocated, scope reduction options identified

**26\. Future Roadmap & Enhancements**

**Phase 2 Features (Months 6-12)**

**Federated Learning:**

* Privacy-preserving model training across Allianz subsidiaries globally

* Local model training with centralized aggregation

* Enables learning from multiple geographies without data movement

* Addresses data residency and privacy concerns

**Enhanced Automation:**

* Expanded automated remediation playbooks (40 → 100 scenarios)

* Integration with firewall and endpoint protection platforms

* AI-driven playbook recommendation based on attack characteristics

* Predictive threat hunting using historical patterns

**Advanced Analytics:**

* Threat actor attribution using behavioral fingerprinting

* Attack campaign tracking across time and entities

* Predictive risk scoring for proactive protection

* Executive risk dashboards with business impact analysis

**Phase 3 Features (Year 2\)**

**Multi-Language Support:**

* Dashboard localization for 10 languages

* Multi-lingual chatbot supporting regional languages

* NLP models fine-tuned per language

**Edge Deployment:**

* Regional mini-SOCs with local AI inference

* Reduced latency for geographically distributed operations

* Hybrid cloud-edge architecture

**Advanced Collaboration:**

* Multi-analyst collaborative investigations

* Voice-activated alert queries

* Augmented reality incident visualization for leadership briefings

**Extended Platform:**

* Open marketplace for third-party detection plugins

* Custom ML model framework for organization-specific threats

* API ecosystem enabling partner integrations

**27\. Conclusion**

Arxis SOC Platform represents a paradigm shift in security operations, combining cutting-edge AI technologies with pragmatic engineering to deliver measurable business outcomes. The hybrid CPU/GPU architecture demonstrates that advanced AI capabilities need not come with prohibitive costs. Automated compliance reporting transforms regulatory burden into competitive advantage. Most importantly, by reducing false positives and providing explainable AI-driven insights, Arxis empowers security analysts to focus on what they do best: strategic defense and threat hunting.

**Key Differentiators:**

* **70% cost reduction** while improving detection accuracy from 15% to 92%

* **Hybrid inference architecture** intelligently balancing performance and cost

* **Automated IRDAI compliance** eliminating manual processes and deadline risk

* **Explainable AI throughout** with natural language reasoning for every decision

* **Production-ready in 12-16 weeks** with experienced 5-person team

This comprehensive PRD provides developers with complete technical specifications, architectural decisions with rationale, implementation guidance, and operational considerations necessary to build Arxis SOC Platform. The document balances technical depth with practical constraints, ensuring the final product meets both functional requirements and business objectives.

**Approval Required:**

* \[ \] Product Manager

* \[ \] Technical Lead / Solution Architect

* \[ \] Security Architect

* \[ \] Allianz SOC Manager (Pilot Customer)

* \[ \] CTO / Engineering VP

**Document Version:** 1.0 Final  
**Last Updated:** November 3, 2025  
**Next Review:** Post Phase 6 (Week 15\)  
**Maintained By:** Arxis Product Team

**END OF PRODUCT REQUIREMENTS DOCUMENT**  


[image1]: <data:image/png;base64,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>

[image2]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZ4AAAFkCAIAAACfF8onAABpeElEQVR4Xuy9eVBb7X7n2fPfVKr676QyMSC0nkUSAiQk9n1fzY7BZjdmMauNAbOZxWxmx2B20C4hMN6wwH5vknvTN92T6upKUj2dqsnM9GQyNf3PdE0lXZ3c++a+c54jAULngIUNfkH83vrUW+Kn53eeRed8/TyPjr7nXxEEBgAA4Gb8K2YIAADgugPSBgCAGwLSBgCAGwLSBgCAGwLSBgCAGwLSBgCAGwLSBgCAGwLSBgCAGwLSBgCAGwLSBgCAGwLSBgCAGwLSBgCAG3IOaZPI/OUKOQ31n+2FI0pGRC4PCHSOKBRK54jrufIARkSuULE0xtVcto4og5wjrueydSQgMJgRdDWXrSM3bgADA5wjrg8CWy5rY1gGweVclo4EUcmMoIu5KrZctsaw5Lo8CN97AKWks55cNq5Lmzij+535zS9O5zMj8gvz7kfnCDuu5poYEXa+JffND4yI67msHfnkHGGHNZelI2y4mutqR74l96IHUM+InIKruS425ltyjYyI2eVczWvniNnlXNcHgQ1Xc11sjGNuUQDOkJTL5RzSlvr0bZCILxBQ8Oj/O8EW5HOdIwIe3zniei4rVymXLcjneTOCLMXYgyyNuXEDyOM7R1wfBLZcVi44l8tnCbLBUozHlsvWGJZirEHW3O84gAJp3kSB4mpLW6iYGQcAADgD3K9gEqQNAAA3A6QNAAA3BKQNAAA3BKQNAAA3BKQNAAA35KpLGxlbPRf43e+7AwDguiNLb0v3u7rShon4XhgjCAAAcDa40FuIOwcvm3NIm9hHRjKCAAAAjvj5SSVXYHnnurTBXhsAAF8E12/PfP+dNSYgbQAAXCA3Vdr85f6VfS/8AgKYbwEAcP25WdKGS6XiwOCgJ93Pdj798oX11z1Ga0X3kCI4WCwVE+TPPwoAAFwQN0naymvqjAd/uvar//nT3/xvf/Z//N3rH/7M8umXmo9//Nz4rsN0kFf/mJlio3j8w2pPrr9tS9IntWVtj/4eQxyS2zG4vKveXOuqSlGgd30LhvfXOzNRMUn6Y83+83tyQpLasolMWkw7H1cXZxrzw5nHtyNWpT4c129/WJodrkxWoCrEYZVzDk5Eu29tJaXhhU1jOoN5e6q/IRmZtNjrlZxZrw/1rjS/a+vY6kc/WEhIstsNJ81/dtajHm7qVp8m+NCtIv2z+3bXB+86t9YONQjtA0u7G6uLT0ri/NAgiLP6Pmr78tG76OD7vflSlnqpXmQObe4e12uYqaWCZHDNC4vuRBWoRyhXpze96KlL+u6mNMD15EZJW3Wd7uCX//bv/m8blLQd0bX9OaOimpliJ6Ztfmv1fgRBjVdQyUv12lMqKI5snLLsDj7IiMzrmTa/7S1QEIQsd9C61p6BUiSpzWprf6E/IUlu3NgfroiQq6JSH8ysbpucD26HCKlY1OgXlYGxWY/X1Ma5e8E4IQ4tm7HONqcplCqEbfksSahfOlgba1RF5TfMflCPVRzVS0vbqfU2JUkIUuwboFSo0ucfZyqVKrkvNVclZQoldfCAyIftuUF0Lf64T2ab5v1AsYqqThLVNGXeqAwVMRqMkMQ9nrVs99/PiC0afLm125njT31AGT0ftT25dFNvt+qtXTlSlnopaUsf2NyavBNEd43CX0oFyaCqUYv2RC2oR6gjgbFFTXMfNFM1zGYAAIObJG1ZBXdMB3/KKm1PDNa4nDvMFBs45p879H6lO5easjWvfhgsolQMDyxb0K08ChPyRQIio9+62ZV9urRRL/wwTCAURtes7IsZx6eR5gxY19tTqWICYXh+a3dRDGmTtsmqUAwT2qBKisMfTli0D8L4mIgnins0Pt95urSdqHfiAaXNIpw6DhE+UxtFUC9wkT2CCXH/4qZEwl4LLgysWNGudKAp27PXqz3ZUva7gehBWGqhBkEoJKPLu+vRnJRN2ljqpaXN9DydtHcNw1DwFGlDHRGJeIKoJwuWZUYzAIDJTZI2VVDQ+z/9c1ZpG3zzp/KgYGbKMZhf9uC79tV3/QX+GLrOiZD7K7qXDeGoJeK0rg86tAQ7Tdo+m15/Nu7+YNrefl6T6HzkQzAy4u6geXZ8pLm6KJaan1FBJG2fTK8P9NsIzSSaV4ojm6Ytq+WhdAE7p0nbiXqlosOZlzhypi7GSWFJRUlTEppM2cGFyrKlhoHXK523Jey6RiPyia6ZX7HsdbTUZEb62tbplLSZdj8bXyNMu/u0tLHUi6Rt97OB7prestOajmo/Xdqo+SAmDq0dt6id2wAALNwkaZNIxe/+5Ne//s9/z5S2bt07ZvmTiPCIZuNKayRhE4hzSdv+yP3oe6MfNp7lknwB48iH4AK+t1dSfl3Liy2t+kV+kH1BOtOY4i9XIHwlxPmk7US9+FF5V6SNmquKU0yWlZIg4XEiC9RcyssbU1R1Lq9tGR7fltukTTdUjtaYgcXdRtusjS7MlLatiQIV3TW53EeMzkKQNuCCuEnSRtHe93z/P/2tk7Rtf/5V7sNTv0M4Bg+dqY04vM7PJW1oPUUmP1vZWioPc5QkFoQCLpcrvzdlfdkYz1iQIlU9j7SdUq9r0kbgIv14ufyMKdtxSSGPywup0+qmaw4XpDmowWTG4YKULsaUNmpBKrYvSHG6IhekbdO5dgBg4YZJG8Xiu0/v/vpvjqTNsP8nTbr3OL378wXEYVM1kUdXJhn6cNLyerAuN6mod9r8tjvHjwoGFM2qTavhEQnZj1Y2txbuBmKHEkNdmcKA4gWtbtj5sHakSW0W/fpkeHhsasXIvOV1e4bM/jXC45yIyCiaCFSSjKlZOlgda45Kuts8+149UnpUb1P+WfVm+eMEKVNRR4nOnW8riIqMCg+UHTWARdoIUjdWrjzrpyq4f96LjS1tR9nt2KzGgc2D+aZE9r02tnrpWdtUcYyta1ERwUi8aGkzHvY3KiJCZfsaYaQqLjK5uGXuvWaiktEMAGBy86TNuPdDq3r7j//2P1O6tvXpl/fmNH07f8wsxsJJaaMmWIr0JwNLbzTqtaflsRIhEkdM5JdQO2HYsa4vTdekykWYo8RguE9up+HjKT+AFQnxwNvN04bX+xsr880FodRSz7bXdnxbhv3mDwEWkFs/qjOYd6ae1Ub7oBWurd4Z7ccz6h0uDyakeSduwhg4/ubkq6QNw4VkaFHP8MpbrVbb35itwATs0sZWL73X5nDzB5rx0dK2fRw0mYZoaaNv/jCYXnQ/iJbymc0AAAY3T9pSM7MoRXtmfLv27nPVknHg9R/H3ylmFmND6MVH31EegQm9vb08PD09vY93skRCnpeHxy1PLy+e0FZYwPO65S2gZ4U439vzFuOwh+BCwWEuV2Db4RLyObeoyCEe9pIYn+ft6eHpwfHmiuwLRlSvl+dZ9XIEVJzP9XQ4oLeDTOA8rsi5SR4c3pkbbRjaaxNwOLZB4PFtjixC71ue9iOj6ryF9hfO9Qo5nsddu+XB4aIgxuM4Bj05VEfsuVR/uUf9BYCzuXnSJhTy75SUv/3TP29Uvx3/+KvMB40CAY9ZDACA68zNkzYblMBxOJ4CAaxuAMAtuanSBgCAW3MNpS35iSUEpA0AgDPZ0I/nya+VtGV0v6PvJgMAAHAd3L9ouui72yucQ9pgQQoAwPm56k+0AmkDAOArAGkDAMANAWkDAMANAWkDAMANAWkDAMANuU7ShssVcgZKRkQuDwh0jigUSueI67nyAEZErlApnCOu5ypYcpVBzhHXc9k6EhAYzAi6msvWkRs3gIEBzhHXB4Etl7UxLIPgci5LR4KoZEbQxVwVWy5bY1hyXR6E7zGAskO5uAbSpja820B8OHbFOAY968SZ3Y/OEXZczTUxIux8S+6bk09joXE5l7UjDiYiZ8Gay9IRNlzNdbUj35J70QOoZ0ROwdVcFxvzLblGRsTscq7mtXPE7HKu64PAhqu5LjZGbbLJxbtN88FVl7aWhy3VdRSt2Zm5GU5klzpHMnNv36lkBAvzs5yLuZybm8eSW5bJKOZqbmYhW241o5iruawdyS17yAi6msvWkRs3gHcL8hhBVweBLZetMWyD4GouW0cqSooYxVzNLSpmyS1maQxLrsuD8D0GsLHJJhctD58br7q0wV4bAADn5DosSEHaAAA4JyBtAAC4ISBtAAC4ISBtAAC4ISBtAAC4ISBtAAC4IVdd2jAh18P25CQAAADXwQUcwXd/Ito5pE3sIzvlUZ4AAADnw08mvlQ9cV3awEAcAICLQmyYb7xUPTmHtMFeGwAAF4TYMPfwUvUEpA0AgO8PSBsAAG4ISBsAAG4ISBsAAG4ISBsAAG4ISBsAAG4ISBsAAG4ISBsAAG4ISBsAAG4ISBsAAG4ISBsAAG4ISBsAAG4ISBsAAG4ISBsAAG7IVZK25CeWkMtsCgAANwbx5kT1peqJ69KGYZgQZwQBAAC+AgFOSiTOwQvEdWmDBSkAABfGi+29jkwxM35RgLQBAPAzANJ2PZFIJSv/aIOMvP37tb+24VwMAG4qIG3XFXLyb+3qtvyPNl37w7hWZjEAuJmAtF1XuMFpkpV/sKkbpWt/cP8Tj89lFnOClCeV9awYtt8vzQ5XJitsTzOTRZW2Thr1BtNYZ0W0L/2oWnH8w+X9scpgh1xJzuC++c0vDFu7L8d778b5nv4kNHFIbvvA0u7G6uKTkjg/EkWy+j5q+/LRu5LsdsN+b76UIAPuvjigDmjDpOml3pVmDm3u2iOorpla1ObgmhcW3YkqJOmPNT9QBXR604ueuqSA7/14XeDqA9J2XRGJBETvn9mlre7XfxR+n1nGGVKe0/9Gt9ivCIzNbl3XGMbzKVHwSWleO1jsqwyML3u6ur/UcRuVFMfULFpHSgMd0iVZfVbNQLEiNPlOl06nH89XsQuKJO7xrGW7/35GbNHgy63dzhx/6sPN6Pmo7clFBSS3W/XWrhwpQeBSf6VCGaSfbYpWqhRyGfWuNH1gc2vyTpBKoaTxp4phZFDVqEV7ohZJarN6f7giIjC2qGnug2aqhtkM4IYD0naNmR0Nk83/vWTp/6tZmH9S6sUs4Iwko1VrfZZLYphAgIdmlJcnqnBxdMusZak4gC8S8v2KF3SrbajkKdKm7srERHw+ntFmsPYV+jkfH4EHli3ollrChHyhkIwu767PDz9F2jAcE2IYrp+oDMCpFyLCJm2m5+kk9acNFDxF2qz9hX4iEU8Q9WTBssxoBnDTAWm7xtxOINXTJT9+lmx23spO+PJqlJBmthmtnVni2e3PxtefjTuWRymkJK5twTJXqKSmYLi8cFqn7kIlT5W2LPRaklC/Zh0qUTkf34bIJ7pmfsWy19FSkxlpW7ciaTPt0pW+/mza3bdJGw2pn7ivRItWBJK23c+G7QM9hWWnNR2dmqdLGzUfxMShteMWtXMbgBsPSNt1pbVS9pu/Nf24G/Ljxz/6rcH7n3c92sq9mcVOcCht/gEqRXjNsGW7OUl88dJGUHMpL29MUdW5vLZleHxbbpM23VA5WmMGFncb7bM2Goa0bU0UUCtROYXcR4zWvCBtwFcA0nZd+e//14cfD0Q//vL3f7vr+eOvfv/H/f/pt9Y/YhY7waG0oR9++N7ts1iaki5h1mYDF/K4vJA6rW665nBBmoPWmGTG0YKUhiFt1IJUbF+Q4jgKuiBtm861AzcekLbrym+3vZCi/epQ2n7N+fGXD5nFTkD6ZfS80S0OhMdk3R/Z0c03hFGaIklsWD14NVAdnV7Vtbq/9CQVlUTStj/RkBERGUUTZv8aYbAsLDqjuFur1Y1l+TOOj8D9815sbGk7ym7HZjUObB7MNyWestdG+AdFRkTG6GcfJUdFRYQrCfusbao4xlZpVEQwEi9a2oyHLYmKiFDZvkYYqYqLTC5umXuvmahkNAO46YC0XVd+q+OekLZ/5/Nbcziz2ElEInH0va4V4/bblyOtyXKhCAWFRFBRy4RJbzSPthcHU38SNmn7dHQThvm1iZY2dPOH0fJmfrynIIwU0lMqJriQDC3qGV55q9Vq+xuzFZiAXdrIgLtjjJs/0F6bw80faMZHS9v2cdBkGqKljb75w2B60f0gWspnNgO44YC0XVf+acvrx89/SInab15hP/7S+1/+y7vfGL+010aBC/hcTw8PDy9vb2rJZwviGI/L8fDw9OBweSK7YAl4Xrc8PI7woIJCb/q1p4cXhyMQoe8uT0EkEnA4Xh6enp7ePD5GB6lcT2+bAFH136LqpooJbAe04Uk3XsjxPK70FtUgFMR4HMegJ4dqHnUQW2M4XO5hmwHgGJC26wqXy3lW9Yf/+7rHb82cv9/wHGv4Q29vDrMYANxMQNquMXw+18vLI1L1R56eHnwXfooAADcHkLZrD4bRu2MAADhwhaQNXHYBALgohgyvbbd8XxKuSxsm9pGd/otrAACAc+AnE1+qnrgubeKM7nfhMGsDAOACEBvmGy9VT84hbbDXBgDABXGVnmgF0gYAwAUB0gYAgBsC0gYAgBsC0gYAgBsC0gYAgBsC0gYAgBsC0gYAgBsC0gYAgBsC0gYAgBsC0gYAgBsC0gYAgBsC0gYAgBsC0gYAgBsC0gYAgBtylaQNXHYBALggxJsT1ZeqJ65LG/L4xxlBAACAr8CLh8v8pBLSOX5RuC5t4LILAMCF4V80rd+eKwrAmW9dCOeQNthrAwDgovArmNRvzxQoQNouh4UBKTMI3EDgTPjOgLRdIlIJ9l//JkMqdY4DVwTSL7Gwro4Zv3DgTPj+gLRdIn/9wfd3/9D8f/77dOZbbOCyqNLHk0atTvf8cVGYD7PARSE17b5tz3B8RCMR22QI/JoN1+/WZlfAFYnV7VNGrd442vUg3nZOS4IzG6cMOx9XX03WZQVLHMuToWVT1uXWZPufkqD0xnmTaej2sQBJIwq7dTsHGvV6T91tle3klIRkNk1TB1xbnGnIDWW0gZ1zngnABQDSdlmU5pE//i/y3/3Xqt/9tye1xS486lV2u3Vjf6G3LCS5+tnG/qsnac4FLo6YmCAJ5hghoup1yq+Qtu/Y5i8ijqgdM72feFyoir7TMPNOPVVLnVQxDRqdekahjEh9uLBu2ayOJo7LRzZOWfS10ejUJwMyG+feaZae64wDaYfSJkvtWdw2BfjKg9MejRr2xirDCIKMrt/UaWZ8fYPiK6ZWtrXMZjA595kAXAQgbRdJd6NEP+VjXZP95Tu/f/gP/v/yn+S/+7uU3/2/9//7X8n/jdnXui4zzvj0t0iYiRTi6EezlsV7Cr5IyPNNbWipzUZxUpH0YHRS/WFlYeJo0kH6xhR1vDJsf1iaHSpL9Cep3Pj2BctyWTD1KeKq8le69U50wNC6CYv2UeVj3faHxanu7BCSIAPuvjgwv/mFeWeJLoyOVjX/CUWO2J6ipjPl0/urXdkyVAAPuDen1Q8zG3xqmwlCldHSu7Ct1WkHHxWE2pRCrEytG6dnTxM1GSoxKoa+E9cNN62Y93U6TW9VEp1LBmW29i++3txY7apOCzhSW1KuMZs7cgNOf2gupc5q/UJ9EJ+HiXgCVe2kRUuIo+5Pvx4qUWKYQCiMqV3df1EVdpQS16zXz9eH4Oi1OLauoyVXIeRoj6WNjGsx6UbuYZhQJOSHNxh1Y+WEOLxy1jpZGUQFhUJl8YyV7ggLtjPhz0y+Z5wJzCzgAgFpuzBIEvuLHRl1Ep/Kf5T987/1/OsP7Oc06Z/fpX83WBFJvcaFXC6PT8lKUPHsxtpQfrhvSP7gvHmzJoaSJ9/0rm396rAiMC6nbUOjH88LwMUxj19aFouDkLQpS17q1tqog4iDq19sf5huK/AShZW8eKceKqbelforFUrVgr0wqtdHTkWC0tpM0UoV9ZZC4UcQIr+CaY1+ONOP0hRl0ejeSlsqs8GntBkTh9eNm9+ONuSEpNT1q/fnGuOpeoPL5tX6RUVAeErt/LppsZRaydGfuFE97e3FlaX2zm/rUW5U46RR3ZIV6hdz/5n6/XB5iL0uUmnafddfFHiGtMU06PWztba7NMngB6MWE0EI+RwPDl+ICsgyn2g+DhTKj1JaNqyjpYH2P0U8qvEYjjlImzjpyY62L8928NCqNe3kA0Ic/eCVdahYiYKk/M4Iu7S5eCYwE4ELBKTtIsFxEY/HeTVAME5l3/9m/R/VI3w+34sqw0y0gQm9OTzybv3ItOHDVEMSQQaXTNGTLDufxu+HEtKsNqO1M4tEKbiAz+UIMOxUabOoqyLQEkwSlJqdHX9U0ayDtNEwFqS4OPnpa/Vwqar0pWb1SRSjqUc4t5lSgfsrupcNYfRHiQm8kd6hjlhn6qJRijji/ksr6gj9iets2kH6RWYWUbnRDTqjwxRSP1x8VBFOT6/OQiSSZzwZXH6zsraj3T2YrkWCayOseGLZtF4TTYqODkL6b/bn09PSEzCkLf9eM6W00rAH68fSVqKqayyJlClOkzbi8Eyg1qFnnAnMLOACAWm7eHg87x8Z/1D31FOzGm9mYQYiPo8jSuxdNk1Si7PiSetEhdLL45YHDZqASDNpaTuxZXOWtEXSu0sYXyAQHJX/srQRIjL+6eLWfPH43lxdlGNdbDi0mSBCaGk7cfc13ZGZuhj0Whx5UtrybUcQCXi2ZmiH7xKe9v56ePMYdZ0FpbPeXh4JHRbDWnecmJ6sISTLxo2H8RK+6PgfFVJV3pYuYf76hSltfJ63AMNDT0obj8cTEWdJm42GUsE3nAnANwHSdikw/7mOCj1WFjZwRf7gzGRTrAT9SUY1z1peUTOLvCHrcmuqlCpA+oYmpEQqSUKS0qy2DhQpUJYs/cHAUEkMIQ57OGnRPKAkiCDCazb0C42Ek7SdxAVpo4iqXrKOmjcrQ0+dZrK0mcADiud1a+3xKEiEFvX2NOVSkzKqI0uPU1CWJLFh1Tp4V35S2mwQwZUruoWmSHQa4IrIlIQI/6N3/fwkZ+vIEXPbr5/elh1O0KSR5TMPYki+0LEXeHDlUjzJ0i/HvbbYJqNutOzwtUE3VkaIQ8tmrZPVESgoDi0/fa/NhlTCP/+ZAFwMIG2XgtPZTPG/fvZlFjsBxpfGVrdPmw3mnan+hgQ/dAFgQklUxfCkem9tcbI6VY6hrzWpuUdITuu8cefD0sxAUYRYiK5hgUiR/XDMoDcYBpuzFRjKZZE2WWHvtsM3Bm9+YZiusb2Fi6PUOz+Y3vzCZBg8Lq+qGilVMqc2x7C1mQrKEh52z+/odNr+hkx/EZo9YSKf6MpR9DXC/FhFvEyIOsKUNipX6JfS/OzVrka93lkZL6VzEaS/xmx8kqU4fa/NBh54b7okSIjZs1T3xh1X9D9oenOouCT+yUvLpmOiOL5t4bXDyOzuU0FchCmzO3Q7B+rNtc77CT5C1BiR0D+pbtJ2N0l1Kv0PzOn89QeWHbcvnwnARQDSdvFIJXZp+3fbPnERnD/RSWx/yv2/MMq4iMvleHh4enC8ufTFjyEh43M4nrc8vbx49KWFwIUCrhe1XvPicI4XWRi1KKRzeXz7hY1RB/PkOd7kgfO9D9e2djjcw7cEnraIJ+eovE9q9x0Fy9TGEbY2o68UvFHQ0/uoMXRHqON7enGOJlBCLrXkRN88OGJbVHpSuXyBg6qKPD09uCdmXuzgAi/+cZdFAs6J/npyqeokyU+2dFNVJxJF3kerfhu2dEzgjbJONEYo5KHBP/GJnMI//RX6bvQrzgTg2wFpu3gU/vh/+XO/umIBn+dJXal8nldFPp86oeMiL2uULwefjK7X/l/cvL92+Oa0a/cGCo+XupfHb/6j3C3OhGsJSNulwPwalM/nMYNXGpzP9bRNXoCvhPVDZw0CFw5IGwAAbsgVkjZw2QUA4KLwzRvd0I/nyX9+acOEXI/DLWcAAIBvAhdwPD29BJe2Wey6tIHLLgAAF4XYMN94qXpyDmm77nttC+aP2i0n3qudIx+1JrNzZOvjK1dzNc6RrY8ajZoRdDl3fYYlyIi4nsvWkQ8654jruawdcXUAQ+4+q82IKWyta3+QpMx+2lEWFXr3WWZLZ050QWNDVl2GPLl+oipRma28rDUL8PNxlZ5odd2lbXn3xN2wNAeOv4i089riHHnzixVXc/XOEXSTrYYRdDlXO8cMfksua0cYkXPksjXG1QEUS2VSMSGRSWU+BCnxkUkJUiqTyHwkYrGPD+kjxsU+vtT/L+/JIMDPB0jbxQHSZj6lI4zIOXLZGuPqAPqGpkYH+oUkxiRGKaRBSUkRflQkMD4pyD84NjYwJlAcEHs7MkAa9DM7aAKXAUjbxQHSZj6lI4zIOXLZGuPqAMrj7qSFKWOzU3NTgn0jc3MTAqhIeGZepDL6dkZ4epg0OL00OVgWKYMFqfsB0nZxgLSZT+kII3KOXLbGuDqAIXf7azOiC9sePq1OUuZ0dZZFh97tz3zUlRN9p6kx62GGf3L9VFViQM6lPc8N+PkAabs4QNrMp3SEETlHLltjXB3AiOqFjoKk+yNd422ZwcWTEw1JUdULRYNTxYmVvT33OgsCsroNj28H3zthggK4ByBtFwdIm/mUjjAi58hla4yrA0gIeQKhUMjn8fhCXMSl/sCFPBGfK8IEyL5OKBIJuAKRSHTiMRGAewDSdnGAtJlP6Qgjco5ctsa4OoBhFROPcuLLnrUONqUHFg49r4mPqJjI7x4uiivpaC9ozVGkt600pAYWBsKszf0Aabs4QNrMp3SEETlHLltjXB1AscRHgu7wkPpIqfNL6iPBSYkP9aeYJKVSUirGSR8Z9X8x3PzhhoC0XRwgbeZTOsKInCOXrTGuDqA8tiAlVBmdlZqTHOgbkYO+IY0tCL+dG6mMSk8LTw2VBqeVJAXJInxh1uZ+gLRdHCBt5lM6woicI5etMa4OoF9YSnSgf2hCdGKUwic4MSnczzcsJTA+MUiO7muLtt3XppAGwkPd3RCQtosDpM18SkcYkXPksjXG1QEMq5h8nBNf1tc62JyuujM0VB0XUTGZ1z1SaN9rC0hvW2tIDbyjglmb+wHSdnGAtJlP6Qgjco5ctsa4OoDwNcINBqTt4gBpM5/SEUbkHLlsjXF1ACW+Sn8fsW+Af4C/hPQJCPATUxEfRYBM4iOX+8h9cKk80B/9mNT5owSuPyBtFwdIm/mUjjAi58hla4yrAxiU11qeHJHzsKKxLDYgvampMDw4rzW1tjkjPKvqfmpFsl9cZV8x9Q78GsENuUrSdt1ddjFM6BoCRuTbEDEibo6rA8j8jIAbg3hzovpS9cR1aUPScNYjLwEAAFxGKLpcPXFd2sBlFwCAiwJcdgEAcEOu0l4bSBsAABcESBsAAG4ISBsAAG4ISBsAAG4ISBsAAG4ISBsAAG4ISBsAAG4ISBsAAG4ISBsAAG4ISBsAAG4ISBsAAG4ISBsAAG4ISBsAAG4ISBsAAG7IVZK26+6yCwDAleEquewKuR4YIwgAAPAVeHK4l6on55A2sY+MZAQBAAC+Aj+Z+FL1xHVpg702AAAuiqu01wbSBgDABQHSBgCAGwLSdrXA/aILI2TMOAAA5+L6S9uiZe1+BEG/xoNKX6o3njHLfCMBJfN6+oHkGq12oKUgVOpc4KsggnJ7DLs/UIfVDxYeBqVZfR/bM8SOxWKbDLqpakY6AABncP2lLX/kw0p3rj+JET6pzasfnt8NYJb5RhT3ZnXrPalKRXhm65jROlkTKWaUOTfi+Lrlg2CVSqFUyX2PtQz3CZFgjiWJqHqdbuK+czoAAGdx/aUNx/xynr+j1K159f1AoZz6m5CltaxbF3rKYgKVbcvWpY7bvgQWVLGkW2yJQseXZPVZ1V1ZUgLzK5jUbxk774XxA+52q60v7ocyj0/Q0qZdaY2RYLLwe09Xtzuz5SR1wOLZjbWh/HDfkPzBefNmTQxJSFKb1Z82pppjJZy0p0bDWmciNb/zSWlefTtWny4OSKmaeLvWX6ggsZfbn42vP5t2f6D+T6HtL6CmnFJ/JSVzyvTu4iDcVq+PnIoEpbWZ9LNN1FsKhZ+EwGSZz9fNq7VJSmloceemdbwqzK6zsqxW9acK+wQWAG4411/aCEKERz6a21pVrzyJIoRURJLQ8coymy/jCzGhJH9Kt9GVKDld2gx9SbgQx7CUrg+a3lzGwRGUtOl3P+m2Php3dp5XROFCERW8M7I3Ux0mEglFouDyl9axymBa2vaHixWUvGKRj+YtS2WhONWYBfNoOsHHMT6W/lyt60uVYP4BKkVgXuvmfoASzdoU9KwNx4QYJiSiWo6kjY5gkWjWVomh1yKcwPwLp3Wa3iSJEBPxuF6eXAFqDALn87hC/okZHwDcWNxB2jBqKpM18K4v3w9N2ShpS3u2bhnL8qFfZw1rjYPp0lOlTafuSpBQQTwgriAnMdD5yDRoQbrWnazwD05tfK7Z6SsKpmZtJVMHZnoDjubTODXjQ9Jm7S/0p94VRzROW1bLqRjVmN2jYr8wGQfSpBjSKTK+fs1qkzMMP5QnKjH6WNpoGAtSeW775oFOb+zt7qoqiEUr8ePCx8cBgJuNe0gbdUlnDN0m7Re2JBVJWzYtbdKsES2tJmdIWyKSNmpKxBMI0aSPiW1BGk0KRUK+f+mybqEpUowVT1onKpReHrc8aDh84Qlpi2yyS1vqszXTYJK3vZiHJ0doO6wkgZI25t3SX5Y2nM8V+YUkZte0zSxsfRguC2EeBABuPG4ibZg08/ntoy8uxQn1q9b5Z/dToiM6lqyvHidLCIwMrBg2vXvRUpBYMjxvsTxKlhInpe0M6K8RnmVHRsRlN/ZvHizSB1QUTm+a1h8VJqU/mFq2bFZHE6zSRjXm4cr+0tDDsMR7j+b31vsK7PMsJ2kjfQMjoiIio6Jye+vSoqkXEcH+9Fu4smRBpxlHkXCVjMQURdMa42Lt7eiQuLtPlvYXmhLse22+Oe3qz/ejYK8NADA3lTZcgAcWNI0bNrY/DbcWBuJCnApiAlliY++rXfX64qOCUFyEpniuS5vt5g+9wTTcWmQ7ICaURFUMT6r31hYnq1Pl1CKTXdpwAabKaxgz6I3m0Y6yUFKAGkMwpE1W2Lt9vG6lMEzX2N7CxVH3BvQmajFrGEyTYDiuTG9+OW/YN5h3JnurIqSHM02f5Nr593eCQdoAAHMfaSOEhws9GhzjcTkentQ6kcuzbcChoJDr7eXh6eXFFdBiR0UE1N/eIubRToKK2ZeTHg4HFIn4HI7nLeqAPPtKVsD1vOVt29fHuNShbZv6VGN4HA9bruiwMVRhntet41pwvvfh2tYOh3v4loDv7emwmBVSmV6edGO8uccHxNEBBfA1AgAg3EbaAAAAjgFpAwDADQFpAwDADblC0gYuuwAAXBjgsgsAwPWGlEglJ+5d/x64Lm3ijO534Zc5gQQAwB3B/YumiwIcb3T/HpxD2mCvDQCA84P7FUwWKEDaAABwK0DagEsjqaJ3aGEwx9c5fhOQZj2bGe8vTwtivgV8F0DazsG3GHl/S+71RBar1y4230uQf/et3KsAKY/Pb5lf2X7jy3gL+C7cAGnziWt+PtbAjFMoS17qNvvSlQplVF799Hvty8bIM+tiuN2eA0Yucu9QXrPLnuE4cgqkX2G34YPwqL/i0NLJvY2p1vSIwNKhbcN6d7KMHvy1ttgv/Vb3WoOJZOrBopsp7j83bi9tPgkPFz4udmQ4x2lsV1cMKcREfGHk4wXLelUk4V80rdMOVVaN67e2J7vLInwwggy4+8JuxFYWfDRY4pDc9sGlXfXmWuf9ZNvp62Ju1fwnxx+9m7en8v2wPtNef5GCvtNFltn7VjtWzmywrd7Q/K7h1Xf61z/Mj3VkBZNUMKRqRbf8JAYNlCRncF/TmyslsMea/eGm6taZrfXF8cpE+vf50Y9mLZuPqjqGVt4ujLWmqWztcakjrG1mtM2OJKlz0fLy6E9SVdan2XwQwReIhEJV9bjFWB9PosFf7yuvndKbzCOtBcG0xjHrZR4cIUlsWN0fa6pSb+9vrszWpQegcSMVSQ9GJ9UfVhYm6rKCJXRJWXRF+8yWeueHtcWJ6lRU7GgQtJZ3Zw4CPZJDjyoHNRr1Wvu9KB+6mG3wjdvvjgafIMigzNb+xdebG6td1WkBJ4VMp+5Jcmv5vqq4u7TFN2l0q93xYgHzLeJQ2mwTB3Fk84xF/SCKYDMQZzHyFkc3T29t91WmhWc/nTS96SlAl42LuUcm4NE2Q13aBDyl841mrFxFXRi+eU/173tyZMwGU5ABpQOmt4OVcb5ivHTsrWa4hLqWWI3nkHH5dGuSHy+2cUO30Z3sQ1uP7OzNtBcohV7l4+/X++/4k652hNW4nNk8G9KsIc3W0HEE53l7evJE6LUkrvUlbX9CDT4lav21qYG3O6e39p4Xq1jrZR4cIYmvW/m0MfXIi0NG1a/rNP1pMjb3dnFY5ax1ua84VEbG169qtYMZsuNB8CYizhgE20gaNNMl4XhA4fgq/c/e0eATfrFHgy+Oapw0qluyQv1i7j9Tvx8uD3Fsqnpr1GaACnxf3FTaxk0Hi8/uhShS5x8lkrRVESvU1WWgn0Vg2v1BuzJ2N5yKnuWy62gJGd2g041X0itKMv6RRTdcTF0hLubSOC9IcTy2dsU68SA8q+/tWmem5NgOxImgO6NvjebXL1++aqzKDZehY54ibYdmSsHVLyzammjC5qpUFoo8jlBTtb3JknN1xNUFKTL7NDtI2xHiQM3Ks2QZHzvx74o485wWx7S0WYeKldRrUhaekpcV7oezWBwTRMSDVc3Oh+WltdamqlRqJndoLUUPAjr7TxuEo5FECi5JsQ3m0eAP9A8cDT6Va3SYz+pR7nFTNw8NUIHvi5tKGxHd9MJ4sK55E0PYrYpYQROHzb6MQJW/DOdyOHyGX5uTy66jPNkuctvFkPCYuhjuHSnCF3NpnKWNIEQhDzb1C83dhp1HyeTpzRYKeLh/VFpGYdXI5r7tkTGuSFv1obQhw7hDaaPWSufpiMvSdnuAmq04x8VBOd2GND+ekFZtB2k7t8WxXdpKVOg1LhQK+CKczeKYQM+KIFVxSdklT2ff6Ok9PodBsEsb6yA4turIdO9o8Csb+48Gn8rVDt8lPA+Np7x5jk3VmIcyYEH6M+Cm0oaLuHhk/ahWe+TLxsrxXht2PLNzvLqccJSn4MoV3Xwj/UsJaUb3O3VPjtOVeUYuDVPaMEJVNbql29h4Gnfoe86E9AuLT4qS43yBgItlvdBqeqhJh/zurE7dnSTFCFJZNLa/0poiQdK2P1aJnMSpi3nGsl4ZRkvbtr4uDkkb6vvG03jJuTriqrRRq/tZy/qJoCQkr9ekXuw++m7hi9J2Fo7SdkjekHW5NRUpEekbmpASqSQJUh6elBzqR2kfj+tfMWLR2Keu9kHAzxgEVmk7Gnw+j3M0+CiXto+nDqiITEmIsDkh2yD0y4/pf3KA74ybShuB1I0nIh0fS8wC65d0LFcXq5F3WN3E1nZ/dXbCne4J025nlu85ctFbyAS8JImO0CbgKIj75498XGiKO+Nns+LQunHLTv/9tPBgVXH/lm6mNkTM7oTerP60NtdXmhpZ3G82rHXEiekJy/ab2b6mjOjQJ4vW9Z4cVK+LHTlss6NxObN5dsiEh6sHSBTsfwbn9Zn1mqniuFCUGxkZ5If22i5W2tjc2xMaVg8Wesriw4JSa+bWTVP5CvxoEELj7505CCzSdjT4gWHJR4NPhFK5uyMN+bE5raP6veHS4ONWSeMWHyVdwANqgXPjvtLmCsgp18vZUJfFZfcUt1tM6O2NHHo9uXy7A7jrufRbAk9b5OixLwQRWacJOXOmSa1bMQGH44USvTgcweF8k2kXTF+NPnwOFbSvte3bTMF8b69bXt5c28KQcLEjNpzdfU8FExIrOx8WRh/GIQ9350HwFogcB1/ofYuq+6x6nUHuwZyjZxLaYVoco/m7N22tfBQ8GgQ0gGcOwlGrHKyS2Qffnuvp6X2YK46p7l9+b9DOHd8BA3xXbra0XTkkCfUr+87Br+Vor+0o4rjXdvmIhIq0u/UVcVdsE/37DIIktqy2NCMA82a+BXwXQNquEtLkrkXLIjP+dfzc0obhGJ/Pc3zyw5XgOw2CiMfj88/e6gUuE5A2AADckCsvbclPLGin1jkOAABwFr55o3nyqyttGIaddWMaAAAAO5joUr3CWXFd2sBlFwCArwBcdgEAcEOu/F4bSBsAAOcHpA24knwfh15pVFFVbWEEuqn4ggGX3Z+bmy5t0ojC7qGVt+rNte4am9MW/kK9p7e8mektJZBXalbrwitG1uWBK0vn55sSLvanOeL49gXL8rHTnCStZfNzwXf/8kiSMbBhmWDGGUgTWvQZvt62XwX4BCemZGSmZZdUPzf2V+elZtyOCZSgnZT4qvZps95gGuu6H+t/oi9zlq222362G/pIZXpV//qy6WB+vLcw6sSDH0nF3WfGd51ZPowGXAS4QMDzlqY/b065nOMDX+AGSNsZLru+6b2LFmNncVJEbteU+cNwWTBJBg4USDiipOY1A0Eqc3rV/YUKZuLlgRN+CvEpdhdfizjm8UvLosOP84USZTz+3e8mlaQ+W7eMMeNOODn04pKAsJi46NjYyNjSzeHq+Ni46DA5GVDUo/s43Vakii3tWNlf67ujOPpBq0/88tMMic3JigwpmdjbnGpNDZUX9Bh1m31pDtNAVclLjbYvSXyqE8G3Ay67Px9uL21nuuwmtuhXn+WLBQKRQJTc+RZZlYlVA8WBUr/bj1YNwfemZp/lyU7x1VGVv9JtPL9fN6kzbY21FYbQv+hmNYkl/eLudS0tGvfnxjrzI9AP1zO63y6MDg282qmsG5vaeD0/WEmticJrNw204VffnUMTSkl2u2Hf9iftDbt+P5w4yl1d6D3KZTYPpQTnN09uqbc/VpV326VNmt+19YPNVoy25KURq9Ibpud0VoPRPNZRYje2JeUJ94fGNz5srC48vhfjS1+csqjSx5Omje1Po0/LonzRScPq7ss0p01o3XJ0NDPvvm3PONW5wMmhV5ZY09Yz9LSX4oVJt/as93lDfqgsZ3B5vTsB42EiviR/Sm8YTLcPgjiqbi1dZv8hJ6koGdgy18cIhCKhUFzYt7XVnGzzxUVUzFgXHyWStMSXT++vdmXLUBwPuDen1Q+jMiy2vbgiua5zdktvskz21SXQV444tG7Con1U+Vi3/WFxqjs75LgKAlx2fzbcVNryKvJthtRzW8amBPKLv/XxS3k6u6WtjSGoSwL9+NnTgyOKrI8lzkhEXm+a7jhMiGNYSvee5lmezbhCb+hLwulg1wfqUiekOR2GnaZ4oQgTiXyLB7d0dbFE6tM3i4+SxYTkWYGMFCc8XN3rzBYTODVTEWJkWm/e4RJGcrtVb7X9efTzoKPcrIH3x7mM5lE80Vu7s3DqqhbFd63YZ21Uh5CDk7L01ZHTjn/htE7TmyQRIm8zL08u/Zvz7P69jc4MkUAgFPgk1VJqEiJJ6Hhlmc2X8YWYkFIT3Qby52D1icvq29f15ZIiEYanPtZb++744nTXSHrWhvpIDdrpA+tkYymOqXzSO9w1MDejeRstdb7JkVTmP93YGysPQXFxWOnEh82RYts/Cb35UlJVObSlroqSZ/ZsR8tynpretKYejZVYP1cXdNQMn9xOw7veAn9SVfHcvNUYj1Pifmdkb6Y6TEQNoCi4/KV1rDKYWmZyOR7ePD4mEirLl3WvWiLFNjs8Q22kiPoEZQXTuvWnji1EVpQ36nE/VwU3lTYXXXYPwUd0b4fLw3Da4ZpGltiy1jSxpd56tzD8kFEe4WgSSzVSN0BNrthMYn2Lei0OE5bXxvo4kpKnpcfJEkL6rMCXlCTUU/KUdXjJSdK/KG223GxK2pxyT/LUvNdxG80gGAtSXOUgbYQ8t33zQKc39nZ3VRXE+tMTtIJh6xISUAz9yp3H4QmEkjQkTDYvbEnWsNaIJkqnSBvTnJbOcm1B6ixtoXn36x/Xt0/NaY1M5+GGl++XB4oUIjSzDi6d2zAtFCoFtnHryjmUtkhJcHaLv/SktPlkjJQoj4USFyc/fa0eLlWVvtSsPokikBETi20vNY+rnZjV7duCxsVH0XZpU1dFoB+lSoJSs7PjHVsILrs/E24qbS667NLgfvGNw5VR+KEXENqizuidnqhdG7gjFSjujb9jdU9jSpsPq0msrKh3y/ww0uvQz8eDJ8K+n7Rlore+IG04nyvyC0nMrmmbWdj6MFyG3CvzKWlDtRwfzSZMtqsUqY9xIO1MaTtpTnt8BKdGMnF26EW/sffmcTlEav/DeOQAfgQZcHt5sDhAxLPddF44Zl1pTcYw+7g5SBuBCbzxk9Lmmz2U5+f4b56IjH+6uDVfPL43VxeFImQQ07bXL2d43bxcFS2hPkdZib3vdmmLpH9vj/EFghMP4gCX3Z8JN5U2F112Uf8Tm8f0u9TK60gBSeWdzlczBQHYdG0kiRMJrVus31eiBamuLw1d6j5ZfXuanlwJq5OiJLPN8L4rF/k7krLgmKTYQB/XpS2xYWN/uAQ9D0WS9HTJ8rJIibsubdTl3ZOH9umkKT2HC1LbWyekTRYcnxitFAv5PC4/ru21th9NPzP79ja7c9DeE6nMbHnxuDBMEvdkwTJHNYBKURRN6zY64k9x9/1GaWNx6KXBRXL1CP1YHPpPUpnV8uq9XMg7+ojvjOybdj8bXyNMu/tI2uTF/VvmxkQ0PvRrS1MivRFGyvMH39NPqHIkqnrJOmrerAy1fQXhz7TtjaxT619Sy1iqABFBvWZKmzPgsvtz4abSZgNHp6Bz0JGIuk3H7W3j+tN4CTnbeVsiRIk1k5ZN07tXw9XMRMI2a1vpLCof05u3Rlqy/DG0JmKRNkIkIsML2hcXjQfzY08zAzERzi5tpSeWP+hpeCiXCM2lck0Hs4ONCb7oaSmuS5vIP6Nu3KzZtlaUds/T0iZJ61vbdajizef5pngcV6Y3v5w37BvMO5O9VRFS1BFcKA4vGXix8WFzdb4pNxinGoIL8MCCpnHDxvan4dbCQJye5GICWWJj76td9frio4JQVOx0aSNwWWztnIlqwGtDfTyrENgQ+ue+eJIbdGzSe0jx9L56pIxSN0lK94pjR3bW7ocT9Daibb8ywzZrow4lksaX9q6hmz/GnmbRg09VHFq1rNs4sSNmR1U1Unq8SsWEkqiK4Un13triZHWqnJoP4iKf2AeTc/r9+eHm3NpFllmbIxLV7XZNruILJyFwObi1tH0RjE8bxh5Bm756cfm2k5vH8fD0pGKHprgnQdK22hYtQhauHC4SHeI0k1hcIOB6enne8uJ423xZhVwPLx61bBHRxq3IMNZbiPE5J3xoPTy86FyhPdeba7sf4ihX4H3rKJfZPATGR13wuMXne3t5ePGpdKG33df3EPpQQuooVBWoI97cw29OaMdaL2ROe2Tbi2PUuhAdkMM9nisx3X3ZzGntxxTybAtztCp3bq0DJx16j6GGyNObh2oROXXEE/XuuCQf1WsbFtoW2NNh8AlxdPXC/tzDaGa9Pqndd04oEdO2F3XB9nEIeOjkQJ81hkaFd9JNF1x2f25utrR9C6zPVQAuiEt06JUktM9b1suDmZMpn4yu1/5f2MFwFXDZ/bkBaftaWJ+rAFxjcDTXcw4C1xWQNgAA3JArL23gsgsAwFdw1V12xT4nftIMAADgCqREKvnuv951XdrAZRcAgK8AXHYBAHBDrvxeG0gbAADnB6QNAAA3BKTtJiIJzXpgc/i45kjK78S7RUeAC+dmS5s0c2jT4aeIhpnaYNbrRJL+WLP//J78O31X6+BA6SKaw17QHuhf4mcyEL94JGkmy5Q7dAS4eNxe2s502ZWmD2yanqeThz+rpn9jyDSJtf3Me/Dh/dbZ12uvxsoTfJHGkb7RJX0jq2+1WnVfQ5aKbiRLLoGRvjFFHa8W9PtLs0Nlif42ffQJL2p+odfpjaOdh9b+PpGFXasr5v2n5bUdOruXESvSsMLGUe3a1qfpweY0FfpVNt14PKbZfOyjjbzDsmufb66YD15N99+Npu+hYXPZbVjZGXk2Nrmxe//p8oJ2a6gm0ZdRI2G3+d18VNUxtPJ2Yaw1TYXazG4wK1am1o1Pa/ZWX03UZKhsvilsg0AGZbb2L77e3FjtqrY9mAIj5cmV/Rsr5k/UAHZWJPjZ3H2jK9pnttQ7P6wtTlSnBjh2xLjcetQR9sFXpFeP6Dcs1qrKZwuWVyWB3/tcB34m3F3a4ps0utXuePEJC60jaGkbyjj5G+ysPqtBM10SjgcUjq9a1pGjA5K2Txsvu3PD/YqHdgxrnYlS5BS0tLXZnB2lTGwY1r8fuKskWXNJ3/Subf3qcGF8SE7bhkY/nheAEz4pzatvx+rTxQEpVRNv1/oLKUkKe7Cq082WJQRmNC+sbJ0ubdLE+uX9leG6xFBV7eRbzWT14S3NZFzLCWkrHt9bHaqJC/LPfqrXr7bHSSg5FvsGKBXKwJi6tSOnnboV61CxH1d8pyGGz4/ueGV6wfocKWQYt7M3016gFHqVj79f779DrQSR6cX2h+m2Ai9RWMmLd+qhYqoBwWXzav1ibUZESu38ummxNJR9EMRRjZNGdUtWqF/M/Wfq98PlyCcursWoX+pND5KqMnpebhsbEkhCHFY5a13uKw6VkfH1q1rtYIbsuCM2WyFbC1kGn/C93f1avzKQE66oH9/RbM/fpRUZuAG4qbS5aCCOpG33s2H7QE9h2WlNR+5ATP9rWtr2x0qVyIw76skry1JZKE5gXG+OF1cgwETS7OfWlbZ02qqMmZv+SG3tz5cIhEIBFlfS3VcUTUgSOhbMo+kEH8f4WPpzta4vVYLlP7euPkkWCYVCMrdza/80aRNHN89YVktUfOT3H1L6uLs2wf4bcmdpE3I9vbhcITWhi2qdt8zfQxMWFgPxupW9p1mUgqSVBBFkaO341hzr3UC0F6bmfpgQwzHfOzO6jc5ECYt3doIEuzNiXWqJp7orFMbUrVqfFytZB4GScu14ma9QiIkE0c1b2ud3/Qgsveu9ZuCODy7ChNTo0m4lksT61f3RUhWOIdcNDseb/jTtHTk0wkSwDX5K86aVOh41VlhK/wZI2w3CTaXNRZdd+4JUbF+Q2gz7WezGDl+QDm63ia1m/WJXoi/Pw0N4e8C61p7B7sIozWwzWp0s1SSpz9ZMg0neh548nhwhclK0LrYk0r7bx+a6TCRxbQuWuULaEvIkztL23PR2oDQM49zyCmk5w2WXkjbUPEl6aTAhpqWN7eDHHSdstnTa3iS7tJ0wmKVGu3jSOlMXg9ah4sj7L63Id5ttEKLqddrhu4Tn4SDQbkW4kCuQhsak32kaUKst6poYdGQRj0uq4pKyS57OvtGvdycfP2oAPyltZw0+bTUM0nZzcFNpc9Fl97QFqfMVwiZt98b3F1sSqKkEQaruju+fKm308wEGihRoh0iW/mBgqCSGoB1r5+/S+z5SVUxifKgvieVSs7Z2NPUjfAu6z5i1RTROW9Yqw2kn/tjqzv7GpONZm8lR2lYss/l+SNklyd1nuOyeQ9q29XVxqF5k6LTxNN5J2g7JG7IuPUZ2u8gleNU6eFfOOgjBlSu6haZI1AxcEZmSEIGGVxmdEhMsoaZnXF74gyXrcFkgQcrDk5JD/aj5Ho/rXzFi0dREH1X3JWmTpLZorM/u+FHvSpDVMEjbzcFNpY1A6sYTkez2s0cgaduaKo6JioikCfY/RZ5YpC2u2WzYeFGcFJpcMTCl/3yqtJHSpDaLfnW0ND32bqdaqx/N8scJccLDlf2loYdhifceze+t9xX4k+g5A1rdywcZUTktr1a3T5U2QhxTs3iwMtp4Oy6yaea9Zrwy0P4WEVSxXJYSQ/clLMAHGzB/GG/JiwxSNoxtqbeRtJEyZRh6NzqlYS07mnoRGRogOY+0vZnta8qIDn2yaF3vyZHZ9toY0hZQNKPWL9bnJmQ2zK+ZXhaqMPZBCK2b2NodaciPzWkd1e8NlwZTw5ve/Ua30J0dGxqV3T5uetOW4UOt3htWDxZ6yuLDglJr5tZNU/mK447oV3uPOsI2+H5Z/e/VU01x/vi9/i0dLEhvEO4rbYQLBuL0XpvDzR/TNcEkmzyxSRsmjrrbs7Fq+TzScqd08PQFKTIBD8lpnV8w7C/NDBRFiIU4sn7FVHkNYwa90TzaURZKonUchquy2lZWzAcdJTUdpy9ICUIgUmTVDmvXLJ+m+h7G+ghsBr8UuDhyY/sHE9WX16bGRFKe/uT56nvDa2tJUcfs6Qbi55A2y0pNYdPAyrv54cY4+lmfrNKGiXyiK0enNB9X58cq4mW0zSzbIGBCv5TmZ692Ner1zsp4Kf1UKswvpeq5Zs3yWafTPKtN8UXfWQslUVWdczuanR82Vl/W31biOMbaEdbBxxS5rYsfjDv7bQ2D8zBru0G4tbQBF4jjXtt1gpQqwyPDIyLLBsy6+YYwV+77A9wBkDbANa6rtEnSHmt+ML/5YWmqJysQO5rhAu4OSBvgIhjXy/npKtcC9OgZ9IAbDkdw/RoPfDVXXtrAZRcAgK/gqrvsotvNGEEAAIAvgIm+//6D69IGLrsAAHwF4LILAIAbcuX32kDaAAA4PyBtAAC4ISBtwPlwG4dewL25AdLmE9f8fKyBGaeQpfYsbluelaeGZ7WPG/fGKsNsvonfhG9Rr+W1c9AFFEqVQpX28JX1AtpwiQglynibRYodMqhk8kq3WZL6bN0yxowDbo3bS9uZLrtxLSb9ZKW/gC8SCKJbLLqxCiWJFQzvr3dm0sYVdt9wgs2xltVg9sjI++iHjVSQ9Iu717W0aNyfG+vMj5CiqpElxv5YU5V6e39zZbYuHTnHImMlIrRi7lgmZBn9q5aVCtsPACTJTWv7UzURzF4gxKr0huk5ndVgNI91lETQXiAs9bI59IZUreiWn9BetRJkVNubKyUw/6JpnXaosmpcv7U92V2GDsjm0Pt827G/dgf2PtNev83kg5Bl9r7VjpU7t5aGdQAJUpH0YHRS/WFlYaIuK/joUxhuqm6d2VpfHK88tCmWRZU+njTpDabRp2VRvugMZrY5oXXL6NA88+7b9gwxdVKF5ncNr74zbr+bH+vICqbrBdwNd5e2s112k57s6Ibu0S7VRGStRjf5IIjEcg9/6+5gIBHEdKxlNZhVBKgUoQ+eW96gKZhS6S8jCNI/q3dnZbg6Rk6mPdrQrPekyKgjx9etfNqYeuTFIaPq13Wa/jSbB5k4zFHacCKubvVgqjaSikiSnr6yLN5Tsv/gX5b5fN28WpuklIYWd25ax6vQ9JOlXjaH3qCKpUNroGPzDOq00G8ZO++F8QPudqutL+6Hsjr0+imomWZS9dy+EvVXpfCXUrqT0vlGM1auokbVN++p/n1PDvtDHlgHMKh4dmNtKD/cNyR/cN68WRND0p/Cp43p1iQ/Xmzjhm6jO5nSWVlay7p1oadMGVvctmxd6rjty9ZmsUxBtUpVMLppmUXNCwiQSXAyoHTA9HawMo7wiy0de6sZLnHpgRLANcNNpW3cdLD47F6IInX+USIpYpcDwiZtw8X0zhERWYekLZBV2ggiKKv9+co7/S49bdleLA7G7aYXEbRvWlBqdna83SvNaUGK/nSYOLw21seRtLRZh4qVVAFSFp6SlxXuR38GJ6UNEUjVYmxIFLds7PUV+J1697I8t33zQKc39nZ3VRXE2vbCmPVK4mkbS9vNPiIel8sV4adKm07dlYCcivGAuIKcxMDDuk54vSEYC1Icj61dsU48CM/qe7tGzX9PscxjHcCSqQOHaeAnZGPpaLuCUrQ10YQkDa0xs+jJqSRrWGscTJee2mbGgjTozuhbo/n1QP9AY1VuuOx7n/3Ad8FNpc1Fl10XpY0MLGc61rIazKLXTtImK+rdMj+M9LJ7yXp48ES2WZt1qESFCuBCIbUitl3/TGnD5XfG9paepC8ZX2SxPbLgsBifK/ILScyuaZtZ2PowXIaeM8Csl9Wh9wxpS6RN2DERTyBEjkM0X5Y2ghCFPNjULzR3G3YeJZOnjT/rABZPWicqlF72Nt/i8IVMaaumpI1Wq2xa2qRZI1rjQNqhtDHbzJA2oYCH+0elVTb2j2zu2x5MwWwecM1xU2lz0WU3tsmon3pAP6BPnPDYohsro87y9J4Pmr4C9FQnWV6nca8rWypJ7WY61rJalSFkJ6VNktlmeN+V60ugCVpwTFJsoM9JaXOEkrZZ5y15We74pnpoozcHOZGdgiw4PjFaKRbyeVx+XNtrbf8dGYEx62V16JXfndWpu5OklEgpi8b2V1qRQa6jTJyERdqKnaUNI1RVo1u6jY2nceSpU2bWAcwbsi63pqKekr6hCSmRStuCdH+sEom1OLJpxrJeGWazKZ4rQhqNK4qmdRsd8ZJT2+wkbaRfWHxSlBzn83kcLOuFVtOTzEgBrj9uKm2Eay67koSnr7Yt/dXZCXe6Jox7w8WB1PXjlzO6bla3FiXnoWcvvciWY6SylOlYy3plIsRpLer9GOQBGxksJwnSJ61zR7c8dC8l8l6vQbdOi8hp0kb65z7fS7O5/kYcvivNatftP0kTnzb9oaAub41xsfZ2dEjc3SdL+wtNCZTWsNTL5tBLBlYMm969aClILBmet1geJaMvHJgywerQS7dZltX3IQVFosKD6McYUuD++SMfF5ri7H+ywTqAisLpTdP6o8Kk9AdTy5ZNaoJm22tbm+srTY0s7jcb1jriqPNBnFC/ap1/dj8ypaJjyfrqcfIZcowEcdsYeWg+LA6tG7fs9N9PCwxLLu7f0s3Ugv+CO+K+0uYaIkzgzfHyqF7cX2xNsz25ElnC8jkcz1ueHA7/cJ+OfsASWiLxBd5eHvSTljAux8OTx+aTQxU+Xk8RyFNXwPX08rzlxfEW0I86JQgBz+sWR8A2o8F4nofPgrFHyMB7E1byzOknvcjyoqrw8PTgeKMdNBRkqRct/Xjenp6et6hiyOqWDuJCLtUrTy8vrsC+fscF1N/eIscqhN72hh3ixTv8cgbj2YP0o1voIFrgh5zdZvYBPBx8Ly+ebUVpX5D68KnSXsefCI7xqHzUXy7PNjdnafPhMYU828Kc3g1AHzrH9mnSTkdsnwJw7bnp0mbHN3dic2ux7Er6LIrD6l5YjMz4lUaSUL+y7xz8Ohz22pzfAoBTAWmjwYmY2uWD5c5s2+PKrxJERO2GfqmFEb/SSJO7Fi2LzPjXANIGfA0gbQAAuCFXXtrAZRcAgK/gqrvsCrke398qEwCA6w4u4AjO/iLrEnBd2sBlFwCAi0JsmG+8VD05h7TBXhsAABeE2DD38FL1BKQNAIDvD0gbAABuCEgbAABuCEgbAABuCEgbAABuCEgbAABuCEgbAABuCEgbAABuCEgbAABuCEgbAABuCEgbAABuCEgbAABuCEgbAABuCEgbAABuCEgbAABuyBWSNgzDznr8OwAAACukRCphPMXJk8O9VNdu16UNXHYBAPgKcP+i6aKAq/tsBFiQAgDwFVz5J1qBtAEAcH5A2gAAcENA2gAAcENA2gAAcENA2gAAcEOuk7ThcoWcgZIRkcsDAp0jCoXSOeJ6rjyAEZErVArniOu5CpZcZZBzxPVcto4EBAYzgq7msnXkxg1gYIBzxPVBYMtlbQzLILicy9KRICqZEXQxV8WWy9YYllyXB+F7DKDsUC6ugbSpDe82EB/Mb37B4DMj8gvz7kfnCDuu5poYEXa+JffND4yI67msHfnkHGGHNZelI2y4mutqR74l96IHUM+InIKruS425ltyjYyI2eVczWvniNnlXNcHgQ1Xc11sjNpkk4t3m+aDqy5tKoE3j0fB4Qv4Amd4jAhViuscEfC+IZeVq5TLFuTzvBlBlmLsQZbG3LgB5PGdI64PAlsuKxecy+WzBNlgKcZjy2VrDEsx1iBr7ncYQG+uTS644ryJqy5tsNcGAMA5uQ4LUpA2AADOCUgbAABuCEgbAABuCEgbAABuCEgbAABuyJWXtuQnlhCQNgAAzolv3mie/OpKGybkelyqKyYAAG4JLuAIcOfgZXMOaRP7yEhGEAAA4Iv4ycTfWT1clzbYawMA4Ou49Ie8MAFpAwDgsnF3aQslRPmEqIoQ3SZEKsa7AAC4KW4tbdu44Hc496dD/gXnruECZjEAANwON5U2JYH9IyVnZuNP//TPP/3mNz/91V/+9C+/++m3P/70F3/xLG/iXzcc/EHuIDOLQhzfvvD6B+2LCtvzvnTrnVRQmjm0uXtsnGKYqSXleU81B3ON8ShLHFo6ubf6rCCkasVwwmLlBynj+AhJdrt+X7+1QlURXLm0Yd5T9+YSZMDdFwdHuSZNL11YnNb5Vjd01yGdjH9kcrCv+TzfhNpAypPKelb05p3p548ygkgqUjC8f9Lv5YDeUhWH5HYMLu+qN9e6qlIUJN0Yww8m/Qjqe2jdhGX9fjhByksGtx1yt6ecu3A61CDotvdXu7MJn8wnGx80W+vMMg7g+t1P800JYuf4SciQ8pn9L5SxIzXtvm3PEDPiLkAGvDIemNAHbRurr4c+i45Pg01qNFBcGlHYrds50KjXe+puq1w4sdFxLMvM+HdDHP1olu6IafvD0uxwRZJcmj2ioa8F/YuKAMaDPhkQsU2GQEax6R10EYUw4heKm0rbOs5HM7Uf/+Wnp09+8iPRa7nkp45WSuB+r/7977X86vdqd5lZFOKYxy8texrjou2uP+1aGxWUpg9sbk3eCVIplDT+UgIX+OVPbpjmkEdm7vCKfirHX0D6+NMFgvTTDZHohZL9CpHcbtUaRqfMJBlcOq599lyz0ZVFHUfqr0S5s03RVK5cRhcWJ7e/0Q3ccUgnYxoNusmHEbaWKJX+VEEyIG/wjXahRxme9WB8VzffFCnGJH5KVECVNteSoaRLot5FNk5ZdgcfZETm9Uyb3/YWKFBjdHsa0zuqqeLg6hdbq+WhBOl/t8+y3ZYdZO+vws+5C6cTVLGknX31Yq3XJ613fmT8uWmVWcaRkPhYhVjIjJ+ADCqZtLombVhMTJAEcw66Ahlc3V0UGXA4Vt+E2Mc/AA1d+J2hV2Z9620FFZSl9ixumwJ85cFpj0YNe2OVYc5ZDOizcZEZvygKWkeflMfLGPEjxJFN05bN2gSlPCg+r0OjNc6SEl8F6lqQbqQU/dPISDkJEVWvUzKK+Ucmhfnjl3xflztKWxCB/UhpWZD8p47HSNQGen/6y//w08sZ9PpJyx/0/j+/9+jf/A91W8xEwnYymWefDvz/7Z3ZUxtfdsf/jlTFbNp6k8QqQMIsEvtus++bsVltbMDsBowNZjGLjc2OBNoFArzBT3jJQ2ZSk9Q85CF5mKrMkre8JPMwlclMKgm5t7slWlIL5J/zczC+rk+5xFWf7ntP3/vtc2+rT7+SekibbSKfkuA4A0bCN9ur6p4dRYRmdawdTjcoMTCcCOZbwjRzQ0F/9t4/BKrJbnfriDKu6clyT3WnZRtKG07Qtua5m9HQFh7Cl7QZp+oi2WNJgBkpu9ZtcIwWUTgmEseUtfe1ZkYQ9N4kOBm/0JJE0p+Beioblk0b3QkSESYmrz1ybD8ooiuzN/pwOZZyl7bdnY50gtteGiKuZv7F/fxw70Y5AdJmeNrV/NSS02caqWse26GljQpPrhub2nxjNOrHOgrpgIVMbNumg9zjsQpGx0FD8u8bjqe62rftP2hXZm5khFPRNya48SMdMsMtQ5NK7i9a9h26jZedZQkwOnaFvftrDXHsbzVh0GHfvt86YrS/XZrqzo056zecIGi9lYgxTWZKwjT19+dtZotterBBEw5t6cDWOLH51rR3uLowXHQVBsh8MPvB5oym7rwwkQQ4kErrspmmakA5JhEldlhBJ/GyctYkrqxzfle3Otd0Y5iVNtqBIOJzOZBS1IzZjh5VQdEkybCC0TeMgoQlN/Y/37UdOLSrcy250d475yJL73u+s9Nf5HMzWto2G66CpojFeH6v6ZgimKYRHtImUxW1TWxb9t6uPHtUnRxGSpOaltzzodKxvyz7wRoMAz/pBq/LWFtZ8fix4Un3pu3YoNf212jgcelwlT6PROyNFTh5kmV2bOxPPZx5+bDj1uD6snH3SWumd4U5XEZpa8bokO0f/wH+/+t/+p+tjX/JTvuwoX1iOv51VMzJz/4alA+Kgr0NSUbadp+XKzLvZcvcpO3VR8veezPAvt+Tz853CFxqPdjtyiTdrz8U6LXeV6pToJq87smTm3aNLWppVt8BI22MrXnuFseWX9qsBx9gTQC22dJwUCjBYyv7Vg9nxkeaq3OUcs6xpAkLrWpnvENevbVhetmRCF0qzXtwaBoroyvzrv96xHybWsaVtr1P1n36EHs/LHakuXaIi0IEQhFxWh9PYNS20KyKadQ9rghX3prcpaUNF4QEBwnA6MDkRROOjb58WEirc7fRMVoayprLcjv1x5O1CtgidfeSfY3VCEJZO+9gBJrRWUIcHBQcAmUCz+uxOIZL5bCQ3mDRvlqrckobHJmGpgQJOFZ0/Zppvce7wgAqNApEWNFZvXdzmUAVRm2yjIEV+2JZmAhcMGRlC6atB3CHwEV2C7ycEJKw8mcm3aD33pwQisL+ua0j4+Z0ZSLoMNKs3n3jWNmcZW+oJDqhWWecb/YyoZEV9podw4XguiLC0h9sMNJGOxA2/9SBGJX5YH13BXwbUTyps0zStpl3No+n62MJQiIRBgUHh3junCYyPjUlLZ0hWZPfOPMqgxZubxhpA12ClEVntL7U2V3LC5S7tEkkgsAggQDHxbimZ8m+RLKnA1ffMdGXaucFklbGwscObf81l7QVjh2bxkrguSZy75sd8Lh0uEqfRyKm7qUJDENZevvG0WAh1b29Wqciqfi22d0X3hXmcBml7RYmhKL229/C///5d/89+ejn1S3/Wt9w8oc/wJKf/wz8P4IJvQ1Jl7RFEeuDhTFuE9K5cjATjQJEhUqd/YCKtb46mm5MdJ8r+SNtb3vzqZs3C2IIKrv/1edKm2m+LUHBVCacPTQuFAQLC2/0j60f6WZbkmTO7f2RNvPhQIF0fa0nLaFlhjMh7S2IpQ+hCA/1FZvwAKXteWscFVmaLKeUTdO0tFER6XUj2o1dJlv0J9CtXdt7SZvjUWUk+CxNugsGFVvuNSENTaq5v7DrTCp9PFrm3AOJe0nbZgMYmSQRXUuPEPfasjAh9tW2piTcFbXJ8h7q7DOFoXADWeGk0QoXZ2lp0zNWMlVuURG92OoDQhISLIgoffJWP1nnkraazq7CePlZ0iYvHtw5GrgOfe6akDIOpNcBTx1IEKltG8At4YVjb7RDBbQ5mdS8adg/nJqc7rnXlBsn89w5Tcmjt8bdHzi8Hy6N5F08gQ48+GQ7+Gh99clq3e4pUTq/8pA2UlXYP7Hx1hmguSbR/BPSIk9pc+iZISDLAR0Aro34kLahQmn39lp9HCn9PqWtlInabJYTqfjk6O3JH//4++KSX3z8q7/f2f8PTHLyfB582yY5U9oUxLxxqqJ21m1CKmUuPhKCfYCDUBRP1tQ/1ZkXKpTci54/0vamL18qFIlwKF6fLW2cCSnGCaAwmD9ZVjZqPei75uzTfkvbnU1rV2XbFO+E9HMeWGGlTYqJMYxSMdImzezZMa8+yAwXBgRIrtPd2rW9T2mjVYkt95A2qbppybE2UhEQcCUgOLvbzNkDn7TBoMM1QtxrywWMliY16fpTlgulrYiWNnnhlNH6GG7DkTYSF4nF595wxxS1y6bNXpe0wdzuOBF/rrQVwJmBU9pYBwaC9ro5ELvavK1RVAxb9ruz2csPJhRQsWl1rf2Di6/NumHPndOIQ64EBjoRJ9TPvQ7FXGsObtAO1LdnKaMi5ZKQQIHYtcbiJm2U8saE7c3j+gRwRoKudnHWBz9X2mAHQNLmE4LAVkRBJ6Tw5E9/OsnPhB/Cyf8mxb+MzvnFz//ml38Rtf6XFHNl9sYlbZGVz/U7YDbhitoWalM0SWqaODD2ZKkdenqCIyFTepfs5rtZcE5E46+00X+6pI2MVKmT1Cnmxe5sjSYpkVnJhtJmnmljj6tWs1Hbwr1MDVsSHy0jpSmtq8ebsz0JmtzKgS299VlZtPNYbtKGU/G35+0H4+0lWVWjz3beDBdHuKSNiGuftx4Z9lxR2/5ARQp73CSVs/JkYtP65gi4xHs1yolT2ujDsdJGpXXuWLae1mbFZzc+XjB/pEcmFRkH2qt5YD5+ciuDPYpPaQsrHDvMSYaVSVSFk1Ri44tj7czdmPisir61TTstbVS4MglusGzXteclgw+yL5M2UppxZ9Ox9PCWOqdxYM2xcj8bbsOVNt9QCcDPr6fulqcUdDzWv1++B1eFZBmDK3ZrvDJOU9QzbT6crIvzNoRQkSUT7/SLA3Ga4tbJHQOMgFgHxsQmcRxIb0xEmvccy/fS2JhLltGx+X55pCFWpc5tfaGznXNrO75hUWderIj2KdAcB3p8RZoN8w05TA9JoGLqH+8cznaVqlIrO2Z29adRG3D7cl0WPB1JibGgRB4dDz7fmDneGruRDG2TeKWNpDRNy8cb03fV+bcf6Y8X21OQtLGEC0P+hAtOdm0nf/7Pk9/85uRg/+RXv/r3f/v937UNAGm7GizwNmFwSRsZXj5i+2Q9XWvjrGQ/a5UmtT/d2e/Lh8ERgctzhw+MLzqcO/lR0kZFV8/w/PgDSBvnXT4fpMxa22kJ8+MPMRaR3/RYZ917t/psvEYjk7huEbpLG4lLFPm9j9deG/TawRupMgnmkjaSiK2ZP7btu9baTtvL+fEHoax8+vxezhn31PikDcelmuqRrU37x6muivpxOuigVPULp+1lj+JL2kiMUFWZX8HXVpkna+HlRFXZ/cxu1G/2VDb2MnFfWOWo+w2HOOrLpI0QE8rye7MWs8U22VOpJOC10E9pA36OyO58uHxgMpked5ZE07+mJDA8pmjAtP9ev60dupURKuG/uILGYpHX2md3dGtzjfXDS3QExDjQYts5daBze+OBqUXtspXINE1DL/ZtB8dbmy/vXD/nVm9O9Y2CJJnY9w1l39KGV48ZtvY+wc55YCMJLCq/d2LznXZluq5qYJFzV5eQavT7cDObBczoyeQOo9ubt1694Zc20KUVRbdngPMt451FClyMpI0FBG5xgQFwWlqQc7K6dPK3vzhZfnFyLft3gbKMKwJfIRsECwkKDII5AwhhSOCVgCB6IVYSTM8FnABlxAWgSADvfAErTBISEMiRy4Bg4RkL7SQpEgReEUjYPyWCgECBCE4nQziHCGQXgMG3p4UBV0g443ArCRLSl1wcTHQC4Z/BwSK3yYUkSOTWWFwSEhIUEBgYGCIS05V0VUYiCgY7DBTBW73CEG57A4JOzcXB4IhntA4XBQJXsPdVcGFwYCD8QIC5MjjmlWChUARmQwJQZ4w+nMdRxKAyIWK6/rgAVPN0z7iQ3SwEriQQcG0RtkIgFrImhMi9zldgHeidwBbBOw9B7Nn0BS4Qug9y5igBgeCEC9lZOQ4P62nIx6mfhSLnjB4DU0FQMY7zfQDOJjhMUJBIBPZBO592IKzJqQOZjUnzcsdVzooBgQlCgmEPAeZCn+rJIhELxT6moiwcB3oATyjr6gCSbm9wEDhosEjsrDMDIWY3C4Q37jAh7KUcoK0EtkhEbw87gPPQ0Al0k0V0dxILg66ESHBBIF0fOAA5R+HhkkobCX+cIdGLgv7MeRrhvwjBvjgYw3yG3wjEN4YsY/amj4nt987llTYGEL5JJCKRCFzAROCz9wYIxDcMFsIbUiEuv7QhEIjvkostbSiBOAKB+FFIt+davrJ6fIa0XRt+S/8IC4FAIPwH5raoiuZ/xOKn4zOkDU1IEQjE53Ph32iFpA2BQHw+SNp8k9U4+mR5vBg+fI5AfJ9QmffWZkbvFSS4nrT5VkDS5ouwVLNxtbMmI+qMhwouE1JlVXaMnwnRLi2X2QlEQ2NZUph3+dkQYYllLRM2k03H+/D8BQZJGz/yjC7ztfAQAfOTcZiHls0pRuf/gnlovUwAlPMJkg8/YnjkDByYJmsjvMo98E7fKifx/uVXxr2jjUX6WWhKWTZuGKs+52ecMBfuem+K07dSTedPn/XUi8/InesnpKpkxMI8jzVe6fXtOXCdkNGz+yVn80uJqHlk50+Vej78tj8y+TCBiYQCMqXLWPTVZeLLQNLGBxVROWw5PH0MEz5lyeaWOOOROgCT1fb2ir/5YLlk9e6bxqvOSPHI4kzfqohRMulbKZJcf3AdDybzx16BnhvfsPh8uFB+3hM2qsY102qXxuVbgvzps5564ZWq6EuRprevv4+Lhf6B2Z68NzgbjhOkYYovOZtfSnjVqP3As9BPfNj+6OTD8JlWKm+6Me6bCtyQtPEhL3xi2H1yWsInbTF1L8271sFKJZ7QNmk9nKiNZU+8NKHxBWcwUFHFY68My8OFGmXtuN20ej9FhpPyzDvrxxuT7dHq4rb5N4Z5+Osbl7QVjOwalzoTz3w9TVjm/QXbYajz4YquxX2D/XBtob99UdumISS+chCFF/cbHIt95VcjIwZX31oYaZOGRUGtTOAkmcHTuqzmtdF8lTz22sjLPWtHBuWqc2Z8rKvO0uTOZ7t7YzfzEosG522vR8qjgRNK6Ie34a5cz7rDDx+2FjpTZcF5g1aLdihTjkcogHBktbw4ppObw5zsZ44cmBTg7HTVL/c+Wg8+2l59Av8DjI/KgXTWzh5tPmlNU0UWDZrNm/1pMhz0qO2xEiokau6WUkgUDpr37+dKeZ0AcT+bhKptzr5zL1sKM6C06MxrnYle1aCBz3tbDM8bU2Xh18aW7dstGpLpzFb9s5AgQVju6NKe+XYayeNAJj13fPOE/TUnQXxk4ej+xmQLIY/L694y6EZywnh6Eb8tm5g+dpmT64kMy+vSOZZHGmJSa/vWHWsD15n0AR5dmtMi0vT05lkZHy4cSNr4gMm5dvyQNsNwOi4hMGnhuGNrqIAdEh7SJi8esLwbyMfFmEQS2zJr32pSww793L5ZFwvTt0qu1t8fbssIdUkbqbWt1qkkmC95gsD0rY+nl53pW+kntgOuBIVQM00JuO+nnaVpvUv25cooEYZLrrbqzYy0sfmgpdxRnf/gneFxBZBO+pnnIBEOVYypswQ0xFnnhOZN08vbSpiOHMseeqt/WBbqU9pg7lycwJncuQ3xdCY4r9y5vjlf2mAwqyzt2T6mX24Qq4BRG5v6VQL2T6d+rVESuYOvV7uBOMkelodR0ozbm0dDRVJeJ0A8ziYRXfnUsQ6EgE4Yt9Cc4OMRdyhtRiCgGIYTaXe2HBO10UxnNk/AaTIovK11jNdEezuQrUloBYi8TpPlwV60fy9dQhASLLx2fNfUnsrTi/ht+ZIP8yUQpqXNvUtzWkSZ5m7Fnun/CwaSNj78lDaTti8VJrOVFtApWdiXV3kMBnp20JUD0wRS0Q0TduuddEqW3rdsf1HJ/J4QEwoEAiBkQNqsB8fG3R+W76bg500cCEkIkBwmfavzrUKEomj81qB2c+cH3epUtZpnOibLHFi1wwTC4LPqhvuElJRzR3VoZv9L+/ttnX6ov7syM1pKJ9H3rnNyh8k0y1zMqfRuu2myNpLyJW3wA0wxSOfOZWf0fkxI5YUTW3SqdMvBJyab+Xw7zJ3vDRzJVPodrYN9KQQMadnUr0w2pJ291do4KG1r97NlpPxheTgly7izCfPkOHfi5gSIx9kksfCyeb1xQqqB3aBe5VkHJ2yWHtoJ6e0bjqkGFdOZTWOlcAMqQl1QlRUv93YguwePSSX8k5MI6MB6J42nF/HbOnGTNp4EwmzSJ26X5phDaUNR27lcdGmTqjsXT3PA4zCp8fbxRA2cbcky+pftK7VKbj9g+/GptC1yBoOsoM/ybqiIlsWE9lm77mYCSQ9v7U36XoQstWXo0d0sNmqrDMUlMJVgr8/3qsTWzC4t3E2mfRLfpAWRlxpOKuNrpw0D10O1s43RJLjmTutdg4QDnbl0henf6nZn1MZ+6zaqY5JzUuJkmEQoECY2rzkmG5S8dY67uWFauks/LiK/NvxWP1IMnJA/cmgYK4f1Dysdsh49KJK7SRt3sRJMGM+TNmc8RSTftbCJhc+IZ4FUaZlsXxBZ7vAGiE0iJAR82wj4DMf2Z0sb92wCCCqzb7979WiiOspHyIazyf4nqmHCTrrt49VRTmkr427p7UD2qzB3eaJ70YMSENPjVFhcSlaqMpS5SLidEX5bJ27SltYLZLEKvgSHUFQ9M20NuEsbJ4EaAxWlG3D3zEUHSRsvFJinvD99hSgVlj/8yrQ2XpmlaZ45MK/cS6Rw737Abg9TpB7lMfl4k2Jp2wPD0mh5lqZxYhf2Y9DdYVLc9zCDaFb1vefvDLM3lZzbCLL88Q27vj2NP6u9K31rmlrNpG8FA0/dvPKsL0eKYUtrA+lh0sSWTe0w95LrJPRaj96xOFSblhA3tHbIrLUxWU+T1OmurKexYUT+8GvT8nBRarymqH/W9rrvWqirztfT1K46kwntc7t7j1qKMiqG52yvhgrh2Isontbt6Huqskv7tgzmp0VRp+Gbl7S55c49c62NvFr5MPzcqMFd2lypX9WqGCb1qy9p83YCu0OPswkLMTK137yzUBLpdfRT6Anp9kpXdXZu66IWXs8IXmnjdSBEmtelP06hsyjHRVEkFZo3tG9afxKvzqsZtZh0w1lynl7kw9Yz+TDMEc2TQPgsaZPGtwwWhJ55gi4aSNr4kUSWPO0tUTnVDcNkqbWj2nXb++XZoYJYMNXxLW2g6ysrTQdwBmSzPYG20qSKofU12/sXk/dzoyQY3EaMKQrbJo2Wnf2FsdupoWKcI20EFlk88db4rN2rVjTO9K3G/Q+u9K2zL3vVJPydSn6fbtN6qFubKnO+rc4NQixPvf1w/a15711VxzozIfXOetqXL8UjcpomDFr7R5PJ8LAtJxwuhLF11to/uOoMKhOZ2z22+tqwtdFfp6HoZT5CIktqeDKv/2HjxZNajQze0/Albe65c8/+4QsuDvYdJTlxlzZX6lfLgYNJ/epL2ryd4Nynx9lkCpP1jyvOyDPMdInt4abyQa3RoO0piyPhCgOftPE5kDluZP6glX7Z8+ytePoeZWJ5/6p1783SzGCBEqeXYj17Eb+tV/Jhy7NWvgTCPqVNqshtf/5ORZ69GHrRQNLmE0yiyKu+05hGr0cgEE6I6KqFHPnZ49zjavftQiaU3msoSKCEZ2YnvoggafMNgYtEQuGZdyoR3x9UbPXMkfScXnFppA0EywKR+Mxc5xcUJG0IxOcBX2Fx7lDnJPtH/L+ApA2BQFxCLrq0wfc5fe2nfxAIxLcPIQ6G76XzKv9J8V/aiIj49EuwYIFAIL4yUkWi4qtP+PyXNmn+A5RAHIFAfC4ogTgCgbiEXPS1NiRtCATiR4CkDYFAXEKQtCEQiEsIkjYEAnEJQdKGQCAuId+CtKVFR0UpAOAf84FLjFdJVFS00rNEoYjxLPHfNiraqyRKEctTGX9t+RoSo/Is8d+WryHRyjivQn9t+Rry3TlQyfY6Lv46gc+WtzI8TvDblqchKmDsVeinbSyfLV9leGz9dsJXdWBc3fOLLG1EpKbgWkEJTWUB+4FDUb1nSUHJ9YqbXoWVZYWem/ltW1LKY9vgXRl/bfkacr2ixWszf215G1LScNur0F9bvoZ8dw6sLi/1KvTXCXy2fJXhc4K/tnwNaayr8trMX9uqWh7bWp7K8Nj67YSv7cBYmKDpq+K/tMF3hYnFDELnBy58hSKBZ4lYKPIs8d+Wl4tky1coEoZ4FfJsxl/IU5nvzoFCkWeJ/07gs+Xl/9hWIOIp5INnMyGfLV9leDbjLeS1/coO/PrPaH6GtCEQCMS3ApI2BAJxCUHShkAgLiFI2hAIxCUESRsCgbiEIGlDIBCXECRtCATiEoKkDYFAXEKQtCEQiEsIkjYEAnEJQdKGQCAuIUjaEAjEJQRJGwKBuIT8L1j5yaXxYEH1AAAAAElFTkSuQmCC>