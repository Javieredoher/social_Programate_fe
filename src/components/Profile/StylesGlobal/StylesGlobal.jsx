import React from 'react'


import Posts from '../Posts/Posts'
import ProfileAbout from '../ProfileAbout/ProfileAbout'
import ProfileEducation from '../ProfileEducation/ProfileEducation'
import ProfileLanguages from '../ProfileLanguages/ProfileLanguages'
import ProfileMain from '../ProfileMain/ProfileMain'
import ProfileSkills from '../Profileskills/ProfileSkills'
import Technologies from '../Technologies/Technologies'
import styles from './StylesGlobal.module.css'

const StylesGlobal = () => {
    return (
        <div className={styles.container}>
            <ProfileMain/>
            <ProfileAbout/>
            <ProfileSkills/>
            <ProfileEducation/>
            <Technologies/>
            <ProfileLanguages/>
            <Posts/>
        </div>
    )
}

export default StylesGlobal
