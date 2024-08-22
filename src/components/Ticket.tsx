import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export const TicketSection: React.FC = () => {
    const router = useRouter();
    const handleTicket = () => {
        router.push('/ticket');
    }
    return (
        <div className="bg-card p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">整理券予約</h2>
            <p className="mb-6">次の利用可能な整理券を確認して、ここから直接予約します。</p>
            <Button size="lg" className="w-full" onClick={handleTicket}>整理券を予約する</Button>
        </div>
    );
}
