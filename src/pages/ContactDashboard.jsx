import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchContacts,
  selectAllContacts,
  selectStatusContacts,
} from '../features/contact/contactsSlice'
import styled from 'styled-components'

import LoadingComponent from '../components/LoadingComponent'
import ContactTable from '../features/dashboard/contact/ContactTable'
import Heading from '../components/Heading'

const StyledContactDashboard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;
`

export default function ContactDashboard() {
  const dispatch = useDispatch()

  const statusContacts = useSelector(selectStatusContacts)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <LoadingComponent isLoading={statusContacts === 'idle'}>
      <StyledContactDashboard>
        <Heading as='h2'>Contact Message</Heading>
        <ContactTable />
      </StyledContactDashboard>
    </LoadingComponent>
  )
}
