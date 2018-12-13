<template>
  <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '北京中汽通汇汽车销售服务有限公司'
        }, {
          value: '选项2',
          label: '淄博吉通汽车销售服务有限公司'
        }, {
          value: '选项3',
          label: '北京中汽通汇汽车销售服务有限公司'
        }, {
          value: '选项4',
          label: '淄博吉通汽车销售服务有限公司'
        }, {
          value: '选项5',
          label: '北京中汽通汇汽车销售服务有限公司'
        }],
        value: ''
      }
    }
  }
</script>