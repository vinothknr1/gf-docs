import type { NextPage } from 'next'
import Head from 'next/head'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import Header from '../components/Header'
import Image from 'next/image'
import { Router, useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>Grey Feathers Docs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className="bg-[#F8F9FA] px-10 pb-10">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center justify-between py-6">
            <h2 className="text-lg text-gray-700">Start a New Document</h2>
            <Button
              color="gray"
              buttonType="outline"
              iconOnly={true}
              ripple="dark"
              className="border-0"
            >
              <Icon name="more_vert" size="3xl"></Icon>
            </Button>
          </div>
          <div>
            <div className="relative  h-52 w-40 border-2 hover:border-blue-700">
              <Image
                onClick={() => {
                  router.push('/doc/doc')
                }}
                src="https://links.papareact.com/pju"
                layout="fill"
              />
            </div>
            <p className="font ml-2 mt-2 text-sm font-semibold text-gray-700">
              Blank
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
