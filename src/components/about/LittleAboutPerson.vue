<template>
    <div id="little-about-person">
        <h5>{{ title }}</h5>
        <div id="info">
            <span class="title">{{titleDate}}</span>
            <span class="text">{{date}}</span>
            <span class="title">{{titlePhoneNumber}}</span>
            <span class="text">{{phoneNumber}}</span>
            <span class="title">{{titleEMAIL}}</span>
            <span class="text">{{email}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LittleAboutPerson",
        props: ['date', 'phoneNumber', 'email'],
        data(){
            return{
                title: 'ИНФОРМАЦИЯ',
                titleDate: 'ДАТА:',
                titlePhoneNumber: 'НОМЕР:',
                titleEMAIL: 'EMAIL:',
            }
        },
    }
</script>

<style scoped>
    #little-about-person {
        display: flex;
        flex-direction: column;
        padding: 30px 0 30px 20px;
        border-bottom: 1px solid #DEDFE2;
    }

    h5 {
        margin-bottom: 20px;
        font-family: Helvetica;
        font-size: 14px;
        color: rgba(0,0,0,0.50);
        letter-spacing: 0.4px;
    }

    #info {
        display: inline-flex;
        flex-wrap: nowrap;
    }

    .text{
        margin-right: 50px;
        font-family: Helvetica;
        font-size: 14px;
        color: #000000;
        letter-spacing: 0;
    }

    .title{
        margin-right: 10px;
        font-family: Helvetica;
        font-size: 14px;
        color: rgba(0,0,0,0.50);
        letter-spacing: 0.4px;
    }
</style>