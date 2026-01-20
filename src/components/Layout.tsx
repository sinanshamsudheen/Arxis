import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { LayoutDashboard, AlertCircle, BrainCircuit, ShieldCheck, User } from 'lucide-react';
import { cn } from '../lib/utils';

const Sidebar: React.FC = () => {
    const location = useLocation();

    const navItems = [
        { href: "/", label: "Dashboard", icon: LayoutDashboard },
        { href: "/alerts", label: "Alerts", icon: AlertCircle },
        { href: "/insights", label: "Agent Insights", icon: BrainCircuit },
    ];

    return (
        <aside className="fixed top-0 left-0 z-30 h-screen w-64 border-r border-sidebar-border bg-sidebar text-sidebar-foreground">
            <div className="flex h-16 items-center border-b border-sidebar-border px-6">
                <div className="flex items-center gap-2 font-mono text-lg font-bold tracking-tight">
                    <ShieldCheck className="h-6 w-6 text-blue-500" />
                    <span>ARXIS.AI</span>
                </div>
            </div>

            <div className="flex flex-col gap-1 p-4">
                {navItems.map((item) => (
                    <NavLink
                        key={item.href}
                        to={item.href}
                        className={({ isActive }) => cn(
                            "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                            isActive ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-muted-foreground"
                        )}
                    >
                        <item.icon className="h-4 w-4" />
                        {item.label}
                    </NavLink>
                ))}
            </div>

            <div className="mt-auto border-t border-sidebar-border p-4">
                <div className="flex items-center gap-3 rounded-lg bg-sidebar-accent/50 p-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600/20 text-blue-500 ring-2 ring-blue-600/10">
                        <span className="text-xs font-bold">JS</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-medium">J. Smith</span>
                        <span className="text-xs text-muted-foreground">Senior Analyst</span>
                    </div>
                </div>
            </div>
        </aside>
    );
};

const Layout: React.FC = () => {
    return (
        <div className="min-h-screen bg-background font-sans antialiased">
            <Sidebar />
            <main className="ml-64 p-8">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
