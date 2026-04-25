export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center w-full my-8">
      <div className="h-[1px] flex-1 bg-muted-gold/40"></div>
      <div className="mx-4 text-muted-gold opacity-60">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 3-1.912 5.886L4 10.8l5.886 1.912L12 21l1.912-5.886L20 13.2l-5.886-1.912L12 3z" fill="currentColor" fillOpacity="0.2"/>
        </svg>
      </div>
      <div className="h-[1px] flex-1 bg-muted-gold/40"></div>
    </div>
  );
}
