import React, { useState } from 'react';
import {Card, CardHeader, CardBody, Button, Divider, Link, Image} from "@nextui-org/react";

function Blog(props) {

    const [currentIndex, setCurrentIndex] = useState(0);
    

    const posts = [
        {
          id: 1,
          title: 'Post 1: Atomic Habits [8/14/24]',
          summary: `Learning about habits has changed my life. I mean, isn't it surprising how 1% changes can culminate into
          big results?
          Everyday, I make sure I have good habits to make sure 
          I truly identify as the person I want to be in 5, 10 years. Some of my habits: exercising, coding, reading, 
          complimenting others, optimizing my makeup, 
          investigating better ways to dress up. 
          
          Unhealthy habits to avoid at all costs: excessive drinking, smoking/vaping, substance abuse.

          Sometimes I feel peer-pressured into changing my habits. But I will always put my health first, and even 
          if it looks lack-luster in front of other people, I will still retain my healthy habits and stay healthy.
          If I have to take a break, or find another group of people that respect my healthy habits, I will.

          Healthy habits make a healthy person, and I want to identify as a healthy person.

          LOL this post became more about health, but it's important that I stay strong and healthy by 
          conquering the power of habits:)
          `,
        },
        {
          id: 2,
          title: 'Post 2',
          summary: 'TBD',
        },
        {
          id: 3,
          title: 'Post 3',
          summary: 'TBD',
        },
        {
          id: 4,
          title: 'Post 4',
          summary: 'TBD',
        },
        {
          id: 5,
          title: 'Post 5',
          summary: 'TBD',
        },
      ];

      const handleNext = () => {
        // Increment index, loop back to 0 if it's the last post
        setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);
    };

    const handlePrev = () => {
        // Decrement index, loop to the last post if it's the first post
        setCurrentIndex((prevIndex) => (prevIndex - 1 + posts.length) % posts.length);
    };

    const currentPost = posts[currentIndex];

    return (
        <div className="w-full max-w-[1000px] mx-auto mt-10">
      <Card key={currentPost.id} className="w-full">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="holo.png"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md text-bold">{currentPost.title}</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="p-4">
          <p>{currentPost.summary}</p>
        </CardBody>
      </Card>

      <div className="flex justify-between mt-4">
        <Button onClick={handlePrev} disabled={posts.length <= 1}>
          Previous
        </Button>
        <Button onClick={handleNext} disabled={posts.length <= 1}>
          Next
        </Button>
      </div>
    </div>
       
    );
}

export default Blog;