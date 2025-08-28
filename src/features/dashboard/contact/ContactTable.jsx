import React, { useState } from 'react'
import { ConfigProvider, Empty, Table, Input, Space } from 'antd'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectAllContacts } from '../../contact/contactsSlice'

const { Search } = Input

const columns = [
  { title: 'Name', dataIndex: 'name' },
  { title: 'Email', dataIndex: 'email' },
  { title: 'Subject', dataIndex: 'subject' },
  { title: 'Message', dataIndex: 'message' },
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    email: 'huyltqse135@gmail.com',
    subject: 'subject',
    message: 'good',
  },
  {
    key: '2',
    name: 'Jane Doe',
    email: 'janedoe@gmail.com',
    subject: 'question',
    message: 'hello',
  },
  {
    key: '3',
    name: 'Tom Smith',
    email: 'tomsmith@gmail.com',
    subject: 'feedback',
    message: 'nice',
  },
  {
    key: '4',
    name: 'Alice',
    email: 'alice@gmail.com',
    subject: 'report',
    message: 'bug',
  },
]

const StyledContactTable = styled.div`
  width: 100%;
`

const StyledSearch = styled(Search)`
  max-width: 300;
`

const StyledSpace = styled(Space)`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
  width: 100%;
`

const ContactTable = () => {
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

  return (
    <StyledContactTable>
      <ConfigProvider
        theme={{
          components: {
            Table: {
              headerBg: 'var(--color-grey-300)',
              rowHoverBg: 'var(--color-grey-200)',
            },
          },
          token: {
            colorBgContainer: 'var(--color-grey-100)',
            colorText: 'var(--color-grey-800)',
          },
        }}
      >
        <StyledSpace>
          <StyledSearch
            placeholder='Search by name, email, subject or message'
            allowClear
            enterButton='Search'
            size='large'
            onSearch={handleSearch}
            onChange={(e) => handleSearch(e.target.value)}
            value={searchText}
          />
        </StyledSpace>
        <Table
          bordered
          columns={columns}
          dataSource={filteredData}
          size='large'
          locale={{ emptyText: <Empty description='No Data' /> }}
        />
      </ConfigProvider>
    </StyledContactTable>
  )
}

export default ContactTable
