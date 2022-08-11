/**
 * iconFont.cn 封装
 */
import { createFromIconfontCN } from '@ant-design/icons-vue'

//框架通用图标
const NiceIconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/c/font_3573915_yni8tx5kkr.js',
})

//scriptUrl是图标集地址
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
})


export { NiceIconFont }
export default IconFont