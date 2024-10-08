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
        <header className="bg-primary text-primary-foreground py-6 px-4 sm:px-6 md:px-8 flex flex-col md:flex-row items-center justify-between border-b border-gray-300">
            {/* シートをトリガーするボタン - 左端 */}
            <div className="flex items-center mb-4 md:mb-0">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline">
                            <AlignLeft size={24} color="black" />
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
                            <Button onClick={() => router.push('/order')}>
                                注文
                            </Button>
                            <Button onClick={() => router.push('/login')}>
                                ログイン
                            </Button>
                        </div>
                        <SheetFooter>
                            <SheetClose asChild>
                                <Button type="submit">Close</Button>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>

            {/* Welcome メッセージ - 中央 */}
            <div className="text-center flex-grow mb-4 md:mb-0">
                <h1 className="text-3xl sm:text-4xl font-bold">Welcome to our Udon Shop!</h1>
            </div>
        </header>
    );
}
