'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { TicketSection } from '@/components/Ticket';
import { OrderSection } from '@/components/Order';
import { InventorySection } from '@/components/Inventory';
import { NotificationSection } from '@/components/Notification';

// Store Overview Component
const StoreOverview: React.FC = () => (
    <div className="bg-card p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">模擬店概要</h2>
        <p>うどんの種類や価格、特別メニューなどの情報を表示します。</p>
    </div>
);

// HomePage Component
const HomePage: React.FC = () => {
    return (
        <div className="bg-background text-foreground min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-8 grid gap-8">
                <div className="grid md:grid-cols-2 gap-8">
                    <TicketSection />
                    <OrderSection />
                </div>
                <InventorySection />
                <NotificationSection />
            </main>
            <footer className="bg-muted text-muted-foreground py-4 px-4 sm:px-6 md:px-8">
                <div className="max-w-5xl mx-auto text-center text-sm">&copy; 2024 Udon Shop. All rights reserved.</div>
            </footer>
        </div>
    );
}

export default HomePage;
