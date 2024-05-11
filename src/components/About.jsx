import React from 'react';
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

function About(props) {
    return (
        <div>
            <Card className="py-4 ml-10 mr-10 mt-10">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">I have a problem</p>
        <small className="text-default-500">I LOVE REACT :)</small>
        <h4 className="font-bold text-large">I'm Michelle Chang</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
    </Card>
           
        </div>
    );
}

export default About;