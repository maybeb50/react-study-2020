import React from 'react';
import qs from 'qs';

function About({ location }) {
    console.log(location);

    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true,
    });
    const detail = query.detail === 'true';

    console.log(query);

    return(
        <div>
            About
            { detail && <p>detail 값이 true입니다.</p>}
        </div>
    );
}

export default About;