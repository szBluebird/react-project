/*
 * FeaturePage Messages
 *
 * This contains all the text for the FeaturePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'boilerplate.containers.AboutPage.header',
    defaultMessage: 'About',
  },
  headerApi: {
    id: 'boilerplate.containers.AboutPage.headerApi',
    defaultMessage: 'The API',
  },
  headerBoilerplate: {
    id: 'boilerplate.containers.AboutPage.headerBoilerplate',
    defaultMessage: 'The Boilerplate',
  },
  purpose: {
    id: 'boilerplate.containers.AboutPage.purpose',
    defaultMessage: `
        The purpose of this project is to learn how to develop websites with a robust and scalable infrastructure.
        This is currently a very simple website; thus the boilerplate is a bit of an overkill, but it is used for the sake
        of the learning experience.
        `,
  },
  findLink: {
    id: 'boilerplate.containers.AboutPage.findLink',
    defaultMessage: 'The boilerplate used for this project can be found here:',
  },
  apiLink: {
    id: 'boilerplate.containers.AboutPage.apiLink',
    defaultMessage: 'The following link is used for querying character information, where the name Thoice can be replaced by user submitted names.',
  },
  exampleNames: {
    id: 'boilerplate.containers.AboutPage.exampleNames',
    defaultMessage: 'On the search page you can try following names: ',
  },
  exampleNamesResult: {
    id: 'boilerplate.containers.AboutPage.exampleNamesResult',
    defaultMessage: `
        The first name should return both character information and organization information.
        The second name should return character information, but no organization information.
        The third name should not find a character, as it is an illegal name.
        `,
  },
});
