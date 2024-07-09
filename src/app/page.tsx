import Image from 'next/image'
import Navbar from './navbar'

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-beige">
            <Navbar />
            <div className="flex flex-1 justify-center">
                <div className="w-full max-w-2xl p-4">
                    <main>
                        {/* insert image */}
                        <div className="flex flex-col items-center justify-center py-4">
                            <Image
                                src="/eric-wang.jpg"
                                alt="Picture of the author"
                                width={500}
                                height={500}
                                className="rounded-md"
                            />
                            <p className="mt-4 p-3 bg-lightest-beige rounded-lg">
                                Hi! I&apos;m a Junior at Harvard studying
                                Computer Science and Math!
                            </p>
                        </div>

                        <h1 className="text-4xl font-bold">Eric Wang</h1>
                        <p className="mb-8">
                            (Software Engineer, ML Researcher, Student)
                        </p>
                        <h2 className="text-2xl font-bold">Background:</h2>
                        <p className="mb-4">
                            I'm currently an undergraduate student at Harvard
                            College pursuing a degree in Computer Science and
                            Math. My interests lie in AI Safety, Security, and
                            Alignment and how Software Engineering can be used
                            to solve some of those problems. I am currently
                            working as a Machine Learning Engineer at Analog
                            Devices.
                        </p>

                        <p>
                            I have experience in software engineering, and
                            plenty of projects revolving around machine learning
                            an AI. Some of my other interests include running
                            (I'm running my first marathon in October), rock
                            climbing, and attending hackathons.
                        </p>
                    </main>
                </div>
            </div>
        </div>
    )
}
