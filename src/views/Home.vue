<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
import useCompany from '@/store/company'

const { state_company } = useCompany()

export default {
  name: 'Home',
  components: {
  },
  setup() {
    console.log(state_company.regular_expenses())
    return {
      state_company
    }
  },
}
</script>
