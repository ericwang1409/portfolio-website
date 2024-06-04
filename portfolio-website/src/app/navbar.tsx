import React from "react";

const Navbar = () => {
    return (
        <>
        <nav className="bg-lighter-beige">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                    <div className="flex-shrink-0 space-x-16">
                        <a href="/" className="text-black font-mono">Eric Wang</a>
                        <a href="/" className="text-black font-mono">Projects</a>
                        <a href="/" className="text-black font-mono">Resume</a>
                        <a href="/" className="text-black font-mono">Blog</a>
                    </div>
                </div>
            </div>
        </div>
        </nav>
        </>
    );
};

export default Navbar;