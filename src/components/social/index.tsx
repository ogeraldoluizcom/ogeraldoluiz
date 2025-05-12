import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SocialLink } from '../social-link'

export const Social = () => {
  return (
    <div className="flex items-center space-x-2">
      <SocialLink href="https://github.com/geraldobl58">
        <FaGithub aria-label="Github" className="size-6" />
      </SocialLink>
      <SocialLink href="https://www.linkedin.com/in/geraldo-luiz-b626ab31/">
        <FaLinkedin aria-label="Linkedin" className="size-6" />
      </SocialLink>
    </div>
  )
}
