<template>
  <div class="about">
    <h1>This is an about page</h1>
    text: {{ state_company.name }}
  </div>
</template>

<script>
import useCompany from '@/store/company'

const { state_company } = useCompany()

export default {
  setup() {
    console.log(state_company.expenses())
    return {
      state_company
    }
  },
}
</script>
