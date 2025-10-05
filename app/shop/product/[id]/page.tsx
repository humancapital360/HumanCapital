import ProductDetailClient from "./ProductDetailClient"

export async function generateStaticParams() {
  // Return all possible product IDs for static generation
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }]
}

export default function ProductDetailPage() {
  return <ProductDetailClient />
}
