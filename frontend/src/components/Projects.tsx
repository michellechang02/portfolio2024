import React from 'react';
import { Chip } from "@nextui-org/react";

interface Project {
  id: number;
  role: string;
  details: string;
  src: string;
  skills: string[];
}

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
  const data: Project[] = [
    { id: 1, role: 'CIS 4120/5120 Teaching Assistant', details: 'Teaching students Human-Computer Interaction', src: "penneng.png",
    skills: ["Supabase", "Express.JS", "React.JS", "Node.JS"]},
    { id: 2, role: 'Software Engineer Intern', details: 'Viva Engage', src: "msft.jpg",
    skills: ["Java", "TypeScript", "GraphQL", "Cosmos DB"]},
    { id: 3, role: 'CIS 3500 Teaching Assistant', details: 'Teaching students software engineering (MERN stack)',
    src: "penneng.png", skills: ["MongoDB", "Express.JS", "React.JS", "Node.JS"]},
    { id: 4, role: 'Software Engineer Intern', details: 'Automated machine learning pipelines (MLOps)',
    src: "qualcomm.webp", skills: ["Python", "Docker", "YAML", "Linux"]},
    { id: 5, role: 'CIS 2400 Teaching Assistant', details: 'Teaching students C and pointers',
    src: "penneng.png", skills: ["C", "Assembly"]},
    { id: 6, role: 'Summer Research Assistant', details: 'Full-Stack Web Application to Visualize Brain Imaging Data in 3D',
    src: "pennmed.png", skills: ["React.JS", "Blender", "Python", "Node.JS", "Express.JS"]},
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 mx-5 my-5">
      {data.map(item => (
        <div key={item.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center">
          <div className="py-4 flex flex-col items-center">
            <div className="overflow-visible py-2 flex flex-col items-center">
              <img
                alt="Card background"
                className="object-cover rounded-xl"
                src={item.src}
                width={270}
              />
              <p className="font-bold text-center mt-5">{item.role}</p>
              <div className="flex flex-wrap justify-center mt-5">
                {item.skills.map((skill, index) => (
                  <Chip key={index} className="ml-2" color="primary" variant="flat">{skill}</Chip>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
