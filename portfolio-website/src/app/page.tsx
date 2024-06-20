import Image from 'next/image'
import Navbar from './navbar'

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-beige">
            <Navbar />
            <div className="flex flex-1 justify-center">
                <div className="w-full max-w-2xl p-4">
                    <main>
                        <h1 className="text-xl font-bold mb-4">
                            Welcome to My Site
                        </h1>
                        <p>
                            Hello! I'm an undergrad at Harvard studying Computer
                            Science and Math.
                        </p>
                        <p>
                            Here's more about my projects, interests, and
                            experiences.
                        </p>
                    </main>
                    {/* Additional sections or footer can go here */}
                </div>
            </div>
        </div>
    )
}

{
    /* <div className="grid grid-cols-4 grid-rows-2 gap-4">
                <div className="flex items-center justify-center">01</div>
                <div className="flex items-center justify-center col-span-2"></div>
                <div className="flex items-center justify-center">04</div>
                <div className="flex items-center justify-center">05</div>
                <div className="flex items-center justify-center col-span-2">
                    06
                </div>
                <div className="flex items-center justify-center">08</div>
            </div> */
}
{
    /* <header>
                <Navbar />
            </header>
            <section className="bg-gradient-radial h-screen bg-beige">
                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="text-4xl font-bold text-black font-mono">
                        Hello, world!
                    </h1>
                    <p className="text-lg text-black font-mono">
                        Welcome to my portfolio website.
                    </p>
                </div>
            </section> */
}
