import { ConfigProvider, Modal } from 'antd'
import { Menu } from 'antd'
import styled from 'styled-components'

const StyleMenu = styled(Menu)`
  border-right: 'none';
  text-align: center;
`

const ModalHeader = ({ modalOpen, setModalOpen, items, onClick, current }) => {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {},
          components: {
            Menu: {
              itemHoverColor: 'var(--color-cyan-5)',
              horizontalItemHoverColor: 'var(--color-cyan-5)',
              horizontalItemSelectedColor: 'var(--color-cyan-5)',
              horizontalLineHeight: '35px',
              itemColor: 'var(--color-grey-600)',
              itemBg: 'var( --color-platinum-1 )',
            },
            Modal: {
              contentBg: 'var( --color-platinum-1 )',
            },
          },
        }}
      >
        <Modal
          centered
          open={modalOpen}
          footer={null}
          onCancel={() => setModalOpen(false)}
        >
          <StyleMenu
            onClick={onClick}
            mode='vertical'
            selectedKeys={[current]}
            items={items}
          />
        </Modal>
      </ConfigProvider>
    </>
  )
}
export default ModalHeader
