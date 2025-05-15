import Image from 'next/image'

interface ExperienceItemProps {
  company: string
  role: string
  type: string
  description: string
  duration?: string | null
}

export const ExperienceItem = ({
  company,
  role,
  type,
  description,
  duration
}: ExperienceItemProps) => {
  return (
    <div>
      <div className="flex items-center gap-6">
        <h3 className="text-2xl font-bold">{company}</h3>
        <span>
          <Image
            src="/img/custom-line.png"
            alt="Hard Skills"
            width={50}
            height={50}
          />
        </span>
      </div>
      <h4>
        {role} {duration && `(${duration})`}
      </h4>
      <b className="text-md text-bold">{type}</b>
      <p>{description}</p>
    </div>
  )
}
