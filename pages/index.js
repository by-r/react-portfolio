import Head from "next/head";
import { Inter } from "@next/font/google";
import { AiFillFolderOpen, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/legacy/image";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import profile from "../public/profile.JPG";
import { useState } from "react";
import ScrollToTop from "react-scroll-to-top";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const [darkMode, setDarkMode] = useState(false);
	return (
		<div className={darkMode ? "dark" : ""}>
			<Head>
				<title>Razzeq Roslan</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="bg-white px-10 md:px-20 lg:px-40">
				<section className="min-h-screen">
					<nav className="mb-12 flex justify-between py-10">
						<h1 className="flex items-center font-burtons text-xl">
							builtbyR
						</h1>
						<ul className="flex items-center">
							<li>
								<AiFillFolderOpen
									onClick={() => setDarkMode(!darkMode)}
									className="cursor-pointer text-2xl"
								/>
							</li>
							<button className="ml-8 rounded-md bg-gradient-to-r from-gray-400 to-gray-700 px-4 py-2 text-white">
								<a href="#">Resume</a>
							</button>
						</ul>
					</nav>
					<div className="mt-auto p-10 pb-10 text-center">
						<h2 className="lg:text-12xl py-2 text-5xl font-medium text-gray-800 md:text-6xl">
							Razzeq
						</h2>
						<h3 className="py-2 text-2xl dark:text-gray-500 md:text-3xl">
							Software Engineer
						</h3>
						<p className="text-md text-grey-800 mx-auto max-w-lg py-5 leading-8 md:text-xl">
							Love all things about backend technologies and
							learning about them !
						</p>
					</div>
					<div className="flex justify-center gap-16 py-3 text-5xl text-gray-600">
						<a
							href="https://www.linkedin.com/in/razzeq/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<AiFillLinkedin />
						</a>
						<a
							href="https://github.com/rrzq"
							target="_blank"
							rel="noopener noreferrer"
						>
							<AiFillGithub />
						</a>
					</div>
					<div className="relative mx-auto mt-20 h-80 w-80 overflow-hidden rounded-full md:h-96 md:w-96">
						<Image src={profile} layout="fill" objectFit="cover" />
					</div>
				</section>

				{/* Project Section */}
				<section>
					<div>
						<h3 className="py-1 text-3xl">Projects</h3>
						<p className="text-md py-2 leading-8 text-gray-800">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Ipsam voluptates rem placeat sed iste possimus
							illo, ex cumque vitae. Voluptatibus maxime alias
							rerum nam inventore facilis molestias in ex quo!
						</p>
					</div>
					<div className="gap-10 lg:flex">
						<div className="my-10 rounded-xl p-10 text-center shadow-lg">
							<Image
								className="mx-auto"
								src={design}
								width={100}
								height={100}
							/>
							<h3 className="pt-8 pb-2 text-lg font-medium">
								Library Systems
							</h3>
							<p className="py-2">
								Tried going all-in by building a full stack
								webapp, currently a work-in-progress, still
								trying to finish it and figuring out Django's
								MTV structure
							</p>
							<h4 className="py-4 text-teal-600">Technologies</h4>
							<p className="py-1 text-gray-800">Django</p>
						</div>
						<div className="my-10 rounded-xl p-10 text-center shadow-lg">
							<Image
								className="mx-auto"
								src={consulting}
								width={100}
								height={100}
							/>
							<h3 className="pt-8 pb-2 text-lg font-medium">
								Library Systems
							</h3>
							<p className="py-2">
								Tried going all-in by building a full stack
								webapp, currently a work-in-progress, still
								trying to finish it and figuring out Django's
								MTV structure
							</p>
							<h4 className="py-4 text-teal-600">Technologies</h4>
							<p className="py-1 text-gray-800">Django</p>
						</div>
						<div className="my-10 rounded-xl p-10 text-center shadow-lg">
							<Image
								className="mx-auto"
								src={code}
								width={100}
								height={100}
							/>
							<h3 className="pt-8 pb-2 text-lg font-medium">
								Library Systems
							</h3>
							<p className="py-2">
								Tried going all-in by building a full stack
								webapp, currently a work-in-progress, still
								trying to finish it and figuring out Django's
								MTV structure
							</p>
							<h4 className="py-4 text-teal-600">Technologies</h4>
							<p className="py-1 text-gray-800">Django</p>
						</div>
					</div>
				</section>

				{/* Portfolio Section WIP */}
				<section>
					<div>
						<h3 className="py-1 text-3xl">Portfolio</h3>
						<p className="text-md py-2 leading-8 text-gray-800">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Ipsam voluptates rem placeat sed iste possimus
							illo, ex cumque vitae. Voluptatibus maxime alias
							rerum nam inventore facilis molestias in ex quo!
						</p>
					</div>
					<div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
						<div className="flex-1 basis-1/3">
							<Image
								src={web1}
								className="rounded-lg object-cover"
								width={"100%"}
								height={"100%"}
								layout={"responsive"}
							/>
						</div>
						<div className="flex-1 basis-1/3">
							<Image
								src={web2}
								className="rounded-lg object-cover"
								width={"100%"}
								height={"100%"}
								layout={"responsive"}
							/>
						</div>
						<div className="flex-1 basis-1/3">
							<Image
								src={web3}
								className="rounded-lg object-cover"
								width={"100%"}
								height={"100%"}
								layout={"responsive"}
							/>
						</div>
						<div className="flex-1 basis-1/3">
							<Image
								src={web4}
								className="rounded-lg object-cover"
								width={"100%"}
								height={"100%"}
								layout={"responsive"}
							/>
						</div>
					</div>
				</section>
			</main>
			<ScrollToTop smooth className="mt-auto flex justify-center pt-1" />
		</div>
	);
}
