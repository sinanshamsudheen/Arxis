import React, { useState } from 'react';
import { MOCK_ALERTS } from '../data/mock';
import { Alert } from '../types';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { X, Bot, Shield, FileText, CheckCircle, Clock, Search, Filter } from 'lucide-react';
import { cn } from '../lib/utils';
import { Card } from '../components/ui/Card';

const Alerts: React.FC = () => {
    const [selectedAlert, setSelectedAlert] = useState<Alert | null>(null);

    return (
        <div className="space-y-6 animate-fade-in relative h-[calc(100vh-4rem)] flex flex-col">
            <div className="flex items-center justify-between shrink-0">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Security Alerts</h1>
                    <p className="text-muted-foreground mt-1">Manage and investigate security incidents</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline">Export CSV</Button>
                    <Button>Run Playbook</Button>
                </div>
            </div>

            <div className="flex gap-4 items-center shrink-0">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search alerts..."
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 pl-9 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    />
                </div>
                <Button variant="outline" size="sm" className="h-9 gap-2">
                    <Filter className="h-4 w-4" />
                    Severity
                </Button>
                <Button variant="outline" size="sm" className="h-9 gap-2">
                    <Filter className="h-4 w-4" />
                    Status
                </Button>
            </div>

            <div className="rounded-md border border-border bg-card flex-1 overflow-auto">
                <table className="w-full caption-bottom text-sm text-left">
                    <thead className="[&_tr]:border-b">
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <th className="h-10 px-4 align-middle font-medium text-muted-foreground">Severity</th>
                            <th className="h-10 px-4 align-middle font-medium text-muted-foreground">Alert Name</th>
                            <th className="h-10 px-4 align-middle font-medium text-muted-foreground">Asset / User</th>
                            <th className="h-10 px-4 align-middle font-medium text-muted-foreground">Confidence</th>
                            <th className="h-10 px-4 align-middle font-medium text-muted-foreground">Status</th>
                            <th className="h-10 px-4 align-middle font-medium text-muted-foreground">Time Detected</th>
                        </tr>
                    </thead>
                    <tbody className="[&_tr:last-child]:border-0">
                        {MOCK_ALERTS.map(alert => (
                            <tr
                                key={alert.id}
                                onClick={() => setSelectedAlert(alert)}
                                className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted cursor-pointer"
                            >
                                <td className="p-4 align-middle"><Badge variant={alert.severity}>{alert.severity}</Badge></td>
                                <td className="p-4 align-middle">
                                    <div className="font-semibold">{alert.title}</div>
                                    <div className="text-xs text-muted-foreground">{alert.id}</div>
                                </td>
                                <td className="p-4 align-middle">
                                    <div className="text-sm">{alert.asset}</div>
                                    <div className="text-xs text-muted-foreground">{alert.user}</div>
                                </td>
                                <td className="p-4 align-middle">
                                    <div className="flex items-center gap-2">
                                        <div className="h-1.5 w-16 bg-secondary rounded-full overflow-hidden">
                                            <div className="h-full bg-green-500" style={{ width: `${alert.confidence}%` }}></div>
                                        </div>
                                        <span className="text-xs font-mono">{alert.confidence}%</span>
                                    </div>
                                </td>
                                <td className="p-4 align-middle">
                                    <Badge variant={alert.status === 'open' ? 'down' : alert.status === 'investigating' ? 'degraded' : 'healthy'} className="capitalize bg-transparent border">
                                        {alert.status}
                                    </Badge>
                                </td>
                                <td className="p-4 align-middle font-mono text-xs text-muted-foreground">{alert.timestamp}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Detail Overlay */}
            {selectedAlert && (
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-40" onClick={() => setSelectedAlert(null)}></div>
            )}

            <div className={cn(
                "fixed top-0 right-0 bottom-0 w-[600px] border-l border-border bg-card shadow-2xl z-50 p-6 transition-transform duration-300 ease-in-out transform flex flex-col",
                selectedAlert ? "translate-x-0" : "translate-x-full"
            )}>
                {selectedAlert && (
                    <>
                        <div className="flex justify-between items-start mb-6 border-b border-border pb-4">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <Badge variant={selectedAlert.severity} className="uppercase">{selectedAlert.severity}</Badge>
                                    <span className="text-xs font-mono text-muted-foreground">{selectedAlert.id}</span>
                                </div>
                                <h2 className="text-2xl font-bold tracking-tight mb-1">{selectedAlert.title}</h2>
                            </div>
                            <Button variant="ghost" size="icon" onClick={() => setSelectedAlert(null)}>
                                <X className="h-5 w-5" />
                            </Button>
                        </div>

                        <div className="flex-1 overflow-y-auto pr-4 space-y-8">
                            <section>
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                                    <FileText className="h-4 w-4" /> Summary
                                </h3>
                                <div className="bg-muted/50 p-4 rounded-lg border border-border text-sm leading-relaxed">
                                    {selectedAlert.description}
                                </div>
                            </section>

                            <section>
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                                    <Bot className="h-4 w-4" /> AI Agent Trace
                                </h3>
                                <div className="bg-muted/30 p-4 rounded-lg border border-border relative">
                                    <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-border"></div>
                                    <div className="space-y-6 relative">
                                        <div className="flex gap-4">
                                            <div className="h-8 w-8 shrink-0 rounded-full bg-background border border-border flex items-center justify-center text-lg z-10">📥</div>
                                            <div>
                                                <div className="text-sm font-semibold text-primary">Ingestion Agent</div>
                                                <div className="text-xs text-muted-foreground mt-0.5">Detected anomaly in log stream #402</div>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="h-8 w-8 shrink-0 rounded-full bg-background border border-border flex items-center justify-center text-lg z-10">🕵️</div>
                                            <div>
                                                <div className="text-sm font-semibold text-primary">Threat Analyst</div>
                                                <div className="text-xs text-muted-foreground mt-0.5">Matched T1068 (Exploitation for Privilege Escalation)</div>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="h-8 w-8 shrink-0 rounded-full bg-background border border-border flex items-center justify-center text-lg z-10">🛡️</div>
                                            <div>
                                                <div className="text-sm font-semibold text-primary">SOC Manager</div>
                                                <div className="text-xs text-muted-foreground mt-0.5">Escalated to human analyst (Severity Threshold met)</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                                    <Shield className="h-4 w-4" /> Recommended Actions
                                </h3>
                                <div className="flex flex-col gap-2">
                                    {selectedAlert.recommendedActions?.map((action, i) => (
                                        <div key={i} className="flex items-center justify-between p-3 rounded-md bg-background border border-border">
                                            <span className="text-sm font-medium">{action}</span>
                                            <Button size="sm" variant="secondary">Execute</Button>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        <div className="pt-4 border-t border-border mt-auto flex justify-end gap-3 sticky bottom-0 bg-card">
                            <Button variant="outline" onClick={() => setSelectedAlert(null)}>Close</Button>
                            <Button>Take Ownership</Button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Alerts;
