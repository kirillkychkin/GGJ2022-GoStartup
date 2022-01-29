<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div style="display:flex;">
      <div>
        <h2>
          Данные компании:
        </h2>
        Название компании: {{ state_company.name }} <br/>
        Еженедельные расходы: {{ state_company.regular_expenses() }} <br/>
        Расходы от тасков: {{ state_company.task_expenses() }} <br/>
        Текущая капитализация: {{ state_company.capitalization }} <br/>
        Сотрудники:
        <div v-for="employee in state_company.employees" :key="employee.id" class="card-grey">
          Тип: {{ employee.type }} <br/>
          Зарплата: {{ employee.salary }} <br/>
          Уровень: {{ employee.tier }} <br/>
        </div>
        Текущий баланс: {{ state_company.balance }} <br/>
        Ожидаемый доход: {{ state_company.income() }} <br/>
        Клиенты: {{ state_company.clients }} <br/>
        <div class="card-grey">
          Офис: {{ state_company.office.name }} <br/>
          Вмещает сотрудников: {{ state_company.office.size }} <br/>
          Стоимость офиса (входит в расходы): {{ state_company.office.expenses }} <br/>
        </div>
      </div>
      <div>
        <h2>
          Доступные задания:
        </h2>
        <!-- Здесь 1 - передаваемый аргумент стадии -->
        <div class="card-grey" v-for="task in getTasks(0)" :key="task.id" @click="chooseTask(task, true)" :class="{ 'active': task.active }">
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
      <div>
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
      <div>
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
    </div>
  </div>
</template>

<script>
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
    return {
      state_company,

      getTasks,
      chooseTask,
      getPerformedTasks,

      state_game,
      nextTick,
    }
  },
}
</script>
