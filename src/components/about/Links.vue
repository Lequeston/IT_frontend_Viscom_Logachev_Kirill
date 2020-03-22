<template>
    <div id="links">
        <a v-for="elem in links" :href="elem.link">{{getName(elem)}}</a>
    </div>
</template>

<script>
    export default {
        name: "Links",
        props: {
            links: Array,
        },
        methods:{
            getName(elem){
                return (elem.name === '') ? elem.link : elem.name;
            }
        }
    }
</script>

<style scoped>
    #links {
        display: flex;
        flex-direction: column;
        padding: 30px 20px 20px 20px;
    }

    a {
        font-family: Helvetica;
        font-size: 14px;
        color: #000000;
        letter-spacing: 0;
        margin-bottom: 10px;
    }

    a:hover{
        color: #5169DC;
    }
</style>