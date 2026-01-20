import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { MOCK_ALERTS, MOCK_SYSTEM_COMPONENTS, MOCK_COMPLIANCE } from '../data/mock';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';
import { Activity, ArrowRight, Download, Send, Zap } from 'lucide-react';
import './dashboard.css';

// SVG Heartbeat Component
const HeartbeatLine = ({ color = '#32D74B' }) => (
    <svg viewBox="0 0 100 20" width="100%" height="100%" preserveAspectRatio="none">
        <path
            d="M0 10 H20 L25 5 L30 15 L35 10 H100"
            fill="none"
            stroke={color}
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
            className="animate-pulse" // Simple pulse for now
        />
    </svg>
);

const SEVERITY_DATA = [
    { name: 'Critical', value: 2, color: '#FF3B30' },
    { name: 'High', value: 5, color: '#FF9500' },
    { name: 'Medium', value: 12, color: '#FFCC00' },
    { name: 'Low', value: 24, color: '#007AFF' },
];

const Dashboard: React.FC = () => {
    const [chatInput, setChatInput] = useState('');

    return (
        <div className="animate-fade-in">
            <div className="dashboard-header">
                <h1>Welcome to Arxis</h1>
                <p>Security Operations Overview • {new Date().toLocaleDateString()}</p>
            </div>

            <div className="dashboard-grid">

                {/* COL 1: System Heartbeat & Performance */}
                <div className="flex flex-col gap-6">
                    <Card title="System Heartbeat" className="flex-1">
                        <div className="flex flex-col gap-1">
                            {MOCK_SYSTEM_COMPONENTS.map(comp => (
                                <div key={comp.id} className="heartbeat-row">
                                    <div className="heartbeat-name">{comp.name}</div>
                                    <div className="heartbeat-viz">
                                        <HeartbeatLine
                                            color={
                                                comp.status === 'down' ? '#FF453A' :
                                                    comp.status === 'degraded' ? '#FFD60A' : '#32D74B'
                                            }
                                        />
                                    </div>
                                    <div className="heartbeat-stats">
                                        <div className="heartbeat-latency">{comp.latency}ms</div>
                                        <Badge
                                            label={comp.status}
                                            variant={comp.status}
                                            className="ml-auto mt-1"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card title="System Performance">
                        <div className="space-y-4">
                            {[
                                { label: 'CPU Usage', value: 78, color: '#FF9500' },
                                { label: 'GPU Utilization', value: 45, color: '#007AFF' },
                                { label: 'Network Throughput', value: 92, color: '#32D74B' },
                                { label: 'Incident Response Latency', value: 34, color: '#FF3B30' } // Low latency is good, but let's show load
                            ].map((item, idx) => (
                                <div key={idx} className="perf-row">
                                    <div className="perf-label">
                                        <span>{item.label}</span>
                                        <span>{item.value}%</span>
                                    </div>
                                    <div className="perf-track">
                                        <div
                                            className="perf-bar"
                                            style={{ width: `${item.value}%`, backgroundColor: item.color }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

                {/* COL 2: Severity Dist & Alerts & Reports */}
                <div className="flex flex-col gap-6">
                    <Card title="Threat Severity Distribution">
                        <div className="h-[200px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={SEVERITY_DATA}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                                    <XAxis dataKey="name" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                                    <YAxis stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                                    <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                                        {SEVERITY_DATA.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </Card>

                    <Card title="High Priority Alerts" className="flex-1">
                        <div className="flex flex-col gap-4">
                            {MOCK_ALERTS.filter(a => ['critical', 'high'].includes(a.severity)).map(alert => (
                                <div key={alert.id} className="p-3 rounded-lg bg-[var(--bg-card-hover)] border border-[var(--border-subtle)] hover:border-[var(--text-muted)] transition-colors cursor-pointer group">
                                    <div className="flex justify-between items-start mb-2">
                                        <Badge label={alert.severity} variant={alert.severity} />
                                        <span className="text-xs text-[var(--text-secondary)]">{alert.timestamp}</span>
                                    </div>
                                    <h4 className="font-semibold text-sm mb-1 group-hover:text-[var(--severity-low)] transition-colors">{alert.title}</h4>
                                    <p className="text-xs text-[var(--text-secondary)] line-clamp-2 mb-3">
                                        {alert.description}
                                    </p>
                                    <Button size="sm" variant="ghost" className="w-full text-xs justify-between group-hover:bg-[var(--bg-card)]">
                                        View Details <ArrowRight size={14} />
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card title="Generate Reports" noPadding>
                        <div className="grid grid-cols-3 divide-x divide-[var(--border-subtle)]">
                            <button className="p-4 hover:bg-[var(--bg-card-hover)] flex flex-col items-center gap-2 text-xs text-[var(--text-secondary)] transition-colors">
                                <Download size={18} /> Weekly
                            </button>
                            <button className="p-4 hover:bg-[var(--bg-card-hover)] flex flex-col items-center gap-2 text-xs text-[var(--text-secondary)] transition-colors">
                                <Download size={18} /> Monthly
                            </button>
                            <button className="p-4 hover:bg-[var(--bg-card-hover)] flex flex-col items-center gap-2 text-xs text-[var(--text-secondary)] transition-colors">
                                <Download size={18} /> Custom
                            </button>
                        </div>
                    </Card>
                </div>

                {/* COL 3: AI Analyst & Compliance */}
                <div className="flex flex-col gap-6">
                    <Card title="AI Security Analyst" className="flex-1" noPadding>
                        <div className="ai-chat-container">
                            <div className="ai-messages">
                                <div className="ai-message ai">
                                    Hello! I’m your AI security analyst assistant. I can help you investigate alerts, explain MITRE ATT&CK tactics, and provide threat intelligence.
                                </div>
                                {/* Visual placeholder for interactivity */}
                            </div>
                            <div className="ai-input-area">
                                <input
                                    type="text"
                                    className="ai-input"
                                    placeholder="Ask about alerts, threats..."
                                    value={chatInput}
                                    onChange={(e) => setChatInput(e.target.value)}
                                />
                            </div>
                        </div>
                    </Card>

                    <Card title="Compliance Status">
                        <div className="flex flex-col">
                            {MOCK_COMPLIANCE.map((item, idx) => (
                                <div key={idx} className="compliance-item">
                                    <span className="text-sm font-medium">{item.name}</span>
                                    <div className="text-right">
                                        <Badge
                                            label={item.status === 'compliant' ? 'Compliant' : item.status === 'review_needed' ? 'Review' : 'Action'}
                                            variant={item.status === 'compliant' ? 'healthy' : item.status === 'review_needed' ? 'degraded' : 'down'}
                                        />
                                        {item.details && <div className="text-[10px] text-[var(--text-secondary)] mt-1">{item.details}</div>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
