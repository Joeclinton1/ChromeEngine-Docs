import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Feature-Rich',
    Svg: require('../../static/img/undraw_maker_launch.svg').default,
    description: (
      <>
        ChromeEngine comes loaded with a wide array of features to help you create impressive 3D games.
      </>
    ),
  },
  {
    title: 'Make Games Fast',
    Svg: require('../../static/img/undraw_in_no_time.svg').default,
    description: (
      <>
        With its user-friendly code, ChromeEngine makes 3D game development in Scratch a breeze.
      </>
    ),
  },
  {
    title: 'Easy To Edit',
    Svg: require('../../static/img/undraw_innovative.svg').default,
    description: (
      <>
        Because ChromeEngine is built with Scratch, you can easily edit and modify both your game and the 3D engines code.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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