import React from 'react'
import AboutMe from './component/about-me'
import ProfessionalExperience from './component/professional-experience'
import { aboutMe, skills, professionalData } from '../data/page-data'

const page = () => {
  return (
    <div>
      <AboutMe data = {aboutMe} skills = { skills } />
      <ProfessionalExperience data = {professionalData} />
    </div>
  )
}

export default page