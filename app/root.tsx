import { useLoaderData } from 'react-router'
import { type Route } from './+types/root.ts'
import { type loader } from './__root.server.tsx'
import { GeneralErrorBoundary } from './components/error-boundary.tsx'
import Document from './components/shared-layout/Document.tsx'
import { useNonce } from './utils/nonce-provider.ts'
import headshot from '~/assets/jpg/meditation.jpg'
import rootLinkElements from './utils/providers/rootLinkElements.ts'
import { RiTwitterXFill, RiLinkedinBoxFill } from 'react-icons/ri'

export const links: Route.LinksFunction = () => {
	return rootLinkElements
}
export { meta } from './__root.client.tsx'
export { headers, loader } from './__root.server.tsx'

export default function App() {
	const data = useLoaderData<typeof loader | null>()
	const nonce = useNonce()

	return (
		<Document nonce={nonce} honeyProps={data?.honeyProps}>
			<div className="flex h-screen flex-col justify-between">
				<div className="flex-1">
					<main className="grid h-full place-items-center">
						<h1 className="text-mega text-fuchsia-700">Your Journey Begins!</h1>
						<p className="text-base text-gray-600 md:text-lg lg:text-2xl">
							Welcome to Epic News, where the latest developments in tech are
							found.
						</p>
						<div className="w-fit rounded-lg bg-slate-800 p-8">
							<img
								src={headshot}
								alt="An employee"
								className="mx-auto h-64 w-64 rounded-full"
							/>

							<div className="pt-6">
								<h3 className="font-semi-bold text-center text-white">
									Leonard Krasner
								</h3>
								<p className="pt-1 text-center text-slate-400">
									Senior Designer
								</p>

								<div className="flex justify-center gap-4 pt-6 text-slate-400">
									<RiTwitterXFill />
									<RiLinkedinBoxFill />
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
		</Document>
	)
}

export const ErrorBoundary = GeneralErrorBoundary
