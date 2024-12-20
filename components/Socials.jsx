import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
	{
		path: "https://www.linkedin.com/in/nishith-savla/",
		icon: <FaLinkedinIn />,
	},
	{
		path: "https://github.com/Nishith-Savla",
		icon: <FaGithub />,
	},
	{
		path: "https://x.com/Nishith_Savla",
		icon: <FaXTwitter />,
	},
];

const Socials = ({ containerStyles, iconStyles }) => {
	return (
		<div className={containerStyles}>
			{socials.map((social, index) => {
				return (
					<Link key={index} href={social.path} className={iconStyles}>
						{social.icon}
					</Link>
				);
			})}
		</div>
	);
};

export default Socials;
