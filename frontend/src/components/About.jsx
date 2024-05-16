import React from 'react';
import {Card, CardBody, CardHeader, Image, Button} from "@nextui-org/react";
import {ChevronsDown} from 'react-feather';

function About(props) {

  

    return (
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100vh", alignItems: "center" }}>
    <div className="gap-7 grid grid-cols-1 md:grid-cols-2 ml-20 mr-20 w-full max-w-4xl mx-auto p-5">
        <div className="flex justify-center items-start">
            <Image
                width="80%"
                className="shadow='none'"
                src="me.jpg"
            />
        </div>
        <div className="flex flex-col justify-start items-start text-left mt-5 md:mt-0">
            <Card shadow='none'>
                <h1 className="font-bold text-3xl md:text-5xl mb-5 md:mt-40">Hi, I'm Michelle Chang</h1>
                <p className="text-xl md:text-2xl">I'm studying computer science at the University of Pennsylvania.</p>
            </Card>
        </div>
    </div>
    {/* <Button isIconOnly aria-label="Like" className="mb-20">
        <ChevronsDown/>
    </Button> */}
</div>


    );
}

export default About;