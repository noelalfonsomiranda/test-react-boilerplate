/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';

import { Helmet } from 'react-helmet';

import H1 from 'components/H1';
import { GLOBAL_VARIABLE } from '../App/constants';

export function HomePage() {
  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div>
        <H1>Home</H1>
        <p>{GLOBAL_VARIABLE}</p>
      </div>
    </article>
  );
}

export default HomePage
