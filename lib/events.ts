export interface Event {
    title: string;
    image: string;
    slug: string;
    location: string;
    date: string;
    time: string;
    about: string;
}

export const eventsData: Event[] = [
    {
        title: "React Workshop",
        image: "/images/event1.png",
        slug: "react-workshop",
        location: "San Francisco, CA",
        date: "January 15, 2025",
        time: "10:00 AM",
        about: "Learn the fundamentals of React and build interactive user interfaces with modern JavaScript."
    },
    {
        title: "Web Development Summit",
        image: "/images/event2.png",
        slug: "web-summit",
        location: "New York, NY",
        date: "January 22, 2025",
        time: "9:00 AM",
        about: "Join industry leaders discussing the latest trends in web development, from frontend frameworks to backend architecture."
    },
    {
        title: "TypeScript Bootcamp",
        image: "/images/event3.png",
        slug: "typescript-bootcamp",
        location: "Austin, TX",
        date: "February 5, 2025",
        time: "2:00 PM",
        about: "Master TypeScript and learn how to write type-safe JavaScript code for scalable applications."
    },
    {
        title: "Next.js Advanced Workshop",
        image: "/images/event4.png",
        slug: "nextjs-workshop",
        location: "Seattle, WA",
        date: "February 12, 2025",
        time: "11:00 AM",
        about: "Deep dive into Next.js features including server components, API routes, and deployment strategies."
    }
];
