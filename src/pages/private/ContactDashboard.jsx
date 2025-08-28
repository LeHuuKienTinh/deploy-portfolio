import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContacts } from '../../slice/contactsSlice'
import styled from 'styled-components'

import LoadingComponent from '../../components/LoadingComponent'
import ContactTable from '../../features/dashboard/contact/ContactTable'
import Heading from '../../components/Heading'
import useStatus from '../../hooks/useStatus'

const StyledContactDashboard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;
`

export default function ContactDashboard() {
  const dispatch = useDispatch()
  const { isLoadingContacts } = useStatus()

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <LoadingComponent isLoading={isLoadingContacts}>
      <StyledContactDashboard>
        <Heading as='h2'>Contact Message</Heading>
        <ContactTable />
      </StyledContactDashboard>
    </LoadingComponent>
  )
}
