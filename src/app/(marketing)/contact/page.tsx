import { Title } from '@/components/title'

const Contact = () => {
  return (
    <section className="flex flex-col min-h-screen">
      <div className="space-y-4 p-8">
        <Title
          align="left"
          subtitle="Contato"
          description="Entre em contato e vamos conversar sobre o seu projeto."
        />
        <div className="flex flex-col items-center justify-center bg-indigo-500 p-12 rounded-lg shadow-md space-y-4">
          Form
        </div>
      </div>
    </section>
  )
}

export default Contact
