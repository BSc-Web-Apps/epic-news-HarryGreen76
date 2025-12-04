import { RiLinkedinBoxFill, RiTwitterXFill } from 'react-icons/ri'
import { Link, type MetaFunction } from 'react-router'
import HeroCallToAction from '#app/components/organisms/Hero/HeroCallToAction.tsx'
import headshot2 from '~/assets/jpg/Ash.jpg'
import headshot1 from '~/assets/jpg/Ben.jpg'
import headshot from '~/assets/jpg/Daniel.jpg'
import Hero2 from '~/assets/jpg/hero-2.jpg'

export const meta: MetaFunction = () => [{ title: 'Epic News' }]

interface TeamMemberCardProps {
	name: string
	role: string
	imageSrc: string
}

export function TeamMemberCard({ name, role, imageSrc }: TeamMemberCardProps) {
	return (
		<div className="w-fit rounded-lg bg-slate-800 p-8">
			<img
				src={imageSrc}
				alt="An employee"
				className="mx-auto h-64 w-64 rounded-full"
			/>

			<div className="pt-6">
				<h3 className="font-semi-bold text-grey text-center">{name}</h3>
				<p className="pt-1 text-center text-slate-400">{role}</p>

				<div className="flex justify-center gap-4 pt-6 text-slate-400">
					<RiTwitterXFill />
					<RiLinkedinBoxFill />
				</div>
			</div>
		</div>
	)
}

export default function Index() {
	return (
		<main className="grid h-full place-items-center">
			<h1 className="text-5xl text-fuchsia-700">Your Journey Begins!</h1>

			<div className="w-full py-16">
				<HeroCallToAction image={Hero2} imageRight={true}>
					<div className="flex flex-col gap-8 px-8">
						<h2 className="text-h2">Welcome to Epic News</h2>
						<p className="text-lg">
							Keep up to date with the latest tech news.
						</p>
						<Link
							to="/signin"
							className="mt-2 inline-block rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
							aria-label="Sign in to Epic News"
						>
							Sign in
						</Link>
					</div>
				</HeroCallToAction>
			</div>

			<div className="flex gap-4">
				<TeamMemberCard
					name="Daniel Reis"
					role="Senior Designer"
					imageSrc={headshot}
				/>
				<TeamMemberCard
					name="Ben Green"
					role="Lead Developer"
					imageSrc={headshot1}
				/>
				<TeamMemberCard
					name="Ash Coyle"
					role="Service Desk"
					imageSrc={headshot2}
				/>
			</div>

			<p className="text-base text-gray-600 md:text-lg lg:text-xl">
				Welcome to Epic News, where the latest developments in tech are found.
			</p>
		</main>
	)
}
