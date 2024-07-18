import Navbar from '../navbar'
import ProjectCard from './projectCard'

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-beige">
            <Navbar />
            <div className="flex justify-center py-10">
                <div className="max-w-2xl w-full justify-start px-4">
                    <header className="text-4xl font-bold">Projects</header>
                    <p className="py-4 text-lg">
                        Open-source projects that I have made over the years,
                        including projects from hackathons, classes, and free
                        time!
                    </p>
                    <div className="grid gap-4 md:grid-cols-2 mt-6">
                        <ProjectCard
                            title="Time-Out"
                            description="An app to remind you to rest your eyes. Work in progress!"
                            link="https://github.com/ericwang1409/time-out"
                            year="2024"
                        />
                        <ProjectCard
                            title="Personal Website"
                            description="This website! Built with Next.js and Tailwind CSS."
                            link="https://github.com/ericwang1409/portfolio-website"
                            year="2024"
                        />
                        <ProjectCard
                            title="A Small Issue"
                            description="A pokemon-style open-world RPG story game that encapsulates our views and emotions towards AI development."
                            link="https://github.com/ericwang1409/A-Small-Issue"
                            year="2024"
                        />
                        <ProjectCard
                            title="Mechanistic Interpretability of Maximum of Variable Length Lists"
                            description="Final project for Harvard Neuro 240 class. I practiced mechanistic interpretability on a simple transformer model trained to take the maximum of variable length lists."
                            link="https://github.com/ericwang1409/neuro240_final"
                            year="2024"
                        />
                        <ProjectCard
                            title="TaiYo! Solver"
                            description="Recreation of the famous Suika game in Python. Also includes a solver trained with deep reinforcement learning."
                            link="https://github.com/ericwang1409/taiyo-solver"
                            year="2023"
                        />
                        <ProjectCard
                            title="Wakey!"
                            description="A social alarm clock app that keeps you and your friends accountable for waking up on time."
                            link="https://github.com/ericwang1409/Wakey"
                            year="2023"
                        />
                        {/* Add more ProjectCard components as needed */}
                    </div>
                </div>
            </div>
        </div>
    )
}
