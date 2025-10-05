import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Loading() {
  return (
    <div className="flex flex-col min-h-[100dvh] overflow-x-hidden">
      <Navigation />
      <main className="flex-1 pt-[170px] flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          <p className="text-lg text-gray-600">Loading your order details...</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
