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
        title: 'Linux Shell',
        content: (
            <p>
                Customizable shell usable on all POSIX-compliant systems. Allows for users to optimize tasks through multithreadings, speeding up tasks alongside user personalization capabilities.
            </p>
        ),
        repo: 'https://github.com/curtiszki/Custom-Shell',
        tags: [
            'C'
        ],
    },
    {
        title: 'Portfolio Website',
        content: (
            <p>
                A personal website developed as a tool to communicate and showcase abilities. You&apos;re currently using it. Built using Next.js and Tailwind CSS.
            </p>
        ),
        tags: [
            'Next.js', 'React', 'Typescript', 'Tailwind', 'CSS', 'HTML'
        ],
    },
]

const Projects = () => {
  return (
    <SectionWrapper idName='projects'>
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