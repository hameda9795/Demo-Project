/**
 * Customer Portal Layout
 * Layout for the customer account/loyty portal
 */

export default function MijnKoffieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-cream-50">
      {children}
    </div>
  );
}
