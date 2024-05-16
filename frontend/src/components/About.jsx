import React from 'react';
import {Card, CardBody, CardHeader, Image, Button} from "@nextui-org/react";
import {Linkedin, GitHub, Mail} from 'react-feather';

function About(props) {

  

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100vh", alignItems: "center" }}>
    <div className="gap-7 grid grid-cols-1 md:grid-cols-2 ml-20 mr-20 w-full max-w-4xl mx-auto p-5">
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
                <p className="text-xl md:text-2xl">I'm studying Computer Science at the University of Pennsylvania.</p>
            </Card>
        </div>
    </div>
    <div className="flex justify-center items-center w-full px-20" style={{ marginBottom: '300px' }}>
        <Button isIconOnly color="primary" aria-label="Like" className="mx-5" size="lg" variant="ghost"
        onPress={() => window.location.href = 'https://www.linkedin.com/in/michellechang02/'}>
            <Linkedin />
        </Button>
        <Button isIconOnly color="default" aria-label="Like" className="mx-5" size="lg" variant="ghost"
        onPress={() => window.location.href = 'https://github.com/michellechang02/'}>
            <GitHub />
        </Button>
        <Button isIconOnly color="secondary" aria-label="Like" className="mx-5" size="lg" variant="ghost"
         onPress={() => window.location.href = 'mailto:michelleminjichang@gmail.com'}
        >
            <Mail />
        </Button>
    </div>
</div>



    );
}

export default About;