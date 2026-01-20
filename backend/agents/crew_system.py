"""
CrewAI Agent System for Arxis SOC

Five specialized agents that collaboratively reason about security alerts.
Each agent has a single, focused responsibility.
"""

from crewai import Agent, Task, Crew, Process
from typing import Dict, Any, List
from models import DetectionSignal


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Agent 1: Ingestion Analyst
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

def create_ingestion_analyst() -> Agent:
    """
    The Ingestion Analyst understands raw security signals.
    Role: Normalize and contextualize detection output.
    """
    return Agent(
        role="Ingestion Analyst",
        goal="Review and normalize security detection signals into structured alert context",
        backstory="""You are a meticulous security analyst who specializes in 
        understanding raw detection signals. You extract key details, validate 
        the signal's completeness, and prepare it for threat analysis. You have 
        years of experience reading logs and know what details matter.""",
        verbose=True,
        allow_delegation=False,
    )


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Agent 2: Threat Analyst
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

def create_threat_analyst() -> Agent:
    """
    The Threat Analyst classifies threat types and assesses severity.
    Role: Determine what kind of threat this is and why it matters.
    """
    return Agent(
        role="Threat Analyst",
        goal="Classify security threats and assess their severity with clear justification",
        backstory="""You are an expert threat analyst with deep knowledge of 
        attack patterns, MITRE ATT&CK framework, and adversary tactics. You can 
        identify credential abuse, insider threats, and advanced persistent threats. 
        You provide clear, confident threat classifications.""",
        verbose=True,
        allow_delegation=False,
    )


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Agent 3: Context Enrichment Analyst
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

def create_context_enrichment_analyst() -> Agent:
    """
    The Context Enrichment Analyst adds behavioral context.
    Role: Identify deviations from normal behavior and add business context.
    """
    return Agent(
        role="Context Enrichment Analyst",
        goal="Add behavioral context and identify deviations from user baselines",
        backstory="""You are a behavioral analyst who understands normal vs 
        abnormal patterns. You track user behavior over time and can spot 
        'first-time' actions, geographic anomalies, and access pattern changes. 
        You add the human context that rules-based systems miss.""",
        verbose=True,
        allow_delegation=False,
    )


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Agent 4: Explanation Agent
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

def create_explanation_agent() -> Agent:
    """
    The Explanation Agent translates technical analysis into human language.
    Role: Generate clear, actionable explanations for analysts.
    """
    return Agent(
        role="Explanation Agent",
        goal="Translate security analysis into clear, human-readable explanations with actionable recommendations",
        backstory="""You are a skilled communicator who bridges the gap between 
        technical security findings and business stakeholders. You write clear, 
        concise explanations that any analyst can understand. You always include 
        the 'why this matters' and 'what to do next'.""",
        verbose=True,
        allow_delegation=False,
    )


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Agent 5: SOC Manager
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

def create_soc_manager() -> Agent:
    """
    The SOC Manager makes final prioritization decisions.
    Role: Decide alert priority and urgency.
    """
    return Agent(
        role="SOC Manager",
        goal="Make final alert prioritization decisions and determine required actions",
        backstory="""You are an experienced SOC manager who has seen thousands 
        of alerts. You know what requires immediate attention vs what can wait. 
        You balance risk with operational capacity and make the final call on 
        alert severity and urgency.""",
        verbose=True,
        allow_delegation=False,
    )


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Task Definitions
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

def create_ingestion_task(signal: DetectionSignal) -> Task:
    """Task for ingestion analyst."""
    return Task(
        description=f"""
        Review this security detection signal:
        
        Signal Type: {signal.signal_type}
        User: {signal.user}
        Severity: {signal.severity}
        Event Count: {len(signal.events)}
        
        Your task:
        1. Validate that the signal contains all necessary information
        2. Extract key details (user, IPs, locations, assets)
        3. Create a structured summary of what was detected
        
        Output a clear summary of the detection signal.
        """,
        agent=create_ingestion_analyst(),
        expected_output="A structured summary of the detection signal with key details extracted"
    )


