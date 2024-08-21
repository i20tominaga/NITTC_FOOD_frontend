import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useRouter } from 'next/navigation';
import { AlignLeft } from 'lucide-react';

export function Header() {
    const router = useRouter();

    return (
        <header className="p-4 flex items-center justify-between border-b border-gray-300">
            {/* シートをトリガーするボタン */}
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline">
                        <AlignLeft size={24} />
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Dashboard</SheetTitle>
                        <SheetDescription>
                            Access various sections of the application.
                        </SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                        <Button onClick={() => router.push('/ticket')}>
                            整理券予約
                        </Button>
                        <Button onClick={() => router.push('/order')}>
                            注文
                        </Button>
                        <Button onClick={() => router.push('/login')}>
                            ログイン
                        </Button>
                        {/*}
                        <Button onClick={() => router.push('/logout')}>
                            ログアウト
                        </Button>
                        */}
                    </div>
                    <SheetFooter>
                        <SheetClose asChild>
                            <Button type="submit">Close</Button>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>

            <div className="text-center flex-grow">
                <h1 className="text-center">NITTC-FOOD</h1>
            </div>

            <div className="flex items-center space-x-4">
                <Button>Click me</Button>
            </div>
        </header>
    );
}
