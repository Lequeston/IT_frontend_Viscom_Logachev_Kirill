import HeaderTable from '../../components/table/header-table/HeaderTable.vue';
import MainTable from '../../components/table/main-table/MainTable.vue';
import ParseJSON from "@/model/ParseJSON";

export default{
    name: 'Table',
    data(){
        return{
            tableName: 'Участники',
            columnNames: ['Фамилия', 'Имя', 'EMAIL'],
        };
    },

    computed: {
        cellNamesAndId(){
            return ParseJSON.getProcessedArray('id', 'firstName', 'lastName', 'email');
        }
    },

    methods: {
        cellName(name){
            return ParseJSON.getProcessObject(name, 'firstName', 'lastName', 'email');
        }
    },

    components:{
        HeaderTable,
        MainTable,
    }
}