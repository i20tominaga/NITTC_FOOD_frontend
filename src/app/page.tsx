'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { WelcomeSection } from '@/components/Welcome';
import { OrderSection } from '@/components/Order';
import { TicketSection } from '@/components/Ticket';
import { AccountSection } from '@/components/Account';

// Inventory Status Component
const InventoryStatus: React.FC = () => (
    <div className="p-4">
        <h3 className="text-lg font-bold">在庫状況</h3>
        <p>在庫: 充分にあります</p>
    </div>
);

// Notification Section Component
const NotificationSection: React.FC = () => (
    <div className="p-4">
        <h3 className="text-lg font-bold">通知</h3>
        <p>現在、特別な通知はありません。</p>
    </div>
);


// Store Overview Component
const StoreOverview: React.FC = () => (
    <div className="p-4">
        <h3 className="text-lg font-bold">模擬店概要</h3>
        <p>うどんの種類や価格、特別メニューなどの情報を表示します。</p>
    </div>
);

// HomePage Component
const HomePage: React.FC = () => {
    return (
        <div>
            <Header />
            <WelcomeSection />
            <OrderSection />
            <TicketSection />
            <AccountSection />
        </div>
    );
}

export default HomePage;
