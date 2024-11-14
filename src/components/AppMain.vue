<script>
import axios from "axios";

export default {
    data() {
        return {
            apiUrl: "http://127.0.0.1:8000/api/projects",
            allProjects: []
        }
    },
    methods: {
        getProjects() {
            axios.get(this.apiUrl)
                .then(response => {
                    console.log(response);
                })
        }
    },
    created() {
        this.getProjects()
    }
}
</script>

<template>
    <h2>AppMain</h2>
</template>

<style lang="scss" scoped>
h2 {
    color: red;
}
</style>