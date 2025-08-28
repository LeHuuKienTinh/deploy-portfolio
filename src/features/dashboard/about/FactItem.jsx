import { Button, Col, Popconfirm } from 'antd'
import Heading from '../../../components/Heading'
import styled from 'styled-components'
import { useState } from 'react'

const StyleColCenter = styled(Col)`
  text-align: center;
`
const StyleButtonPlusMinus = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

export default function FactItem({ title, value, field, updateHandler }) {
  const [tempValue, setTempValue] = useState(value)

  return (
    <StyleColCenter xs={24} sm={12} lg={6}>
      <Heading as='h2'>{value}</Heading>
      <p>{title}</p>
      {field && (
        <Popconfirm
          color='var(--color-grey-100)'
          showCancel={false}
          description={
            <StyleButtonPlusMinus>
              <Button onClick={() => setTempValue(tempValue - 1)}>-</Button>
              <span>{tempValue}</span>
              <Button onClick={() => setTempValue(tempValue + 1)}>+</Button>
            </StyleButtonPlusMinus>
          }
          onConfirm={() => updateHandler(field, tempValue)}
          placement='bottom'
        >
          <Button>Update</Button>
        </Popconfirm>
      )}
    </StyleColCenter>
  )
}
