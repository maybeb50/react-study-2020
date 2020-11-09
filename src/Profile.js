import React from 'react';

const ProfileData = {
    bamdal: {
        name: '밤달', 
        description: '검은 고양이, 너구리 고양이'
    }
}

function Profile ({ match }) {
    console.log(match.params);
    const { username } = match.params;
    const profile = ProfileData[username];

    if(!profile) {
        return <div>존재하지 않는 사용자 입니다.</div>
    }

    return(
        <div>
            <h3>
                { username } ({ profile.name })
            </h3>
            <p>
                { profile.description }
            </p>
        </div>
    )
}

export default Profile;