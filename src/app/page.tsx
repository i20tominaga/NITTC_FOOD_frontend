'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { OrderSection } from '@/components/Order';
import { InventorySection } from '@/components/Inventory';
import { NotificationSection } from '@/components/Notification';
import Head from 'next/head';

// HomePage Component
const HomePage: React.FC = () => {
    return (
        <>
            <Head>
                <title>Udon Shop</title>
                <meta name="description" content="うどんの模擬店の管理画面です。" />
            </Head>
            <div className="bg-background text-foreground min-h-screen flex flex-col">
                <Header />
                <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-8 grid gap-8">
                    <OrderSection />
                    <InventorySection />
                    <NotificationSection />
                </main>
                <footer className="bg-muted text-muted-foreground py-4 px-4 sm:px-6 md:px-8">
                    <div className="max-w-5xl mx-auto text-center text-sm">&copy; 2024 Udon Shop. All rights reserved.</div>
                </footer>
            </div>
        </>
    );
}

export default HomePage;
