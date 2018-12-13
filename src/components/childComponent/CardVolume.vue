<template>
    <div class="volume">
        <el-container>
            <el-header>我的卡卷</el-header>
            <el-main>
                <el-table :data="tableData">
                    <el-table-column prop="date" label="有效日期">
                    </el-table-column>
                    <el-table-column prop="name" label="卡卷">
                    </el-table-column>
                    <el-table-column prop="address" label="卡卷类型">
                    </el-table-column>
                </el-table>
            </el-main>
        </el-container>
    </div>
</template>
<script>
export default {
    data(){
        const item = {
            date: ['2020-05-02'],
            name: '500元优惠卷',
            address: '抵用卷',
        }
        return{
            tableData: Array(8).fill(item),
        }
    }
}
</script>
<style scoped>
@import "../../css/geely-cardvolume.css"
</style>
