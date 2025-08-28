import { useState } from 'react'
import { useSelector } from 'react-redux'

import { selectAllContacts } from '../slice/contactsSlice'

export default function useContacts() {
  const contacts = useSelector(selectAllContacts)
  const data = contacts.map((contact, index) => {
    return {
      key: index,
      name: contact.name,
      email: contact.email,
      subject: contact.subject,
      message: contact.message,
    }
  })

  const [searchText, setSearchText] = useState('')
  const [filteredData, setFilteredData] = useState(data)

  const handleSearch = (value) => {
    const lowerValue = value.toLowerCase()
    const filtered = data.filter(
      (item) =>
        item.name.toLowerCase().includes(lowerValue) ||
        item.email.toLowerCase().includes(lowerValue) ||
        item.subject.toLowerCase().includes(lowerValue) ||
        item.message.toLowerCase().includes(lowerValue)
    )
    setFilteredData(filtered)
    setSearchText(value)
  }

  return { data, searchText, filteredData, handleSearch }
}
