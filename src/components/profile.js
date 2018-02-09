import React from 'react';
import './profile.css';

function Profile(prop) {
  return (
    <div className="Profile-Main">
      <img className='Profile-Picture' src={prop.profile.imageUrl} alt="profile pic" />
      <div className="Profile-Name">
        <b> {prop.profile.name} </b>
      </div>
    </div>
  )
}

export default Profile;
