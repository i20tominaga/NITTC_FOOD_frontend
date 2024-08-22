import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export const OrderSection: React.FC = () => {
    const router = useRouter();
    const handleOrder = () => {
        router.push('/order');
    }
    return (
        <div className="bg-card p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">うどんの注文</h2>
            <p className="mb-6">うどんの種類や価格、特別メニューなどの情報を表示します。</p>
            <Button size="lg" className="w-full" onClick={handleOrder}>注文する</Button>
        </div>
    );
}
