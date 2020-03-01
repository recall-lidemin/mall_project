<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品分类</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图 -->
    <el-card>
      <el-row>
        <el-col :span="4">
          <el-button type="primary" @click="addCate">添加分类</el-button>
        </el-col>
      </el-row>

      <!-- 商品分类区 -->
      <el-table>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="分类名称"></el-table-column>
        <el-table-column label="是否有效"></el-table-column>
        <el-table-column label="排序"></el-table-column>
        <el-table-column label="操作"></el-table-column>
      </el-table>

      <!-- 分页区域 -->
      <el-pagination
        :current-page="1"
        :page-sizes="[5,10, 20, 30, 40,50,100]"
        :page-size="1"
        layout="total, sizes, prev, pager, next, jumper"
        :total="1"
      ></el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {

  },
  methods: {
    addCate() {

    }
  }
}
</script>

<style lang="less" scoped>

</style>
