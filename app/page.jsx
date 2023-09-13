'use client'

import Stripe from '@/components/Stripe/Stripe'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Avocado = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Avocado), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex h-96 w-full flex-col items-center justify-center'>
      <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  ),
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

const colors1 = ['#5E4130', '#FDCBAD', '#78C0A8', '#F07918', '#F09A30']
const colors2 = ['#230F2B', '#F22E41', '#EBEBBD', '#BCDFC5', '#82B3AE']
const colors3 = ['#30271C', '#403736', '#366453', '#1F5F61', '#0B8185']

const speed1 = 0.5
const speed2 = 0.4
const speed3 = 0.3

export default function Page() {
  return (
    <section className='md:container md:mx-auto'>
      <div className='mx-auto flex w-full flex-col flex-wrap items-center md:flex-row '>
        {/* jumbo */}
        <div className='flex w-full flex-col items-start justify-center py-12 text-center md:w-2/5 md:text-left'>
          <p className='w-full uppercase'>Youwe + 3D loaders</p>
          <h1 className='my-4 text-5xl font-bold leading-tight'>3D loader starter kit</h1>
          <p className='mb-8 text-2xl leading-normal'>
            A minimalist starter for React, React-three-fiber and Threejs. Made for loading 3D models.
          </p>
        </div>
      </div>

      <div className='mx-auto flex flex-col flex-wrap'>
        <div className='mb-10 grid gap-8 md:grid-cols-3 lg:grid-cols-3'>
          <a href='/' className='group relative h-[343px]'>
            <Stripe colors={colors1} speed={speed1} className='!absolute !h-[354px] !w-1/3' />
            <div className='absolute top-0 w-full p-12 pb-4 text-white md:w-[70%]'>
              <h3 className='pb-5 text-2xl group-hover:underline'>Groovy</h3>
              <p className='group-hover:underline '>This animation is actually not 2D but 3D.</p>
            </div>
          </a>

          <a href='/' className='group relative h-[343px]'>
            <Stripe colors={colors2} speed={speed2} />
            <div className='absolute top-0 w-full p-12 pb-4 text-white md:w-[70%]'>
              <h3 className='pb-5 text-2xl group-hover:underline'>Silky smooth</h3>
              <p className='group-hover:underline'>Perfomance is important.</p>
            </div>
          </a>

          <a href='/' className='group relative h-[343px]'>
            <Stripe colors={colors3} speed={speed3} />
            <div className='absolute top-0 w-full p-12 pb-4 text-white md:w-[70%]'>
              <h3 className='pb-5 text-2xl group-hover:underline'>Colourful</h3>
              <p className='group-hover:underline '>Why not?</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
