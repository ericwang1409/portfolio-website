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
                            title="Project 1"
                            description="This is a project description"
                            link="www.google.com"
                            year="2022"
                        />
                        <ProjectCard
                            title="Project 2"
                            description="This is a project description"
                            link="www.google.com"
                            year="2022"
                        />
                        <ProjectCard
                            title="Project 2"
                            description="This is a project description"
                            link="www.google.com"
                            year="2022"
                        />
                        {/* Add more ProjectCard components as needed */}
                    </div>
                </div>
            </div>
        </div>
    )
}
