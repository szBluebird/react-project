/*
* CharacterSearchPage
*
* Look up characters
*/
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import H1 from 'components/H1';
import H2 from 'components/H2';
import H3 from 'components/H3';
import CharacterInfo from 'components/CharacterInfo';
import OrganizationInfo from 'components/OrganizationInfo';
import CenteredSection from './CenteredSection';
import Section from './Section';
import messages from './messages';
import Form from './Form';
import Input from './Input';
import Date from './Date';
import { changeCharacterName, loadCharacterData} from './actions';
import { makeSelectCharacterName, makeSelectCharacter, makeSelectOrganization, makeSelectDate, makeSelectLoading, makeSelectError } from './selectors';
import reducer from './reducer';
import saga from './saga';
import {convertToEuropeanDate} from 'helpers/dateHelper'
import LoadingIndicator from 'components/LoadingIndicator';


export class CharacterSearchPage extends React.PureComponent {

    componentDidMount() {
        if (this.props.characterName && this.props.characterName.trim().length > 0) {
            this.props.onSubmitForm();
        }
    }

    render() {

        const { character, organization, date, error, loading } = this.props;
        const euDate = String(convertToEuropeanDate(date));

        const characterInfo = {error, character};

        return (
            <article>
                <Helmet>
                    <title>Character Search Page</title>
                    <meta name="description" content="The home page" />
                </Helmet>
                <div>
                    <Section>
                        <H1>
                            <FormattedMessage {...messages.header} />
                        </H1>
                        <Form onSubmit={this.props.onSubmitForm}>
                          <label htmlFor="characterName">
                            <FormattedMessage {...messages.characterSearch} />
                            <Input
                              id="characterName"
                              type="text"
                              placeholder="E.g. Thoice"
                              value={this.props.characterName}
                              onChange={this.props.onChangeCharacterName}
                            />
                          </label>
                        </Form>
                        <div>
                            {loading === true && <div> <LoadingIndicator /> </div> }
                            <CharacterInfo {...characterInfo}/>
                            {character && <OrganizationInfo organization={organization}/>}
                            {date && <Date> <i> <FormattedMessage
                                 {...messages.lastUpdateDate}
                                 values={{
                                   date: euDate,
                                 }}
                             /> </i> </Date>}
                        </div>
                    </Section>
                </div>
            </article>
        );
    }
}


CharacterSearchPage.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.bool,
    ]),
    character: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.bool,
    ]),
    organization: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.bool,
    ]),
    date: PropTypes.string,
    characterName: PropTypes.string,
    onSubmitForm: PropTypes.func,
    onChangeCharacterName: PropTypes.func,
}

export function mapDispatchToProps(dispatch) {
    return {
        onChangeCharacterName: (evt) => dispatch(changeCharacterName(evt.target.value)),
        onSubmitForm: (evt) => {
            if (evt !== undefined && evt.preventDefault)
                evt.preventDefault();
            dispatch(loadCharacterData());
        },
    };
}

const mapStateToProps = createStructuredSelector({
  character: makeSelectCharacter(),
  organization: makeSelectOrganization(),
  date: makeSelectDate(),
  characterName: makeSelectCharacterName(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'characterSearch', reducer });
const withSaga = injectSaga({ key: 'characterSearch', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CharacterSearchPage);
