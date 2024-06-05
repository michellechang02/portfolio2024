import React from 'react';
import {Chip} from "@nextui-org/react";

function Projects(props) {


    const data = [
        { id: 1, role: 'Software Engineer Intern', details: 'Viva Engage', src: "msft.jpg",
        "skills": ["Java", "Ruby", "TypeScript", "GraphQL", "Elasticsearch", "Cosmos DB", "PostgreSQL"]},
        { id: 2, role: 'CIS 3500 Teaching Assistant', details: 'Teaching students software engineering (MERN stack)',
        src: "penneng.png", "skills": ["MongoDB", "Express.JS", "React.JS", "Node.JS"]},
        { id: 3, role: 'Software Engineer Intern', details: 'Automated machine learning pipelines (MLOps)',
        src: "qualcomm.webp", "skills": ["Python", "Docker", "YAML", "Linux"]},
        { id: 4, role: 'CIS 2400 Teaching Assistant', details: 'Teaching students C and pointers',
        src: "penneng.png",  "skills": ["C", "Assembly"]},
        { id: 5, role: 'Summer Research Assistant', details: 'Full-Stack Web Application to Visualize Brain Imaging Data in 3D',
        src: "pennmed.png", "skills": ["React.JS", "Blender", "Python", "Node.JS", "Express.JS"] },
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
}

export default Projects;