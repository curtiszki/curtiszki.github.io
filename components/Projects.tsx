import React from 'react'
import { SectionWrapper, SectionContent } from './ui/section-wrapper'
import { SectionTitle } from './ui/section-title'
import { Showcase } from './ui/showcase'

const ProjectData = [
    {
        title: 'Lorem Ipsum',
        content: (
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        ),
        repo: '#',
        href: [
            {
                href: '#',
                message: 'Live Demo'
            },
            {
                href: '#',
                message: 'Another Demo'
            }
        ],
        tags: [
            'Orange', 'Potato', 'Cactus'
        ],
    },
    {
        title: 'Lorem Ipsum',
        content: (
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        ),
        repo: '#',
        href: [
            {
                href: '#',
                message: 'Live Demo'
            },
        ],
        tags: [
            'Orange', 'Potato', 'Cactus'
        ],
    },
    {
        title: 'Lorem Ipsum',
        content: (
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        ),
        tags: [
            'Orange', 'Potato', 'Cactus'
        ],
    },
    {
        title: 'Lorem Ipsum',
        content: (
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        ),
        repo: '#',
        tags: [
            'Orange', 'Potato', 'Cactus'
        ],
    },
    {
        title: 'Lorem Ipsum',
        content: (
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        ),
        repo: '#',
        href: [
            {
                href: '#',
                message: 'Live Demo'
            },
        ],
        tags: [
            'Orange', 'Potato', 'Cactus'
        ],
    },
]

const Projects = () => {
  return (
    <SectionWrapper>
        <SectionTitle
            title='Projects'
        />
        <SectionContent>
            <Showcase 
                data = {ProjectData} 
            />
        </SectionContent>
    </SectionWrapper>
)}

export default Projects