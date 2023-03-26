import React from 'react';
import picture from '../components/me.png';
 function ProfilePhoto() {
  return (
    <div className="ProfilePhoto">
      <img src={picture} alt="me" />
    </div>
  );
}

export default ProfilePhoto;
