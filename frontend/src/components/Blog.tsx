import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Button, Divider, Image } from "@nextui-org/react";

interface Post {
  id: number;
  title: string;
  summary: string;
}

const Blog: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const posts: Post[] = [
    {
      id: 1,
      title: 'Atomic Habits 습관의 힘',
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

      Healthy habits make a healthy person, and I will identify as a healthy person.

      LOL this post became more about health, but it's important that I stay strong and healthy by 
      conquering the power of habits:)`,
    },
    {
      id: 2,
      title: 'Coding in a skirt 여성 소프트웨어 개발자',
      summary: `I code in a skirt. I think it's pretty cool that I get to be feminine and code at the same time.
      Frontend engineering is like dressing a website, and my eye for Pinterest outfits often helps out for
      UI/UX. Frontend gets some shade for being easy compared to backend, but actually at work, I learned 
      that TypeScript can be actually pretty difficult, especially if other frameworks like Relay.JS or Redux are
      involved. Yammer was a mono-repo, meaning that there were multiple teams on the same frontend
      repository and that numerous pull-requests (PR) were made everyday. Also, to merge in a feature PR, you need approvals
      from the UI team, your team, and the team that the feature is part of which is painful to the max. Regardless,
      I aspire to be living proof that you can be a successful software engineer while wearing a skirt.`,
    },
    {
      id: 3,
      title: 'Interpersonal Relationships 인간관계',
      summary: `I'm a nice and respectful person. Obviously, I'm human and sometimes I make mistakes. In that case,
      I will apologize and learn from my mistake. To all my friends, I will be warm and give them lots of compliments.
      I will treat them the way I want to be treated.`,
    },
    {
      id: 4,
      title: '4',
      summary: `TBD`,
    },
    {
      id: 5,
      title: '5',
      summary: 'TBD',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);
  };

  const handlePrev = () => {
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
};

export default Blog;
