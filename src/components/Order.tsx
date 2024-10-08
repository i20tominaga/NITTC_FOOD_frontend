import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export const OrderSection: React.FC = () => {
    const router = useRouter();

    const handleOrder = () => {
        router.push('/order'); // 注文ページへ遷移
    }

    return (
        <div className="bg-card p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">うどんの注文</h2>
            <p className="mb-6">豊富な種類のうどんや特別メニューの情報を確認して、簡単に注文できます。</p>
            <Button size="lg" className="w-full mt-4" onClick={handleOrder}>注文する</Button> {/* ボタンにマージンを追加 */}
        </div>
    );
}
