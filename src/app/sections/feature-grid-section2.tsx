import FeatureGridItem from "../components/feature-grid-item";
import { FeatureGridItem_cids } from "../_cids";
import { FeatureGridItem_styles } from "../_styles";
import { features as featuresContent } from "../content";
/** Feature Grid section. */
export default function FeatureGridSection2({ features = featuresContent } = {}) {
  return (
    <div className="block bg-clr-8 mx-auto w-full max-w-[100vw]" data-cid="n322">
      <div className="block max-w-300 mx-auto py-20 px-6 max-lg:px-4" data-cid="n323">
        <div className="flex mb-12 flex-col gap-4 text-center" data-cid="n324">
          <h2 className="block text-5xl font-bold leading-14 max-md:text-[2rem] max-md:leading-[2.3125rem] md:max-lg:text-[2.5625rem] md:max-lg:leading-12" data-cid="n325" data-component="heading">
            A place for you and your family
          </h2>
          <p className="block mx-auto text-color-002 max-w-2xl" data-cid="n326">
            <span className="inline text-2xl font-bold leading-8 max-md:text-xl max-md:leading-[1.6875rem] md:max-lg:text-[1.3125rem] md:max-lg:leading-7" data-cid="n327">
              Join small groups, get involved in outreach, and discover ways for your whole family to grow in their faith.
            </span>
          </p>
        </div>
        <div className="grid gap-6 grid-rows-3 w-full grid-cols-6 max-lg:gap-4 max-md:grid-rows-6 max-md:grid-cols-1 md:max-lg:grid-cols-2" data-cid="n328">
          {features.map((d, i) => <FeatureGridItem key={d.variant} d={d} cids={FeatureGridItem_cids[i]} styles={FeatureGridItem_styles[i]} />)}
        </div>
      </div>
    </div>
  );
}
