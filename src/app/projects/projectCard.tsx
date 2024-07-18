import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function ProjectCard({
    title,
    description,
    link,
    year,
}: {
    title: string
    description: string
    link: string
    year: string
}) {
    return (
        <div className="bg-lightest-beige rounded-lg shadow-lg p-4">
            <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">{year}</span>
                <div className="flex items-center">
                    <span className="text-gray-600 mr-1">1,984</span>
                    <FontAwesomeIcon
                        icon={faStar}
                        className="text-yellow-400 h-4 w-4"
                    />
                </div>
            </div>
            <a
                href={link}
                className="text-blue-600 font-semibold hover:underline"
            >
                {title}
            </a>
            <p className="text-gray-600 mt-2">{description}</p>
            <a
                href={link}
                className="inline-block mt-4 px-3 py-1 text-sm text-gray-800 bg-gray-200 rounded hover:bg-gray-300"
            >
                Source
            </a>
        </div>
    )
}
