// components/Body.tsx (Client Component)
'use client';

export default function Body({ children }: { children: React.ReactNode }) {
    return <div style={{ flex: 1 }}>{children}</div>;
}