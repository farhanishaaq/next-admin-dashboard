"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Dashboard from "../components/Dashboard";
import Users from "../components/Users";
import Settings from "../components/Setting";

export default function AdminLayout({
                                        children,
                                    }: Readonly<{
    children: React.ReactNode;
}>) {
    const [content, setContent] = useState("Dashboard");

    const renderContent = () => {
        switch (content) {
            case "Dashboard":
                return <Dashboard />;
            case "Users":
                return <Users />;
            case "Settings":
                return <Settings />;
            default:
                return <Dashboard />;
        }
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <div className="d-flex flex-grow-1">
                <Sidebar onSelectContent={setContent} />
                <div style={{ flex: 1 }}>{renderContent()}</div>
            </div>
            <Footer />
        </div>
    );
}