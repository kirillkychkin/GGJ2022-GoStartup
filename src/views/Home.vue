<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      Название компании: {{ state_company.name }} <br/>
      Еженедельные расходы: {{ state_company.regular_expenses() }} <br/>
      Текущая капитализация: {{ state_company.capitalization }} <br/>
      Сотрудники:
      <div v-for="employee in state_company.employees" :key="employee.id" style="background: #ccc; margin-bottom: 5px;">
        Тип: {{ employee.type }} <br/>
        Зарплата: {{ employee.salary }} <br/>
        Уровень: {{ employee.tier }} <br/>
      </div>
      Текущая капитализация: {{ state_company.balance }} <br/>
      Ожидаемый доход: {{ state_company.income() }} <br/>
      Клиенты: {{ state_company.clients }} <br/>
      <div style="background: #ccc;">
        Офис: {{ state_company.office.name }} <br/>
        Вмещает сотрудников: {{ state_company.office.size }} <br/>
        Стоимость офиса (входит в расходы): {{ state_company.office.expenses }} <br/>
      </div>
    </div>
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
    return {
      state_company
    }
  },
}
</script>
