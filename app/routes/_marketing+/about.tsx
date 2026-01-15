import { RiLinkedinBoxFill, RiTwitterXFill } from 'react-icons/ri'
import headshot2 from '~/assets/jpg/Ash.jpg'
import headshot1 from '~/assets/jpg/Ben.jpg'
import headshot from '~/assets/jpg/Daniel.jpg'

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
			<h1 className="text-black-700 text-5xl">Meet the team!</h1>

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
				These guys make up the dream team!
			</p>
		</main>
	)
}
