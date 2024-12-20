"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const DownloadResumeButton = () => {
	return (
		<a href="/assets/resume.pdf" target="_blank">
			<Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
				<span>Download Resume</span>
				<FiDownload className="text-xl" />
			</Button>
		</a>
	);
};

export default DownloadResumeButton;
