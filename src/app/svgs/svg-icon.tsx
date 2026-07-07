export default function Icon({ cid }: { cid?: string }) {
  return (
    <svg className="block shrink-0 overflow-hidden w-6 h-6 focus:outline-clr-16 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" aria-hidden="true" viewBox="0 0 24 24" focusable="false" data-testid="MenuIcon" fill="currentColor" data-cid={cid}>
      <path d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z" />
    </svg>
  );
}
