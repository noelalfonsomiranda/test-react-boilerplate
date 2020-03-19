/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';

import { Helmet } from 'react-helmet';

import { GLOBAL_VARIABLE } from '../App/constants';

import H1 from 'components/H1';

export class PageTwo extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>Page 2</title>
          <meta
            name="description"
            content="Test"
          />
        </Helmet>
        <H1>
          Page 2
        </H1>
        <p>{GLOBAL_VARIABLE}</p>
      </div>
    )
  }
}

export default PageTwo
