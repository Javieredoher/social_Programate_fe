import React from 'react'
import "../assets/styles/global2.css"
import ProfileAbout from '../components/ProfileAbout/ProfileAbout'

import Posts from '../components/Posts/Posts'
import ProfileLanguages from '../components/ProfileLanguages/ProfileLanguages'
import Technologies from '../components/Technologies/Technologies'
import ProfileEducation from '../components/ProfileEducation/ProfileEducation'
import ProfileMain from '../components/ProfileMain/ProfileMain'
import ProfileSkiles from '../components/ProfileSkiles/ProfileSkiles'



const App = () => {
    return (
        <div>
            <ProfileMain/>,
            <ProfileAbout/>,
            <ProfileSkiles/>,
            <ProfileEducation/>,
            <Technologies/>,
            <ProfileLanguages/>,
            <Posts/>
        </div>

    )
}

export default App