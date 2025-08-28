import { useState } from 'react'
import { useUser } from '../authentication/useUser'
import { useDispatch } from 'react-redux'
import useSkill from '../Skills/useSkill'
import { addSkill, deleteSkill, updateSkill } from '../Skills/skillSlice'
import {
  Table,
  Button,
  Popconfirm,
  Space,
  Modal,
  InputNumber,
  ConfigProvider,
} from 'antd'
import { Form, Input } from 'formik-antd'
import { Formik } from 'formik'
import { Input as AntdInput } from 'antd'
import * as Yup from 'yup'

import StyleButton from '../../components/Button'
import styled from 'styled-components'

//VALIDATE
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name skill is required!'),
  level: Yup.number()
    .typeError('Level must be a number')
    .required('Level skill is required!')
    .min(1, 'Level must be at least 1')
    .max(100, 'Level cannot be more than 100'),
})

const StyleFlexButton = styled.div`
  display: flex;
  justify-content: flex-end;
`

export default function UpdateSkillsModal() {
  const [initValues, setInitValues] = useState({ name: '', level: '' })
  const { user } = useUser()
  const skills = useSkill()
  const dispatch = useDispatch()

  const [editingKey, setEditingKey] = useState(null)
  const [editingRow, setEditingRow] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false)

  //ACTIONS SKILL
  const cancel = () => {
    setEditingKey(null)
    setEditingRow({})
  }
  const save = (id) => {
    dispatch(
      updateSkill({
        userID: user.id,
        skillID: id,
        dataUpdate: { name: editingRow.name, level: editingRow.level },
      })
    )
    setEditingKey(null)
    setEditingRow({})
  }
  const remove = (id) => {
    dispatch(deleteSkill({ userID: user.id, skillID: id }))
  }
  const handleSubmit = (values) => {
    dispatch(
      addSkill({
        userID: user.id,
        name: values.name,
        level: values.level,
      })
    )
    setIsModalOpen(false)
  }

  // TABLE COLUMNS
  const columns = [
    {
      title: 'Skill Name',
      dataIndex: 'name',
      width: '40%',
      align: 'center',
      render: (_, record) =>
        editingKey === record.id ? (
          <AntdInput
            value={editingRow.name}
            onChange={(e) =>
              setEditingRow({ ...editingRow, name: e.target.value })
            }
          />
        ) : (
          record.name
        ),
    },
    {
      title: 'Level',
      dataIndex: 'level',
      width: '40%',
      align: 'center',

      render: (_, record) =>
        editingKey === record.id ? (
          <InputNumber
            min={0}
            max={100}
            value={editingRow.level}
            onChange={(value) => setEditingRow({ ...editingRow, level: value })}
          />
        ) : (
          record.level
        ),
    },
    {
      title: 'Actions',
      width: '20%',
      align: 'center',

      render: (_, record) => {
        const editable = editingKey === record.id
        return editable ? (
          <Space>
            <Button type='link' onClick={() => save(record.id)}>
              Save
            </Button>
            <Button type='link' onClick={cancel}>
              Cancel
            </Button>
          </Space>
        ) : (
          <Space>
            <Button
              type='link'
              onClick={() => {
                setEditingKey(record.id)
                setEditingRow({ ...record })
              }}
            >
              Edit
            </Button>
            <ConfigProvider
              theme={{
                token: {
                  colorText: 'var(--color-grey-700)',
                },
              }}
            >
              <Popconfirm
                color='var(--color-grey-100)'
                title='Delete this skill?'
                onConfirm={() => remove(record.id)}
              >
                <Button type='link' danger>
                  Delete
                </Button>
              </Popconfirm>
            </ConfigProvider>
          </Space>
        )
      },
    },
  ]

  return (
    <>
      {/* BTN ADDSKILL */}
      <StyleButton
        type='primary'
        onClick={() => {
          setInitValues({ name: '', level: '' })
          setIsModalOpen(true)
        }}
      >
        Add Skill
      </StyleButton>

      {/* TABLE */}
      <ConfigProvider
        theme={{
          components: {
            Table: {
              headerBg: 'var(--color-grey-300)',
              rowHoverBg: 'var(--color-grey-100)',
            },
          },
        }}
      >
        <Table columns={columns} dataSource={skills} pagination={false} />
      </ConfigProvider>

      {/* MODAL ADDSKILL */}
      <Modal
        title='Add Skill'
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        okText='Add'
        footer={null}
      >
        <Formik
          initialValues={initValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form layout='vertical'>
            <Form.Item label='Skill Name' name='name'>
              <Input name='name' />
            </Form.Item>
            <Form.Item label='Level (0-100)' name='level'>
              <Input name='level' min={0} max={100} />
            </Form.Item>
            <StyleFlexButton>
              <StyleButton type='submit'>Create</StyleButton>
            </StyleFlexButton>
          </Form>
        </Formik>
      </Modal>
    </>
  )
}
