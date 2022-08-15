/**
 * iconFont.cn 封装
 */
import { createFromIconfontCN } from '@ant-design/icons-vue'

//框架通用图标
const NiceIconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/c/font_3573915_s7tujzzn7v.js',
})

//自定义图标集，scriptUrl是图标集地址
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
})

export { NiceIconFont, IconFont }
export default IconFont