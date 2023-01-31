'use client'

import { useRouter } from 'next/navigation'
import { FormEvent, useRef } from 'react'
import { Button } from '@/components/button'
import { Page } from '@/components/common'
import { FormGroup, FormInput, FormLabel } from '@/components/form'

export default function FindOwners() {
  const router = useRouter()

  const formEl = useRef<HTMLFormElement>(null)
  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (formEl.current !== null) {
      const lastName: string = formEl.current.lastName.value
      router.push(`/owners?lastName=${lastName}`)
    }
  }

  return (
    <Page>
      <h2>Find Owners</h2>
      <form ref={formEl} onSubmit={handleOnSubmit}>
        <FormGroup>
          <FormLabel>
            <label htmlFor="lastName">Last name</label>
          </FormLabel>
          <FormInput>
            <input size={30} maxLength={80} name="lastName" id="lastName" />
          </FormInput>
        </FormGroup>
        <FormGroup reverse>
          <FormInput>
            <Button type="submit">Find Owner</Button>
          </FormInput>
        </FormGroup>
      </form>
      <br />
      <Button onClick={() => router.push('/owners/new')}>Add Owner</Button>
    </Page>
  )
}
