import React from 'react'
import Root from './Root'
import Container from './Container'
import CustomText from './CustomText'
import CustomImg from './CustomImg'

export const TestReact = () => {
  return (
    <Root>
      <Container {...{ style: { display: 'block' } }}>
        <CustomText {...{ text: '我是文本' }}></CustomText>

        <CustomImg
          {...{
            src: 'https://img01.yzcdn.cn/vant/cat.jpeg',
            style: { display: 'block', width: '1rem', height: '1rem' }
          }}
        ></CustomImg>
      </Container>
    </Root>
  )
}

export default TestReact
