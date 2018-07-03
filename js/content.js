console.log('contentjs');
var nationData = [  //民族数据  
    { "汉族": "01" },
    { "蒙古族": "02" },
    { "回族": "03" },
    { "藏族": "04" },
    { "维吾尔族": "05" },
    { "苗族": "06" },
    { "彝族": "07" },
    { "壮族": "08" },
    { "布依族": "09" },
    { "朝鲜族": "10" },
    { "满族": "11" },
    { "侗族": "12" },
    { "瑶族": "13" },
    { "白族": "14" },
    { "土家族": "15" },
    { "哈尼族": "16" },
    { "哈萨克族": "17" },
    { "傣族": "18" },
    { "黎族": "19" },
    { "傈傈族": "20" },
    { "佤族": "21" },
    { "畲族": "22" },
    { "高山": "23" },
    { "拉祜族": "24" },
    { "水族": "25" },
    { "东乡族": "26" },
    { "纳西族": "27" },
    { "景颇族": "28" },
    { "柯尔克孜族": "29" },
    { "土族": "30" },
    { "达翰尔族": "31" },
    { "仫佬族": "32" },
    { "羌族": "33" },
    { "布朗族": "34" },
    { "撒拉族": "35" },
    { "毛南族": "36" },
    { "仡佬族": "37" },
    { "锡伯族": "38" },
    { "阿昌族": "39" },
    { "普米族": "40" },
    { "塔吉克族": "41" },
    { "怒族": "42" },
    { "乌孜别克族": "43" },
    { "俄罗斯族": "44" },
    { "鄂温克族": "45" },
    { "德昂族": "46" },
    { "保安族": "47" },
    { "裕固族": "48" },
    { "京族": "49" },
    { "塔塔尔族": "50" },
    { "独龙族": "51" },
    { "鄂伦春族": "52" },
    { "郝哲族": "53" },
    { "门巴族": "54" },
    { "珞巴族": "55" },
    { "基诺族": "56" },
    { "其他": "57" },
];
var educationData = [  //学历数据
    { "博士研究生": "11" },
    { "硕士研究生": "14" },
    { "大学本科": "21" },
    { "大学专科": "31" },
    { "中等专科": "41" },
    { "职业高中": "44" },
    { "技工学校": "47" },
    { "普通高中": "61" },
    { "初中": "71" },
    { "小学": "81" },
    { "其他": "90" },
];
var majorData = [
    { "军事学": "990000" },
    { "其他学科": "110000" },
    { "哲学类": "010100" },
    { "马克思主义理论类": "010200" },
    { "经济学类": "020100" },
    { "工商管理类": "020200" },
    { "法学类": "030100" },
    { "社会学类": "030200" },
    { "政治学类": "030300" },
    { "公安学类": "030400" },
    { "教育学类": "040100" },
    { "思想政治教育类": "040200" },
    { "体育学类": "040300" },
    { "职业技术教育类": "040400" },
    { "中国语言文学类": "050100" },
    { "外国语言文学列": "050200" },
    { "新闻学类": "050300" },
    { "艺术类(一)": "050400" },
    { "艺术类(二)": "050500" },
    { "历史学类": "060100" },
    { "图书信息档案学类": "060200" },
    { "数学类": "070100" },
    { "物理学类": "070200" },
    { "化学类": "070300" },
    { "生物科学类": "070400" },
    { "天文学类": "070500" },
    { "地质学类": "070600" },
    { "地理科学类": "070700" },
    { "地球物理学类": "070800" },
    { "大气科学类": "070900" },
    { "海洋科学奖": "071000" },
    { "力学类": "071100" },
    { "信息与电子科学类": "071200" },
    { "材料科学类": "071300" },
    { "环境科学类": "071400" },
    { "心理学类": "071500" },
    { "科技信息与管理": "071600" },
    { "地矿类": "080100" },
    { "材料类": "080200" },
    { "机械类": "080300" },
    { "仪器仪表类": "080400" },
    { "热能核能类": "080500" },
    { "电工类": "080600" },
    { "电子与信息类": "080700" },
    { "土建类": "080800" },
    { "水利类": "080900" },
    { "测绘类": "081000" },
    { "环境类": "081100" },
    { "化工与制药类": "081200" },
    { "轻工粮食食品类": "081300" },
    { "农业工程类": "081400" },
    { "林业工程类": "081500" },
    { "纺织类": "081600" },
    { "交通运输类": "081700" },
    { "航空航天类": "081800" },
    { "兵器类": "081900" },
    { "公安技术类": "082000" },
    { "工程力学类": "082100" },
    { "管理工程类": "082200" },
    { "植物生产类": "090100" },
    { "森林资源类": "090200" },
    { "环境保护类": "090300" },
    { "动物生产于兽医类": "090400" },
    { "水产类": "090500" },
    { "管理类": "090600" },
    { "农业推广类": "090700" },
    { "基础医学类": "100100" },
    { "预防医学类": "100200" },
    { "临床医学与医学技术类": "100300" },
    { "口腔医学类": "100400" },
    { "中医学类": "100500" },
    { "法医学类": "100600" },
    { "护理学类": "100700" },
    { "药学类": "100800" },
    { "管理类": "100900" },
];
var unemploymentData = [ //失业原因数据
    { "从用人单位失业": "01" },
    { "毕业（肄业）生": "02" },
    { "个体歇业、停业": "03" },
    { "灵活就业失业": "04" },
    { "政策性帮扶岗位失业": "05" },
    { "归正人员": "06" },
    { "退伍": "07" },
    { "在二、三产业有就业愿望的农村劳动力": "08" },
    { "土地征用": "09" },
    { "前次失业登记期满后未就业": "10" },
    { "其他": "99" },
];
var dwNature = [  //单位性质
    { "10": "企业" },
    { "30": "机关" },
    { "50": "事业单位" },
    { "55": "全额拨款事业单位" },
    { "56": "差额拨款事业单位" },
    { "57": "自收自支事业单位" },
    { "70": "社会团体" },
    { "81": "个体工商户（有雇工的）" },
    { "82": "律师事务所" },
    { "83": "会计师事务所" },
    { "84": "驻华代表机构" },
    { "85": "外国常驻新闻机构" },
    { "86": "外国企业常驻代表机构" },
    { "90": "其他组织机构" },
    { "91": "民办非企业单位" },
    { "93": "基金会" },
    { "94": "宗教活动场所" },
    { "95": "农村村民委员会" },
    { "96": "城市居民委员会" },
    { "99": "其他" }
];
var dwTypeData = [  //单位类型数据
    { "企业": "10" },
    { "机关": "30" },
    { "事业单位": "50" },
    { "全额拨款事业单位": "55" },
    { "差额拨款事业单位": "56" },
    { "自收自支事业单位": "57" },
    { "社会团体": "70" },
    { "个体工商户（有雇工的）": "81" },
    { "律师事务所": "82" },
    { "会计师事务所": "83" },
    { "驻华代表机构": "84" },
    { "外国常驻新闻机构": "85" },
    { "外国企业常驻代表机构": "86" },
    { "其他组织机构": "90" },
    { "民办非企业单位": "91" },
    { "基金会": "93" },
    { "宗教活动场所": "94" },
    { "农村村民委员会": "95" },
    { "城市居民委员会": "96" },
    { "其他": "99" }
];
var economicsType = [ //经济类型
    { "100": "内资" },
    { "110": "国有全资" },
    { "120": "集体全资" },
    { "130": "股份合作" },
    { "140": "联营" },
    { "141": "国有联营" },
    { "142": "集体联营" },
    { "143": "国有与集体联营" },
    { "149": "其他联营" },
    { "150": "有限责任(公司)" },
    { "151": "国有独资(公司)" },
    { "159": "其他有限责任(公司)" },
    { "160": "股份有限(公司)" },
    { "170": "私有" },
    { "171": "私有独资" },
    { "172": "私有合伙" },
    { "173": "私营有限责任(公司)" },
    { "174": "私营股份有限(公司)" },
    { "175": "个体经营" },
    { "179": "其他私有" },
    { "190": "其他内资" },
    { "200": "港、澳、台投资" },
    { "210": "内地和港、澳、台合资" },
    { "220": "内地和港、澳、台合作" },
    { "230": "港、澳、台独资" },
    { "240": "港、澳、台投资股份有限(公司)" },
    { "290": "其他港、澳、台投资" },
    { "300": "国外投资" },
    { "310": "中外合资" },
    { "320": "中外合作" },
    { "330": "外资" },
    { "340": "国外投资股份有限(公司)" },
    { "390": "其他国外投资" },
    { "900": "其他" }
];
var postTypeData = [
    { "其他": "9000000" },
    { "采购经理": "1050110" },
    { "其他企业管理人员": "1059900" },
    { "计算机服务经理": "1050111" },
    { "研究和开发经理": "1050112" },
    { "餐厅经理": "1050113" },
    { "客房经理": "1050114" },
    { "采购部经理": "1050115" },
    { "项目经理": "1050116" },
    { "生产或经营经理": "1050104" },
    { "财务经理": "1050105" },
    { "行政经理": "1050106" },
    { "人事经理": "1050107" },
    { "销售和营销经理": "1050108" },
    { "广告和公关经理": "1050109" },
    { "科研人员": "2019900" },
    { "地质勘探工程技术人员": "2020100" },
    { "矿山工程技术人员": "2020200" },
    { "测绘技术人员": "2020201" },
    { "石油工程技术人员": "2020400" },
    { "冶金工程技术人员": "2020000" },
    { "医药工程师": "2020600" },
    { "仪器仪表工程师": "2020700" },
    { "兵器航空航天工程技术人员": "2020800" },
    { "电子安装工": "2021101" },
    { "通信器材维修工": "2021201" },
    { "计算机硬件工程师": "2021301" },
    { "计算机软件工程师": "2021302" },
    { "计算机网络工程师": "2021303" },
    { "系统分析员": "2021304" },
    { "计算机维护人员": "2021305" },
    { "计算机操作员": "2021306" },
    { "软件开发人员": "2021307" },
    { "网络管理员": "2021308" },
    { "网页制作人员": "2021309" },
    { "计算机操作员PHOTOSHOP": "2021311" },
    { "机电一体化人员": "2021401" },
    { "电气维护人员": "2021402" },
    { "电力技术员": "2021501" },
    { "邮政工程技术人员": "2021600" },
    { "广播影视工程技术人员": "2021700" },
    { "交通工程技术人员": "2021800" },
    { "民用航空工程技术人员": "2021900" },
    { "建筑设计师": "2022102" },
    { "土木建筑工程师": "2022103" },
    { "工程预算员": "2022104" },
    { "施工管理员": "2022105" },
    { "铁路工程技术人员": "2022000" },
    { "建材工程技术人员": "2022200" },
    { "家具设计师": "2022311" },
    { "水利工程技术人员": "2022400" },
    { "海洋工程技术人员": "2022500" },
    { "水产工程技术人员": "2022600" },
    { "纺织工程技术人员": "2022700" },
    { "食品检验员": "2022801" },
    { "食品业务员": "2022802" },
    { "气象工程技术人员": "2022900" },
    { "地震工程技术人员": "2023000" },
    { "环境保护工程技术人员": "2023100" },
    { "安全工程技术人员": "2023200" },
    { "标准化、计量、质量工程技术人员": "2023300" },
    { "工业管理工程技术人员": "2023400" },
    { "生物工程技术人员": "2023500" },
    { "考古文物保护专业人员": "2029901" },
    { "土壤肥料技术人员": "2030100" },
    { "植物保护技术人员": "2030200" },
    { "园艺技术人员": "2030300" },
    { "作物遗传育种栽培技术人员": "2030400" },
    { "兽医兽药技术人员": "2030500" },
    { "畜牧与草业技术人员": "2030600" },
    { "农业技术人员": "2039900" },
    { "船舶指挥引航人员": "2040200" },
    { "其他飞机船舶技术人员": "2049900" },
    { "西医": "2050100" },
    { "中医": "2050200" },
    { "公共卫生医师": "2050500" },
    { "药剂师": "2050600" },
    { "临床检验技师": "2050704" },
    { "护士": "2050800" },
    { "其他卫生专业技术人员": "2059900" },
    { "经济计划人员": "2060100" },
    { "统计师": "2060200" },
    { "审计师": "2060400" },
    { "其他经济业务人员": "2069900" },
    { "资产评估人员": "2060310" },
    { "出纳": "2060304" },
    { "会计": "2060309" },
    { "对外经贸业务员": "2060502" },
    { "报关员": "2060503" },
    { "跟单员": "2060504" },
    { "商务单证": "2060505" },
    { "房地产开发业务人员": "2060601" },
    { "不动产销售员": "2060602" },
    { "其他金融业务人员": "2079900" },
    { "国际金融业务员": "2070110" },
    { "信贷业务员": "2070105" },
    { "信托业务员": "2070107" },
    { "保险理赔员": "2070203" },
    { "期货业务员": "2070304" },
    { "其他法律专业人员": "2089900" },
    { "法律工作人员": "2080301" },
    { "家庭教师": "2090700" },
    { "高等教育教师": "2090100" },
    { "中等职业教育教师": "2090200" },
    { "中学教师": "2090300" },
    { "小学教师": "2090400" },
    { "幼儿教师": "2090500" },
    { "特殊教育教师": "2090600" },
    { "家庭教师": "2099901" },
    { "文艺创作和评论人员": "2100100" },
    { "编导和音乐指挥人员": "2100200" },
    { "演员": "2100300" },
    { "乐器演奏员": "2100400" },
    { "其他文学艺术工作者": "2109900" },
    { "歌手": "2100501" },
    { "舞蹈演员": "2100502" },
    { "化妆师": "2100508" },
    { "平面设计人员": "2100601" },
    { "制版人员": "2100709" },
    { "装潢美术设计人员": "2100704" },
    { "服装设计师": "2100705" },
    { "室内装饰设计人员": "2100706" },
    { "广告设计人员": "2100708" },
    { "体育工作者": "2110100" },
    { "记者": "2120100" },
    { "编辑": "2120200" },
    { "播音员及节目主持人": "2120400" },
    { "图书资料档案业务人员": "2120600" },
    { "校对员": "2120300" },
    { "其他行政办公人员": "3019900" },
    { "人事劳资业务人员": "3010103" },
    { "秘书": "3010201" },
    { "公关员": "3010202" },
    { "打字员": "3010204" },
    { "内勤": "3010205" },
    { "外勤": "3010206" },
    { "消防人员": "3020300" },
    { "其他安全保卫消防人员": "3029900" },
    { "门卫": "3020201" },
    { "保安": "3020202" },
    { "电信通信传输业务人员": "3030300" },
    { "其他邮政电信业务人员": "3039900" },
    { "传递员": "3030103" },
    { "话务员": "3030202" },
    { "采购人员": "4010300" },
    { "拍卖典当租赁业务人员": "4010400" },
    { "废旧物资回收利用人员": "4010500" },
    { "医药商品购销员1": "4013000" },
    { "营业员": "4010101" },
    { "收银员": "4010102" },
    { "推销员": "4010201" },
    { "出版物发行员": "4010202" },
    { "模特": "4010203" },
    { "促销员": "4010204" },
    { "业务员": "4010205" },
    { "市场管理员": "4010702" },
    { "医药商品购销员2": "4019901" },
    { "保管人员": "4020100" },
    { "储运人员": "4020200" },
    { "其他仓储人员": "4029900" },
    { "调酒和茶艺人员": "4030300" },
    { "餐厅服务员、厨工": "4030500" },
    { "其他餐饮服务人员": "4039900" },
    { "中式烹调师": "4030101" },
    { "中式面点师": "4030102" },
    { "西式烹调师": "4030201" },
    { "西式面点师": "4030202" },
    { "其他旅游健身娱乐服务人员": "4049900" },
    { "前厅服务员": "4040101" },
    { "客房服务员": "4040102" },
    { "导游": "4040201" },
    { "公共游览场服务员": "4040202" },
    { "园林植物保护工": "4040207" },
    { "康乐服务员": "4040303" },
    { "保健按摩师": "4040304" },
    { "水上运输服务人员": "4050400" },
    { "其他运输服务人员": "4059900" },
    { "汽车客运服务员": "4050101" },
    { "旅客列车乘务员": "4050201" },
    { "民航乘务员": "4050301" },
    { "其他医疗卫生辅助服务人员": "4069900" },
    { "护理员": "4060104" },
    { "物业管理人员": "4070200" },
    { "验光配镜人员": "4070600" },
    { "洗染、织补人员": "4070700" },
    { "家庭教师": "4073000" },
    { "电梯工": "4073100" },
    { "其他社会服务人员": "4079900" },
    { "信息咨询人员": "4070103" },
    { "锅炉操作工": "4070304" },
    { "美容师": "4070401" },
    { "美发师": "4070402" },
    { "摄影师": "4070501" },
    { "修脚师": "4070802" },
    { "家电维修人员": "4071001" },
    { "电梯维修工": "4071002" },
    { "空调维修工": "4071003" },
    { "电视维修工": "4071004" },
    { "冰箱维修工": "4071005" },
    { "手机维修工": "4071006" },
    { "复印机维修人员": "4071101" },
    { "保育员": "4071201" },
    { "家庭服务员": "4071202" },
    { "保洁工": "4071301" },
    { "大田作物生产人员": "5010100" },
    { "农业实验人员": "5010200" },
    { "中药材生产人员": "5010500" },
    { "其他种植业生产人员": "5019900" },
    { "花卉园艺工": "5010302" },
    { "果类产品加工工": "5010602" },
    { "茶叶加工工": "5010603" },
    { "蔬菜加工工": "5010604" },
    { "竹藤麻棕草制品加工工": "5010605" },
    { "木材采运人员": "5020400" },
    { "其他林业及野生动植物保护人员": "5029900" },
    { "畜牧业生产人员": "5039900" },
    { "水产养殖人员": "5040100" },
    { "水产捕捞及有关人员": "5040200" },
    { "水产品加工工": "5040300" },
    { "其他渔业生产人员": "5049900" },
    { "水利设施管理养护人员": "5059900" },
    { "农林机械操作和能源开发人员": "5090100" },
    { "地质勘查人员": "6010100" },
    { "测绘人员": "6010200" },
    { "矿物开采工": "6010300" },
    { "矿物处理工": "6010400" },
    { "钻井人员": "6010500" },
    { "石油、天然气开采人员": "6010600" },
    { "盐业生产人员": "6010700" },
    { "其他勘测及矿物开采工": "6019900" },
    { "金属冶炼工": "6020100" },
    { "金属轧制工": "6020800" },
    { "其他金属冶炼、轧制工": "6029900" },
    { "化工产品生产工": "6039900" },
    { "冷作钣金加工工": "6040400" },
    { "磨料磨具制造加工人员": "6040600" },
    { "其他机械制造加工工": "6049900" },
    { "车工": "6040101" },
    { "铣工": "6040102" },
    { "刨插工": "6040103" },
    { "磨工": "6040104" },
    { "镗工": "6040105" },
    { "钻床工": "6040106" },
    { "加工中心操作工": "6040108" },
    { "制齿工": "6040109" },
    { "铸造工": "6040201" },
    { "锻造工": "6040202" },
    { "冲压工": "6040203" },
    { "焊工": "6040205" },
    { "金属热处理工": "6040206" },
    { "电切削工": "6040301" },
    { "涂装工": "6040502" },
    { "电气电子设备装配工": "6050400" },
    { "仪器仪表装配工": "6050600" },
    { "运输车辆装配工": "6050700" },
    { "其他机电产品装配工": "6059900" },
    { "装配钳工": "6050201" },
    { "工具钳工": "6050202" },
    { "钳工": "6050203" },
    { "仪器仪表修理工": "6060200" },
    { "其他机械设备修理工": "6069900" },
    { "机修钳工": "6060101" },
    { "汽车修理工": "6060102" },
    { "专业电力设备检修工": "6070400" },
    { "其他电力设备装运、检修及供电工": "6079900" },
    { "电力工程内线安装工": "6070109" },
    { "常用电机检修工": "6070603" },
    { "维修电工": "6070605" },
    { "电子元件制造工": "6080200" },
    { "电子元件、器件制造工": "6080100" },
    { "其他电子元器件与电子设备制造、装调": "6089900" },
    { "有线通信传输设备调试工": "6080408" },
    { "通讯交换设备调试工": "6080409" },
    { "计算机维修工": "6080501" },
    { "橡胶制品生产工": "6090100" },
    { "塑料制品加工工": "6090200" },
    { "其他橡胶和塑料制品生产工": "6099900" },
    { "纤维预处理人员": "6100100" },
    { "纺纱人员": "6100200" },
    { "织造人员": "6100300" },
    { "针织人员": "6100400" },
    { "印染人员": "6100500" },
    { "纺织、针织、印染工": "6109900" },
    { "染整技术工": "6100700" },
    { "裁剪缝纫工": "6110100" },
    { "鞋帽制作工": "6110200" },
    { "皮革、毛皮加工工": "6110300" },
    { "缝纫制品再加工人员": "6110400" },
    { "其他裁剪缝纫和毛皮革制作工": "6119900" },
    { "服装设计定制工": "6110500" },
    { "服装缝纫工": "6110600" },
    { "横机工": "6110700" },
    { "粮油食品饮料生产加工及饲料加工工": "6129900" },
    { "烟草制品加工工": "6139900" },
    { "药品生产制造工": "6149900" },
    { "其他木材加工、人造板生产及木制品制": "6159900" },
    { "木工": "6150101" },
    { "手工木工": "6150102" },
    { "机械木工": "6150103" },
    { "精细木工": "6150104" },
    { "纸制品制作工": "6160300" },
    { "其他制浆、造纸和纸制品生产加工工": "6169900" },
    { "建筑材料生产加工工": "6179900" },
    { "玻璃陶瓷搪瓷生产加工工": "6189900" },
    { "其他广播影视品制作播放及文物保护人": "6199900" },
    { "音响调音员": "6190305" },
    { "制版印刷人员": "6209900" },
    { "工艺、美术品制作人员": "6219900" },
    { "文体用品乐器制作人员": "6229900" },
    { "土石方施工人员": "6230100" },
    { "砌筑工": "6230200" },
    { "混凝土工": "6230300" },
    { "钢筋工": "6230400" },
    { "架子工": "6230500" },
    { "工程防水工": "6230600" },
    { "筑路、养护、维修人员": "6230900" },
    { "电工": "6231100" },
    { "木工": "6233000" },
    { "其他工程施工人员": "6239900" },
    { "装饰装修工": "6230701" },
    { "建筑油漆工": "6230703" },
    { "机械设备安装工": "6231001" },
    { "电气设备安装工": "6231002" },
    { "管工": "6231003" },
    { "水工": "6231004" },
    { "中央空调维修工": "6231005" },
    { "空调安装工": "6231006" },
    { "安装水工": "6231007" },
    { "安装电工": "6231008" },
    { "安装焊工": "6231009" },
    { "铁路、地铁运输设备操作及有关人员": "6240200" },
    { "船舶水手": "6240400" },
    { "起重装卸机械操作工": "6240500" },
    { "其他运输设备操作人员": "6249900" },
    { "A照司机": "6240101" },
    { "环境监测废物处理人员": "6259900" },
    { "检验员1": "6260100" },
    { "计量员1": "6260400" },
    { "检验员2": "6269901" },
    { "计量员2": "6269902" },
    { "包装工": "6270100" },
    { "力工": "6270300" },
    { "体力工人": "6279900" },

];

