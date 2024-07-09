"use client";

import { Accordion } from "flowbite-react";

const data = [
  {
    title: "What is Software Development?",
    content: `Software development is the process of designing, creating, testing, and maintaining software applications. It involves writing code, debugging, and deploying applications.`,
    link: "https://en.wikipedia.org/wiki/Software_development",
  },
  {
    title: "What is Data Science?",
    content: `Data science is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data.`,
    link: "https://en.wikipedia.org/wiki/Data_science",
  },
  {
    title: "What is Cybersecurity?",
    content: `Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information.`,
    link: "https://en.wikipedia.org/wiki/Cybersecurity",
  },
  {
    title: "What is Cloud Computing?",
    content: `Cloud computing is the delivery of computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet ("the cloud") to offer faster innovation, flexible resources, and economies of scale.`,
    link: "https://en.wikipedia.org/wiki/Cloud_computing",
  },
  {
    title: "What is Artificial Intelligence?",
    content: `Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think and learn. AI can be applied in various fields such as natural language processing, machine learning, and robotics.`,
    link: "https://en.wikipedia.org/wiki/Artificial_intelligence",
  },
];

export function Accordian() {
  return (
    <Accordion collapseAll className="border-none w-full md:w-[600px] lg:w-[900px]">
      {data.map((item, index) => (
        <Accordion.Panel key={index}>
          <Accordion.Title className="text-white font-bold hover:bg-[#222222]">
            {item.title}
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">{item.content}</p>
            <p className="text-gray-500 dark:text-gray-400">
              For more information, check out&nbsp;
              <a href={item.link} className="text-cyan-600 hover:underline dark:text-cyan-500">
                this link.
              </a>
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      ))}
    </Accordion>
  );
}
