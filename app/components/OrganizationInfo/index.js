import React from 'react';
import { FormattedMessage } from 'react-intl';
import H3 from 'components/H3';
import messages from './messages';

function OrganizationInfo(props) {

    let organization = props.organization;
    let content;

    if(organization === null)
        content = <FormattedMessage {...messages.organizationNotFound} />
    else
        content = <div>
            <FormattedMessage
                {...messages.name}
                values={{
                    name: organization.NAME,
                }}
            />
            <br />
            <FormattedMessage
                {...messages.rank}
                values={{
                    rank: organization.RANK_TITLE,
                }}
            />
        </div>

    return <div>
        <H3> <FormattedMessage {...messages.header} /> </H3>
        {content}
    </div>;

}
export default OrganizationInfo;
