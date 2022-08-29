import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider } from "./Divider";

export default function OPENSAUCE() {
    const projects = [
        {
            name: "Declaration about your payload",
            description:
                "Do you declare that your payload does not and will not contain a nuclear power sauce?",
            link: "https://docs.google.com/document/d/1ETRD-5gkft6ys8dceBSbrEr1Rx4sH2zV/edit?usp=sharing&ouid=112232303601060671207&rtpof=true&sd=true",
            deployment: "https://twitter.com/BlueDwarfAsh/status/1556386286633906176",
            stack: ["SCOVILLE", "CHILLI", "totally safe ingestible liquid"],
        },
    ];

    return (
        <div className="max-w-3xl w-full">
            <div className="flex flex-col gap-4">
                {projects.map((project) => (
                    <div
                        className="flex flex-col gap-4 p-4 sm:p-8 border rounded-xl border-zinc-700 duration-200 hover:border-transparent hover:-translate-y-0.5 hover:-translate-x-px hover:neo"
                        key={project.name}
                    >
                        <div className="flex flex-row gap-2 justify-between">
                            <div className="flex flex-col gap-1">
                                <h1 className="text-xl">{project.name}</h1>
                                <p className="text-sm">{project.description}</p>
                            </div>
                            <div className="flex flex-col text-lg text-gray-500">
                                <a
                                    href={project.link}
                                    className="hover:text-violet-500"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                {project.deployment && (
                                    <a
                                        href={project.deployment}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        <FontAwesomeIcon
                                            icon={faArrowCircleRight}
                                            className="hover:text-yellow-500"
                                        />
                                    </a>
                                )}
                            </div>
                        </div>
                        <ul className="flex flex-row flex-wrap items-start justify-start gap-2 select-none">
                            {project.stack.map((v) => (
                                <li
                                    className="duration-100 px-2 py-1 border border-zinc-500 hover:dark:border-zinc-300 hover:border-zinc-900 text-zinc-500 hover:dark:text-zinc-900 hover:text-zinc-100 rounded text-sm cursor-pointer hover:bg-zinc-900 hover:dark:bg-zinc-300"
                                    key={v}
                                >
                                    {v}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
