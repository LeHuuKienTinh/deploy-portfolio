import { useState } from 'react'
import { addSkill, deleteSkill, updateSkill } from '../slice/skillSlice'

export const useSkill = (userId, skills, dispatch) => {
  const [initValues, setInitValues] = useState({ name: '', level: '' })
  const [editingKey, setEditingKey] = useState(null)
  const [editingRow, setEditingRow] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false)

  const cancel = () => {
    setEditingKey(null)
    setEditingRow({})
  }

  const save = (id) => {
    dispatch(
      updateSkill({ userID: userId, skillID: id, dataUpdate: editingRow })
    )
    setEditingKey(null)
    setEditingRow({})
  }

  const remove = (id) => {
    dispatch(deleteSkill({ userID: userId, skillID: id }))
  }

  const handleSubmit = (values) => {
    dispatch(
      addSkill({ userID: userId, name: values.name, level: values.level })
    )
    setIsModalOpen(false)
  }

  return {
    initValues,
    setInitValues,
    editingKey,
    setEditingKey,
    editingRow,
    setEditingRow,
    isModalOpen,
    setIsModalOpen,
    cancel,
    save,
    remove,
    handleSubmit,
  }
}