var fill = false;
var formData;
var _ajax = function (url, data, method, success) {
    $.ajax({
        type: method,
        url: url,
        data: data,
        async: false,
        success: success,
        error: function (e) {
            alert("后台数据错误，请刷新改页面并重新填充，多次错误后请联系管理人员");
        }
    })
};
// //对应的input禁止点击
// function inputBan($input) {
//     var ele = $input.closest('span.mini-buttonedit.mini-combobox.mini-popupedit.mini-buttonedit-noInput');
//     ele.addClass('mini-buttonedit-readOnly');
// }
// // 对应的input解除禁止状态
// function inputFree($input) {
//     var ele = $input.closest('span.mini-buttonedit.mini-combobox.mini-popupedit.mini-buttonedit-noInput');
//     ele.removeClass('mini-buttonedit-readOnly');
// }

// 接收消息
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log("接受到信息");
    console.log(sender.tab ? "来自内容脚本：" + sender.tab.url : "来自扩展程序");
    if (request && !request.result) {
        console.log(request);
        formData = request.data;
        fill = true;
        if (document.domain == '172.16.83.22' && window.location.href.indexOf(':9001/lemis/sysmanager/logon/Main.jsp') > 0) {
            //获取失业登记iframe
            function getIframe() {
                var iframeWraps = document.getElementsByClassName('mini-tabs-body');
                if (iframeWraps.length > 1) {
                    var hasIframe = false;
                    var currentIframe;
                    for (var i = 0; i < iframeWraps.length; i++) {
                        if ($(iframeWraps[i]).find('iframe').length > 0) {  //含有iframe
                            //含有失业登记iframe
                            if ($(iframeWraps[i]).find('iframe').attr('src').indexOf('../../backlog/doVideo.jsp?bizCode=33010000-JY-0001') !== -1) {//找到失业登记所在的iframe
                                console.log("失业iframe为  " + $(iframeWraps[i]).find('iframe'));
                                currentIframe = $(iframeWraps[i]).find('iframe');
                                hasIframe = true;
                                break;
                            };
                        };
                    };
                    
                    if (hasIframe) {
                        var workDocument = currentIframe[0].contentWindow.document;
                        var nod = document.createElement('style');
                        var str = ".load-container{position:absolute;top:0;left:0;right:0;bottom:0;z-index:999;background:rgba(0,0,0,.5);display:none;}.load-container.active{display:block;}.load7 .loader:before,.load7 .loader:after,.load7 .loader{border-radius:50%;width:2.5em;height:2.5em;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation:load7 1.8s infinite ease-in-out;animation:load7 1.8s infinite ease-in-out;}.load7 .loader{overflow:visible;margin:20em auto;font-size:10px;position:relative;text-indent:-9999em;-webkit-animation-delay:-0.16s;animation-delay:-0.16s;}.load7 .loader:before{left:-3.5em;-webkit-animation-delay:-0.32s;animation-delay:-0.32s;}.load7 .loader:after{left:3.5em;}.load7 .loader:before,.loader:after{content:' ';position:absolute;top:0;}@-webkit-keyframes load7{0%,80%,100%{box-shadow:0 2.5em 0 -1.3em #ffffff;}40%{box-shadow:0 2.5em 0 0 #FFF;}}@keyframes load7{0%,80%,100%{box-shadow:0 2.5em 0 -1.3em #ffffff;}40%{box-shadow:0 2.5em 0 0 #FFF;}}";
                        nod.innerHTML = str;
                        document.getElementsByTagName('head')[0].appendChild(nod);
                        $(document.body).append("<div class='load-container load7 active'><div class='loader'>Loading...</div></div>")
                        //就创证人员类型填充
                        function jczType(boolean) {
                            if (boolean) {
                                workDocument.getElementById("bdc021$text").value = "杭州市户籍人员";
                                $(workDocument).find("input[name='bdc021']").val(1);
                            } else {
                                workDocument.getElementById("bdc021$text").value = "非杭州市户籍人员";
                                $(workDocument).find("input[name='bdc021']").val(2);
                            }
                        };
                        //登记类型
                        function registerType(boolean) {
                            if (boolean) {
                                workDocument.getElementById("bdc041$text").value = "户籍地失业登记";
                                $(workDocument).find("input[name='bdc041']").val(1);
                            } else {
                                workDocument.getElementById("bdc041$text").value = "居住地失业登记";
                                $(workDocument).find("input[name='bdc041']").val(2);
                            }
                        };
                        //户籍所在地 省级设置为浙江省 ,市级设置为杭州市
                        function census() {
                            workDocument.getElementById("province1$text").value = "浙江省";
                            $(workDocument).find("input[name='province1']").val(330000000000);
                            workDocument.getElementById("city1$text").value = "杭州市";
                            $(workDocument).find("input[name='city1']").val(3301);
                        };

                        //户籍地设置 
                        function setCensus(area, areaid, street, streetid, community, communityid) {
                            workDocument.getElementById("area1$text").value = area;
                            $(workDocument).find("input[name='area1']").val(areaid);
                            workDocument.getElementById("street1$text").value = street;
                            $(workDocument).find("input[name='street1']").val(streetid);
                            workDocument.getElementById("community1$text").value = community;
                            $(workDocument).find("input[name='community1']").val(communityid);
                        };


                        //居住地设置
                        function dwell(area, areaid, street, streetid, community, communityid) {
                            workDocument.getElementById("area2$text").value = area;
                            $(workDocument).find("input[name='area2']").val(areaid);
                            workDocument.getElementById("street2$text").value = street;
                            $(workDocument).find("input[name='street2']").val(streetid);
                            workDocument.getElementById("community2$text").value = community;
                            $(workDocument).find("input[name='community2']").val(communityid);
                        };

                        //户籍地数据获取
                        function getCensus(id) {
                            var url = "http://172.16.83.22:9001/lemis/unemployment/dc04/setAddress";
                            var data = { bdc041: id };
                            var method = "POST";
                            var success = function (data) {
                                var info = data.data;
                                var area = info[2].aaa021;
                                var areaid = info[2].aaa020;
                                var street = info[3].aaa021;
                                var streetid = info[3].aaa020;
                                var community = info[4].aaa021;
                                var communityid = info[4].aaa020;
                                setCensus(area, areaid, street, streetid, community, communityid);
                            };
                            _ajax(url, data, method, success);
                        };

                        //居住地数据获取 
                        function getDwell(id) {
                            var url = "http://172.16.83.22:9001/lemis/unemployment/dc04/setAddress";
                            var data = { bdc041: id };
                            var method = "POST";
                            var success = function (data) {
                                var info = data.data;
                                var area = info[2].aaa021;
                                var areaid = info[2].aaa020;
                                var street = info[3].aaa021;
                                var streetid = info[3].aaa020;
                                var community = info[4].aaa021;
                                var communityid = info[4].aaa020;
                                dwell(area, areaid, street, streetid, community, communityid);
                            };
                            _ajax(url, data, method, success);
                        };

                        function fillForm1() {
                            for (var key in formData) {
                                if (key == "aac002") {
                                    var changeEvent = new UIEvent("change");
                                    var blurEvent = new UIEvent("blur");
                                    var code = formData[key]
                                    var idcardInput = $(workDocument).find("input[name='aac002']")[0];
                                    idcardInput.value = code;
                                    idcardInput.dispatchEvent(changeEvent);
                                    idcardInput.dispatchEvent(blurEvent);
                                }
                            }
                        }
                        function fillForm() {
                            var ulr;
                            var data;
                            var method;
                            var success;
                            if (fill) {
                                // try {
                                for (var key in formData) { //遍历数据填表                                                                             
                                    var keyId = key + "$text";
                                    if (key == "aac003") {  //姓名                                
                                        // $(workDocument).find("input[name='" + key + "']").val(formData[key]);
                                    } else if (key == "aac067") {  //手机    
                                        console.log(formData[key]);
                                        console.log($(workDocument).find("input[name='" + key + "']"));
                                        $(workDocument).find("input[name='" + key + "']").val(formData[key]);
                                    } else if (key == "bdc049") {  //失业登记编号
                                        // $(workDocument).find("input[name='" + key + "']").val(formData[key]);
                                    } else if (key == "aac010") {  //户籍地址
                                        $(workDocument).find("input[name='" + key + "']").val(formData[key]);
                                    } else if (key == "aac026") {  //居住地址
                                        $(workDocument).find("input[name='" + key + "']").val(formData[key]);
                                    } else if (key == "aae005") {  //联系电话                                
                                        $(workDocument).find("input[name='" + key + "']").val(formData[key]);
                                    } else if (key == "aac181") {  //毕业时间   
                                        workDocument.getElementById(keyId).value = formData[key];
                                        $(workDocument).find("input[name='" + key + "']").val(formData[key]);
                                    } else if (key == "aac180") {  //毕业学校                                
                                        $(workDocument).find("input[name='" + key + "']").val(formData[key]);
                                    } else if (key == "acc214") {  //福利要求                     
                                        $(workDocument).find("input[name='" + key + "']").val(formData[key]);
                                    } else if (key == "aae043") {  //求职日期   
                                        workDocument.getElementById(keyId).value = formData[key];
                                        $(workDocument).find("input[name='" + key + "']").val(formData[key]);
                                    } else if (key == "aae053") {  //借记卡卡号                            
                                        $(workDocument).find("input[name='" + key + "']").val(formData[key]);
                                    } else if (key == "bdc027") {  //收件地址                            
                                        $(workDocument).find("input[name='" + key + "']").val(formData[key]);
                                    } else if (key == "acc034") {  //最低月薪要求                                                   
                                        $(workDocument).find("input[name='" + key + "']").val(formData[key]);
                                    } else if (key == "aae013") {  //备注                                    
                                        $(workDocument).find("textarea[name='" + key + "']").val(formData[key]);
                                    } else if (key == "aac002") { //身份证 
                                        // var idcode = formData[key];
                                        // var changeEvent = new UIEvent("change");
                                        // var blurEvent = new UIEvent("blur");                                                                               
                                        // var idcardInput = $(workDocument).find("input[name='aac002']")[0];                                    
                                        // idcardInput.value = idcode;
                                        // idcardInput.dispatchEvent(changeEvent);
                                        // idcardInput.dispatchEvent(blurEvent);

                                        // url = "http://172.16.83.22:9001/lemis/basicinfo/ac01/queryAc01ByAac002ToUNE";
                                        // data = { aac002: idcode };
                                        // method = "POST";
                                        // success = function (data) {

                                        //     var status = parseFloat(data.code);

                                        //     if (status == 1) {
                                        //         var info = data.data;
                                        //         var code = info.aac001; //编号(不知道什么编号)
                                        //         var name = info.aac003; //姓名
                                        //         var idcode = info.aac002; //身份证号
                                        //         var time = info.aae036; //时间
                                        //         var person = info.bae101; //经办人
                                        //         if(person !== "" && typeof(person) !== null) {
                                        //             $(workDocument).find("input[name='username']").val(person);
                                        //         }
                                        //         $(workDocument).find("input[name='aac003']").val(name);
                                        //         $(workDocument).find("input[name='" + key + "']").val(idcode);
                                        //         var eurl = "http://172.16.83.22:9001/lemis/unemployment/dc04/checkPerson";
                                        //         var edata = {
                                        //             aac001: code,
                                        //             aac002: idcode,
                                        //             aac003: name
                                        //         };
                                        //         var emethod = "POST";
                                        //         var success = function (data) {
                                        //             if(data.code == "noMsg"){
                                        //                 alert(data.message);
                                        //                 return;
                                        //             }                                                                                      
                                        //             var info = data.data;
                                        //             var code = info.bdc049;                                                                                                                                 
                                        //             $(workDocument).find("input[name='bdc049']").val(code);
                                        //         }
                                        //         _ajax(eurl, edata, emethod, success);
                                        //     } else {
                                        //         alert("系统中不存在该人员，新增操作需手动填入数据!");
                                        //     }
                                        // };
                                        // _ajax(url, data, method, success);
                                    } else if (key == "aac009") { //户籍性质                                                                          
                                        workDocument.getElementById(keyId).value = formData[key];
                                        switch (formData[key]) {
                                            case "本地居民户口":
                                                $(workDocument).find("input[name='" + key + "']").val(51);
                                                jczType(true);
                                                census();
                                                break;
                                            case "外地居民户口":
                                                $(workDocument).find("input[name='" + key + "']").val(52);
                                                jczType(false);
                                                registerType(false);
                                                getDwell(2);
                                                break;
                                            case "本地农业户口（本地农村）":
                                                $(workDocument).find("input[name='" + key + "']").val(21);
                                                jczTyp(true);
                                                census();
                                                break;
                                            case "外地农业户口（外地农村）":
                                                $(workDocument).find("input[name='" + key + "']").val(22);
                                                jczType(false);
                                                registerType(false);
                                                getDwell(2);
                                                break;
                                            case "本地非农业户口（本地城镇）":
                                                $(workDocument).find("input[name='" + key + "']").val(11);
                                                jczType(true);
                                                census();
                                                break;
                                            case "外地非农业户口（外地城镇）":
                                                $(workDocument).find("input[name='" + key + "']").val(12);
                                                jczType(false);
                                                registerType(false);
                                                getDwell(2);
                                                break;
                                            default:
                                                break;
                                        }
                                    } else if (key == "bdc041") { //登记类型
                                        workDocument.getElementById(keyId).value = formData[key];
                                        switch (formData[key]) {
                                            case "户籍地失业登记":
                                                registerType(true);
                                                getDwell(1);
                                                getCensus(1);
                                                break;
                                            case "居住地失业登记":
                                                registerType(false);
                                                getDwell(2);
                                                break;
                                            default:
                                                break;
                                        }
                                    } else if (key == "area1") { //户籍地 区
                                        var censusNature = parseFloat($('input[name=province1]').val());
                                        if (censusNature == 51 || censusNature == 21 || censusNature == 11) {
                                            censusNature = 1;  //本地
                                            url = "http://172.16.83.22:9001/lemis/unemployment/dc04/queryCity?aaa020=3301";
                                        } else {
                                            censusNature = 2;  //外地
                                            url = "http://172.16.83.22:9001/lemis/unemployment/dc04/queryArea";
                                        }
                                        data = {
                                            key: formData[key]
                                        }
                                        var edata;
                                        eurl = "http://172.16.83.22:9001/lemis/unemployment/dc04/queryCityAndProvince";
                                        method = "POST";
                                        success = function (data) {
                                            var info = data.data;
                                            var infoLen = info.length;
                                            for (var i = 0; i < infoLen; i++) {
                                                if (info[i].aaa021 == formData[key]) {
                                                    var code = info[i].aaa020;
                                                    edata = {
                                                        aaa023: info[i].aaa023
                                                    };
                                                    workDocument.getElementById(keyId).value = formData[key];
                                                    $(workDocument).find("input[name='" + key + "']").val(code);
                                                    break;
                                                }
                                            }
                                        };
                                        var esuccess = function (data) {
                                            var info = data.data;
                                            workDocument.getElementById('province1$text').value = info[1].aaa021;
                                            $(workDocument).find("input[name='province1']").val(info[1].aaa020);
                                            workDocument.getElementById('city1$text').value = info[0].aaa021;
                                            $(workDocument).find("input[name='city1']").val(info[0].aaa020);
                                        };
                                        _ajax(url, data, method, success);
                                        _ajax(eurl, edata, method, esuccess);
                                    } else if (key == "street1") { //户籍地 街道
                                        var aaa020Value = $(workDocument).find("input[name='area1']").val();
                                        url = "http://172.16.83.22:9001/lemis/unemployment/dc04/queryCity";
                                        data = {
                                            aaa020: aaa020Value
                                        };
                                        method = "GET";
                                        success = function (data) {
                                            var info = data.data;
                                            var infoLen = info.length;
                                            for (var i = 0; i < infoLen; i++) {
                                                if (info[i].aaa021 == formData[key]) {
                                                    var code = info[i].aaa020;
                                                    workDocument.getElementById(keyId).value = formData[key];
                                                    $(workDocument).find("input[name='" + key + "']").val(code);
                                                    break;
                                                }
                                            }
                                        };
                                        _ajax(url, data, method, success);
                                    } else if (key == "community1") { //户籍地 社区
                                        var aaa020Value = $(workDocument).find("input[name='street1']").val();
                                        url = "http://172.16.83.22:9001/lemis/unemployment/dc04/queryCity";
                                        data = {
                                            aaa020: aaa020Value
                                        };
                                        method = "GET";
                                        success = function (data) {
                                            var info = data.data;
                                            var infoLen = info.length;
                                            for (var i = 0; i < infoLen; i++) {
                                                if (info[i].aaa021 == formData[key]) {
                                                    var code = info[i].aaa020;
                                                    workDocument.getElementById(keyId).value = formData[key];
                                                    $(workDocument).find("input[name='" + key + "']").val(code);
                                                    break;
                                                }
                                            }
                                        };
                                        _ajax(url, data, method, success);
                                    } else if (key == "area2") {  //居住地 区
                                        url = "http://172.16.83.22:9001/lemis/unemployment/dc04/queryHZArea";
                                        data = {};
                                        method = "GET";
                                        success = function (data) {
                                            var info = data.data;
                                            var infoLen = info.length;
                                            for (var i = 0; i < infoLen; i++) {
                                                if (info[i].aaa021 == formData[key]) {
                                                    var code = info[i].aaa020;
                                                    workDocument.getElementById(keyId).value = formData[key];
                                                    $(workDocument).find("input[name='" + key + "']").val(code);
                                                    break;
                                                }
                                            }
                                        };
                                        _ajax(url, data, method, success);
                                    } else if (key == "street2") {  //居住地 街道
                                        var aaa020Value = $(workDocument).find("input[name='area2']").val();
                                        url = "http://172.16.83.22:9001/lemis/unemployment/dc04/queryCity";
                                        data = {
                                            aaa020: aaa020Value
                                        };
                                        method = "GET";
                                        success = function (data) {
                                            var info = data.data;
                                            var infoLen = info.length;
                                            for (var i = 0; i < infoLen; i++) {
                                                if (info[i].aaa021 == formData[key]) {
                                                    var code = info[i].aaa020;
                                                    workDocument.getElementById(keyId).value = formData[key];
                                                    $(workDocument).find("input[name='" + key + "']").val(code);
                                                    break;
                                                }
                                            }
                                        }
                                    } else if (key == "community2") { //居住地 社区
                                        var aaa020Value = $(workDocument).find("input[name='street2']").val();
                                        url = "http://172.16.83.22:9001/lemis/unemployment/dc04/queryCity";
                                        data = {
                                            aaa020: aaa020Value
                                        };
                                        method = "GET";
                                        success = function (data) {
                                            var info = data.data;
                                            var infoLen = info.length;
                                            for (var i = 0; i < infoLen; i++) {
                                                if (info[i].aaa021 == formData[key]) {
                                                    var code = info[i].aaa020;
                                                    workDocument.getElementById(keyId).value = formData[key];
                                                    $(workDocument).find("input[name='" + key + "']").val(code);
                                                    break;
                                                }
                                            }
                                        };
                                        _ajax(url, data, method, success);
                                    } else if (key == "aac005") {  //民族
                                        var nationCode;
                                        var nationText = formData[key]
                                        for (var i = 0; i < nationData.length; i++) {
                                            if (typeof (nationData[i][nationText]) !== "undefined") {
                                                nationCode = nationData[i][nationText];
                                                workDocument.getElementById(keyId).value = formData[key];
                                                $(workDocument).find("input[name='" + key + "']").val(nationCode);
                                                break;
                                            }
                                        }
                                    } else if (key == "aac017") {  //婚姻   
                                        var marriageCode;
                                        switch (formData[key]) {
                                            case "未婚":
                                                marriageCode = "1";
                                                break;
                                            case "已婚":
                                                marriageCode = "2";
                                                break;
                                            case "丧偶":
                                                marriageCode = "3";
                                                break;
                                            case "离婚":
                                                marriageCode = "4";
                                                break;
                                            default:
                                                break;
                                        }
                                        workDocument.getElementById(keyId).value = formData[key];
                                        $(workDocument).find("input[name='" + key + "']").val(marriageCode);
                                    } else if (key == "aac011") {  //学历
                                        var educationCode;
                                        var educationText = formData[key]
                                        for (var i = 0; i < educationData.length; i++) {
                                            if (typeof (educationData[i][educationText]) !== "undefined") {
                                                educationCode = educationData[i][educationText];
                                                workDocument.getElementById(keyId).value = formData[key];
                                                $(workDocument).find("input[name='" + key + "']").val(educationCode);
                                                break;
                                            }
                                        }
                                    } else if (key == "aac183") {  //专业
                                        var majorCode;
                                        var majorText = formData[key]
                                        for (var i = 0; i < majorData.length; i++) {
                                            if (typeof (majorData[i][majorText]) !== "undefined") {
                                                majorCode = majorData[i][majorText];
                                                workDocument.getElementById(keyId).value = formData[key];
                                                $(workDocument).find("input[name='" + key + "']").val(majorCode);
                                                break;
                                            }
                                        }
                                    } else if (key == "ajc093") {  //失业原因                                    
                                        var unemploymentCode;
                                        var unemploymentText = formData[key]
                                        console.log(unemploymentText);
                                        for (var i = 0; i < unemploymentData.length; i++) {
                                            if (typeof (unemploymentData[i][unemploymentText]) !== "undefined") {
                                                unemploymentCode = unemploymentData[i][unemploymentText];
                                                workDocument.getElementById(keyId).value = formData[key];
                                                console.log(workDocument.getElementById(keyId));
                                                console.log(formData[key]);
                                                $(workDocument).find("input[name='" + key + "']").val(unemploymentCode);
                                                break;
                                            }
                                        }
                                    } else if (key == "bdc062") { //是否申领保险金
                                        workDocument.getElementById(keyId).value = formData[key];
                                        switch (formData[key]) {
                                            case "否":
                                                $(workDocument).find("input[name='" + key + "']").val("0");
                                                break;
                                            case "是":
                                                $(workDocument).find("input[name='" + key + "']").val("1");
                                                break;

                                            default:
                                                break;
                                        }
                                    } else if (key == "bdc067") { //是否打印就业创业证书
                                        workDocument.getElementById(keyId).value = formData[key];
                                        switch (formData[key]) {
                                            case "否":
                                                $(workDocument).find("input[name='" + key + "']").val(0);
                                                break;
                                            case "是":
                                                $(workDocument).find("input[name='" + key + "']").val(1);
                                                break;

                                            default:
                                                break;
                                        }
                                    } else if (key == "aab003") { //组织结构代码

                                        url = "http://172.16.83.22:9001/lemis/basicinfo/ab01/queryAb01ByAab003ToUNE";
                                        data = {
                                            aab003: formData[key]
                                        };
                                        method = "POST";
                                        success = function (data) {
                                            if (!data.success == false) {
                                                $(workDocument).find("input[name='" + key + "']").val(formData[key]);
                                                var info = data.data;
                                                //设置组织结构代码（当输入信用号码也可以查找到信息，因此需要把组织机构代码输入）                                    
                                                $(workDocument).find("input[name='" + key + "']").val(info.aab003);
                                                //设置单位名称
                                                $(workDocument).find("input[name='aab004']").val(info.aab004);
                                                //设置单位性质
                                                if (typeof (info.aab019) !== "undefined") {
                                                    for (var i = 0; i < dwNature.length; i++) {
                                                        if (typeof (dwNature[i][info.aab019] !== "undefined")) {
                                                            workDocument.getElementById("aab0191$text").value = dwNature[i][info.aab019];
                                                            workDocument.getElementById("aab0191$value").value = info.aab019;
                                                        }
                                                    }
                                                };
                                                //设置经济类型
                                                if (typeof (info.aab020) !== "undefined") {
                                                    for (var i = 0; i < economicsType.length; i++) {
                                                        if (typeof (economicsType[i][info.aab020] !== "undefined")) {
                                                            workDocument.getElementById("aab020$text").value = economicsType[i][info.aab020];
                                                        }
                                                    }
                                                    $(workDocument).find("input[name='aab020']").val(info.aab020);
                                                }
                                            } else {
                                                alert("组织结构代码错误");
                                                $(workDocument).find("input[name='" + key + "']").val("");
                                                workDocument.getElementById("aab0191$text").value = "";
                                                workDocument.getElementById("aab0191$value").value = "";
                                                workDocument.getElementById("aab020$text").value = "";
                                                $(workDocument).find("input[name='aab020']").val("");
                                            }
                                        };
                                        _ajax(url, data, method, success);
                                    } else if (key == "bdc068") { //申请材料退回方式
                                        workDocument.getElementById(keyId).value = formData[key];
                                        switch (formData[key]) {
                                            case "自己领取":
                                                $(workDocument).find("input[name='" + key + "']").val("1");
                                                break;
                                            case "快递到付":
                                                $(workDocument).find("input[name='" + key + "']").val("2");
                                                break;
                                            case "不需要退回":
                                                $(workDocument).find("input[name='" + key + "']").val("3");
                                                break;
                                            default:
                                                break;
                                        }
                                    } else if (key == "bdc042") { //失业前职位
                                        workDocument.getElementById(keyId).value = formData[key];
                                        switch (formData[key]) {
                                            case "单位负责人":
                                                $(workDocument).find("input[name='" + key + "']").val(1);
                                                break;
                                            case "专业技术人":
                                                $(workDocument).find("input[name='" + key + "']").val(2);
                                                break;
                                            case "办事管理人":
                                                $(workDocument).find("input[name='" + key + "']").val(3);
                                                break;
                                            case "商贸服务人":
                                                $(workDocument).find("input[name='" + key + "']").val(4);
                                                break;
                                            case "生产云输人":
                                                $(workDocument).find("input[name='" + key + "']").val(5);
                                                break;
                                            case "农林牧渔人":
                                                $(workDocument).find("input[name='" + key + "']").val(6);
                                                break;
                                            default:
                                                break;
                                        }
                                    } else if (key == "aac048") { //用工形式                                             
                                        if (formData[key].indexOf("不限") > -1) {
                                            $(workDocument).find("input[name='" + key + "']").val("1");
                                            $(workDocument).find("#mini-124\\$0").addClass("mini-checkboxlist-item-selected")
                                                .siblings().removeClass("mini-checkboxlist-item-selected");
                                        };
                                        if (formData[key].indexOf("合同制") > -1) {
                                            var value = $(workDocument).find("input[name='" + key + "']").val();
                                            $(workDocument).find("#mini-124\\$1").addClass("mini-checkboxlist-item-selected")
                                                .siblings("#mini-124\\$0").removeClass("mini-checkboxlist-item-selected");
                                            if (parseFloat(value) !== 1 && value !== "") {
                                                value += ",2"
                                            } else {
                                                value = 2;
                                            }
                                        };
                                        if (formData[key].indexOf("临时工") > -1) {
                                            var value = $(workDocument).find("input[name='" + key + "']").val();
                                            $(workDocument).find("#mini-124\\$2").addClass("mini-checkboxlist-item-selected")
                                                .siblings("#mini-124\\$0").removeClass("mini-checkboxlist-item-selected");
                                            if (parseFloat(value) !== 1 && value !== "") {
                                                value += ",3"
                                            } else {
                                                value = 3;
                                            }
                                        };
                                        if (formData[key].indexOf("兼职") > -1) {
                                            var value = $(workDocument).find("input[name='" + key + "']").val();
                                            $(workDocument).find("#mini-124\\$3").addClass("mini-checkboxlist-item-selected")
                                                .siblings("#mini-124\\$0").removeClass("mini-checkboxlist-item-selected");
                                            if (parseFloat(value) !== 1 && value !== "") {
                                                value += ",4"
                                            } else {
                                                value = 4;
                                            }
                                        };
                                        if (formData[key].indexOf("计时工") > -1) {
                                            var value = $(workDocument).find("input[name='" + key + "']").val();
                                            $(workDocument).find("#mini-124\\$4").addClass("mini-checkboxlist-item-selected")
                                                .siblings("#mini-124\\$0").removeClass("mini-checkboxlist-item-selected");
                                            if (parseFloat(value) !== 1 && value !== "") {
                                                value += ",5"
                                            } else {
                                                value = 5;
                                            }
                                        };
                                        if (formData[key].indexOf("其他") > -1) {
                                            var value = $(workDocument).find("input[name='" + key + "']").val();
                                            $(workDocument).find("#mini-124\\$5").addClass("mini-checkboxlist-item-selected")
                                                .siblings("#mini-124\\$0").removeClass("mini-checkboxlist-item-selected");
                                            if (parseFloat(value) !== 1 && value !== "") {
                                                value += ",6"
                                            } else {
                                                value = 6;
                                            }
                                        };
                                    } else if (key == "ccc204") { //工作地点
                                        workDocument.getElementById(keyId).value = formData[key];
                                        switch (formData[key]) {
                                            case "不限":
                                                $(workDocument).find("input[name='" + key + "']").val("1");
                                                break;
                                            case "本市":
                                                $(workDocument).find("input[name='" + key + "']").val("2");
                                                break;
                                            case "本省":
                                                $(workDocument).find("input[name='" + key + "']").val("3");
                                                break;
                                            case "外省":
                                                $(workDocument).find("input[name='" + key + "']").val("4");
                                                break;
                                            case "不限":
                                                $(workDocument).find("input[name='" + key + "']").val("5");
                                                break;
                                            default:
                                                break;
                                        }
                                    } else if (key == "ccc266") {  //工作班次                             
                                        if (formData[key].indexOf("无要求") > -1) {
                                            $(workDocument).find("input[name='" + key + "']").val("1");
                                            $(workDocument).find("#mini-131\\$0").addClass("mini-checkboxlist-item-selected")
                                                .siblings().removeClass("mini-checkboxlist-item-selected");
                                        };
                                        if (formData[key].indexOf("常日班") > -1) {
                                            var value = $(workDocument).find("input[name='" + key + "']").val();
                                            $(workDocument).find("#mini-131\\$1").addClass("mini-checkboxlist-item-selected")
                                                .siblings("#mini-131\\$0").removeClass("mini-checkboxlist-item-selected");
                                            if (parseFloat(value) !== 1 && value !== "") {
                                                value += ",2"
                                            } else {
                                                value = 2;
                                            }
                                        };
                                        if (formData[key].indexOf("二班制") > -1) {
                                            var value = $(workDocument).find("input[name='" + key + "']").val();
                                            $(workDocument).find("#mini-131\\$2").addClass("mini-checkboxlist-item-selected")
                                                .siblings("#mini-131\\$0").removeClass("mini-checkboxlist-item-selected");
                                            if (parseFloat(value) !== 1 && value !== "") {
                                                value += ",3"
                                            } else {
                                                value = 3;
                                            }
                                        };
                                        if (formData[key].indexOf("三班制") > -1) {
                                            var value = $(workDocument).find("input[name='" + key + "']").val();
                                            $(workDocument).find("#mini-131\\$3").addClass("mini-checkboxlist-item-selected")
                                                .siblings("#mini-131\\$0").removeClass("mini-checkboxlist-item-selected");
                                            if (parseFloat(value) !== 1 && value !== "") {
                                                value += ",4"
                                            } else {
                                                value = 4;
                                            }
                                        };
                                        if (formData[key].indexOf("四班三运转") > -1) {
                                            var value = $(workDocument).find("input[name='" + key + "']").val();
                                            $(workDocument).find("#mini-131\\$4").addClass("mini-checkboxlist-item-selected")
                                                .siblings("#mini-131\\$0").removeClass("mini-checkboxlist-item-selected");
                                            if (parseFloat(value) !== 1 && value !== "") {
                                                value += ",5"
                                            } else {
                                                value = 5;
                                            }
                                        };
                                        if (formData[key].indexOf("长夜班") > -1) {
                                            var value = $(workDocument).find("input[name='" + key + "']").val();
                                            $(workDocument).find("#mini-131\\$5").addClass("mini-checkboxlist-item-selected")
                                                .siblings("#mini-131\\$0").removeClass("mini-checkboxlist-item-selected");
                                            if (parseFloat(value) !== 1 && value !== "") {
                                                value += ",6"
                                            } else {
                                                value = 6;
                                            }
                                        };
                                        if (formData[key].indexOf("做一休一") > -1) {
                                            var value = $(workDocument).find("input[name='" + key + "']").val();
                                            $(workDocument).find("#mini-131\\$6").addClass("mini-checkboxlist-item-selected")
                                                .siblings("#mini-131\\$0").removeClass("mini-checkboxlist-item-selected");
                                            if (parseFloat(value) !== 1 && value !== "") {
                                                value += ",7"
                                            } else {
                                                value = 7;
                                            }
                                        };
                                    } else if (key == "aab019") {  //单位类型
                                        var dwCode;
                                        var dwText = formData[key]
                                        for (var i = 0; i < dwTypeData.length; i++) {
                                            if (typeof (dwTypeData[i][dwText]) !== "undefined") {
                                                dwCode = dwTypeData[i][dwText];
                                                workDocument.getElementById("aab0192$text").value = formData[key];
                                                $(workDocument).find("#aab0192\\$value").val(dwCode);
                                                break;
                                            };
                                        };
                                    } else if (key == "bcc002") { //推荐状态                                    
                                        switch (formData[key]) {
                                            case "等待推荐":
                                                $(workDocument).find("input[name='" + key + "']").val("10");
                                                break;
                                            case "推荐中":
                                                $(workDocument).find("input[name='" + key + "']").val("20");
                                                break;
                                            case "推荐成功":
                                                $(workDocument).find("input[name='" + key + "']").val("40");
                                                break;
                                            default:
                                                break;
                                        }
                                    } else if (key == "acb448") { //是否网上发布
                                        workDocument.getElementById(keyId).value = formData[key];
                                        switch (formData[key]) {
                                            case "否":
                                                $(workDocument).find("input[name='" + key + "']").val("0");
                                                break;
                                            case "是":
                                                $(workDocument).find("input[name='" + key + "']").val("1");
                                                break;
                                            default:
                                                break;
                                        }
                                    } else if (key == "aca112") { //所求岗位一                                                                             
                                        var postCode;
                                        var postText = formData[key]
                                        for (var i = 0; i < postTypeData.length; i++) {
                                            if (typeof (postTypeData[i][postText]) !== "undefined") {
                                                postCode = postTypeData[i][postText];
                                                workDocument.getElementById('aca112$text').value = postText;
                                                $(workDocument).find("input[name='aca112']").val(postCode);
                                                workDocument.getElementById('aca216$text').value = postText;
                                                break;
                                            }
                                        }
                                        $(workDocument).find("input[name='" + key + "']").val("0");
                                    }
                                }
                                // $(workDocument.body).find('.load-container').removeClass('active');
                                // } 
                                // catch (error) {
                                //     setTimeout(fillForm, 1000);
                                // }                             
                                var changeEvent = new UIEvent("change");
                                var blurEvent = new UIEvent("blur");
                                var code = formData["aac002"];
                                var idcardInput = $(workDocument).find("input[name='aac002']")[0];
                                idcardInput.value = code;
                                idcardInput.dispatchEvent(changeEvent);
                                idcardInput.dispatchEvent(blurEvent);
                            } else {
                                setTimeout(fillForm, 1000);
                            };
                        };

                        fillForm();
                        // fillForm1();                       
                    } else {
                        console.log('没找到，重新找');
                        setTimeout(getIframe, 100);
                    }
                } else {
                    console.log('没有额外标签页被点击');
                    setTimeout(getIframe, 100);
                }
                setTimeout(function () {
                    $(document.body).find('.load-container.load7').removeClass('active');
                }, 2000);
            };
            getIframe();
        } else {
            alert("该页面无法填充");
        }
    }
});