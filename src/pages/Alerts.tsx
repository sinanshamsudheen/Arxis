import React, { useState } from 'react';
import { MOCK_ALERTS } from '../data/mock';
import { Alert } from '../types';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { X, Bot, Shield, FileText, CheckCircle, Clock } from 'lucide-react';
import './alerts.css';

const Alerts: React.FC = () => {
    const [selectedAlert, setSelectedAlert] = useState<Alert | null>(null);

    return (
        <div className="animate-fade-in alerts-page">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1>Security Alerts</h1>
                    <p className="text-[var(--text-secondary)]">Manage and investigate security incidents</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline">Export CSV</Button>
                    <Button>Run Playbook</Button>
                </div>
            </div>

            <div className="filters-bar">
                <input type="text" placeholder="Search alerts..." className="search-input" />
                <select className="search-input" style={{ width: 'auto' }}>
                    <option>All Severities</option>
                    <option>Critical</option>
                    <option>High</option>
                </select>
                <select className="search-input" style={{ width: 'auto' }}>
                    <option>All Statuses</option>
                    <option>Open</option>
                    <option>Investigating</option>
                </select>
            </div>

            <div className="alerts-table-container">
                <table className="alerts-table">
                    <thead>
                        <tr>
                            <th>Severity</th>
                            <th>Alert Name</th>
                            <th>Asset / User</th>
                            <th>Confidence</th>
                            <th>Status</th>
                            <th>Time Detected</th>
                        </tr>
                    </thead>
                    <tbody>
                        {MOCK_ALERTS.map(alert => (
                            <tr key={alert.id} onClick={() => setSelectedAlert(alert)}>
                                <td><Badge label={alert.severity} variant={alert.severity} /></td>
                                <td>
                                    <div className="font-medium">{alert.title}</div>
                                    <div className="text-xs text-[var(--text-secondary)]">{alert.id}</div>
                                </td>
                                <td>
                                    <div className="text-sm">{alert.asset}</div>
                                    <div className="text-xs text-[var(--text-secondary)]">{alert.user}</div>
                                </td>
                                <td>
                                    <div className="flex items-center gap-2">
                                        <div className="w-16 h-1.5 bg-[var(--border-subtle)] rounded-full overflow-hidden">
                                            <div className="h-full bg-[var(--status-healthy)]" style={{ width: `${alert.confidence}%` }}></div>
                                        </div>
                                        <span className="text-xs">{alert.confidence}%</span>
                                    </div>
                                </td>
                                <td><Badge label={alert.status} variant={alert.status === 'open' ? 'down' : alert.status === 'investigating' ? 'degraded' : 'healthy'} outline /></td>
                                <td className="font-mono text-xs text-[var(--text-secondary)]">{alert.timestamp}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Detail Overlay */}
            {selectedAlert && (
                <div className="overlay-backdrop" onClick={() => setSelectedAlert(null)}></div>
            )}

            <div className={`detail-overlay ${selectedAlert ? 'open' : ''}`}>
                {selectedAlert && (
                    <div className="flex flex-col h-full">
                        <div className="flex justify-between items-start mb-6 border-b border-[var(--border-subtle)] pb-4">
                            <div>
                                <div className="text-xs text-[var(--text-secondary)] font-mono mb-1">{selectedAlert.id}</div>
                                <h2 className="text-xl font-bold mb-2">{selectedAlert.title}</h2>
                                <div className="flex gap-2">
                                    <Badge label={selectedAlert.severity} variant={selectedAlert.severity} />
                                    <Badge label={selectedAlert.status} variant="active" outline />
                                </div>
                            </div>
                            <button onClick={() => setSelectedAlert(null)} className="p-1 hover:bg-[var(--bg-card-hover)] rounded">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto pr-2">
                            <section className="mb-8">
                                <h3 className="text-sm font-semibold uppercase text-[var(--text-secondary)] tracking-wider mb-3 flex items-center gap-2">
                                    <FileText size={16} /> Summary
                                </h3>
                                <p className="text-sm leading-relaxed text-[var(--text-primary)] bg-[var(--bg-card)] p-4 rounded-lg border border-[var(--border-subtle)]">
                                    {selectedAlert.description}
                                </p>
                            </section>

                            <section className="mb-8">
                                <h3 className="text-sm font-semibold uppercase text-[var(--text-secondary)] tracking-wider mb-3 flex items-center gap-2">
                                    <Bot size={16} /> AI Agent Trace
                                </h3>
                                <div className="bg-[var(--bg-card)] p-4 rounded-lg border border-[var(--border-subtle)]">
                                    <div className="trace-timeline">
                                        {/* Simulated Trace based on severity */}
                                        <div className="trace-item">
                                            <div className="trace-icon">📥</div>
                                            <div className="trace-content">
                                                <div className="trace-agent-name">Ingestion Agent</div>
                                                <div className="trace-action">Detected anomaly in log stream #402</div>
                                                <div className="trace-time">-2 sec</div>
                                            </div>
                                        </div>
                                        <div className="trace-item">
                                            <div className="trace-icon">🕵️</div>
                                            <div className="trace-content">
                                                <div className="trace-agent-name">Threat Analyst</div>
                                                <div className="trace-action">Correlated signature with MITRE T1068</div>
                                                <div className="trace-time">+150ms</div>
                                            </div>
                                        </div>
                                        <div className="trace-item">
                                            <div className="trace-icon">🧠</div>
                                            <div className="trace-content">
                                                <div className="trace-agent-name">Context Agent</div>
                                                <div className="trace-action">Enriched with Asset Criticality: HIGH</div>
                                                <div className="trace-time">+300ms</div>
                                            </div>
                                        </div>
                                        <div className="trace-item">
                                            <div className="trace-icon">📝</div>
                                            <div className="trace-content">
                                                <div className="trace-agent-name">Explanation Agent</div>
                                                <div className="trace-action">Drafted human-readable summary</div>
                                                <div className="trace-time">+450ms</div>
                                            </div>
                                        </div>
                                        <div className="trace-item">
                                            <div className="trace-icon">🛡️</div>
                                            <div className="trace-content">
                                                <div className="trace-agent-name">SOC Manager</div>
                                                <div className="trace-action">Escalated to human analyst (Severity Threshold met)</div>
                                                <div className="trace-time">+600ms</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h3 className="text-sm font-semibold uppercase text-[var(--text-secondary)] tracking-wider mb-3 flex items-center gap-2">
                                    <Shield size={16} /> Recommended Actions
                                </h3>
                                <div className="flex flex-col gap-2">
                                    {selectedAlert.recommendedActions?.map((action, i) => (
                                        <div key={i} className="flex items-center justify-between p-3 rounded bg-[var(--bg-card-hover)] border border-[var(--border-subtle)]">
                                            <span className="text-sm font-medium">{action}</span>
                                            <Button size="sm" variant="secondary">Execute</Button>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        <div className="pt-4 border-t border-[var(--border-subtle)] flex justify-end gap-3">
                            <Button variant="outline" onClick={() => setSelectedAlert(null)}>Close</Button>
                            <Button>Take Ownership</Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Alerts;
