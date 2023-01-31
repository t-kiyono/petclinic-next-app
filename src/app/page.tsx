'use client'

import Image from 'next/image'
import { CommonMeta, Page } from '@/components/common'

export default function Home() {
  return (
    <Page>
      <CommonMeta />
      <h2>Welcome</h2>
      <Image
        src="/images/pets.png"
        width={239}
        height={170}
        alt="Pets"
      />
    </Page>
  )
}
