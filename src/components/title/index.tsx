interface TitleProps {
  title: string
  subtitle: string
  description: string
}

export const Title = ({ title, subtitle, description }: TitleProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-4 mb-8 max-w-screen-md mx-auto">
      <h2 className="text-3xl font-bold text-indigo-500">{title}</h2>
      <h3 className="text-4xl font-bold">{subtitle}</h3>
      <p>{description}</p>
    </div>
  )
}
