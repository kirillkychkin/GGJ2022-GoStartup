<template>
  <div class="home">
    <div class="dashboard">
      <div class="company">
        <div class="company_block">
          <h1>GoStartup</h1> 

          <div class="money mb-2">
            <div class="border">
              <h2>{{ state_company.capitalization }} ₽</h2>
              Капитализация
            </div>
            <div class="border">
              <h2>{{ state_company.balance }} ₽</h2>
              Деньги
            </div>
          </div>

          <div class="finances border mb-2">
            <h2>
              Финансы
            </h2>

            <div class="cell mb-2">
              <div>
                Выручка
              </div>
              <div>
                {{ state_company.income() }} ₽
              </div>
            </div>
            <div class="cell">
              <div>
                Заработная плата
              </div>
              <div>
                {{ state_company.salaries() }} ₽
              </div>
            </div>
            <div class="cell">
              <div>
                Аренда офиса
              </div>
              <div>
                {{ state_company.office_rent() }} ₽
              </div>
            </div>
            <div class="cell">
              <div>
                Издержки на задания
              </div>
              <div>
                {{ state_company.task_expenses() }} ₽
              </div>
            </div>
            <div class="cell mb-2">
              <div>
                Итого расходов
              </div>
              <div>
                {{ state_company.expenses() }} ₽
              </div>
            </div>
            <div class="cell">
              <div>
                Прогнозируемый доход
              </div>
              <div>
                {{ state_company.income() - state_company.expenses() }} ₽
              </div>
            </div>

            <h2>
              Распределение долей
            </h2>
            <div class="cell">
              <div>
                Основатель
              </div>
              <div>
                {{ state_company.share }}%
              </div>
            </div>
            <div class="cell">
              <div>
                Инвесторы
              </div>
              <div>
                {{ state_company.investors_share }}%
              </div>
            </div>

          </div>

          <div class="border mb-2">
            <h2>
              Сотрудники
            </h2>
            <div class="button" @click="showEmployees()">
              Посмотреть
            </div>
          </div>
          <div class="border mb-2">
            <h2>
              Офис: {{ state_company.office.name }}
            </h2>
            <div class="cell">
              <div> 
                Аренда: {{ state_company.office.expenses }} ₽ <br/>
                Вместимость: {{ state_company.office.size }}
              </div>
              <div class="button">
                Сменить
              </div>
            </div>
          </div>

          <div class="cell">
            <div class="button next_tick" @click="nextTick">
              Следующий ход
            </div>
            <div class="button tick">
              {{ state_game.tick }} ход
            </div>
          </div>
          <div class="">
            <h2>
              Текущий этап: {{ state_stages[state_game.stage].name }}
            </h2>
            <p>
              Цель этапа: {{ state_stages[state_game.stage].objective_name }}
            </p>
          </div>

        </div>
      </div>

      <div class="tasks">
        <div class="card-big border">
          <h2>To do</h2>
          
          <div class="card border mb-2" v-for="task in getTasks(state_game.stage)" :key="task.id" :class="{ 'active': task.active }" @click="showTask(task)">
            <h2> {{ task.name }} </h2>
            <div class="type"> Тип: {{ task.type }} </div>
            <div class="button ticks"> {{ task.time }} ходов </div>
            <div class="type"> Сложность: {{ task.complexity.text }} </div>
          </div>
        </div>
        <div class="card-big border">
          <h2>Doing</h2>
          <div class="card border mb-2" v-for="task in getPerformedTasks()" :key="task.id" @click="showTask(task, true)">
            <h2> {{ task.name }} </h2>
            <div class="type"> Тип: {{ task.type }} </div>
            <div class="button ticks"> {{ task.progress }}/{{ task.time }} ходов </div>
            <div class="type"> Сложность: {{ task.complexity.text }} </div>
   
            <div class="button" @click="chooseTask(task, false)">
              Прекратить выполнять
            </div>
          </div>
        </div>
        <!--
        <div class="card-grey" v-for="task in getPerformedTasks()" :key="task.id">
          Название: {{ task.name }} <br/>
          Описание: {{ task.desc }} <br/>
          Тип: {{ task.type }} <br/>
          Время на выполнение: {{ task.time }} недели <br/>
          Текущий прогресс: {{ task.progress }} недели <br/>
          Сложность: {{ task.complexity }} <br/>
          Доп расходы в неделю: {{ task.additional_expenses }} <br/>
          Награда: {{ task.reward }} <br/>
          Назначенные сотрудники: 
          <task-slots :required_roles="task.required_roles" :passed_task="task">
          </task-slots>
          <div v-for="employee in task.required_roles" :key="employee.id" class="active">
          </div>
          <button @click="chooseTask(task, false)">
            Прекратить выполнять
          </button>
        </div>
        -->
      </div>
      <div class="chat">
        chat
      </div>
    </div>

    <div v-if="curr_task.show" class="modal">
      Название: {{ curr_task.task.name }} <br/>
      Описание: {{ curr_task.task.desc }} <br/>
      Тип: {{ curr_task.task.type }} <br/>
      Время на выполнение: {{ curr_task.task.time }} недели <br/>
      Нужные сотрудники: <div v-html="curr_task.task.roles_string"></div>
      Сложность: {{ curr_task.task.complexity }} <br/>
      Доп расходы в неделю: {{ curr_task.task.additional_expenses }} <br/>
      Награда: {{ curr_task.task.reward }} <br/>
      
      <button @click="chooseTask(curr_task.task, true)">
        Выполнять
      </button>
      
      <task-slots :required_roles="curr_task.task.required_roles" :passed_task="curr_task.task" v-if="curr_task.team">
      </task-slots>
      <div class="button close" @click="curr_task.show = false">
        Закрыть
      </div>
    </div>

    <div v-if="state_employees.show" class="modal">
      <h2>
        Сотрудники
      </h2>
      <div class="flex">
        <h4>CEO</h4>
        <div v-for="employee in ceos" :key="employee.id">
          Тип: {{ employee.type }} <br/>
          Зарплата: {{ employee.salary }} <br/>
          Уровень: {{ employee.tier }} <br/>
          Выполняет: {{ employee.assigned_task }}
          <div v-if="employee.promotion.can_promote">
            Стоимость повышения: {{ employee.promotion.cost }}
            <button @click="promoteEmployee(employee,state_company)">
              Повысить
            </button>
          </div>
        </div>
      </div>
      <div class="flex">
        <h4>Marketer</h4>
        <div v-for="employee in marketers" :key="employee.id">
          Тип: {{ employee.type }} <br/>
          Зарплата: {{ employee.salary }} <br/>
          Уровень: {{ employee.tier }} <br/>
          Выполняет: {{ employee.assigned_task }}
          <div v-if="employee.promotion.can_promote">
            Стоимость повышения: {{ employee.promotion.cost }}
            <button @click="promoteEmployee(employee,state_company)">
              Повысить
            </button>
          </div>
        </div>
      </div>
      <div class="flex">
        <h4>Designer</h4>
        <div v-for="employee in designers" :key="employee.id">
          Тип: {{ employee.type }} <br/>
          Зарплата: {{ employee.salary }} <br/>
          Уровень: {{ employee.tier }} <br/>
          Выполняет: {{ employee.assigned_task }}
          <div v-if="employee.promotion.can_promote">
            Стоимость повышения: {{ employee.promotion.cost }}
            <button @click="promoteEmployee(employee,state_company)">
              Повысить
            </button>
          </div>
        </div>
      </div>
      <div class="flex">
        <h4>Developer</h4>
        <div v-for="employee in developers" :key="employee.id">
          Тип: {{ employee.type }} <br/>
          Зарплата: {{ employee.salary }} <br/>
          Уровень: {{ employee.tier }} <br/>
          Выполняет: {{ employee.assigned_task }}
          <div v-if="employee.promotion.can_promote">
            Стоимость повышения: {{ employee.promotion.cost }}
            <button @click="promoteEmployee(employee,state_company)">
              Повысить
            </button>
          </div>
        </div>
      </div>
      
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
      <div class="button close" @click="state_employees.show = false">
        Закрыть
      </div>
    </div>

    <choose v-if="state_choose.show">
    </choose>
  </div>
