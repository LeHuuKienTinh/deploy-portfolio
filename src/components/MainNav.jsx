import { ConfigProvider, Menu } from 'antd'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const StyleMenu = styled(Menu)`
  border-bottom: none;
  @media (max-width: 1200px) {
    display: none;
  }
`

export default function MainNav({ current, onClick, items }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200)
    }
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      {!isMobile && (
        <ConfigProvider
          theme={{
            components: {
              Menu: {
                itemHoverColor: 'var(--color-cyan-5)',
                horizontalItemHoverColor: 'var(--color-cyan-5)',
                horizontalItemSelectedColor: 'var(--color-cyan-5)',
                horizontalLineHeight: '35px',
                itemColor: 'var(--color-grey-600)',
                itemBg: 'var( --color-platinum-1 )',
              },
            },
          }}
        >
          <StyleMenu
            onClick={onClick}
            mode='horizontal'
            selectedKeys={[current]}
            items={items}
          />
        </ConfigProvider>
      )}
    </>
  )
}
