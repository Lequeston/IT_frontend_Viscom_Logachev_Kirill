import LeftInformationMenu from '../../components/about/LeftInformationMenu.vue';
import RightInformationMenu from '../../components/about/RightInformationMenu.vue';
import ParseJSON from "@/model/ParseJSON";

export default {
    name: 'About',
    components: {
        LeftInformationMenu,
        RightInformationMenu,
    },
    data(){
        return{
            aboutName: 'Карточка участника',
            buttonHome: 'Вернуться',
            buttonNext: 'Следующая >',
            buttonPrevious: '< Предыдущая',
            information: null,
        }
    },
    computed: {
        next(){
            return '/about/' + ParseJSON.getNextId(this.$route.params.id);
        },
        previous(){
            return '/about/' + ParseJSON.getPreviousId(this.$route.params.id);
        }
    },
    methods: {
        getInformation(id){
            return ParseJSON.getObjectById(id);
        },

        getLeftInformation(id){
            let obj = this.getInformation(id);
            return ParseJSON.getProcessObject(obj,  'image', 'firstName', 'lastName');
        },

        getRightInformation(id){
            let obj = this.getInformation(id);
            return ParseJSON.getProcessObject(obj, 'phoneNumber', 'email', 'date', 'links', 'aboutPerson');
        },
    }
}