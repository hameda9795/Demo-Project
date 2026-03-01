/**
 * Admin Layout
 * Layout for the admin dashboard
 */

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-espresso-50">
      {children}
    </div>
  );
}
