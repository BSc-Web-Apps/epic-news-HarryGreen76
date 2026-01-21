import { Link, NavLink } from 'react-router'
import logo from '#app/assets/png/Epic-News-Logo.png'
import SocialMediaButtons from '#app/components/molecules/SocialMediaButtons'
import { type FooterProps } from './FooterBasic'

const FooterLogoCentre = ({
	companyName = 'Epic News',
	altText = 'Our company logo',
}: FooterProps) => {
	return (
		<footer className="bg-secondary dark:bg-dark-secondary lg:py-16">
			<div className="container">
				<div className="border-muted-foreground/75 dark:border-dark-muted-foreground/75 flex flex-col items-center justify-around border-b lg:flex-row lg:pb-8">
					<div className="text-secondary-foreground dark:text-dark-secondary-foreground flex flex-col items-start gap-6 py-8 font-bold lg:flex-row">
						<div>
							<NavLink to="About">About</NavLink>
						</div>
						<div>
							<NavLink to="News">News</NavLink>
						</div>
						<div>
							<NavLink to="/">Epic News</NavLink>
						</div>
					</div>

					<Link to="/" className="flex w-20 items-center justify-center">
						<img src={logo} alt={altText} />
					</Link>

					<div className="text-secondary-foreground dark:text-dark-secondary-foreground flex flex-col items-start gap-6 py-8 font-bold lg:flex-row">
						<div>
							<NavLink to="/">Epic News</NavLink>
						</div>
						<div>
							<NavLink to="News">News</NavLink>
						</div>
						<div>
							<NavLink to="About">About</NavLink>
						</div>
					</div>
				</div>

				<div className="flex items-center justify-center py-8">
					<div className="block">
						<div className="mb-8 flex justify-center">
							<SocialMediaButtons />
						</div>
						<div className="text-secondary-foreground/75 dark:text-dark-secondary-foreground/75 text-center">
							{companyName} | {new Date().getFullYear()}
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default FooterLogoCentre
