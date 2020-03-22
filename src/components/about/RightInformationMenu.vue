<template>
    <div id="right-menu">
        <LittleAboutPerson
            v-bind="getLittleAboutPerson"
        />
        <BrefInformation
            v-bind="getBrefInformation"
        />
        <Links
            v-bind="getLinks"
        />
    </div>
</template>

<script>
    import LittleAboutPerson from "@/components/about/LittleAboutPerson";
    import BrefInformation from "@/components/about/BrefInformation";
    import Links from "@/components/about/Links";

    export default {
        name: "RightInformationMenu",

        props: ['information'],

        components: {
            Links,
            BrefInformation,
            LittleAboutPerson
        },

        computed: {
            getLittleAboutPerson(){
                let newInfo = {};
                for (let property in this.information){
                    if (property === 'date' || property === 'email' || property === 'phoneNumber'){
                        newInfo[property] = this.information[property];
                    }
                }
                return newInfo;
            },

            getBrefInformation(){
                let newInfo = {};
                for (let property in this.information){
                    if (property === 'aboutPerson'){
                        newInfo[property] = this.information[property];
                    }
                }
                return newInfo;
            },

            getLinks(){
                let newInfo = {};
                for (let property in this.information){
                    if (property === 'links'){
                        newInfo[property] = this.information[property];
                    }
                }
                return newInfo;
            }
        }
    }
</script>

<style scoped>
    #right-menu {
        width: 80%;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        border-left: 1px solid #DEDFE2;
    }
</style>