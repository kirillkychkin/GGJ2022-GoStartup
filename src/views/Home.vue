<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" style="width:300px">
    <div class="dashboard">
      <div class="block">
        <h2>
          Данные компании:
        </h2>
        Название компании: {{ state_company.name }} <br/>
        Зарплаты: {{ state_company.salaries() }} <br/>
        Аренда офиса: {{ state_company.office_rent() }} <br/>
        Расходы от тасков: {{ state_company.task_expenses() }} <br/>
        Текущая капитализация: {{ state_company.capitalization }} <br/>
        Текущий баланс: {{ state_company.balance }} <br/>
        Ожидаемый доход: {{ state_company.income() }} <br/>
        Клиенты: {{ state_company.clients }} <br/>
        <div class="card-grey">
          Офис: {{ state_company.office.name }} <br/>
          Вмещает сотрудников: {{ state_company.office.size }} <br/>
          Стоимость офиса (входит в расходы): {{ state_company.office.expenses }} <br/>
        </div>
      </div>
      <div class="block">
        <h2>
          Доступные задания:
        </h2>
        <!-- Здесь 1 - передаваемый аргумент стадии -->
        <div class="card-grey" v-for="task in getTasks(0)" :key="task.id" :class="{ 'active': task.active }">
          Название: {{ task.name }} <br/>
          Описание: {{ task.desc }} <br/>
          Тип: {{ task.type }} <br/>
          Время на выполнение: {{ task.time }} недели <br/>
          Нужные сотрудники: <div v-html="task.roles_string"></div>
          Сложность: {{ task.complexity }} <br/>
          Доп расходы в неделю: {{ task.additional_expenses }} <br/>
          Награда: {{ task.reward }} <br/>
          
          <button @click="chooseTask(task, true)">
            Выполнять
          </button>
        </div>
      </div>
      <div class="block">
        <h2>
          Выполняемые задания:
        </h2>
        <div class="card-grey" v-for="task in getPerformedTasks(0)" :key="task.id">
          Название: {{ task.name }} <br/>
          Описание: {{ task.desc }} <br/>
          Тип: {{ task.type }} <br/>
          Время на выполнение: {{ task.time }} недели <br/>
          Текущий прогресс: {{ task.progress }} недели <br/>
          Нужные сотрудники: <div v-html="task.roles_string"></div>
          Сложность: {{ task.complexity }} <br/>
          Доп расходы в неделю: {{ task.additional_expenses }} <br/>
          Награда: {{ task.reward }} <br/>
          <button @click="chooseTask(task, false)">
            Прекратить выполнять
          </button>
        </div>
      </div>
      <div class="block">
        <h2>
          Игровые данные:
        </h2>
        <div>
          Ход: {{ state_game.tick }} <br/>
          Этап: {{ state_game.stage }} <br/>
          <button @click="nextTick">
            Следующий ход
          </button>
        </div>
      </div>
      <div class="wide-block">
        <h2>
          Сотрудники:
        </h2>
        <div>
          <div class="flex">
            <h4>CEO</h4>
          </div>
          <div class="flex">
            <h4>Marketer</h4>
            <div v-for="employee in marketers" :key="employee.id">
              Тип: {{ employee.type }} <br/>
              Зарплата: {{ employee.salary }} <br/>
              Уровень: {{ employee.tier }} <br/>
            </div>
          </div>
          <div class="flex">
            <h4>Designer</h4>
            <div v-for="employee in designers" :key="employee.id">
              Тип: {{ employee.type }} <br/>
              Зарплата: {{ employee.salary }} <br/>
              Уровень: {{ employee.tier }} <br/>
            </div>
          </div>
          <div class="flex">
            <h4>Developer</h4>
            <div v-for="employee in developers" :key="employee.id">
              Тип: {{ employee.type }} <br/>
              Зарплата: {{ employee.salary }} <br/>
              Уровень: {{ employee.tier }} <br/>
            </div>
          </div>
        </div>
      </div>
      <div class="wide-block">
        <h2>
          Нанять сотрудников:
        </h2>
        <div>
          <div class="flex">
            <h4>Marketer</h4>
            <button @click="state_company.hire_employee('marketer1')">
              Tier 1
            </button>
            <button @click="state_company.hire_employee('marketer2')">
              Tier 2
            </button>
            <button @click="state_company.hire_employee('marketer3')">
              Tier 3
            </button>
          </div>
          <div class="flex">
            <h4>Designer</h4>
            <button @click="state_company.hire_employee('designer1')">
              Tier 1
            </button>
            <button @click="state_company.hire_employee('designer2')">
              Tier 2
            </button>
            <button @click="state_company.hire_employee('designer3')">
              Tier 3
            </button>
          </div>
          <div class="flex">
            <h4>Developer</h4>
            <button @click="state_company.hire_employee('developer1')">
              Tier 1
            </button>
            <button @click="state_company.hire_employee('developer2')">
              Tier 2
            </button>
            <button @click="state_company.hire_employee('developer3')">
              Tier 3
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue"

import useCompany from '@/composables/company'
import useTasks from '@/composables/tasks'
import useGame from "@/composables/game"

const { state_company } = useCompany()
const { getTasks, chooseTask, getPerformedTasks } = useTasks()
const { state_game, nextTick } = useGame()

export default {
  name: 'Home',
  components: {
  },
  setup() {

    state_company.hire_employee("ceo1", true)

    const marketers = computed(() => {
      return state_company.filter_roles("marketer")
    })

    const designers = computed(() => {
      return state_company.filter_roles("designer")
    })

    const developers = computed(() => {
      return state_company.filter_roles("developer")
    })

    return {
      state_company,

      getTasks,
      chooseTask,
      getPerformedTasks,

      state_game,
      nextTick,

      marketers,
      designers,
      developers,
    }
  },
}
</script>
