<template>
  <div class="selectInput">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <!-- 第一个输入框 -->
      <el-form-item style="margin-right: 8%;">
        <el-input clearable
		  style='width: 140%;'
          v-model="formInline.name"
          :placeholder="inputPlaceholder"
        ></el-input>
      </el-form-item>
      <!-- 第二个输入框 -->
      <!-- <el-form-item>
        <el-input
          v-model="formInline.equipmentName"
          :placeholder="input2Placeholder"
        ></el-input>
      </el-form-item> -->
	  <!-- 申请类型下拉选择框 -->
	  <el-form-item>
	      <el-select v-model="formInline.fristStatus" clearable :placeholder="fristPlaceholder">
	          <el-option
	                  v-for="item in fristStatusList"
	                  :key="item.value"
	                  :label="item.label"
	                  :value="item.value">
	          </el-option>
	      </el-select>
	  </el-form-item>
	  <!-- 申请状态下拉选择框 -->
	  <el-form-item>
	      <el-select v-model="formInline.secondStatus" clearable :placeholder="secondPlaceholder">
	          <el-option
				  v-for="item in secondStatusList"
				  :key="item.value"
				  :label="item.label"
				  :value="item.value">
	          </el-option>
	      </el-select>
	  </el-form-item>
	  <!-- 初始时间选择器 -->
	  <el-form-item class="dateTime">
	      <!-- <span class="demonstration">默认</span> -->
	      <el-date-picker
	        v-model="formInline.initialTime"
	        type="daterange"
	        range-separator="至"
	        start-placeholder="开始日期"
	        end-placeholder="结束日期">
	      </el-date-picker>
	 </el-form-item>
      <!-- 时间选择器 -->
      <el-form-item v-if="IsZoomed === 1" class="dateTime">
        <el-date-picker
          v-model="formInline.dateVal"
          type="date"
          :placeholder="datePacleholder"
        >
        </el-date-picker>
      </el-form-item>
      <!-- 输入框 -->
      <el-form-item v-if="IsZoomed === 2">
        <el-input
          v-model="formInline.inputVal"
          :placeholder="inputPlaceholder"
        ></el-input>
      </el-form-item>
      <el-form-item class="buttonMar">
        <el-button @click="onSubmit" type="primary"
          ><i class="el-icon-search"></i>查询</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "importFeed",
  props: {
    inputPlaceholder: {
      type: String,
      default: ""
    },
	fristPlaceholder: {
	    type: String,
	    default: ''
	},
	fristStatusList: {
	    type: Array,
	    default: []
	},
	secondPlaceholder: {
	    type: String,
	    default: ''
	},
	secondStatusList: {
	    type: Array,
	    default: []
	},
    input2Placeholder: {
      type: String,
      default: "请输入申请类型名称"
    },
    datePacleholder: {
      type: String,
      default: "请选择申请时间"
    },
    // 判断时间选择器和输入框展示的状态码
    IsZoomed: {
      type: Number,
      default: ""
    }
  },
  data() {
    return {
      formInline: {
        name: "", // 搜索名称
        fristStatus: "", // 第一个选择
        secondStatus: "", // 第二个选择
        inputVal: "", // 输入框的值
        initialTime: "", // 初始时间选择器
        dateVal: "" // 时间选择器
      }
    };
  },
  methods: {
    onSubmit() {
      this.$emit("onSubmit", this.formInline);
    }
  }
};
</script>

<style scoped lang="scss">
.selectInput {
  width: 100%;
  border-bottom: 1px dashed rgba(186, 205, 229, 0.23);
  .buttonMar {
    margin-left: 10px;
  }
}
</style>
<style>
.selectInput .buttonMar .el-button--primary {
  color: #fff;
  background-color: #7187f0;
  border-color: #7187f0;
}
.selectInput .el-input__inner {
  background-color: transparent;
  border: 1px solid rgba(186, 205, 229, 0.2);
}
.el-date-table td.current:not(.disabled),
.el-date-table td.end-date,
.el-date-table td.start-date {
  background-color: #7187f0 !important;
}
.el-date-table td.today:before {
  border-top: 0.5em solid #7187f0;
}
</style>
