import FeatureCard from "../components/feature-card";
import { FeatureCard_cids } from "../_cids";
import { FeatureCard_styles } from "../_styles";
import { features2 as featuresContent } from "../content";
/** Feature Grid section. */
export default function FeatureGridSection3({ features = featuresContent } = {}) {
  return (
    <div className="block max-w-300 mx-auto px-6 max-lg:px-4" data-cid="n397">
      <div className="block" data-cid="n398">
        <div className="block py-12 w-full" data-cid="n399">
          <div className="flex mb-12 flex-col gap-4 text-center" data-cid="n400">
            <h2 className="block text-5xl font-bold leading-14 max-md:text-[2rem] max-md:leading-[2.3125rem] md:max-lg:text-[2.5625rem] md:max-lg:leading-12" data-cid="n401" data-component="heading">
              How To Get Involved
            </h2>
            <p className="block text-color-002 font-bold" data-cid="n402">
              <span className="inline text-2xl leading-8 max-md:text-xl max-md:leading-[1.6875rem] md:max-lg:text-[1.3125rem] md:max-lg:leading-7" data-cid="n403">
                See how God can use your gifts to make an eternal impact.
              </span>
            </p>
          </div>
          <div className="flex gap-6 w-full max-lg:flex-col max-lg:gap-4 grid-cols-1 lg:grid-cols-3" data-cid="n404">
            {features.map((d, i) => <FeatureCard key={i} d={d} cids={FeatureCard_cids[i]} styles={FeatureCard_styles[i]} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
