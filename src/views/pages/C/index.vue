<template>
    <div>
        <BasePage
            :form-config="formConfig"
            :table-config="tableConfig"
            :total="total"
            :table-data="tableData"
            @get-form="getForm"
        >
            <template #name="{ scope }">{{ scope }}</template>
            <template #footer="{ item }">插槽{{ item }}</template>
        </BasePage>
        <!-- base-dialog -->
        <el-button @click="dialogVisibility = true">showDia</el-button>
        <BaseDialog v-model="dialogVisibility" @confirm="confirm" />
    </div>
</template>

<script setup lang="ts">
import { formConfig, tableConfig } from './config';
const total = ref(0);
const dialogVisibility = ref(false);
const tableData = ref([{ name: 13213123 }, { name: 199999 }]);

const getForm = (form: Record<string, any>) => {
    console.log(form);
};

const confirm = () => {
    console.log(123);
};
</script>

<style scoped></style>
