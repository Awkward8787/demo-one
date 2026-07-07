import type { FeatureGridItemStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type FeatureGridItemData = {
  variant: string;
  title: string;
  description: string;
  label: string;
  href: string;
  target: string;
  id?: string;
};
/** feature grid item component. */
export default function FeatureGridItem({ d, cids, styles }: { d: FeatureGridItemData; cids: string[]; styles: FeatureGridItemStyles }) {
  return (
    <div data-cid={cids[0]} className={cn("h-91.5 block max-lg:[grid-column-start:initial] max-lg:[grid-column-end:initial]", styles.className)}>
      <div data-cid={cids[1]} className="block w-full">
        <div data-cid={cids[2]} className="grid relative p-6 rounded-2xl grid-rows-[318px] bg-color-004 grid-cols-[minmax(0,_1fr)] max-w-full h-[22.875rem] max-lg:px-4">
          <FeatureGridItemSlot1 d={d} />
          <div data-cid={cids[3]} className="flex z-30 flex-col-reverse self-center text-background">
            <h3 data-cid={cids[4]} className={cn("block text-[2rem] font-bold leading-10 tracking-[0.25px] max-md:text-[1.5625rem] max-md:leading-[1.9375rem] md:max-lg:text-[1.8125rem] md:max-lg:leading-9", styles.className2)} data-component="heading">
              {d.title}
            </h3>
            <p data-cid={cids[5]} className="h-6 block text-color-003">
              <span data-cid={cids[6]} className="inline text-background">
                {d.description}
              </span>
            </p>
          </div>
          <a data-cid={cids[7]} className="w-[9.0375rem] h-10 flex absolute bottom-6 left-6 z-20 min-w-16 max-w-[22.5625rem] py-2 px-[0.6875rem] rounded-2xl justify-center items-center align-middle text-background font-bold tracking-[0.46px] whitespace-nowrap text-nowrap shadow-[var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px] cursor-pointer max-lg:left-4 hover:bg-clr-15 focus:bg-clr-18" data-component="link" href={d.href} target={d.target} id={d.id}>
            Learn more
            <span data-cid={cids[8]} className="flex -mr-1 ml-2">
              <svg data-cid={cids[9]} className="w-auto h-5.5 block shrink-0 overflow-hidden text-[1.375rem] focus:outline-clr-16 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" aria-hidden="true" viewBox="0 0 24 24" focusable="false" data-testid="ChevronRightIcon" fill="currentColor">
                <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

function FeatureGridItemSlot1({ d }: { d: FeatureGridItemData }) {
  switch (d.variant) {
    case "connecting-people-activating-faith":
      return (
        <img className="w-full h-full block absolute top-0 left-0 min-w-0 rounded-2xl overflow-clip object-cover text-clr-1" data-cid="n332" data-component="image" alt="eGroup Ministry" sizes="(max-width: 900px) 425px, 564px" src="/assets/cloned/images/55dc492edb28.jpeg" srcSet="/assets/cloned/images/10e634bdc007.jpeg 16w, /assets/cloned/images/e78c7908b6f9.jpeg 32w, /assets/cloned/images/43284c51eb54.jpeg 48w, /assets/cloned/images/1d6c400690c4.jpeg 64w, /assets/cloned/images/96b17b2f1c58.jpeg 96w, /assets/cloned/images/bc5429f6a5ab.jpeg 128w, /assets/cloned/images/74d6a8050103.jpeg 256w, /assets/cloned/images/123dbc2013c5.jpeg 384w, /assets/cloned/images/add31a923e97.jpeg 640w, /assets/cloned/images/44061e10331e.jpeg 750w, /assets/cloned/images/aa29013e94d1.jpeg 828w, /assets/cloned/images/d7056344747e.jpeg 1080w, /assets/cloned/images/113384ee0ec7.jpeg 1200w, /assets/cloned/images/d61698bad5c9.jpeg 1920w, /assets/cloned/images/e3b47c860c28.jpeg 2048w, /assets/cloned/images/55dc492edb28.jpeg 3840w" />
      );
    case "making-an-impact-locally-and-globally":
      return (
        <img className="w-full h-full block absolute top-0 left-0 min-w-0 rounded-2xl overflow-clip object-cover text-clr-1" data-cid="n343" data-component="image" alt="Outreach Ministry" sizes="(max-width: 900px) 425px, 564px" src="/assets/cloned/images/361ef444795f.jpeg" srcSet="/assets/cloned/images/0e3d06a9f1b7.jpeg 16w, /assets/cloned/images/143614555a0b.jpeg 32w, /assets/cloned/images/af54004c27ce.jpeg 48w, /assets/cloned/images/7b52b58f5700.jpeg 64w, /assets/cloned/images/cf75fa197b53.jpeg 96w, /assets/cloned/images/accc0f76a2fb.jpeg 128w, /assets/cloned/images/dac8969e3665.jpeg 256w, /assets/cloned/images/08201a9c6a52.jpeg 384w, /assets/cloned/images/40a782daf76c.jpeg 640w, /assets/cloned/images/96a6a9580eae.jpeg 750w, /assets/cloned/images/90046d3613f3.jpeg 828w, /assets/cloned/images/7a2d9768097e.jpeg 1080w, /assets/cloned/images/01993532b5db.jpeg 1200w, /assets/cloned/images/1725f6dc5516.jpeg 1920w, /assets/cloned/images/70710a62671e.jpeg 2048w, /assets/cloned/images/361ef444795f.jpeg 3840w" />
      );
    case "partnering-with-parents-to-develop-kids-fa":
      return (
        <img className="w-full h-full block absolute top-0 left-0 min-w-0 rounded-2xl overflow-clip object-cover text-clr-1" data-cid="n354" data-component="image" alt="Children’s Ministry" sizes="(max-width: 900px) 425px, 564px" src="/assets/cloned/images/317dfce28d48.jpeg" srcSet="/assets/cloned/images/1d940621b215.jpeg 16w, /assets/cloned/images/87df945543ed.jpeg 32w, /assets/cloned/images/1ed5fb9fde72.jpeg 48w, /assets/cloned/images/4bed551c7a9e.jpeg 64w, /assets/cloned/images/042995369f18.jpeg 96w, /assets/cloned/images/8d7639b36d84.jpeg 128w, /assets/cloned/images/f56970acdf34.jpeg 256w, /assets/cloned/images/3da4508f4464.jpeg 384w, /assets/cloned/images/a8f39f4bcbc4.jpeg 640w, /assets/cloned/images/ad3199006e85.jpeg 750w, /assets/cloned/images/5c0bad3ac7f7.jpeg 828w, /assets/cloned/images/33761622de85.jpeg 1080w, /assets/cloned/images/c8f19c2405d4.jpeg 1200w, /assets/cloned/images/bd2126d86a4f.jpeg 1920w, /assets/cloned/images/0c4c709f4b98.jpeg 2048w, /assets/cloned/images/317dfce28d48.jpeg 3840w" />
      );
    case "developing-youth-who-influence-culture":
      return (
        <img className="w-full h-full block absolute top-0 left-0 min-w-0 rounded-2xl overflow-clip object-cover text-clr-1" data-cid="n365" data-component="image" alt="Youth Ministry" sizes="(max-width: 900px) 425px, 564px" src="/assets/cloned/images/0087e771ceb5.jpeg" srcSet="/assets/cloned/images/f00a51cbeace.jpeg 16w, /assets/cloned/images/f248a06d3c00.jpeg 32w, /assets/cloned/images/a05a3beec29f.jpeg 48w, /assets/cloned/images/b55fc39df2b1.jpeg 64w, /assets/cloned/images/e4a8e6662d4c.jpeg 96w, /assets/cloned/images/13b0ece55466.jpeg 128w, /assets/cloned/images/aff9ca50caf4.jpeg 256w, /assets/cloned/images/17f0ab786030.jpeg 384w, /assets/cloned/images/7f028fc5dd60.jpeg 640w, /assets/cloned/images/2d0359172f97.jpeg 750w, /assets/cloned/images/0a331ca4c39c.jpeg 828w, /assets/cloned/images/75141159c7d2.jpeg 1080w, /assets/cloned/images/980d5aff118f.jpeg 1200w, /assets/cloned/images/ee8eabfb4658.jpeg 1920w, /assets/cloned/images/2b4fd7804fd1.jpeg 2048w, /assets/cloned/images/0087e771ceb5.jpeg 3840w" />
      );
    case "building-community-deepening-faith":
      return (
        <img className="w-full h-full block absolute top-0 left-0 min-w-0 rounded-2xl overflow-clip object-cover text-clr-1" data-cid="n376" data-component="image" alt="Young Adult Ministry" sizes="(max-width: 900px) 425px, 564px" src="/assets/cloned/images/4c902e2588bb.jpg" srcSet="/assets/cloned/images/81208dd37b7c.jpg 16w, /assets/cloned/images/afa87810d1b8.jpg 32w, /assets/cloned/images/d8356ff8d11b.jpg 48w, /assets/cloned/images/7b608a37a3d6.jpg 64w, /assets/cloned/images/9d4a6961f874.jpg 96w, /assets/cloned/images/ca801106a190.jpg 128w, /assets/cloned/images/6701c8059760.jpg 256w, /assets/cloned/images/90f2a20aff7e.jpg 384w, /assets/cloned/images/21d63d293624.jpg 640w, /assets/cloned/images/bf361c44c021.jpg 750w, /assets/cloned/images/8cfe6155c6f5.jpg 828w, /assets/cloned/images/1e52220c96c9.jpg 1080w, /assets/cloned/images/b0fc40676fed.jpg 1200w, /assets/cloned/images/a181ca7c96a9.jpg 1920w, /assets/cloned/images/374b1354d402.jpg 2048w, /assets/cloned/images/4c902e2588bb.jpg 3840w" />
      );
    case "inspiring-your-faith-and-creating-an-atmos":
      return (
        <div className="w-288 block absolute top-0 z-10 min-w-0 max-h-91.5 rounded-2xl overflow-hidden object-cover h-full max-md:w-[21.4375rem] md:max-lg:w-90" data-cid="n387">
          <div className="block w-full h-full" data-cid="n388">
            <img className="w-full h-91.5 block absolute rounded-2xl overflow-clip object-cover text-clr-1" data-cid="n389" data-component="image" alt="Worship Ministry" sizes="(max-width: 900px) 425px, 564px" src="/assets/cloned/images/0ace6a49afc3.png" srcSet="/assets/cloned/images/e9f0058995e7.png 16w, /assets/cloned/images/f9ee00a3ab18.png 32w, /assets/cloned/images/7a959951b435.png 48w, /assets/cloned/images/49f8696d3cf7.png 64w, /assets/cloned/images/87e8aa8c50f6.png 96w, /assets/cloned/images/db9a4350b1fb.png 128w, /assets/cloned/images/5cd14b54f384.png 256w, /assets/cloned/images/1078c46fdddf.png 384w, /assets/cloned/images/7179d2d8712b.png 640w, /assets/cloned/images/493c6255faab.png 750w, /assets/cloned/images/5edf9498a499.png 828w, /assets/cloned/images/eb7e5c0d1d14.png 1080w, /assets/cloned/images/d98e3096229c.png 1200w, /assets/cloned/images/2eb6444e6028.png 1920w, /assets/cloned/images/2400aa7107c6.png 2048w, /assets/cloned/images/0ace6a49afc3.png 3840w" />
          </div>
        </div>
      );
    default:
      return null;
  }
}
