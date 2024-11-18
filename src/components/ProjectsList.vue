<script>
import axios from "axios";
import ProjectsListCard from "./ProjectsListCard.vue"

export default {
    name: "ProjectsList",
    data() {
        return {
            apiUrl: "http://127.0.0.1:8000/api/projects",
            allProjects: []
        }
    },
    components: {
        ProjectsListCard,
    },
    methods: {
        getProjects() {
            axios.get(this.apiUrl)
                .then(r => {
                    this.allProjects = r.data.results,
                        console.log(r.data.results)
                })
        }
    },
    created() {
        this.getProjects()
    }
}
</script>

<template>
    <div class="container text-center">
        <h1 class="mt-5">All Projects</h1>
        <ProjectsListCard v-for="singleProject in allProjects" :key="singleProject.id"
            :singleProjectObject="singleProject" />
    </div>
</template>

<style lang="scss" scoped>
h2 {
    color: red;
}
</style>