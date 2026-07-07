import Icon from "../svgs/svg-icon";
import Icon2 from "../svgs/svg-icon2";
import Icon3 from "../svgs/svg-icon3";
import TextLink, { type TextLinkData } from "../components/text-link";
import Icon4 from "../svgs/svg-icon4";
import Icon5 from "../svgs/svg-icon5";
import { TextLink_cids } from "../_cids";
const TextLink_data: TextLinkData[] = [
    { href: "/giving", id: "ec-nav-central-nav-bar-give", description: "Give" },
    { href: "/egroups", id: "ec-nav-central-nav-bar-groups", description: "Groups" },
    { href: "/eteams", id: "ec-nav-central-nav-bar-serve", description: "Serve" },
    { href: "/events", id: "ec-nav-central-nav-bar-serve", description: "Events" },
    { href: "/about", id: "ec-nav-central-nav-bar-about", description: "About" }
];
/** Top navigation bar. */
export default function Navbar({ textLinkData = TextLink_data } = {}) {
  return (
    <div className="border-b-2 border-solid border-b-clr-0 block sticky top-0 z-50 bg-background h-20" data-cid="n1">
      <a className="w-[11.75rem] h-14 block absolute -top-[62.4375rem] -left-[62.4375rem] p-4 text-color-001 bg-background cursor-pointer" data-cid="n2" href="#main-content">
        Skip to main content
      </a>
      <a className="w-[9.5875rem] h-14 block absolute -top-[62.4375rem] -left-[62.4375rem] p-4 text-color-001 bg-background cursor-pointer" data-cid="n3" href="#main-nav">
        Skip to main nav
      </a>
      <header className="flex flex-col shrink-0 text-background w-full" data-cid="n4">
        <div className="h-20 min-h-16 flex relative max-w-[106.5625rem] p-4 justify-between items-center mx-auto w-full max-md:min-h-14" data-cid="n5">
          <div className="flex items-center gap-2" data-cid="n6">
            <button className="h-10 flex relative -ml-3 p-2 rounded-[50%] justify-center items-center shrink-0 align-middle text-border [font-family:Arial] text-2xl leading-7 tracking-[normal] text-center cursor-pointer hover:bg-clr-9" data-cid="n7" data-component="button" aria-label="menu" type="button">
              <Icon cid={"n8"} />
            </button>
            <a className="h-8 block cursor-pointer" data-cid="n9" data-component="link" href="/">
              <img className="block overflow-clip aspect-[auto_128/32] text-clr-1 w-32 h-8 max-lg:hidden" data-cid="n10" data-component="image" alt="Elevation Church" height="32" src="/assets/cloned/images/fe1b0393750c.png" srcSet="/assets/cloned/images/0024c4d65166.png 1x, /assets/cloned/images/fe1b0393750c.png 2x" width="128" />
              <img className="hidden overflow-clip aspect-[auto_32/32] text-clr-1 w-8 h-8 max-lg:block" data-cid="n11" alt="Elevation Church" height="32" src="/assets/cloned/svg/691bf17c5cda.svg" srcSet="/assets/cloned/svg/39f34aff3f12.svg 1x, /assets/cloned/svg/691bf17c5cda.svg 2x" width="32" />
            </a>
          </div>
          <div className="block max-w-111 px-4 w-full" data-cid="n12">
            <div className="block" data-cid="n13">
              <div className="block relative bg-background w-full max-md:flex max-md:justify-end" data-cid="n14">
                <div className="border border-solid border-border inline-flex relative px-2 rounded-[36px] items-center text-color-005 leading-[1.4375rem] cursor-text w-full h-10 max-md:hidden" data-cid="n15">
                  <div className="flex max-h-8 mr-2 items-center whitespace-nowrap text-nowrap" data-cid="n16">
                    <span className="w-0 block" data-cid="n17" aria-hidden="true">
                      ​
                    </span>
                    <Icon2 cid={"n18"} />
                  </div>
                  <input className="box-content w-90.5 h-[1.4375rem] block min-w-0 pt-1 pb-[0.3125rem] overflow-clip leading-4 tracking-[0.15px] [animation-name:mui-auto-fill-cancel] [animation-duration:0.01s]" data-cid="n19" data-component="input" aria-label="Search" id="header-input-search" placeholder="Search" type="search" value="" />
                </div>
                <button className="hidden relative p-2 rounded-[50%] justify-center items-center shrink-0 align-middle text-color-005 [font-family:Arial] text-2xl leading-7 tracking-[normal] text-center cursor-pointer w-6 h-6 max-md:flex" data-cid="n20" type="button">
                  <Icon3 cid={"n21"} />
                </button>
                <div className="block absolute top-0 inset-x-0 h-full max-md:min-w-0" data-cid="n22" data-component="button" aria-label="Open search" role="button" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6 max-lg:hidden" data-cid="n23">
            {textLinkData.map((d, i) => <TextLink key={i} d={d} cids={TextLink_cids[i]} />)}
            <div className="flex items-center gap-4 max-lg:hidden" data-cid="n34">
              <button className="basis-full shrink-0 h-12 flex relative p-2 rounded-[50%] justify-center items-center align-middle text-color-005 [font-family:Arial] text-2xl leading-7 tracking-[normal] text-center cursor-pointer hover:bg-clr-10" data-cid="n35" data-component="button" aria-label="Login to your account" type="button">
                <div className="flex relative rounded-[50%] justify-center items-center shrink-0 overflow-hidden text-background [font-family:'DM_Sans',_'DM_Sans_Fallback'] text-xl leading-5 tracking-[0.14px] bg-border w-8 h-8" data-cid="n36">
                  <Icon4 cid={"n37"} />
                </div>
              </button>
            </div>
          </div>
          <div className="hidden min-w-0 items-center gap-4 max-lg:flex" data-cid="n38">
            <button className="basis-full shrink-0 inline-flex relative p-2 rounded-[50%] justify-center items-center align-middle text-color-005 [font-family:Arial] text-2xl leading-7 tracking-[normal] text-center cursor-pointer max-lg:h-12 max-lg:flex" data-cid="n39" aria-label="Login to your account" type="button">
              <div className="flex relative min-w-0 rounded-[50%] justify-center items-center shrink-0 overflow-hidden text-background [font-family:'DM_Sans',_'DM_Sans_Fallback'] text-xl leading-5 tracking-[0.14px] bg-border w-8 h-8" data-cid="n40">
                <Icon5 cid={"n41"} />
              </div>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
