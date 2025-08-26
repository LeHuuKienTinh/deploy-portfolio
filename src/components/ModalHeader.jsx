import { ConfigProvider, Modal } from 'antd'
import { Menu } from 'antd'

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
          <Menu
            onClick={onClick}
            mode='vertical'
            selectedKeys={[current]}
            items={items}
            style={{
              borderRight: 'none',
              textAlign: 'center',
            }}
          />
        </Modal>
      </ConfigProvider>
    </>
  )
}
export default ModalHeader
