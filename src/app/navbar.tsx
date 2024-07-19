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
                    <div className="flex space-x-1">
                        <a
                            href="/projects"
                            className="text-black px-4 py-2 rounded-2xl hover:bg-white"
                        >
                            Projects
                        </a>
                        <a
                            href="/resume.pdf"
                            className="text-black px-4 py-2 rounded-2xl hover:bg-white"
                        >
                            Resume
                        </a>
                        <a
                            href="/"
                            className="text-black px-4 py-2 rounded-2xl hover:bg-white"
                        >
                            Blog
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
