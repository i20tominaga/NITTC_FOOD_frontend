import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export const AccountSection: React.FC = () => {
    const router = useRouter();
    const handleAccount = () => {
        router.push('/account');
    }
    return (
        <div className="p-4">
            <h3 className="text-lg font-bold">アカウント管理はこちら</h3>
            <Button onClick = {handleAccount}>ログイン/ログアウト</Button>
        </div>
    );
}
