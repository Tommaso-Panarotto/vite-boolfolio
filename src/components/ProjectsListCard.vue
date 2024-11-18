<script>


export default {
    name: "ProjectsListCard",
    data() {
        return {

        }
    },
    props: {
        "singleProjectObject": {
            type: Object,
            required: true,
        }
    }
}
</script>

<template>
    <div class="card mt-5">
        <div class="card-body">
            <h2 class="card-title">{{ singleProjectObject.title }}</h2>
            <h6 class="card-subtitle mb-2 text-body-secondary">{{ singleProjectObject.author }}</h6>
            <div class="technologie" v-for="singleTechnology in singleProjectObject.technologies"
                :key="singleTechnology.id">
                <span class="ms-3">{{ singleTechnology.name }}</span>
            </div>
            <p class="card-text">{{ singleProjectObject.description }}</p>
            <div class="mb-4"><a :href="singleProjectObject.url" class="btn btn-primary card-link text-white">link
                    progetto</a></div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
