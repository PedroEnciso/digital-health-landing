function PillLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-3 py-1 text-[10px] font-medium tracking-wider text-blue-700 uppercase bg-blue-100 border border-blue-200 rounded font-mono">
      {children}
    </span>
  );
}

export default PillLabel;
