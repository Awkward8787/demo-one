import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type FeatureCardData = {
  imgSrc: string;
  srcSet: string;
  title: string;
  description: string;
  href: string;
  id: string;
};
/** A feature card. */
export default function FeatureCard({ d, cids, styles }: { d: FeatureCardData; cids: string[]; styles: FeatureCardStyles }) {
  return (
    <div data-cid={cids[0]} className={cn("h-105 flex rounded-2xl flex-col shadow-[var(--clr-0)_0px_1px_3px_0px] w-full", styles.className)}>
      <img data-cid={cids[1]} className={cn("w-full block rounded-tl-2xl rounded-tr-2xl overflow-clip object-cover aspect-[auto_368/276] text-clr-1", styles.className2)} data-component="image" alt="" height="276" src={d.imgSrc} srcSet={d.srcSet} width="368" />
      <div data-cid={cids[2]} className={cn("min-h-41.5 flex p-6 flex-col grow gap-2 max-md:min-h-0 md:max-lg:h-42 md:max-lg:min-h-42", styles.className3)}>
        <h3 data-cid={cids[3]} className="block text-xl font-bold leading-[1.6875rem]" data-component="heading">
          {d.title}
        </h3>
        <p data-cid={cids[4]} className={cn("block grow text-color-002", styles.className4)}>
          {d.description}
        </p>
        <div data-cid={cids[5]} className="flex flex-wrap gap-2">
          <a data-cid={cids[6]} className="h-9 block cursor-pointer" data-component="link" href={d.href}>
            <div data-cid={cids[7]} className="w-[7.8125rem] h-9 inline-flex relative min-w-16 -ml-2 py-1.5 px-2 rounded-xl justify-center items-center self-start align-middle text-color-001 text-[0.875rem] font-bold tracking-[0.4px] text-center hover:bg-clr-10 focus:bg-clr-1" data-component="button" id={d.id} type="button">
              Learn more
              <span data-cid={cids[8]} className="flex -mr-1 ml-2">
                <svg data-cid={cids[9]} className="w-auto h-5 block shrink-0 overflow-hidden text-[1.25rem] focus:outline-clr-16 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" aria-hidden="true" viewBox="0 0 24 24" focusable="false" data-testid="ChevronRightIcon" fill="currentColor">
                  <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
