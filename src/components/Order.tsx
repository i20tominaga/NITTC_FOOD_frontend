import { Button} from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export const OrderSection: React.FC = () => {
    const router = useRouter();
    const handleOrder = () => {
        router.push('/order');
    }
    return (
        <div className="p-4">
            <h3 className="text-lg font-bold">注文</h3>
            <Button onClick = {handleOrder}>注文する</Button>
        </div>
    );
}
