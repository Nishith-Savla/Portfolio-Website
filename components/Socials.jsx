import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

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
		path: "https://twitter.com/Nishith_Savla",
		icon: <FaTwitter />,
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
