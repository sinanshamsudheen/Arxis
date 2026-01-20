import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { LayoutDashboard, AlertCircle, BrainCircuit, ShieldCheck } from 'lucide-react';
import './layout.css';

const Sidebar: React.FC = () => {
    const location = useLocation();

    return (
        <aside className="sidebar">
            <div className="sidebar-logo">
                <ShieldCheck size={28} />
                ARXIS<span>.AI</span>
            </div>

            <nav className="nav-menu">
                <NavLink
                    to="/"
                    className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                >
                    <LayoutDashboard size={20} />
                    Dashboard
                </NavLink>

                <NavLink
                    to="/alerts"
                    className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                >
                    <AlertCircle size={20} />
                    Alerts
                </NavLink>

                <NavLink
                    to="/insights"
                    className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                >
                    <BrainCircuit size={20} />
                    Agent Insights
                </NavLink>
            </nav>

            <div className="user-profile">
                <div className="user-avatar">JS</div>
                <div className="user-info">
                    <span className="user-name">J. Smith</span>
                    <span className="user-role">Senior Analyst</span>
                </div>
            </div>
        </aside>
    );
};

const Layout: React.FC = () => {
    return (
        <div className="app-container">
            <Sidebar />
            <main className="main-content">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
