// import UserAnalytics from "@/components/UserAnalytics";
// import RevenueMetrics from "@/components/RevenueMetrics";
// import Notifications from "@/components/Notifications";

export default function ComplexDashboardLayout({ children,
    users,
    revenue,
    notifications

}: {
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;
}) {
    return (
        <div className="complex-dashboard-layout">
            <div>{children}</div>
            <div>{users}</div>
            <div>{revenue}</div>
            <div>{notifications}</div>
        </div>
    );
}