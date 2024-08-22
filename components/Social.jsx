import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa"

const rotas = [
    {icon: <FaGithub />,    path: 'https://github.com/inneobr'},
    {icon: <FaYoutube />,   path: 'https://www.youtube.com/@tanomanual'},
    {icon: <FaLinkedin />,  path: 'https://www.linkedin.com/in/inneobr/'},
    {icon: <FaInstagram />, path: 'https://www.instagram.com/eduardocruz.oficial'},
];

const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {rotas.map((item, index) => {
                return <Link key={index} href={item.path} className={iconStyles} target="_blank">{item.icon}</Link>
            })}
        </div>
    );
};
export default Social;