import React from 'react';
import { FormattedMessage } from 'react-intl';
import H3 from 'components/H3';
import messages from './messages';


function CharacterInfo({ error, character }) {

    let content;

    if(error === false && character === false)
        return null;

    if (error !== false)
        content =  <FormattedMessage {...messages.characterNotFound} />

    if (character !== false)
        content = <div>

            <FormattedMessage
                {...messages.characterName}
                values={{
                    firstname: character.FIRSTNAME,
                    name: character.NAME,
                    lastname: character.LASTNAME,
                }}
            />
            <br/>

            <FormattedMessage
                {...messages.characterProfession}
                values={{
                    profession: character.PROF
                }}
            />
            <br/>

            <FormattedMessage
                {...messages.characterLevel}
                values={{
                    level: character.LEVELX,
                    professionName: character.PROFNAME
                }}
            />
            <br/>

            <FormattedMessage
                {...messages.characterAlienLevel}
                values={{
                    alienLevel: character.ALIENLEVEL,
                    alienRankName: character.RANK_name
                }}
            />
            <br/>

            <FormattedMessage
                {...messages.characterFaction}
                values={{
                    faction: character.SIDE
                }}
            />
            <br/>

            <FormattedMessage
                {...messages.characterSex}
                values={{
                    sex: character.SEX
                }}
            />
            <br/>

            <FormattedMessage
                {...messages.characterBreed}
                values={{
                    breed: character.BREED
                }}
            />
            <br/>

            <FormattedMessage
                {...messages.characterPvpRating}
                values={{
                    pvpRating: character.PVPRATING
                }}
            />
            
        </div>

    return <div>
        <H3> <FormattedMessage {...messages.header} /> </H3>
        {content}
    </div>;

}
export default CharacterInfo;
