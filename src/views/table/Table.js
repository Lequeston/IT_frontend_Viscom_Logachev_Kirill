import HeaderTable from '../../components/table/header-table/HeaderTable.vue';
import MainTable from '../../components/table/main-table/MainTable.vue';
import ParseJSON from "@/model/ParseJSON";

export default{
    name: 'Table',
    data(){
        return{
            tableName: 'Участники',
            columnNames: ['ФАМИЛИЯ', 'ИМЯ', 'EMAIL'],
            tellColumnName: ['ИМЯ', 'EMAIL'],
        };
    },

    computed: {
        cellNamesAndId(){
            return ParseJSON.getProcessedArray('id', 'firstName', 'lastName', 'email');
        },
        isWidth() {
            return (window.innerWidth > 700);
        },
    },

    methods: {
        cellName(name){
            return ParseJSON.getProcessObject(name, 'firstName', 'lastName', 'email');
        },
    },

    components:{
        HeaderTable,
        MainTable,
    }
}