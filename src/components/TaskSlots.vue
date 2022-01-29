<template>
  <div class="task-slot">
    <div class="flex slot" v-for="role in required_roles" :key="role">
      Нужен: {{ role }} <br/>
      Выбран: {{ passed_task.assigned_employees[role] }}
      <button @click="chooseEmployee(role)">
        Выбрать
      </button>
    </div>
    <!--
    Нужны: {{ employee }}
    -->
  </div>
  <!--
  <select v-model="select.selected" @change="onSelect()">
    <option v-for="option in options" v-bind:value="option" :key="option" :disabled="option.disabled">
      {{ option.type }}
    </option>
  </select>
  <span>Выбрано: {{ select.selected }}</span>
  -->
</template>

<script>
import useChoose from "@/composables/choose"

const { state_choose } = useChoose()
/*

import useCompany from '@/composables/company'

const { state_company } = useCompany()
*/
export default {
  name: 'task-slot',
  components: {
  },
  props: {
    required_roles: Array,
    passed_task: Object,
  },
  setup(props) {
    function chooseEmployee(role) {
      state_choose.role = role
      state_choose.show = true
      state_choose.task = props.passed_task
      state_choose.task_initiator = props.passed_task.code_name
    }
    /*

    const options = computed(() => {
      let options = [
          {
            disabled: true,
            type: "Сотрудники:"
          },
          ...state_company.available_employees,
          {
            disabled: true,
            type: "Фрилансеры:"
          },
      ]
      return options
    })

    */
    return {
      chooseEmployee,
      state_choose,
    }
  },
}
</script>
