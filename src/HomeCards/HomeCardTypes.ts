type FlexWrap = "wrap" | "nowrap" | "wrap-reverse";

export type Styles = {
  size: {
    display: string;
    justifyContent: string;
    flexWrap?: FlexWrap;
    width: string;
  };
  image: {
    width: string;
    height: string;
  };
  bottom: {
    height: string;
    display: string;
    justifyContent: string;
  };
  text: {
    display: string;
    flexWrap?: FlexWrap;
    justifyContent: string;
  };
};
