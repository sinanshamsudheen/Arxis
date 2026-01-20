import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { LayoutDashboard, AlertCircle, BrainCircuit, ShieldCheck, LogOut } from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from './ui/Button';

const Sidebar: React.FC = () => {
    const navItems = [
        { href: "/", label: "Dashboard", icon: LayoutDashboard },
        { href: "/alerts", label: "Alerts", icon: AlertCircle },
        { href: "/insights", label: "Agent Insights", icon: BrainCircuit },
    ];

    return (
        <aside className="w-16 border-r border-border bg-card flex flex-col shrink-0 h-full items-center py-4 z-50">
            <div className="mb-8">
                <div className="h-10 w-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary ring-1 ring-primary/20">
                    <ShieldCheck className="h-6 w-6" />
                </div>
            </div>

            <nav className="flex flex-col gap-2 w-full px-2">
                {navItems.map((item) => (
                    <NavLink
                        key={item.href}
                        to={item.href}
                        className={({ isActive }) => cn(
                            "h-10 w-10 rounded-lg flex items-center justify-center transition-all duration-200",
                            isActive
                                ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                        )}
                        title={item.label}
                    >
                        <item.icon className="h-5 w-5" />
                    </NavLink>
                ))}
            </nav>

            <div className="mt-auto flex flex-col gap-4 items-center w-full px-2">
                <div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center text-xs font-bold text-blue-500 border border-blue-500/20 cursor-pointer hover:bg-blue-500/20 transition-colors">
                    JS
                </div>
            </div>
        </aside>
    );
};

const Layout: React.FC = () => {
    return (
        <div className="h-screen w-screen bg-background font-sans antialiased overflow-hidden flex">
            <Sidebar />
            <main className="flex-1 h-full overflow-hidden p-3 relative">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
