import React from 'react'
import styled from 'styled-components'

interface PropsStruct {
	/**
	 * 这是一个样式组件
	 * @description 需要被包裹的操作区子元素
	 */
	children?: any
}

function OperatingArea(props: PropsStruct) {
	return <OperatingContent>{props.children}</OperatingContent>
}

const OperatingContent = styled.div`
	display: flex;
	margin-bottom: 20px;
	justify-content: space-between;
`

export default OperatingArea
