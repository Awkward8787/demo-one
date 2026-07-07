// Semantic page content extracted from recognized recipe sections.

export type FeaturesItem = {
  variant: string;
  title: string;
  description: string;
  label: string;
  href: string;
  target: string;
  id?: string;
};
export const features: FeaturesItem[] = [
    { variant: "connecting-people-activating-faith", title: "Connecting people. Activating faith.", description: "eGroup Ministry", label: "Learn more", href: "/egroups/about", target: "_self" },
    { variant: "making-an-impact-locally-and-globally", title: "Making an impact – locally and globally.", description: "Outreach Ministry", label: "Learn more", href: "/outreach", target: "_self" },
    { variant: "partnering-with-parents-to-develop-kids-fa", title: "Partnering with parents to develop kids’ faith.", description: "Children’s Ministry", label: "Learn more", href: "/ekidz", target: "_self" },
    { variant: "developing-youth-who-influence-culture", title: "Developing youth who influence culture.", description: "Youth Ministry", label: "Learn more", href: "/youth", target: "_self", id: "ec-home-yth-ministry-learn-more" },
    { variant: "building-community-deepening-faith", title: "Building community. Deepening faith.", description: "Young Adult Ministry", label: "Learn more", href: "/young-adults", target: "_self", id: "ec-home-Young Adults-ministry-learn-more" },
    { variant: "inspiring-your-faith-and-creating-an-atmos", title: "Inspiring your faith and creating an atmosphere of worship to God.", description: "Worship Ministry", label: "Learn more", href: "https://elevationworship.com/", target: "_blank", id: "ec-home-worship-ministry-learn-more" }
];

export type Features2Item = {
  imgSrc: string;
  srcSet: string;
  title: string;
  description: string;
  href: string;
  id: string;
};
export const features2: Features2Item[] = [
    { imgSrc: "/assets/cloned/images/937a2097ff8b.jpeg", srcSet: "/assets/cloned/images/50ac04a62bec.jpeg 1x, /assets/cloned/images/937a2097ff8b.jpeg 2x", title: "Volunteer", description: "Participate in the mission to advance the gospel by serving on a volunteer team.", href: "/eteams", id: "ec-home-volunteer-get-involved-volunteer-learn-more" },
    { imgSrc: "/assets/cloned/images/db62d67c9da7.jpeg", srcSet: "/assets/cloned/images/7553c0b5304f.jpeg 1x, /assets/cloned/images/db62d67c9da7.jpeg 2x", title: "Lead", description: "Lead an eGroup, host a Watch Party or become a student leader.", href: "/lead", id: "ec-home-central-get-involved-lead-learn-more" },
    { imgSrc: "/assets/cloned/images/91d355bbd2d9.jpeg", srcSet: "/assets/cloned/images/dbf3e573e545.jpeg 1x, /assets/cloned/images/91d355bbd2d9.jpeg 2x", title: "Jobs", description: "Explore job opportunities to use your gifts in a ministry setting.", href: "/opportunities", id: "ec-home-HR-get-involved-jobs-learn-more" }
];

