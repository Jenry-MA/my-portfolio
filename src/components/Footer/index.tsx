import {
	FiGithub,
	FiTwitter,
	FiLinkedin,
	FiGlobe,
	FiYoutube,
} from 'react-icons/fi';


interface SocialLink {
    id: number;
    icon: JSX.Element;
    url: string;
}

const Footer = () => {

    const socialLinks: SocialLink[] = [
       
        {
            id: 1,
            icon: <FiGithub />,
            url: 'https://github.com/Jenry-MA',
        },
        {
            id: 2,
            icon: <FiTwitter />,
            url: 'https://twitter.com/home?lang=es',
        },
        {
            id: 3,
            icon: <FiLinkedin />,
            url: 'https://www.linkedin.com/in/jenry-oswaldo-mazariegos-aragon-220333168/',
        },

    ];

  return (
    <footer className="container pb-10">

    <div className=" pt-10 sm:pt-30 pb-0 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
        {/* Footer social links */}
        <div className="font-mono font-general-regular flex flex-col items-center mb-0 sm:mb-0">
            <p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-0">
                My social media
            </p>
            <ul className="flex gap-4 sm:gap-8">
                {socialLinks.map((link:SocialLink) => (
                    <a
                        href={link.url}
                        target="__blank"
                        key={link.id}
                        className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
                    >
                        <i className="text-xl sm:text-2xl md:text-3xl">
                            {link.icon}
                        </i>
                    </a>
                ))}
            </ul>
        </div>
    </div>

</footer>
  )
}

export default Footer;