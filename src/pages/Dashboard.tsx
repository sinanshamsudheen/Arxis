import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { MOCK_ALERTS, MOCK_SYSTEM_COMPONENTS, MOCK_COMPLIANCE } from '../data/mock';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';
import { ArrowRight, Download, Send, Activity, Info } from 'lucide-react';
import { cn } from '../lib/utils';

// SVG Heartbeat Component
const HeartbeatLine = ({ color }: { color: string }) => (
    <svg viewBox="0 0 100 24" className="h-6 w-full overflow-visible" preserveAspectRatio="none">
        <path
            d="M0 12 H20 L30 4 L40 20 L50 12 H100"
            fill="none"
            stroke={color}
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-[pulse_2s_ease-in-out_infinite]"
        />
    </svg>
);

const SEVERITY_DATA = [
    { name: 'Critical', value: 2, color: 'hsl(0 84% 60%)' },
    { name: 'High', value: 5, color: 'hsl(25 95% 53%)' },
    { name: 'Medium', value: 12, color: 'hsl(48 96% 53%)' },
    { name: 'Low', value: 24, color: 'hsl(217 91% 60%)' },
];

const Dashboard: React.FC = () => {
    const [chatInput, setChatInput] = useState('');

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                    <p className="text-muted-foreground mt-1">
                        System status and security overview • {new Date().toLocaleDateString()}
                    </p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline">Refresh Data</Button>
                    <Button>System Check</Button>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-6">

                {/* COL 1: System Heartbeat (Left, Tall) */}
                <div className="col-span-12 lg:col-span-3 flex flex-col gap-6">
                    <Card
                        title="System Heartbeat"
                        description="Real-time component latency"
                        className="flex-1"
                    >
                        <div className="flex flex-col gap-4">
                            {MOCK_SYSTEM_COMPONENTS.map(comp => {
                                const isHealthy = comp.status === 'healthy';
                                const statusColor = isHealthy ? 'hsl(142 71% 45%)' : comp.status === 'degraded' ? 'hsl(48 96% 53%)' : 'hsl(0 84% 60%)';
                                return (
                                    <div key={comp.id} className="group flex flex-col gap-1 rounded-lg border border-transparent p-2 transition-colors hover:bg-accent/50 hover:border-border">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium">{comp.name}</span>
                                            <Badge
                                                variant={comp.status}
                                                className="h-5 px-1.5 uppercase text-[10px]"
                                            >
                                                {comp.status}
                                            </Badge>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex-1 opacity-50 group-hover:opacity-100 transition-opacity">
                                                <HeartbeatLine color={statusColor} />
                                            </div>
                                            <span className="font-mono text-xs text-muted-foreground w-12 text-right">
                                                {comp.latency}ms
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </Card>

                    <Card title="System Performance">
                        <div className="space-y-5">
                            {[
                                { label: 'CPU Usage', value: 78, color: 'bg-orange-500' },
                                { label: 'GPU Utilization', value: 45, color: 'bg-blue-500' },
                                { label: 'Net Throughput', value: 92, color: 'bg-green-500' },
                            ].map((item, idx) => (
                                <div key={idx} className="space-y-1.5">
                                    <div className="flex justify-between text-xs">
                                        <span className="font-medium text-muted-foreground">{item.label}</span>
                                        <span className="font-mono text-foreground">{item.value}%</span>
                                    </div>
                                    <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                                        <div
                                            className={cn("h-full transition-all duration-1000", item.color)}
                                            style={{ width: `${item.value}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

                {/* COL 2: Middle - Charts & Alerts (Wide) */}
                <div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
                    <Card title="Threat Severity" className="h-[280px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={SEVERITY_DATA} margin={{ top: 20, right: 0, left: -25, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                                <XAxis
                                    dataKey="name"
                                    stroke="hsl(var(--muted-foreground))"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                    dy={10}
                                />
                                <YAxis
                                    stroke="hsl(var(--muted-foreground))"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <Bar dataKey="value" radius={[4, 4, 0, 0]} maxBarSize={50}>
                                    {SEVERITY_DATA.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </Card>

                    <Card title="High Priority Alerts" className="flex-1 ">
                        <div className="flex flex-col gap-3">
                            {MOCK_ALERTS.filter(a => ['critical', 'high'].includes(a.severity)).map(alert => (
                                <div
                                    key={alert.id}
                                    className="group relative flex flex-col gap-2 rounded-lg border border-border bg-card/50 p-4 transition-all hover:bg-accent hover:border-primary/20"
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2">
                                                <Badge variant={alert.severity} className="h-5 px-1.5 uppercase text-[10px]">{alert.severity}</Badge>
                                                <span className="text-xs text-muted-foreground">{alert.timestamp}</span>
                                            </div>
                                            <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">{alert.title}</h4>
                                        </div>
                                    </div>
                                    <p className="text-xs text-muted-foreground line-clamp-2">
                                        {alert.description}
                                    </p>

                                    <div className="flex items-center justify-between pt-2">
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                            <Info className="h-3 w-3" />
                                            Confidence: <span className="text-foreground font-mono">{alert.confidence}%</span>
                                        </div>
                                        <ArrowRight className="h-4 w-4 text-muted-foreground -translate-x-2 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <div className="grid grid-cols-3 gap-4">
                        {['Weekly Report', 'Monthly Report', 'Custom Export'].map((label, i) => (
                            <Button key={i} variant="outline" className="h-auto py-4 flex flex-col items-center gap-2 text-xs text-muted-foreground hover:text-foreground hover:border-primary/50">
                                <Download className="h-4 w-4" />
                                {label}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* COL 3: Right - AI & Compliance */}
                <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
                    <Card title="AI Security Analyst" className="flex-1 flex flex-col" noPadding>
                        <div className="flex-1 flex flex-col min-h-[400px]">
                            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                <div className="flex gap-3">
                                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <span className="text-xs">🤖</span>
                                    </div>
                                    <div className="rounded-lg bg-accent p-3 text-sm text-foreground">
                                        Hello! I’m your AI security analyst assistant. I can help you investigate alerts, explain MITRE ATT&CK tactics, and provide threat intelligence.
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 border-t border-border bg-card">
                                <div className="relative">
                                    <input
                                        className="w-full rounded-md border border-input bg-background px-3 py-2 pr-10 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                        placeholder="Ask Arxis about threats..."
                                        value={chatInput}
                                        onChange={(e) => setChatInput(e.target.value)}
                                    />
                                    <button className="absolute right-2 top-2 text-muted-foreground hover:text-primary">
                                        <Send className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card title="Compliance Status">
                        <div className="flex flex-col">
                            {MOCK_COMPLIANCE.map((item, idx) => (
                                <div key={idx} className="flex items-center justify-between border-b border-border py-3 last:border-0">
                                    <span className="text-sm font-medium">{item.name}</span>
                                    <div className="text-right">
                                        <Badge
                                            variant={item.status === 'compliant' ? 'healthy' : item.status === 'review_needed' ? 'degraded' : 'down'}
                                            className="h-5 px-2 capitalize"
                                        >
                                            {item.status.replace('_', ' ')}
                                        </Badge>
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
