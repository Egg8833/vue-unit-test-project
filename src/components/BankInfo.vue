<template>
  <div>
    <h2>bank</h2>
    <button @click="handleOnOpenAccount"
    data-test="button_open-account">開戶</button>
    <input data-test="input_account" v-model="account" type="text" />

    <button @click="handleOnDeposit"
     data-test="button_deposit">存款</button>
    <input data-test="input_deposit" v-model="deposit" type="number" min="0" />

    <button @click="handleOnWithdraw"
    data-test="button_withdraw">提款</button>
    <input data-test="input_withdraw" v-model="withdraw" type="number" min="0" />
     <p data-test="status">{{ status }}</p>


  </div>

</template>

<script setup>
// 引入必要模組
import { ref } from 'vue'
import { FoodBank } from '../assets/bankInfo.js'
// 開設好變數
const account = ref('')
const deposit = ref('')
const withdraw = ref('')
const status = ref('')

const $FoodBank = new FoodBank()
const handleOnOpenAccount = () => (status.value = $FoodBank.openAccount(account.value))
const handleOnDeposit = () => (status.value = $FoodBank.deposit(account.value, deposit.value))
const handleOnWithdraw = () => (status.value = $FoodBank.withdraw(account.value, withdraw.value))
</script>
