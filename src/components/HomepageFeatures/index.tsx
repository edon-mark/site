import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Drag and drop",
    Svg: require("@site/static/img/logo.svg").default,
    description: (
      <>
        Design user interfaces quickly with a fast and intuitive drag-and-drop
        system, eliminating the need for complex coding. This feature makes the
        design process simple and enjoyable.
      </>
    ),
  },
  {
    title: "UI Kit Integration",
    Svg: require("@site/static/img/logo.svg").default,
    description: (
      <>
        Seamlessly integrate UI Kits to access a ready-to-use collection of
        components and styles, enabling you to build professional and consistent
        designs with ease.
      </>
    ),
  },
  {
    title: "Download Software",
    Svg: require("@site/static/img/logo.svg").default,
    description: (
      <>
        Easily download and install the software on your preferred operating
        system. Get the latest version and start designing right away.
        <br />
        <a href="https://github.com/edon-mark/site/releases">Download</a>
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
