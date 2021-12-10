import ProductCard from '@/components/cards/ProductCard'
import type { Product } from '@/lib/product'

export default function TopProductsSection() {
  const product: Product[] = [
    {
      id: '1',
      thumbnail: '/images/home-2/500-1.jpg',
      title: 'کیف پول زنانه',
      price: 210000,
      likes: 1200,
      description: 'توضیحات بیشتر درباره کیفیت محصول، متریال و ...',
    },
    {
      id: '1',
      thumbnail: '/images/home-2/500-2.jpg',
      title: 'کوله پشتی',
      price: 410000,
      likes: 1200,
      description: 'توضیحات بیشتر درباره کیفیت محصول، متریال و ...',
    },
    {
      id: '1',
      thumbnail: '/images/home-2/500-3.jpg',
      title: 'کمربند',
      price: 90000,
      likes: 1200,
      description: 'توضیحات بیشتر درباره کیفیت محصول، متریال و ...',
    },
    {
      id: '1',
      thumbnail: '/images/home-2/500-4.jpg',
      title: 'کفش',
      price: 220000,
      likes: 1200,
      description: 'توضیحات بیشتر درباره کیفیت محصول، متریال و ...',
    },
  ]

  return (
    <div className="section section-padding pt-0 mt-10">
      <div className="container">
        <div className="section-title has-element centered">
          <span className="subtitle">پر فروش ترین ها</span>
          <h3 className="title">محصولات پربازدید</h3>
        </div>

        <div className="row">
          {product.map((item) => (
            <ProductCard product={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  )
}
