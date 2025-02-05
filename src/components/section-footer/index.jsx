import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { FooterWrapper } from './style'

const SectionFooter = memo((props) => {
  const { name } = props

  let showName = "查看全部"
  if (name) {
    showName = `查看更多${name}房源`
  }

  return (
    <FooterWrapper name={name}>
      <span className='text'>{showName}</span>
      <IconMoreArrow/>
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string
}

export default SectionFooter