def create_threat_analysis_task(signal: DetectionSignal) -> Task:
    """Task for threat analyst."""
    return Task(
        description=f"""
        Based on the ingestion summary, classify this threat:
        
        Signal Type: {signal.signal_type}
        Events: {len(signal.events)} security events
        Metadata: {signal.metadata}
        
        Your task:
        1. Classify the threat type (e.g., Credential Compromise, Insider Threat)
        2. Assess confidence level (Low/Medium/High)
        3. Justify the severity rating
        4. List key indicators of compromise
        
        Output:
        - Threat Type: [classification]
        - Confidence: [level]
        - Severity Justification: [explanation]
        - Key Indicators: [list]
        """,
        agent=create_threat_analyst(),
        expected_output="Threat classification with confidence level and severity justification"
    )


def create_context_enrichment_task(signal: DetectionSignal) -> Task:
    """Task for context enrichment analyst."""
    return Task(
        description=f"""
        Add behavioral context to this threat:
        
        User: {signal.user}
        Signal: {signal.signal_type}
        
        Your task:
        1. Describe the user's normal behavior baseline (you can infer reasonable patterns)
        2. Identify specific deviations from normal (e.g., "first login from Russia")
        3. List risk factors
        4. Add business context (e.g., "user has access to sensitive customer data")
        
        Output:
        - User Baseline: [description]
        - Deviations: [list]
        - Risk Factors: [list]
        - Business Context: [notes]
        """,
        agent=create_context_enrichment_analyst(),
        expected_output="Behavioral context analysis with deviations and risk factors"
    )


def create_explanation_task(signal: DetectionSignal) -> Task:
    """Task for explanation agent."""
    return Task(
        description=f"""
        Synthesize all previous analysis into a clear explanation:
        
        Based on:
        - Ingestion summary
        - Threat classification
        - Behavioral context
        
        Your task:
        1. Write a 3-4 sentence explanation of what happened
        2. Explain WHY this is concerning
        3. Provide a clear recommendation for next steps
        
        Write for a busy security analyst who needs to understand this quickly.
        Be clear, direct, and actionable.
        
        Output format:
        **What Happened:**
        [2-3 sentences]
        
        **Why This Matters:**
        [1-2 sentences]
        
        **Recommended Action:**
        [1-2 specific next steps]
        """,
        agent=create_explanation_agent(),
        expected_output="Clear, human-readable explanation with recommended actions"
    )


def create_manager_decision_task(signal: DetectionSignal) -> Task:
    """Task for SOC manager."""
    return Task(
        description=f"""
        Make the final prioritization decision:
        
        Original Severity: {signal.severity}
        
        Based on all previous agent analysis:
        
        Your task:
        1. Confirm or adjust the severity level (LOW/MEDIUM/HIGH/CRITICAL)
        2. Decide on required action (MONITOR/INVESTIGATE/IMMEDIATE_REVIEW/ESCALATE)
        3. Add urgency context
        
        Output:
        - Final Severity: [level]
        - Required Action: [action]
        - Urgency Note: [brief note]
        """,
        agent=create_soc_manager(),
        expected_output="Final severity and action decision"
    )


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Crew Orchestration
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

def run_agent_analysis(signal: DetectionSignal) -> Dict[str, Any]:
    """
    Run the full agent workflow on a detection signal.
    
    Args:
        signal: The detection signal to analyze
        
    Returns:
        Dictionary containing agent outputs
    """
    # Create tasks
    tasks = [
        create_ingestion_task(signal),
        create_threat_analysis_task(signal),
        create_context_enrichment_task(signal),
        create_explanation_task(signal),
        create_manager_decision_task(signal),
    ]
    
    # Create crew with sequential process
    crew = Crew(
        agents=[
            create_ingestion_analyst(),
            create_threat_analyst(),
            create_context_enrichment_analyst(),
            create_explanation_agent(),
            create_soc_manager(),
        ],
        tasks=tasks,
        process=Process.sequential,
        verbose=True,
    )
    
    # Execute
    try:
        result = crew.kickoff()
        
        return {
            "success": True,
            "agent_trace": [
                "Ingestion Analyst",
                "Threat Analyst",
                "Context Enrichment Analyst",
                "Explanation Agent",
                "SOC Manager"
            ],
            "result": str(result),
            "signal_id": signal.signal_id
        }
    
    except Exception as e:
        print(f"❌ Agent workflow failed: {e}")
        
        # Fallback to rule-based output
        return {
            "success": False,
            "agent_trace": ["Fallback: Rule-based"],
            "result": f"Alert generated by detection rule: {signal.signal_type}",
            "signal_id": signal.signal_id,
            "error": str(e)
        }
