import Head from 'next/head'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Home() {
  return (
    <>
      <div className="bg-cover" style={{ backgroundImage: `url("/mobile_stretch.jpg")`, height: `80vh` }}>
        <Head>
          <title>Hong Fitness</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <nav className="text-white">
          <Link href="/">
            <div className="flex justify-between py-4 mx-8">
              <a>HONG FONUA</a>
              <GiHamburgerMenu />
            </div>
          </Link>
        </nav>
        <div className="flex" style={{height: `50vh`}}>
          <h1 className="text-5xl text-white align-center mx-auto self-center">HONG FONUA</h1>
        </div>
      </div>
      <ul className="flex flex-col text-white">
        <button className="w-10/12 text-pink-300 border-pink-300 py-2 my-2 mx-auto hover:bg-pink-300 hover:text-white" style={{border: `2px solid pink`}}>FITNESS GUIDES</button>
        <button className="w-10/12 text-pink-300 border-pink-300 py-2 my-2 mx-auto hover:bg-pink-300 hover:text-white" style={{border: `2px solid pink`}}>PRODUCTS</button>
        <button className="w-10/12 text-pink-300 border-pink-300 py-2 my-2 mx-auto hover:bg-pink-300 hover:text-white" style={{border: `2px solid pink`}}>NUTRITION E-BOOK</button>
        <button className="w-10/12 text-pink-300 border-pink-300 py-2 my-2 mx-auto hover:bg-pink-300 hover:text-white" style={{border: `2px solid pink`}}>BUNDLES</button>
      </ul>
    </>
  )
}
