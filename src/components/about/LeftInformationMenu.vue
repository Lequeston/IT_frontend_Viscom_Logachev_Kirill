<template>
    <div id="left-menu">
        <img :src="picture.src" :alt="altText">
        <h4>{{ lastName }}</h4>
        <h4>{{ firstName }}</h4>
    </div>
</template>

<script>

    export default {
        name: "LeftInformationMenu",
        props: {
            firstName: String,
            lastName: String,
            image: String,
        },
        data(){
            return{
                picture: Image,
            }
        },
        computed: {
            altText(){
                let image = new Image();

                image.onload = () => {
                    console.log(image);
                    this.picture = image;
                }

                image.src = this.image;
                return 'Image';
            }
        },
    }
</script>

<style scoped>
    #left-menu {
        width: 20%;
        display: flex;
        flex-direction: column;
        align-items: center;
        align-self: center;
    }

    img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background: #D8D8D8;
        margin-bottom: 20px;
        text-align: center;
    }

    h4{
        font-family: Helvetica;
        font-size: 17px;
        color: #000000;
        letter-spacing: 0.4px;
        text-align: center;
    }
</style>