import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <>
            <nav className="bg-lighter-beige">
                <div className="flex justify-between items-center md:h-20 h-12 max-w-2xl mx-auto px-4">
                    <div className="flex items-center">
                        <a href="/" className="inline-block align-middle">
                            <FontAwesomeIcon
                                icon={faUser}
                                className="h-6 w-6"
                            />
                        </a>
                        <a
                            href="/"
                            className="text-black hidden md:inline-block ml-2"
                        >
                            Eric Wang
                        </a>
                    </div>
                    <div className="flex space-x-8">
                        <a href="/projects" className="text-black">
                            Projects
                        </a>
                        <a
                            href="https://github.com/ericwang1409/resume/blob/main/Resume%20-%20Eric%20Wang.pdf"
                            className="text-black"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Resume
                        </a>
                        <a href="/" className="text-black">
                            Blog
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
