// Per-instance class overrides, merged onto each component's shared base classes with cn().

export type FeatureGridItemStyles = {
  className: string;
  className2?: string;
};
export type FeatureCardStyles = {
  className: string;
  className2: string;
  className3: string;
  className4?: string;
};

export const FeatureGridItem_styles: FeatureGridItemStyles[] = [
    { className: "col-start-[span_3] col-end-[span_3]" },
    { className: "col-start-[span_3] col-end-[span_3]" },
    { className: "col-start-[span_2] col-end-[span_2]" },
    { className: "col-start-[span_2] col-end-[span_2]" },
    { className: "col-start-[span_2] col-end-[span_2]" },
    { className: "col-start-[span_6] col-end-[span_6]", className2: "w-1/2 max-lg:w-full" }
];
export const FeatureCard_styles: FeatureCardStyles[] = [
    { className: "max-md:h-[427.3px] md:max-lg:h-[658.7px]", className2: "h-[15.3125rem] max-md:h-[14.3125rem] md:max-lg:h-[30.6875rem]", className3: "h-[174.7px] max-md:h-[198.7px]" },
    { className: "max-md:h-[25.15rem] md:max-lg:h-[41.05rem]", className2: "h-61 max-md:h-57 md:max-lg:h-[30.5625rem]", className3: "h-[10.975rem] max-md:h-[174.7px]", className4: "md:max-lg:h-[41.3px]" },
    { className: "max-md:h-[403.3px] md:max-lg:h-[658.7px]", className2: "h-[15.3125rem] max-md:h-[14.3125rem] md:max-lg:h-[30.6875rem]", className3: "h-[174.7px]", className4: "md:max-lg:h-[41.3px]" }
];
