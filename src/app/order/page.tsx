'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Minus, Plus } from 'lucide-react';
import { Header } from '@/components/Header';
import axios from 'axios';
import { useToast } from '@/components/hooks/use-toast';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { useRouter } from 'next/navigation'; // 修正：useRouterをnavigationからインポート

export default function OrderPage() {
    const { toast } = useToast();
    const [nikuUdonCount, setNikuUdonCount] = useState(0);
    const [kitsuneUdonCount, setKitsuneUdonCount] = useState(0);
    const [userId, setUserId] = useState('');  // ユーザーIDの入力を追加

    const nikuUdonPrice = 600;
    const kitsuneUdonPrice = 500;
    const totalPrice = (nikuUdonCount * nikuUdonPrice) + (kitsuneUdonCount * kitsuneUdonPrice);

    const router = useRouter(); // 修正：useRouterを利用する

    const handleHome = () => {
        router.push('/'); // 修正：useRouterを使ってルートページに遷移
    };

    const handleOrder = async () => {
        try {
            const items = [
                { name: '肉うどん', count: nikuUdonCount, price: nikuUdonPrice },
                { name: 'きつねうどん', count: kitsuneUdonCount, price: kitsuneUdonPrice },
            ].filter(item => item.count > 0);

            if (items.length === 0) {
                toast({
                    title: '注文内容が空です',
                    description: '注文する商品を選んでください。',
                    variant: 'destructive'
                });
                return;
            }

            const orderData = {
                userId,
                items,
                totalPrice,
            };

            const response = await axios.post('http://localhost:3000/api/orders/create', orderData);

            toast({
                title: '注文が成功しました！',
                description: `注文番号: ${response.data.orderId}`
            });

            // 注文が成功したらInputを初期化する
            setNikuUdonCount(0);
            setKitsuneUdonCount(0);
            setUserId('');

            // ダッシュボードに戻る
            handleHome();
        } catch (error) {
            toast({
                title: '注文に失敗しました',
                description: '再度お試しください。',
                variant: 'destructive'
            });
        }
    };

    return (
        <>
            <Head>
                <title>Udon Shop</title>
                <meta name="description" content="うどんの模擬店の注文画面です。" />
            </Head>
            <div className="bg-background text-foreground min-h-screen flex flex-col">
                <Header />
                <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-8">
                    <h2 className="text-2xl font-bold mb-4">うどんの注文</h2>

                    {/* ユーザーIDの入力 */}
                    <div className="mb-6">
                        <Label>ユーザーID</Label>
                        <Input value={userId} onChange={(e) => setUserId(e.target.value)} className="mt-2" />
                    </div>

                    {/* 肉うどんの注文 */}
                    <div className="mb-6">
                        <Label>肉うどん (¥600)</Label>
                        <div className="flex items-center space-x-4 mt-2">
                            <Button onClick={() => setNikuUdonCount(Math.max(0, nikuUdonCount - 1))}>
                                <Minus />
                            </Button>
                            <Input value={nikuUdonCount} readOnly className="w-12 text-center" />
                            <Button onClick={() => setNikuUdonCount(nikuUdonCount + 1)}>
                                <Plus />
                            </Button>
                        </div>
                    </div>

                    {/* きつねうどんの注文 */}
                    <div className="mb-6">
                        <Label>きつねうどん (¥500)</Label>
                        <div className="flex items-center space-x-4 mt-2">
                            <Button onClick={() => setKitsuneUdonCount(Math.max(0, kitsuneUdonCount - 1))}>
                                <Minus />
                            </Button>
                            <Input value={kitsuneUdonCount} readOnly className="w-12 text-center" />
                            <Button onClick={() => setKitsuneUdonCount(kitsuneUdonCount + 1)}>
                                <Plus />
                            </Button>
                        </div>
                    </div>

                    {/* 合計金額 */}
                    <div className="mb-6">
                        <Label>合計金額: ¥{totalPrice}</Label>
                    </div>

                    {/* 注文確認ダイアログ */}
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button disabled={totalPrice === 0 || !userId}>注文を確認する</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>注文内容の確認</AlertDialogTitle>
                                <AlertDialogDescription asChild>
                                    <div>
                                        <div>以下の内容で注文を確定しますか？</div>
                                        <div>
                                            <div>ご注文の詳細:</div>
                                            <ul>
                                                <li>肉うどん: {nikuUdonCount}個</li>
                                                <li>きつねうどん: {kitsuneUdonCount}個</li>
                                                <li>合計金額: ¥{totalPrice}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>キャンセル</AlertDialogCancel>
                                <AlertDialogAction onClick={handleOrder}>注文を確定</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </main>
            </div>
        </>
    );
}
