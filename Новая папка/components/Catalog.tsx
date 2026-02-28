import ProductCard from "./ProductCard"

const products = [
  "Discord Nitro 1 месяц",
  "Xbox Game Pass",
  "Steam Gift Card",
  "VPN подписка"
]

export default function Catalog() {
  return (
    <section id="catalog" className="py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Каталог</h2>
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {products.map((p) => (
          <ProductCard key={p} name={p} />
        ))}
      </div>
    </section>
  )
}