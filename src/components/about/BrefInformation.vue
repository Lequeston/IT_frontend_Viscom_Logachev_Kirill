<template>
    <div id="bref-information">
        <h5> {{title}}</h5>
        <div id="text" v-html="textFilter"></div>
    </div>
</template>

<script>
    export default {
        name: "BrefInformation",
        props: ['aboutPerson'],
        data(){
            return{
                title: 'НЕМНОГО О СЕБЕ:',
            }
        },
        computed: {
            textFilter(){
                let words = this.aboutPerson.split(' ');
                let column1 = words.slice(0, words.length / 2).join(' ');
                let column2 = words.slice(words.length / 2, words.length).join(' ');
                return '<p class="text-info">' + column1 + '</p>'
                        + '<p class="text-info">' + column2 + '</p>';
            }
        }
    }
</script>

<style scoped>
    #bref-information{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        padding: 30px 0 30px 0;
        border-bottom: 1px solid #DEDFE2;
    }

    #text{
        display: inline-flex;
        flex-wrap: nowrap;
        justify-content: space-between;
    }

    h5{
        margin: 0 0 20px 20px;
        font-family: Helvetica;
        font-size: 14px;
        color: rgba(0,0,0,0.50);
        letter-spacing: 0.4px;
    }

    @media (max-width: 500px) {
        #text{
            display: flex;
            flex-direction: column;
        }
    }
</style>

<style>
    .text-info{
        white-space: pre-wrap;
        width: 50%;
        margin: 0 20px 0 20px;
        font-family: Helvetica;
        font-size: 14px;
        color: #000000;
        letter-spacing: 0;
    }

    @media (max-width: 500px) {
        #text-info{
            width: 100%;
        }
    }
</style>