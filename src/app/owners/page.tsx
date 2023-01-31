'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Page } from '@/components/common'
import { Table } from '@/components/table'

interface Owner {
  pets?: Array<any>;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  telephone: string;
  id?: number;
}

const testData: Owner[] =
[
  {
    'id': 1,
    'firstName': 'George',
    'lastName': 'Franklin',
    'address': '110 W. Liberty St.',
    'city': 'Madison',
    'telephone': '6085551023',
    'pets': [
      {
        'id': 1,
        'name': 'Leo',
        'birthDate': '2010-09-07',
        'type': 'cat'
      },
      {
        'id': 2,
        'name': 'Basil',
        'birthDate': '2012-08-06',
        'type': 'hamster'
      },
      {
        'id': 3,
        'name': 'Rosy',
        'birthDate': '2011-04-17',
        'type': 'dog'
      }
    ]
  },
  {
    'id': 2,
    'firstName': 'Betty',
    'lastName': 'Davis',
    'address': '638 Cardinal Ave.',
    'city': 'Sun Prairie',
    'telephone': '6085551749',
    'pets': [
      {
        'id': 5,
        'name': 'George',
        'birthDate': '2010-01-20',
        'type': 'snake'
      }
    ]
  },
  {
    'id': 3,
    'firstName': 'Eduardo',
    'lastName': 'Rodriquez',
    'address': '2693 Commerce St.',
    'city': 'McFarland',
    'telephone': '6085558763',
    'pets': []
  }
]

export default function ListOwners() {
  const searchParams = useSearchParams()
  const lastName = searchParams.get('lastName')

  return (
    <Page>
      <h2>Owners</h2>
      <ListData lastName={lastName ?? ''} />
    </Page>
  )
}

function ListData(props: { lastName?: string }) {
  console.log(props.lastName)
  const convertTableData = (owners: Owner[]) => (
    owners.flatMap(o => {
      if (typeof o.id === 'number') {
        return {
          key: o.id,
          data: {
            Name: <Link href={`/owners/${o.id}`}>{`${o.firstName} ${o.lastName}`}</Link>,
            Address: o.address,
            City: o.city,
            Telephone: o.telephone,
            Pets: o.pets !== undefined ? o.pets.map(p => p.name).join(', ') : ''
          }
        }
      } else {
        return []
      }
    })
  )

  /* TODO data fetch
  // if (!data && error) return <p>occurs error!</p>;
  if (!data && error) throw Error
  if (!data) return <Loader />
  */
  return <Table showHeader contents={convertTableData(testData)} />
}
