import React from 'react';

function DefinitionsList(props)  {

    const { data } = props;
    return (
        <dl>
            {data.map(
                item =>  (
                        <React.Fragment key={item.id}>
                            <dt>{item.dt}</dt>
                            <dd>{item.dd}</dd>
                        </React.Fragment>
                )
            )}
        </dl>
    );
}


export default DefinitionsList;