</template>

<script>
import { computed, reactive } from "vue"

import useCompany from '@/composables/company'
import useTasks from '@/composables/tasks'
import useGame from "@/composables/game"
import useChoose from "@/composables/choose"
import useEmployee from "@/composables/employee"
import useStages from '@/composables/stages'
const { state_stages } = useStages()

import TaskSlots from '../components/TaskSlots.vue'
import choose from '../components/choose.vue'

const { state_company } = useCompany()
const { getTasks, chooseTask, getPerformedTasks } = useTasks()
const { state_game, nextTick } = useGame()
const { state_choose } = useChoose()
const { promoteEmployee } = useEmployee()

export default {
  name: 'Home',
  components: {
    TaskSlots,
    choose,
  },
  setup() {
    state_company.hire_employee("ceo1", true)

    const ceos = computed(() => {
      return state_company.filter_roles("ceo")
    })

    const marketers = computed(() => {
      return state_company.filter_roles("marketer")
    })

    const designers = computed(() => {
      return state_company.filter_roles("designer")
    })

    const developers = computed(() => {
      return state_company.filter_roles("developer")
    })

    const curr_task = reactive({
      show: false,
      task: "",
      team: false,
    })

    const state_employees = reactive({
      show: false,
    })

    function showTask(task, ifDoing) {
      curr_task.task = task
      curr_task.show = true
      if(ifDoing) {
        curr_task.team = true
      } else {
        curr_task.team = false
      }
    }

    function showEmployees() {
      state_employees.show = true
    }

    return {
      state_company,

      getTasks,
      chooseTask,
      getPerformedTasks,

      state_game,
      nextTick,

      ceos,
      marketers,
      designers,
      developers,

      state_choose,
      promoteEmployee,
      curr_task,

      showTask,
      showEmployees,
      state_employees,
      state_stages,
    }
  },
}
</script>
