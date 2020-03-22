export default{
    name: 'HeaderTableCell',
    props: ['name'],
    computed: {
    },
    methods: {
        colspan(name){
            return (name === 'EMAIL') ? 2 : 1;
        }
    }
}