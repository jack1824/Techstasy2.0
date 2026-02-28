import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef, useEffect, useState } from "react";
import HackathonTracksDialogBox from "./HackathonTracksDialogBox";

gsap.registerPlugin(ScrollTrigger);

function HackathonTracks() {
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [OpenDialog, setOpenDialog] = useState(false);
  const tracks = [
    {
      id: 1,
      title: "AI & ML",
      image: "/aiml.png",
      alt: "AI & Machine Learning",
      shortDescription:
        "Teach machines to think. Or at least pretend really well.",
      description:
        "If you love making systems that predict, recommend, detect, or automate — this is your battlefield. From smart chatbots to vision-based detection, build something that feels almost human. Make data speak. Make logic learn.",
      difficulty: "Intermediate to Advanced",
      recommendedSkills: [
        "Python",
        "TensorFlow / PyTorch",
        "Data Preprocessing",
        "APIs Integration",
        "Basic Statistics",
      ],
      exampleProblemStatements: [
        "Build a predictive model for traffic congestion.",
        "Create an AI chatbot for mental health support.",
        "Develop a recommendation system for e-learning platforms.",
      ],
      judgingCriteriaFocus: [
        "Model accuracy",
        "Innovation",
        "Real-world applicability",
        "Data handling",
      ],
    },
    {
      id: 2,
      title: "Web & Mobile",
      image: "/webmobile.png",
      alt: "Web & Mobile Development",
      shortDescription: "Build apps people actually want to use.",
      description:
        "Design. Code. Ship. Repeat. Whether it's a slick web platform or a smooth mobile app, this track is about building experiences — not just features. Make it fast. Make it clean. Make it addictive.",
      difficulty: "Beginner to Advanced",
      recommendedSkills: [
        "React / Next.js",
        "Flutter / React Native",
        "Node.js",
        "REST APIs",
        "Database Management",
      ],
      exampleProblemStatements: [
        "Build a campus event management app.",
        "Create a digital volunteering platform.",
        "Develop a smart expense tracking mobile app.",
      ],
      judgingCriteriaFocus: [
        "User Experience",
        "Functionality",
        "Performance",
        "Design Quality",
      ],
    },
    {
      id: 3,
      title: "Health Tech",
      image: "/health.png",
      alt: "Healthcare Technology",
      shortDescription: "Code that could actually save lives.",
      description:
        "Healthcare needs smarter systems. Build tools that monitor, analyze, assist, or simplify medical processes. From remote diagnostics to wellness tracking — create tech that feels meaningful, not just impressive.",
      difficulty: "Intermediate",
      recommendedSkills: [
        "Data Analytics",
        "Mobile Development",
        "IoT Basics",
        "AI Integration",
        "Cloud Services",
      ],
      exampleProblemStatements: [
        "Create a remote patient monitoring system.",
        "Build a symptom-checker web application.",
        "Develop a health record management dashboard.",
      ],
      judgingCriteriaFocus: [
        "Impact on society",
        "Feasibility",
        "Accuracy",
        "Scalability",
      ],
    },
    {
      id: 4,
      title: "Sustainability",
      image: "/sustain.png",
      alt: "Sustainability & Green Tech",
      shortDescription: "Build tech that doesn’t hurt the planet.",
      description:
        "Climate problems need creative coders. Track carbon. Optimize energy. Reduce waste. Build systems that make sustainability measurable and actionable. Tech should move the world forward — not heat it up.",
      difficulty: "Beginner to Intermediate",
      recommendedSkills: [
        "Web Development",
        "Data Visualization",
        "IoT Concepts",
        "Basic AI",
        "APIs Integration",
      ],
      exampleProblemStatements: [
        "Build a carbon footprint calculator.",
        "Create a smart waste segregation system.",
        "Develop a water usage monitoring dashboard.",
      ],
      judgingCriteriaFocus: [
        "Environmental impact",
        "Innovation",
        "Practical implementation",
        "Awareness potential",
      ],
    },
    {
      id: 5,
      title: "Cybersecurity",
      image: "/CYBER.png",
      alt: "Cybersecurity",
      shortDescription: "Break it. Secure it. Protect it.",
      description:
        "In a world full of digital threats, security is power. Build systems that detect attacks, secure authentication, encrypt sensitive data, or simulate vulnerabilities. Think like a hacker. Code like a guardian.",
      difficulty: "Intermediate to Advanced",
      recommendedSkills: [
        "Networking Basics",
        "Cryptography",
        "Ethical Hacking",
        "Backend Security",
        "JWT / OAuth",
      ],
      exampleProblemStatements: [
        "Build a secure login authentication system.",
        "Develop a phishing detection tool.",
        "Create a vulnerability scanner dashboard.",
      ],
      judgingCriteriaFocus: [
        "Security robustness",
        "Threat prevention capability",
        "Technical depth",
        "Implementation quality",
      ],
    },
    {
      id: 6,
      title: "Open Innovation",
      image: "/open.png",
      alt: "Open Innovation",
      shortDescription: "No rules. Just build something wild.",
      description:
        "This is your creative playground. Combine AI, blockchain, IoT, web, or something completely unexpected. If it solves a real problem and makes people say 'whoa' — you're doing it right.",
      difficulty: "All Levels",
      recommendedSkills: [
        "Problem Solving",
        "Full Stack Development",
        "Creativity",
        "API Integration",
        "System Design",
      ],
      exampleProblemStatements: [
        "Build a disaster response coordination system.",
        "Create a digital skill exchange platform.",
        "Develop a blockchain-based certificate verification tool.",
      ],
      judgingCriteriaFocus: [
        "Originality",
        "Innovation",
        "Technical execution",
        "Real-world relevance",
      ],
    },
  ];

  const hktracks = useRef(null);

  useGSAP(() => {
    if (!hktracks.current) return;

    const trackElements = hktracks.current.querySelectorAll(".tracks");

    // Create animation
    const EventTl = gsap.timeline({
      scrollTrigger: {
        trigger: hktracks.current,
        start: "top center", // More forgiving on mobile
        end: "bottom 20%",
        scrub: 1,
        // markers: true, // Keep false in production
      },
    });

    EventTl.fromTo(
      trackElements,
      {
        y: (index) => 30 + index * 10, // Slight stagger on Y
        opacity: 0,
        scale: 0.5,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
        stagger: 0.08, // Faster stagger
      },
    );

    // CRITICAL: Refresh on resize to recalculate positions
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleClick = (trackid) => {
    setSelectedTrack(trackid);
    setOpenDialog(true);
    console.log(selectedTrack);
  };

  const TrackinDialog = tracks.find((track) => track.id === selectedTrack);

  return (
    <div className="w-full flex justify-center relative items-center py-10 px-4">
      <div
        ref={hktracks}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-6xl"
      >
        {OpenDialog && (
          <HackathonTracksDialogBox
            setOpenDialog={setOpenDialog}
            TrackinDialog={TrackinDialog}
          />
        )}
        {tracks.map((track) => (
          <div
            key={track.id}
            className="tracks transform hover:scale-105 hover:shadow-2xl cursor-pointer"
            // REMOVED: transition-all duration-300
            onClick={() => {
              handleClick(track.id);
            }}
          >
            <img
              src={track.image}
              alt={track.alt}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HackathonTracks;


