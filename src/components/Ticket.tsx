import { Button} from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export const TicketSection: React.FC = () => {
    const router = useRouter();
    const handleTicket = () => {
        router.push('/ticket');
    }
    return (
        <div className="p-4">
            <h3 className="text-lg font-bold">整理券予約</h3>
            <Button onClick = {handleTicket}>整理券を予約する</Button>
        </div>
    );
}
