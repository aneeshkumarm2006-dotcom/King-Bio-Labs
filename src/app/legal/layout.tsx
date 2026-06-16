export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex-1 bg-brand-light">
      <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-10">
        {children}
      </div>
    </main>
  );
}
