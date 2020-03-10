<template>
  <div>
    <!-- 面包屑导航
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
    </el-breadcrumb> -->

    <el-card>
      <el-row>
        <el-col :span="7">公告</el-col>
        <el-col :span="7">内容一</el-col>
        <el-col :span="7">内容二</el-col>
        <el-col :span="3" style="text-align:right">更多>></el-col>
      </el-row>
    </el-card>

    <el-card style="margin:20px 0;height:150px">
      <el-carousel trigger="click" height="100px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    </el-card>

    <el-row gutter="20">
      <el-col :span="12">
        <el-card style="height:500px">

        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card style="height:250px">

        </el-card>
        <el-card style="height:300px;margin-top:20px">

        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
