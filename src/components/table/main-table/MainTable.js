import MainTableCell from '../main-table-cell/MainTableCell.vue';

export default{
    props: ['lineNames', 'id'],
    data(){
        return{
            buttonName: 'Просмотреть',
        }
    },
    computed: {
        path(){
            return '/about/' + this.id;
        }
    },
    components: {
        MainTableCell,
    }
}