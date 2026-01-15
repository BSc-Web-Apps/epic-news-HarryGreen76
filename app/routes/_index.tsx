import { RiLinkedinBoxFill, RiTwitterXFill } from 'react-icons/ri'
import { data, Link, useLoaderData, type MetaFunction } from 'react-router'

import ArticleCard from '#app/components/organisms/ArticleCard.tsx'
import HeroCallToAction from '#app/components/organisms/Hero/HeroCallToAction.tsx'
import { prisma } from '#app/utils/db.server.ts'
import Hero2 from '~/assets/jpg/hero-2.jpg'

//server rendered code (loader)
export async function loader() {
	const techArticles = await prisma.article.findMany({
		where: {
			isPublished: true,
			category: {
				slug: 'technology', // Retrieves only articles in the specified category
			},
		},

		select: {
			id: true,
			title: true,
			category: { select: { name: true } },
			images: { select: { objectKey: true } },
		},
	})

	const enterArticles = await prisma.article.findMany({
		where: {
			isPublished: true,
			category: {
				slug: 'entertainment', // Retrieves only articles in the specified category
			},
		},

		select: {
			id: true,
			title: true,
			category: { select: { name: true } },
			images: { select: { objectKey: true } },
		},
	})

	const businessArticles = await prisma.article.findMany({
		where: {
			isPublished: true,
			category: {
				slug: 'business', // Retrieves only articles in the specified category
			},
		},

		select: {
			id: true,
			title: true,
			category: { select: { name: true } },
			images: { select: { objectKey: true } },
		},
	})
	return data({ techArticles, enterArticles, businessArticles })
}

export const meta: MetaFunction = () => [{ title: 'Epic News' }]

export default function Index() {
	const { techArticles, enterArticles, businessArticles } =
		useLoaderData<typeof loader>()

	const hasTechArticles = techArticles.length > 0
	const hasEntArticles = techArticles.length > 0
	const hasBusArticles = techArticles.length > 0

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
							to="/login"
							className="mt-2 inline-block rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
							aria-label="Sign in to Epic News"
						>
							Sign in
						</Link>
					</div>
				</HeroCallToAction>
			</div>
			<div className="container">
				<h2 className="text-h2">Technology</h2>
				<div className="flex">
					{hasTechArticles ? (
						techArticles.map((article) => (
							<ArticleCard
								key={article.id}
								articalId={article.id}
								title={article.title}
								category={article.category?.name}
								objectKey={article.images[0]?.objectKey}
							/>
						))
					) : (
						<h2>There are no published articles...</h2>
					)}
				</div>

				<h2 className="text-h2">Entertainment </h2>
				<div className="flex">
					{hasEntArticles ? (
						enterArticles.map((article) => (
							<ArticleCard
								key={article.id}
								articalId={article.id}
								title={article.title}
								category={article.category?.name}
								objectKey={article.images[0]?.objectKey}
							/>
						))
					) : (
						<h2>There are no published articles...</h2>
					)}
				</div>

				<h2 className="text-h2">Business</h2>
				<div className="flex">
					{hasBusArticles ? (
						businessArticles.map((article) => (
							<ArticleCard
								key={article.id}
								articalId={article.id}
								title={article.title}
								category={article.category?.name}
								objectKey={article.images[0]?.objectKey}
							/>
						))
					) : (
						<h2>There are no published articles...</h2>
					)}
				</div>

				<p className="text-base text-gray-600 md:text-lg lg:text-xl">
					Welcome to Epic News, where the latest developments in tech are found.
				</p>
			</div>
		</main>
	)
}
