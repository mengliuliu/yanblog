import React, { forwardRef, memo, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { Input, Form, Button, Select, DatePicker, Tooltip } from 'antd'
import SearchConfig from 'src/config/SearchBarConfig'
import { timeToStamp } from 'utils/timeFilter'
import styled from 'styled-components'
import moment from 'moment'

const FormItem = Form.Item
const {Option} = Select
const {RangePicker} = DatePicker

type Config = {
    pageName: string // 页面标识
    className?: string
    onClear?: () => void // 清空回调处理
    onSubmit?: (params: any) => void // 搜索回调处理
    initValues?: { [name: string]: any } // 传入回显搜索项
    optionData?: { [name: string]: any } // 传入的初始数据
    showLabel?: boolean // 是否显示label
}

const SearchBar = memo(
    forwardRef((props: Config, ref: any) => {
        const [form] = Form.useForm()
        const [config, setConfig] = useState<any>([])
        const buttonRef: any = useRef(null)
        const { showLabel } = props

        useImperativeHandle(ref, () => ({
            click: () => {
                buttonRef.current.click()
            },
        }))
        // 得到配置对象
        useEffect(() => {
            setConfig(SearchConfig[props.pageName])
            form.resetFields()
        }, [props.pageName, props.initValues])

        function getComponent() {
            const result: any[] = []
            if (config && config.length) {
                config.forEach((item: any) => {
                    if (item.isHidden) return
                    if (item.component === 'input') {
                        result.push(InputComponent(item))
                    } else if (item.component === 'select') {
                        result.push(SelectComponent(item))
                    } else if (item.component === 'searchSelect') {
                        result.push(renderSearchSelectComponent(item))
                    } else if (item.component === 'date') {
                        result.push(DateComponent(item))
                    } else if (item.component === 'rangeDate') {
                        result.push(RangeDateComponent(item))
                    }
                })
            }
            return result
        }
        function InputComponent({
            componentKey,
            label,
            placeholder,
            width,
            maxLength,
        }: {
            componentKey: string
            label: string
            placeholder: string
            width: number
            maxLength: number
        }) {
            const { initValues } = props
            const defaultValue = initValues ? initValues[componentKey] : ''
            return (
                <FormItem initialValue={defaultValue} name={componentKey} key={componentKey} className="input-area" label={showLabel ? label : null}>
                    <Input style={{ width: width || 100 }} placeholder={placeholder || '请输入'} maxLength={maxLength || undefined} />
                </FormItem>
            )
        }
        function SelectComponent({
            componentKey,
            label,
            placeholder,
            noAddAll,
            arrData,
            width,
            selectTitle,
        }: {
            componentKey: string
            label: string
            placeholder: string
            arrData: string | Array<any>
            noAddAll: boolean
            width: number
            selectTitle: string
        }) {
            const { initValues, optionData } = props
            const option = arrData || []
            const arr = option && typeof option === 'string' ? (optionData && optionData[option]) || [] : option
            const list = noAddAll ? arr : [{ name: selectTitle, key: 'all' }].concat(arr)
            const defaultValue = initValues && initValues[componentKey] ? initValues[componentKey] : noAddAll ? null : 'all'

            return (
                <FormItem initialValue={defaultValue} name={componentKey} key={componentKey} label={showLabel ? label : null}>
                    <Select placeholder={placeholder || '请选择'} style={{ width: width || 100 }} dropdownStyle={{ textAlign: 'center' }}>
                        {list &&
                            list.map((item: { name: string; key: string }) => (
                                    <Option title={item.name} value={item.key} key={item.key}>
                                        {item.name}
                                    </Option>
                                ))}
                    </Select>
                </FormItem>
            )
        }
        const filterOption = (input: any, option: any) => option['no-title'].toLowerCase().indexOf(input.toLowerCase()) >= 0
        // 模糊查询专属
        function renderSearchSelectComponent({
            componentKey,
            label,
            placeholder,
            arrData,
        }: {
            componentKey: string
            label: string
            placeholder: string
            arrData: string | Array<any>
        }) {
            const { initValues, optionData } = props
            const option = arrData || []
            const arr = option && typeof option === 'string' ? (optionData && optionData[option]) || [] : option
            const defaultValue = initValues ? initValues[componentKey] : undefined

            return (
                <FormItem initialValue={defaultValue} name={componentKey} key={componentKey} label={label}>
                    <Select
                        optionLabelProp="no-title"
                        filterOption={filterOption}
                        style={{ width: '150px', textAlign: 'left' }}
                        showSearch
                        placeholder={placeholder || '请输入'}
                        dropdownStyle={{ textAlign: 'center' }}
                    >
                        {arr &&
                            arr.map((item: { name: string; key: string }) => (
                                    <Option no-title={item.name} value={item.key} key={item.key}>
                                        <Tooltip placement="left" title={item.name}>
                                            {item.name}
                                        </Tooltip>
                                    </Option>
                                ))}
                    </Select>
                </FormItem>
            )
        }
        function DateComponent({ componentKey, label, placeholder, width }: { componentKey: string; label: string; placeholder: string; width: number }) {
            const { initValues } = props
            const defaultValue = initValues && initValues[componentKey] ? moment(initValues[componentKey]) : ''
            return (
                <FormItem name={componentKey} key={componentKey} label={label} initialValue={defaultValue}>
                    {/* <DatePicker style={{ width: '200px' }} format="YYYY-MM-DD" placeholder={placeholder} /> */}
                    <DatePicker style={{ width: width || 200 }} format="YYYY-MM-DD" placeholder={placeholder} />
                </FormItem>
            )
        }
        function RangeDateComponent({ componentKey, label, placeholder }: { componentKey: string; label: string; placeholder: [string, string] }) {
            const { initValues } = props
            const defaultValue = initValues && initValues.maxDueDateTime ? [moment(initValues.minDueDateTime), moment(initValues.maxDueDateTime)] : []
            return (
                <FormItem name={componentKey} initialValue={defaultValue} key={componentKey} label={label}>
                    <RangePicker placeholder={placeholder} format="YYYY-MM-DD" />
                </FormItem>
            )
        }
        function submit() {
            const { onSubmit } = props
            form
                .validateFields()
                .then(values => {
                    console.log('values', values)
                    const params = { ...values }
                    config.forEach((item: { component: string; componentKey: string }) => {
                        if ((item.component === 'select' && values[item.componentKey] === 'all') || (item.component === 'input' && values[item.componentKey] === ''))
                            delete params[item.componentKey]
                        if (item.component === 'date' && values[item.componentKey]) params[item.componentKey] = timeToStamp(params[item.componentKey], 'begin')
                        if (item.component === 'rangeDate' && values[item.componentKey]) {
                            params[item.componentKey] = [timeToStamp(params[item.componentKey][0], 'begin'), timeToStamp(params[item.componentKey][1], 'begin')]
                        }
                    })
                    console.log('params', params)
                    if (onSubmit) {
                        onSubmit(params)
                    }
                })
                .catch(errorInfo => {
                    console.log(errorInfo)
                })
        }
        function clear() {
            const result: { [name: string]: any } = { }
            config.forEach((item: { [name: string]: any }) => {
                if (item.component === 'select') {
                    if (item.noAddAll) {
                        result[item.componentKey] = props.initValues ? props.initValues[item.componentKey] : undefined
                    } else result[item.componentKey] = 'all'
                } else if (item.component === 'input') result[item.componentKey] = props.initValues ? props.initValues[item.componentKey] : ''
                else if (item.component === 'date') result[item.componentKey] = props.initValues ? props.initValues[item.componentKey] : null
                else if (item.component === 'rangeDate') result[item.componentKey] = props.initValues ? props.initValues[item.componentKey] : []
                else if (item.component === 'searchSelect') result[item.componentKey] = props.initValues ? props.initValues[item.componentKey] : undefined
            })
            console.log(result)
            form.setFieldsValue(result)
            if (props.onClear) {
                props.onClear()
            }
        }
        return (
            <Box>
                <Form form={form} layout="inline">
                    <div className="paramsContainer">{getComponent()}</div>
                    <Button type="primary" className="search" onClick={submit}>
                        查询
                    </Button>
                    <Button ref={buttonRef} className="clear" onClick={clear}>
                        重置
                    </Button>
                </Form>
            </Box>
        )
    })
)

const Box = styled.div`
	margin-left: auto;
	.paramsContainer {
		display: flex;
		.ant-select.status {
			width: 100px;
		}
		.ant-select {
			width: 100px;
			text-align: center;
			.ant-select-selection-selected-value {
				float: none;
			}
		}
	}
	.search {
		margin-right: 10px;
	}

	.input-area {
		.ant-input {
			// 输入框背景颜色
			background-color: white;
			border: 1px solid #d9d9d9;
		}
	}
`
export default SearchBar
