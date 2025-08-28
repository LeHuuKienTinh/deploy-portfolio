import { useUser } from '../../authentication/useUser'
import { useDispatch } from 'react-redux'
import useAbout from '../../../hooks/useAbout'
import { useSkill } from '../../../hooks/useSkill'
import SkillTable from './SkillTable'
import SkillForm from './SkillForm'
import StyleButton from '../../../components/Button'

export default function UpdateSkillsModal() {
  const { user } = useUser()
  const dispatch = useDispatch()
  const { skills } = useAbout()
  const {
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
  } = useSkill(user.id, skills, dispatch)

  return (
    <>
      <StyleButton
        type='primary'
        onClick={() => {
          setInitValues({ name: '', level: '' })
          setIsModalOpen(true)
        }}
      >
        Add Skill
      </StyleButton>
      <SkillTable
        skills={skills}
        editingKey={editingKey}
        editingRow={editingRow}
        setEditingRow={setEditingRow}
        setEditingKey={setEditingKey}
        save={save}
        cancel={cancel}
        remove={remove}
      />
      {isModalOpen && (
        <SkillForm
          initValues={initValues}
          handleSubmit={handleSubmit}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  )
}
