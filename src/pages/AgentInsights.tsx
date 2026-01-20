import React from 'react';
import { MOCK_AGENTS } from '../data/mock';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ArrowRight, Activity, Brain } from 'lucide-react';
import './insights.css';

const AgentInsights: React.FC = () => {
    return (
        <div className="animate-fade-in insights-page">
            <div className="mb-8">
                <h1>Agent Architecture</h1>
                <p className="text-[var(--text-secondary)]">Understand how the autonomous multi-agent system processes threats</p>
            </div>

            <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-xl mb-8">
                <div className="agent-flow-viz">
                    {MOCK_AGENTS.map((agent, index) => (
                        <React.Fragment key={agent.id}>
                            <div className="flow-node">
                                <div className="flow-node-icon">
                                    {index === 0 ? '📥' : index === 1 ? '🕵️' : index === 2 ? '🧠' : index === 3 ? '📝' : '🛡️'}
                                </div>
                                <div className="flow-node-label">{agent.name}</div>
                                <div className="absolute -bottom-2">
                                    <div className={`w-2 h-2 rounded-full ${agent.status === 'active' ? 'bg-[var(--status-healthy)]' : 'bg-gray-500'} animate-pulse`}></div>
                                </div>
                            </div>
                            {index < MOCK_AGENTS.length - 1 && (
                                <ArrowRight className="flow-arrow" size={20} />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <div className="agents-grid">
                {MOCK_AGENTS.map((agent, index) => (
                    <Card key={agent.id} className="h-full">
                        <div className="agent-card-header">
                            <div className="agent-icon">
                                {index === 0 ? '📥' : index === 1 ? '🕵️' : index === 2 ? '🧠' : index === 3 ? '📝' : '🛡️'}
                            </div>
                            <div>
                                <div className="agent-role">{agent.role}</div>
                                <div className="agent-name">{agent.name}</div>
                            </div>
                            <Badge label={agent.status} variant={agent.status} className="ml-auto" outline />
                        </div>

                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                            {agent.description}
                        </p>

                        <div>
                            <div className="agent-section-title">Key Decisions</div>
                            <div className="agent-decisions">
                                {agent.decisions.map((decision, i) => (
                                    <span key={i} className="decision-tag">{decision}</span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="agent-section-title">Live Output Log</div>
                            <div className="agent-output-block">
                                {">"} {agent.exampleOutput}
                                <span className="animate-pulse">_</span>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default AgentInsights;
