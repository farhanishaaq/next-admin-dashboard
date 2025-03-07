// components/Sidebar.tsx (Client Component)
'use client';

export default function Sidebar({ onSelectContent }: { onSelectContent: (content: string) => void }) {
    return (
        <div className="border-right" style={{ width: '250px', minHeight: '100vh', backgroundColor: 'lightgrey' }}>
            <div className="p-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <button className="nav-link text-dark active" onClick={() => onSelectContent('Dashboard')}>
                            Dashboard
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link text-dark" onClick={() => onSelectContent('Users')}>
                            Users
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link text-dark" onClick={() => onSelectContent('Settings')}>
                            Settings
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}