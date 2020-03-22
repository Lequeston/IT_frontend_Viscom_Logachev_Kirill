export default{
    props: ['name', 'prop', 'id'],
    data(){
        return{
            buttonName: 'Просмотреть',
        }
    },
    computed: {
        path(){
            return '/about/' + this.id;
        },
        isWidth(){
            const width = window.innerWidth;
            return ((width > 700) || (this.prop != 'email'));
        }
    },
}