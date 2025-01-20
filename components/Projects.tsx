import React from 'react'
import { SectionWrapper, SectionContent } from './ui/section-wrapper'
import { SectionTitle } from './ui/section-title'
import { Showcase } from './ui/showcase'

const ProjectData = [
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
        title: 'Maze Solver',
        content: (
            <p>
                Code using EV3 that enables a robot to autonomously solve maze puzzles.
            </p>
        ),
        repo: 'https://github.com/curtiszki/Maze-Solver',
        tags: [
            'C'
        ],
    },
    {
        title: 'Aeroplane Chess',
        content: (
            <p>
                A Pygame implementation of the Aeroplane Chess board game implementing a sci-fi design and theme. 
            </p>
        ),
        repo: 'https://github.com/curtiszki/Aeroplane-Chess',
        tags: [
            'Python', 'Pygame'
        ],
    },
    {
        title: 'Reddit Sentiment Analysis',
        content: (
            <p>
                An analysis of the Reddit comment corpus during 2019-2021, analysing user sentiment along multiple axes to determine sentiment and changes over time.
            </p>
        ),
        repo: 'https://github.com/curtiszki/Reddit-Sentiment',
        tags: [
            'Python', 'Apache Spark', 'scikit-learn'
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