<template>
    <div id="little-about-person">
        <h5>{{ title }}</h5>
        <div id="info">
            <div class="inf">
                <span class="title">{{titleDate}}</span>
                <span class="text">{{date}}</span>
            </div>
            <div class="inf">
                <span class="title">{{titlePhoneNumber}}</span>
                <span class="text">{{phoneNumber}}</span>
            </div>
            <div class="inf">
                <span class="title">{{titleEMAIL}}</span>
                <span class="text">{{email}}</span>
            </div>
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
        padding: 5% 0 5% 3%;
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
        display: flex;
        flex-wrap: wrap;
    }

    .text{
        font-family: Helvetica;
        font-size: 14px;
        color: #000000;
        letter-spacing: 0;
    }

    .title{
        font-family: Helvetica;
        font-size: 14px;
        margin-right: 10px;
        color: rgba(0,0,0,0.50);
        letter-spacing: 0.4px;
    }

    .inf{
        display: flex;
        flex-wrap: nowrap;
        margin-right: 7%;
    }
    @media (max-width: 700px) {

    }
</style>