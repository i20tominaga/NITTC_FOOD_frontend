export const InventorySection: React.FC = () => {
    return (
        <div className="bg-card p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">在庫状況</h2>
            <div className="flex items-center justify-between mb-2">
                <p>現在のうどん在庫:</p>
                <span className="font-bold text-2xl">78</span>
            </div>
            <div className="text-muted-foreground">
                <p>
                    在庫が少なくなっています。確保したい場合は早めの注文をお勧めします。
                </p>
            </div>
        </div>
    );
}
