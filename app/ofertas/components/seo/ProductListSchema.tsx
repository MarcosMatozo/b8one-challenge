import { Product } from "../../types";

interface Props {
  products: Product[],
  pageTitle?: string
}

/**
 * @param products List of products
 * @param pageTitle Page title
 * @returns React component with a JSON-LD schema for the product list
 */
export function ProductListSchema({ products, pageTitle }: Props ) {
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name":  pageTitle ? pageTitle : '--- Sem título ---',
    "itemListElement": products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.title,
        "image": product.image,
        "offers": {
          "@type": "Offer",
          "price": product.price,
          "priceCurrency": "BRL",
          "availability": "https://schema.org/InStock"
        }
      }
    }))
  }


  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}
