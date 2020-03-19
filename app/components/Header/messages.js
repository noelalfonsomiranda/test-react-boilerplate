/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  pageOne: {
    id: `${scope}.pageOne`,
    defaultMessage: 'Page 1',
  },
  pageTwo: {
    id: `${scope}.pageTwo`,
    defaultMessage: 'Page 2',
  },
});
