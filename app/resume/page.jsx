"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";

import {
	FaCss3,
	FaDocker,
	FaGit,
	FaGithub,
	FaHtml5,
	FaJs,
	FaLinux,
	FaNodeJs,
	FaPython,
	FaReact,
} from "react-icons/fa";
import { SiGo } from "react-icons/si";

// about data
const about = {
	title: "About Me",
	description:
		"I'm a software developer with a passion for creating innovative solutions to complex problems. I have a strong background in web development and a knack for learning new technologies.",
	info: [
		{
			fieldName: "Name",
			fieldValue: "Nishith Savla",
		},
		{
			fieldName: "Phone",
			fieldValue: "+919702609809",
		},
		{
			fieldName: "Experience",
			fieldValue: "2+ years",
		},
		{
			fieldName: "Nationality",
			fieldValue: "Indian",
		},
		{
			fieldName: "Freelance",
			fieldValue: "Available",
		},
		{
			fieldName: "Email",
			fieldValue: "nishithsavla005@gmail.com",
		},
		{
			fieldName: "Languages",
			fieldValue: "English, Hindi, Marathi, Gujarati",
		},
	],
};

// experience data
const experience = {
	icon: "/asses/resume/badge.svg",
	title: "My Experience",
	description:
		"I have 2+ years of experience in web development and 1+ years of experience in app development.",
	items: [
		{
			company: "VVisionAlpha",
			position: "Freelance Developer",
			duration: "Aug 2023 - Present",
		},
		{
			company: "Citi India",
			position: "Summer Analyst Intern",
			duration: "Jun 2024 - Jul 2024",
		},
		{
			company: "ABC",
			position: "Software Developer",
			duration: "Jan 2024 - Jul 2024",
		},
		{
			company: "XYZ",
			position: "Software Developer",
			duration: "Jan 2024 - Jul 2024",
		},
		{
			company: "ABC",
			position: "Software Developer",
			duration: "Jan 2024 - Jul 2024",
		},
		{
			company: "ABC",
			position: "Software Developer",
			duration: "Jan 2024 - Jul 2024",
		},
	],
};

const education = {
	icon: "/asses/resume/cap.svg",
	title: "My Education",
	description:
		"I have a strong foundation in computer science and a passion for learning new technologies.",
	items: [
		{
			institution: "VJTI, Mumbai",
			degree: "B.Tech in Computer Engineering",
			duration: "2022 - 2025",
		},
		{
			institution: "K. J. Somaiya Polytechnic",
			degree: "Diploma in Computer Engineering",
			duration: "2019 - 2022",
		},
		{
			institution: "Online Course",
			degree: "Web Development",
			duration: "2020 - 2021",
		},
		{
			institution: "Online Course",
			degree: "Python Programming",
			duration: "2020 - 2021",
		},
	],
};

const skills = {
	title: "My Skills",
	description:
		"I have a strong foundation in computer science and a passion for learning new technologies.",
	skillList: [
		{
			icon: <FaHtml5 />,
			name: "HTML5",
		},
		{
			icon: <FaCss3 />,
			name: "CSS3",
		},
		{
			icon: <FaJs />,
			name: "JavaScript",
		},
		{
			icon: <FaReact />,
			name: "React",
		},
		{
			icon: <FaNodeJs />,
			name: "Node.js",
		},
		{
			icon: <SiGo />,
			name: "Golang",
		},
		{
			icon: <FaPython />,
			name: "Python",
		},
		{
			icon: <FaLinux />,
			name: "Linux",
		},
		{
			icon: <FaDocker />,
			name: "Docker",
		},
		{
			icon: <FaGit />,
			name: "Git",
		},
		{
			icon: <FaGithub />,
			name: "GitHub",
		},
	],
};

const Resume = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
			}}
			className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
		>
			<div className="container mx-auto">
				<Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
					<TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
						<TabsTrigger value="experience">Experience</TabsTrigger>
						<TabsTrigger value="education">Education</TabsTrigger>
						<TabsTrigger value="skills">Skills</TabsTrigger>
						<TabsTrigger value="about">About me</TabsTrigger>
					</TabsList>

					{/* content */}
					<div className="min-h-[70vh] w-full">
						{/* experience */}
						<TabsContent value="experience" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">{experience.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
									{experience.description}
								</p>
								<ScrollArea className="h-[400px]" type="auto">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{experience.items.map((item) => (
											<li
												key={item.company}
												className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center xl:items-start gap-1"
											>
												<span className="text-accent">{item.duration}</span>
												<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
													{item.company}
												</h3>
												<div className="flex items-center gap-3">
													{/* dot */}
													<span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
													<p className="text-white/60">{item.position}</p>
												</div>
											</li>
										))}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>
						{/* education */}
						<TabsContent value="education" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">{education.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
									{education.description}
								</p>
								<ScrollArea className="h-[400px]" type="auto">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{education.items.map((item) => (
											<li
												key={item.institution + item.degree}
												className="bg-[#232329] min-h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center xl:items-start gap-1"
											>
												<span className="text-accent">{item.duration}</span>
												<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
													{item.degree}
												</h3>
												<div className="flex items-center gap-3">
													{/* dot */}
													<span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
													<p className="text-white/60">{item.institution}</p>
												</div>
											</li>
										))}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>
						{/* skills */}
						<TabsContent value="skills" className="w-full h-full">
							<div className="flex flex-col gap-[30px]">
								<div className="flex flex-col gap-[30px] text-center xl:text-left">
									<h3 className="text-4xl font-bold">{skills.title}</h3>
									<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
										{skills.description}
									</p>
								</div>
								<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
									{skills.skillList.map((skill) => (
										<li key={skill.name}>
											<TooltipProvider delayDuration={100}>
												<Tooltip>
													<TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex items-center justify-center text-4xl group">
														<div className="text-6xl group-hover:text-accent transition-all duration-300">
															{skill.icon}
														</div>
													</TooltipTrigger>
													<TooltipContent>
														<p className="capitalize">{skill.name}</p>
													</TooltipContent>
												</Tooltip>
											</TooltipProvider>
										</li>
									))}
								</ul>
							</div>
						</TabsContent>
						{/* about */}
						<TabsContent value="about" className="w-full text-center xl:text-left">
							<div className="flex flex-col gap-[30px]">
								<h3 className="text-4xl font-bold">{about.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
								<ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 whitespace-nowrap">
									{about.info.map((item, index) => (
										<li
											key={item.fieldName}
											className={`flex items-center justify-center xl:justify-start gap-4 ${
												index === about.info.length - 1 && index % 2 === 0 ? "xl:col-span-2" : ""
											}`}
										>
											<span className="text-white/60">{item.fieldName}</span>
											<span className="text-xl">{item.fieldValue}</span>
										</li>
									))}
								</ul>
							</div>
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</motion.div>
	);
};

export default Resume;
