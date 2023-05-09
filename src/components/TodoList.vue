<template>
    <div class="todolist">
        <header>
            <h5>ToDoList</h5>
            <input class="to-do-text"
                v-model="toDoText"
                @keyup.enter="enterText"
                placeholder="輸入計劃要做的事情"/>
        </header>
        <h4 v-show="toDoList.length > 0">待完成</h4>
        <ul class="wait-to-do">
            <li v-for="(item, index) in toDoList" :key="item">
                <p>
                    <i>{{index + 1}}</i>
                    <input :value="item" @blur="setValue(index, $event)" type="text" />
                </p>
                <p>
                    <span class="move" @click="removeToComplete(item, index)">√</span>
                    <span class="del" @click="deleteWait(index)">-</span>
                </p>
            </li>
        </ul>
        <h4 v-show="completedList.length > 0">已完成</h4>
        <ul class="has-completed">
            <li v-for="(item, index) in completedList" :key="item">
                <p>
                    <i>{{index + 1}}</i>
                    <input :value="item" disabled="true" type="text" />
                </p>
                <p>
                    <span class="move" @click="removeToWait(item, index)">x</span>
                    <span class="del" @click="deleteComplete(index)">-</span>
                </p>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    data() {
        return {
            toDoText: '',
            toDoList: [],
            completedList: []
        }
    },
    methods: {
        setValue(index, e) {
            this.toDoList.splice(index, 1, e.target.value)
        },
        removeToComplete(item, index) {
            this.completedList.splice(this.completedList.length, 0, item)
            this.toDoList.splice(index, 1)
        },
        removeToWait(item, index) {
            this.toDoList.splice(this.toDoList.length, 0, item)
            this.completedList.splice(index, 1)
        },
        enterText() {
            if (this.toDoText.trim().length > 0) {
                this.toDoList.splice(this.toDoList.length, 0, this.toDoText)
                this.toDoText = ''
            }
        },
        deleteWait(index) {
            this.toDoList.splice(index, 1)
        },
        deleteComplete(index) {
            this.completedList.splice(index, 1)
        }
    }
};
</script>