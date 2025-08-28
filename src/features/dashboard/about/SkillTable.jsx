import {
  Table,
  Button,
  Popconfirm,
  Space,
  ConfigProvider,
  InputNumber,
  Input,
} from 'antd'

export default function SkillTable({
  skills,
  editingKey,
  editingRow,
  setEditingRow,
  setEditingKey,
  save,
  cancel,
  remove,
}) {
  const columns = [
    {
      title: 'Skill Name',
      dataIndex: 'name',
      width: '40%',
      align: 'center',
      render: (_, record) =>
        editingKey === record.id ? (
          <Input
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
                token: { colorText: 'var(--color-grey-700)' },
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
  )
}
