interface Config {
	[name: string]: SearchConfig
}

interface arrConfig {
	[index: number]: {
		key: string //下拉项key
		name: string //下拉项name
	}
}

interface SearchConfig {
	[x: string]: any
	[index: number]: {
		component: 'input' | 'select' | 'rangeDate' | 'date' | 'searchSelect' //对应展示的组件
		label: string //组件的label
		componentKey: string //组件的搜索内容字段
		arrData?: string | arrConfig //组件初始设定的下拉数据, typeof string 取props.optionData[arrData]
		noAddAll?: boolean //默认添加all 设为true不添加
		placeholder?: string | [string, string] // rangeDate 为[]形式
		width?: number //宽度 默认100
		selectTitle?: string //下拉框的 title
		maxLength?: number
	}
}
const couMeaning = '融信'
const SearchBarObject: Config = {
	invoiceList: [
		{
			//发票列表
			component: 'input',
			label: '',
			componentKey: 'invoiceCode',
			placeholder: '请输入发票代码',
			width: 140,
		},
		{
			component: 'select',
			label: '',
			componentKey: 'buyerName',
			arrData: 'buyerName',
			placeholder: '购买方名称',
			// selectTitle: '全部',
			noAddAll: true,

			width: 150,
		},
	],
	contractList: [
		{
			//合同编号
			component: 'input',
			label: '',
			componentKey: 'contractCode',
			placeholder: '请输入合同编号',
			width: 140,
		},
	],
	chooseContractPage: [
		{
			//选择合同页面
			component: 'input',
			label: '合同编号',
			componentKey: 'contractCode',
		},
		{
			component: 'input',
			label: '合同名称',
			componentKey: 'name',
		},
	],
	searchCouC: [
		{
			//COU支付查询页面
			component: 'select',
			label: '收款方',
			componentKey: 'toUuid',
			arrData: 'toList',
		},
		{
			component: 'select',
			label: '状态',
			componentKey: 'status',
			arrData: 'searchCouPageList',
		},
		{
			component: 'input',
			label: `${couMeaning}支付编号`,
			componentKey: 'transferNo',
		},
	],
	searchCouS: [
		{
			//COU支付查询页面
			component: 'select',
			label: '付款方',
			componentKey: 'fromUuid',
			arrData: 'fromList',
		},
		{
			component: 'select',
			label: '状态',
			componentKey: 'status',
			arrData: 'searchCouPageList',
		},
		{
			component: 'input',
			label: `${couMeaning}支付编号`,
			componentKey: 'transferNo',
		},
	],
	verifyCou: [
		{
			//COU确认接收
			component: 'select',
			label: '付款方',
			componentKey: 'fromUuid',
			arrData: 'fromList',
		},
		{
			component: 'input',
			label: `${couMeaning}支付编号`,
			componentKey: 'transferNo',
		},
	],

	chooseCou: [
		{
			//融信支付-选择cou
			component: 'select',
			label: '开立方',
			componentKey: 'publishUuid',
			arrData: 'publishList',
			noAddAll: true,
		},
		{
			component: 'rangeDate',
			label: '兑付到期日',
			componentKey: 'dueDate',
		},
	],
	// searchFinanceC: [
	// 	{
	// 		//融资查询C
	// 		component: 'searchSelect',
	// 		label: '融资企业',
	// 		componentKey: 'financeUuid',
	// 		arrData: 'financeCompanyList',
	// 	},
	// 	{
	// 		component: 'select',
	// 		label: '付息方式',
	// 		componentKey: 'interestPayWay',
	// 		arrData: 'interestPayWayList',
	// 		width: 120,
	// 	},
	// 	{
	// 		//融资状态
	// 		component: 'select',
	// 		label: '状态',
	// 		componentKey: 'statusList',
	// 		arrData: 'statusList',
	// 		width: 120,
	// 	},
	// ],
	// searchFinanceOther: [
	// 	{
	// 		//融资查询C
	// 		component: 'searchSelect',
	// 		label: '融资企业',
	// 		componentKey: 'financeUuid',
	// 		arrData: 'financeCompanyList',
	// 	},
	// 	{
	// 		component: 'select',
	// 		label: '付息方式',
	// 		componentKey: 'interestPayWay',
	// 		arrData: 'interestPayWayList',
	// 		width: 120,
	// 	},
	// 	{
	// 		//融资状态
	// 		component: 'select',
	// 		label: '状态',
	// 		componentKey: 'statusList',
	// 		arrData: 'statusList',
	// 		width: 120,
	// 	},
	// ],
	searchFinance: [
		{
			//创建融资
			component: 'input',
			label: '',
			placeholder: '融资申请编号',
			componentKey: 'applicationNumber',
			width: 120,
		},
		{
			//金融机构
			component: 'select',
			label: '',
			placeholder: '金融机构',
			componentKey: 'financeList',
			arrData: 'financeList',
			noAddAll: true,
			width: 220,
		},
		{
			//融资状态
			component: 'select',
			label: '',
			placeholder: '状态',
			componentKey: 'statusList',
			arrData: 'statusList',
			noAddAll: true,
			width: 120,
		},
		{
			//创建融资
			component: 'date',
			label: '',
			placeholder: '创建日期',
			componentKey: 'createDate',
			width: 140,
		},
	],
	createFinance: [
		{
			//创建融资
			component: 'date',
			label: '兑付到期日',
			componentKey: 'dueDate',
		},
	],
	chooseInvoice: [
		{
			//融资选择发票
			component: 'rangeDate',
			label: '开票日期',
			componentKey: 'invoiceDate',
		},
		{
			component: 'input',
			label: '发票号码',
			componentKey: 'invoiceNumber',
		},
	],
	//cou兑付页面
	cashSearch: [
		{
			component: 'select',
			label: '兑付状态',
			componentKey: 'cashStatusList',
			arrData: 'cashStatusList',
			selectTitle: '兑付状态',
		},
		{
			component: 'input',
			label: `支付编号`,
			placeholder: '融信编号',
			componentKey: 'couNo',
		},
	],
	credit: [
		{
			//cou兑付页面
			component: 'input',
			label: '企业名称',
			placeholder: '企业名称',
			componentKey: 'companyName',
			width: 200,
		},
		{
			component: 'select',
			label: '付息方式',
			componentKey: 'interestPayWay',
			arrData: 'interestPayWay',
			selectTitle: '付息方式',
			width: 150,
		},
	],
	createCou: [
		//开立融信页面
		// {
		// 	component: 'select',
		// 	label: '授信方',
		// 	componentKey: 'interestPayWay1',
		// 	arrData: 'interestPayWay',
		// 	selectTitle: '授信方',
		// 	width: 150,
		// },
		{
			component: 'select',
			label: '收款方',
			componentKey: 'toPubKey',
			arrData: 'toPubKey',
			selectTitle: '收款方',
			width: 150,
		},
		// {
		// 	component: 'select',
		// 	label: '支付状态',
		// 	componentKey: 'interestPayWay3',
		// 	arrData: 'interestPayWay',
		// 	selectTitle: '支付状态',
		// 	width: 150,
		// },
		{
			component: 'input',
			label: '融信编号',
			placeholder: '融信编号',
			componentKey: 'couNo',
			width: 200,
		},
		// {
		// 	component: 'input',
		// 	label: '支付编号',
		// 	placeholder: '支付编号',
		// 	componentKey: 'transferNo',
		// 	width: 200,
		// },
	],
	//融信开立 =》 modal 中 选择融信
	selectCouModalT: [
		{
			component: 'select',
			label: '开立方',
			componentKey: 'seter',
			arrData: 'seter',
			selectTitle: '授信方',
			width: 150,
		},
		{
			component: 'rangeDate',
			label: '兑付到期日',
			componentKey: 'dueDate',
		},
	],
	//创建融资申请 =》 modal 中 选择融信
	selectCouModalF: [
		{
			component: 'select',
			label: '',
			componentKey: 'publishPubKey',
			arrData: 'publishPubKey',
			// width: 120,
			width: 220,
			placeholder: '开立方',
			noAddAll: true,
		},
		{
			component: 'select',
			label: '',
			componentKey: 'creditPubKey',
			arrData: 'creditList',
			// width: 120,
			width: 220,
			placeholder: '授信方',
			noAddAll: true,
		},
	],
	//创建融资申请 =》 modal 中 选择发票
	selectInvoiceModalF: [
		{
			component: 'date',
			label: '',
			componentKey: 'openDate',
			placeholder: '开票日期',
			width: 140,
		},
		{
			component: 'input',
			label: '',
			componentKey: 'invoiceCode',
			placeholder: '发票代码',
			width: 120,
		},
	],
	//我的融信
	myCou: [
		{
			component: 'select',
			label: '开立方',
			componentKey: 'publishPubKey',
			arrData: 'publishPubKey',
			selectTitle: '开立方',
			width: 220,
		},
		{
			component: 'rangeDate',
			label: '兑付到期日',
			componentKey: 'due',
		},
	],
	//流转管理
	transferManage: [
		{
			component: 'select',
			label: '支付类型',
			componentKey: 'accrualPrinciple',
			arrData: 'accrualPrinciple',
			selectTitle: '支付类型',
		},
		{
			component: 'select',
			label: '状态',
			componentKey: 'status',
			arrData: 'status',
			selectTitle: '状态',
		},
		{
			component: 'input',
			label: '支付编号',
			placeholder: '支付编号',
			componentKey: 'transferNo',
			maxLength: 32,
		},
	],
}

export default SearchBarObject
