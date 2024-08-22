import React from "react";

export const NotificationSection: React.FC = () => {
    return (
        <div className="bg-card p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">通知</h2>
            <div className="space-y-4">
                <div>
                    <h3 className="text-lg font-bold mb-2">営業時間の変更</h3>
                    <p>
                        6月4日（日曜日）は特別イベントのため閉店いたします。ご迷惑をおかけして申し訳ございません。
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-2">夏のうどん特別割引</h3>
                    <p>今週末に注文すると、全品20％割引になります。お見逃しなく！</p>
                </div>
            </div>
        </div>
    )
};
