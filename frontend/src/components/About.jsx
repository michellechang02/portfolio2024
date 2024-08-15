import React, { useState } from 'react';
import { Card, Image, Button, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { Linkedin, GitHub, Mail, ArrowDownCircle, ArrowUpCircle } from 'react-feather';

function About(props) {
    const [clicked, setClicked] = useState(false);

    const list = [
        {
            title: "Rose Garden near USC",
            img: "la.jpg"
          },
        
        {
          title: "Brunch at Beverly Hills' Rodeo Drive",
          img: "bev.jpg"
        },
        {
            title: "Hey Day with my roommates",
            img: "us2.jpg"
          },
        {
            title: "A Day at Changkyung-goong (창경궁)",
            img: "tradition.jpg"
          },
          
        {
          title: "Spring Break Trip to Puerto Rico",
          img: "puerto.JPG"
        },
        {
          title: "Makeup that survived the snorkeling",
          img: "ship.jpg"
        },
        {
            title: "OurCS at Carnegie Mellon SCS",
            img: "cmu.jpg"
          },
        {
          title: "Outdoor day with JEM (Joyce Emily Michelle)",
          img: "jem.jpg",
        },
        {
          title: "Christmas in The Hyundai, South Korea",
          img: "christ.jpg"
        },
        
      ];

    return (
        !clicked ? (
            <div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100vh", alignItems: "center" }}>
                    <div className="gap-7 grid grid-cols-1 md:grid-cols-2 w-full max-w-4xl mx-auto p-5">
                        <div className="flex justify-center items-start">
                            <Image
                                width="80%"
                                className="shadow-none"
                                src="me.jpg"
                            />
                        </div>
                        <div className="flex flex-col justify-start items-start text-left mt-5 md:mt-0">
                            <Card shadow="none">
                                <h1 className="font-bold text-2xl md:text-5xl mb-5 md:mt-40 whitespace-nowrap">Hi, I'm Michelle Chang</h1>
                                <p className="text-xl md:text-2xl">- studying Computer Science at the University of Pennsylvania</p>
<p className="text-xl md:text-2xl"> - stopping substance abuse, one life at a time</p>
                            </Card>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center w-full px-20" style={{ marginBottom: '200px' }}>
                        <div className="flex justify-center items-center w-full">
                            <Button isIconOnly color="primary" aria-label="Like" className="mx-5" size="lg" variant="ghost"
                                onPress={() => window.location.href = 'https://www.linkedin.com/in/michellechang02/'}>
                                <Linkedin />
                            </Button>
                            <Button isIconOnly color="default" aria-label="Like" className="mx-5" size="lg" variant="ghost"
                                onPress={() => window.location.href = 'https://github.com/michellechang02/'}>
                                <GitHub />
                            </Button>
                            <Button isIconOnly color="secondary" aria-label="Like" className="mx-5" size="lg" variant="ghost"
                                onPress={() => window.location.href = 'mailto:michelleminjichang@gmail.com'}>
                                <Mail />
                            </Button>
                        </div>
                        <div className="flex justify-center items-center w-full mt-10">
                            <Button color="primary" variant="contained" onPress={() => setClicked(true)}>
                                <ArrowDownCircle />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div style={{ position: "relative", display: "grid", placeItems: "center", height: "100vh", padding: "20px" }}>
            <Button color="primary" variant="contained" onPress={() => setClicked(false)} className="mt-4 mb-4">
                <ArrowUpCircle />
            </Button>
            <div className="gap-4 grid grid-cols-3 w-full flex-grow">
                {list.map((item, index) => (
                    <Card
                        key={index}
                        isFooterBlurred
                        isPressable
                        radius="lg"
                        className="border-none relative overflow-hidden"
                        style={{ height: "350px" }} // Set a fixed height for the card
                    >
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${item.img})` }}
                        />
                        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between text-center">
                    <div>
                    <p className="text-black text-tiny text-center">{item.title}</p>
                    </div>
                </CardFooter>
                    </Card>
                ))}
            </div>
        </div>


        )
    );
}

export default About;
