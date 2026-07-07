import type { ReactNode } from "react";
export type MediaTileData = {
  href: string;
  id: string;
  ariaLabel: string;
  datatestid: string;
  icon: ReactNode;
  label: string;
};
/** A media tile. */
export default function MediaTile({ d, cids }: { d: MediaTileData; cids: string[] }) {
  return (
    <div data-cid={cids[0]} className="block min-w-0 max-w-[fit-content]">
      <a data-cid={cids[1]} className="flex flex-col items-center cursor-pointer w-[4.5rem]" href={d.href} id={d.id}>
        <div data-cid={cids[2]} className="flex relative min-w-0 max-w-10 max-h-10 p-2 rounded-[50%] justify-center items-center shrink-0 align-middle [font-family:Arial] text-2xl leading-7 tracking-[normal] text-center" aria-label={d.ariaLabel} type="button">
          <svg data-cid={cids[3]} className="w-6 h-6 block min-w-0 shrink-0 overflow-hidden" aria-hidden="true" viewBox="0 0 24 24" focusable="false" data-testid={d.datatestid} fill="currentColor">{d.icon}</svg>
        </div>
        <span data-cid={cids[4]} className="block min-w-0 text-color-002 text-xs leading-5 tracking-[0.4px] text-center">
          {d.label}
        </span>
      </a>
    </div>
  );
}
