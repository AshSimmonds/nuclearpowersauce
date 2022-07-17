import {
  faDribbble,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <main>
      <section className="relative">
        <div
          className="absolute -top-8 right-0"
          onClick={() => setTheme(currentTheme != "light" ? "light" : "dark")}
        >
          <FontAwesomeIcon icon={currentTheme == "light" ? faSun : faMoon} />{" "}
        </div>
        <header>
          <Image
            src="/me.jpeg"
            alt="Abhinav Robinson's Picture"
            width={100}
            height={100}
            objectFit="cover"
            className="rounded-full"
          />
          <div className="vs gap-1">
            <h1>Abhinav Robinson</h1>
            <p>Software Developer and Tech Lead</p>
          </div>
          <ul className="vs items-end flex-grow gap-1 text-gray-500 select-none">
            <li className="hover:text-sky-500 cursor-pointer">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://linkedin.com/in/abhinavrobinson"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li className="hover:text-violet-500 cursor-pointer">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/abhinavrobinson/"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li className="hover:text-rose-500 cursor-pointer">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://dribbble.com/AbhinavR"
              >
                <FontAwesomeIcon icon={faDribbble} />
              </a>
            </li>
          </ul>
        </header>
      </section>
    </main>
  );
};

export default Home;
