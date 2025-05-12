import { Header } from '@/components/header'

type Props = {
  children: React.ReactNode
}

const MarketingLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen max-w-screen-xl mx-auto">
      <div className="space-y-8">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  )
}

export default MarketingLayout
