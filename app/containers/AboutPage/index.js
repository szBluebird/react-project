/*
 * AboutPage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import H3 from 'components/H3';
import messages from './messages';
import Link from './Link';

export default class AboutPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>About Page</title>
          <meta name="description" content="About page" />
        </Helmet>

        <H1> <FormattedMessage {...messages.header} /> </H1>
        <p> <FormattedMessage {...messages.purpose} /> </p>

        <H3> <FormattedMessage {...messages.headerBoilerplate} /> </H3>
        <p> <FormattedMessage {...messages.findLink} /> </p>
        <Link>
            <a href="https://github.com/react-boilerplate/react-boilerplate"  target="_blank"> https://github.com/react-boilerplate/react-boilerplate </a>
        </Link>

        <H3> <FormattedMessage {...messages.headerApi} /> </H3>
        <p> <FormattedMessage {...messages.apiLink} /> </p>
        <Link>
            <a href="http://people.anarchy-online.com/character/bio/d/5/name/Thoice/bio.xml?data_type=json"  target="_blank"> http://people.anarchy-online.com/character/bio/d/5/name/Thoice/bio.xml?data_type=json </a>
        </Link>
        <p> <FormattedMessage {...messages.exampleNames} /> </p>
        <ul>
          <li>Thoice</li>
          <li>Andrak</li>
          <li>123123</li>
        </ul>
        <p> <FormattedMessage {...messages.exampleNamesResult} /> </p>

      </div>
    );
  }
}
