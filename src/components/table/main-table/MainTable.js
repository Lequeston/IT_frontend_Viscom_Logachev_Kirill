import MainTableCell from '../main-table-cell/MainTableCell.vue';

export default{
    props: {
        lineNames: Object,
        id: Number,
    },
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
            return (window.innerWidth > 700)
        },
        lines(){
            let newObj = {...this.lineNames};
            let name = newObj.lastName + "." + newObj.firstName[0];
            newObj.firstName = name;
            delete newObj.lastName;
            return newObj;
        }
    },
    components: {
        MainTableCell,
    }
}