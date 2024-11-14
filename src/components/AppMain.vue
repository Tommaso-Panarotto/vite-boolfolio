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
        <div class="card mt-5" v-for="singleProject in allProjects" :key="singleProject.id">
            <div class="card-body">
                <h2 class="card-title">{{ singleProject.title }}</h2>
                <h6 class="card-subtitle mb-2 text-body-secondary">{{ singleProject.author }}</h6>
                <div class="technologie" v-for="singleTechnology in singleProject.technologies"
                    :key="singleTechnology.id">
                    <span class="ms-3">{{ singleTechnology.name }}</span>
                </div>
                <p class="card-text">{{ singleProject.description }}</p>
                <div class="mb-4"><a :href="singleProject.url" class="btn btn-primary card-link text-white">link
                        progetto</a></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
h2 {
    color: red;
}
</style>