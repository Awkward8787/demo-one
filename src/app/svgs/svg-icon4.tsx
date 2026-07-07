export default function Icon4({ cid }: { cid?: string }) {
  return (
    <svg className="w-auto h-6 block shrink-0 overflow-hidden text-[1.5rem] focus:outline-clr-16 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" aria-hidden="true" viewBox="0 0 24 24" focusable="false" data-testid="PersonIcon" fill="currentColor" data-cid={cid}>
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  );
}
