import Image from 'next/image'
import Navbar from './navbar'

export default function Home() {
    return (
        <main>
            <Navbar />
            <div className="flex justify-center mt-3 mb-8">
                <Image
                    src="/eric-wang.jpg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    className="rounded-lg"
                />
            </div>
            <div className="flex justify-center">
                <div
                    className="bg-neutral-200 flex items-center justify-center font-mono px-4 py-6 rounded-lg shadow max-w-xl mx-auto"
                    style={{
                        minHeight: '4rem',
                        lineHeight: '1.5',
                        textAlign: 'center',
                    }}
                >
                    Hi! I am an undergrad at Harvard studying Computer Science
                    and Math.
                </div>
            </div>
        </main>
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
