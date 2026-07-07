import Navbar from "./sections/navbar";
import HeroSection from "./sections/hero-section";
import FeatureGridSection from "./sections/feature-grid-section";
import DiscoverMoreWaysSection from "./sections/discover-more-ways-section";
import FeatureGridSection2 from "./sections/feature-grid-section2";
import FeatureGridSection3 from "./sections/feature-grid-section3";
import MediaTile, { type MediaTileData } from "./components/media-tile";
import { MediaTile_cids } from "./_cids";

const MediaTile_data: MediaTileData[] = [
    { href: "/sermons", id: "ec-mobile-central-sub-nav-sermons", ariaLabel: "Sermons", datatestid: "PlayCircleOutlineIcon", icon: <>
            <path d="m10 16.5 6-4.5-6-4.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8" />
            </>, label: "Sermons" },
    { href: "/streaming", id: "ec-mobile-online-sub-nav-streaming", ariaLabel: "Streaming", datatestid: "SensorsIcon", icon: <>
            <path d="M7.76 16.24C6.67 15.16 6 13.66 6 12s.67-3.16 1.76-4.24l1.42 1.42C8.45 9.9 8 10.9 8 12s.45 2.1 1.17 2.83zm8.48 0C17.33 15.16 18 13.66 18 12s-.67-3.16-1.76-4.24l-1.42 1.42C15.55 9.9 16 10.9 16 12s-.45 2.1-1.17 2.83zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m8 2c0 2.21-.9 4.21-2.35 5.65l1.42 1.42C20.88 17.26 22 14.76 22 12s-1.12-5.26-2.93-7.07l-1.42 1.42C19.1 7.79 20 9.79 20 12M6.35 6.35 4.93 4.93C3.12 6.74 2 9.24 2 12s1.12 5.26 2.93 7.07l1.42-1.42C4.9 16.21 4 14.21 4 12s.9-4.21 2.35-5.65" />
            </>, label: "Streaming" },
    { href: "/locations", id: "ec-mobile-central-sub-nav-locations", ariaLabel: "Locations", datatestid: "PinDropOutlinedIcon", icon: <>
            <path d="M12 4c1.93 0 5 1.4 5 5.15 0 2.16-1.72 4.67-5 7.32-3.28-2.65-5-5.17-5-7.32C7 5.4 10.07 4 12 4m0-2C8.73 2 5 4.46 5 9.15c0 3.12 2.33 6.41 7 9.85 4.67-3.44 7-6.73 7-9.85C19 4.46 15.27 2 12 2" />
            <path d="M12 7c-1.1 0-2 .9-2 2s.9 2 2 2a2 2 0 1 0 0-4M5 20h14v2H5z" />
            </>, label: "Locations" },
    { href: "/giving", id: "ec-mobile-giving-sub-nav-giving", ariaLabel: "Giving", datatestid: "VolunteerActivismOutlinedIcon", icon: <>
            <path d="M16 13c3.09-2.81 6-5.44 6-7.7C22 3.45 20.55 2 18.7 2c-1.04 0-2.05.49-2.7 1.25C15.34 2.49 14.34 2 13.3 2 11.45 2 10 3.45 10 5.3c0 2.26 2.91 4.89 6 7.7m-2.7-9c.44 0 .89.21 1.18.55L16 6.34l1.52-1.79c.29-.34.74-.55 1.18-.55.74 0 1.3.56 1.3 1.3 0 1.12-2.04 3.17-4 4.99-1.96-1.82-4-3.88-4-4.99 0-.74.56-1.3 1.3-1.3M19 16h-2c0-1.2-.75-2.28-1.87-2.7L8.97 11H1v11h6v-1.44l7 1.94 8-2.5v-1c0-1.66-1.34-3-3-3M3 20v-7h2v7zm10.97.41L7 18.48V13h1.61l5.82 2.17c.34.13.57.46.57.83 0 0-1.99-.05-2.3-.15l-2.38-.79-.63 1.9 2.38.79c.51.17 1.04.26 1.58.26H19c.39 0 .74.23.9.56z" />
            </>, label: "Giving" },
    { href: "/egroups", id: "ec-mobile-egroups-sub-nav-groups", ariaLabel: "Groups", datatestid: "GroupsOutlinedIcon", icon: <>
            <path d="M4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58C.48 14.9 0 15.62 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29M20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m4 3.43c0-.81-.48-1.53-1.22-1.85-.85-.37-1.79-.58-2.78-.58-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24zm-7.76-2.78c-1.17-.52-2.61-.9-4.24-.9s-3.07.39-4.24.9C6.68 14.13 6 15.21 6 16.39V18h12v-1.61c0-1.18-.68-2.26-1.76-2.74M8.07 16c.09-.23.13-.39.91-.69.97-.38 1.99-.56 3.02-.56s2.05.18 3.02.56c.77.3.81.46.91.69zM12 8c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m0-2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3" />
            </>, label: "Groups" }
];

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="block" data-cid="n42">
        <div className="w-5 h-full block fixed top-0 z-1199" data-cid="n43" />
      </div>
      <main className="block" data-cid="n44" id="main-content">
        <div className="block w-full" data-cid="n45">
          <div className="w-full border-b-2 border-solid border-b-clr-0 hidden sticky top-18.5 bg-background max-md:w-[23.4375rem] max-md:h-[5.875rem] max-md:block" data-cid="n46">
            <nav className="block relative py-4 overflow-hidden w-full" data-cid="n47">
              <div className="block absolute top-0 right-0 z-10 pointer-events-none h-full w-20" style={{ backgroundImage: "linear-gradient(to left, var(--background), var(--clr-1))" }} data-cid="n48" />
              <div className="block relative w-full" data-cid="n49">
                <div className="block overflow-hidden w-full" data-cid="n50">
                  <div className="flex" data-cid="n51">
                    {MediaTile_data.map((d, i) => <MediaTile key={i} d={d} cids={MediaTile_cids[i]} />)}
                    <div className="block min-w-0 max-w-[fit-content]" data-cid="n77">
                      <a className="flex flex-col items-center cursor-pointer w-[4.5rem]" data-cid="n78" href="/events" id="ec-mobile-egroups-sub-nav-events">
                        <span className="block min-w-0 text-color-002 text-xs leading-5 tracking-[0.4px] text-center" data-cid="n79">
                          Events
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="block" data-cid="n80">
          <HeroSection />
          <FeatureGridSection />
          <DiscoverMoreWaysSection />
          <FeatureGridSection2 />
          <FeatureGridSection3 />
        </div>
      </main>
      {" "}
    </>
  );
}
