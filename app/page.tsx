import { redirect } from 'next/navigation'

/**
 * @returns Redirects to the 'Ofertas' page
 */
export default function Home() {
  redirect('/ofertas');
}
