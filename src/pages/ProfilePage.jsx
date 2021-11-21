import React from 'react'
import "../assets/styles/global2.css"

import Posts from '../components/Profile/Posts/Posts'
import ProfileLanguages from '../components/Profile/ProfileLanguages/ProfileLanguages'
import Technologies from '../components/Profile/Technologies/Technologies'
import ProfileEducation from '../components/Profile/ProfileEducation/ProfileEducation'
import ProfileMain from '../components/Profile/ProfileMain/ProfileMain'
import ProfileSkills from '../components/Profile/Profileskills/ProfileSkills'
import ProfileAbout from '../components/Profile/ProfileAbout/ProfileAbout'



const ProfilePage = () => {
    return (
        <div>
            <ProfileMain/>,
            <ProfileAbout/>,
            <ProfileSkills/>,
            <ProfileEducation/>,
            <Technologies/>,
            <ProfileLanguages/>,
            <Posts/>
        </div>

    )
}

export default ProfilePage