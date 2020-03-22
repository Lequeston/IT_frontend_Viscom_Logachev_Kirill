export default{
    name: 'HeaderTableCell',
    props: ['name'],
    computed: {
        isEmail(){
            const width = window.innerWidth;
            return (this.name === 'EMAIL' && width > 700);
        },
        isWidth(){
            const width = window.innerWidth;
            return ((width > 700) || (this.name != 'EMAIL'));
        }
    },
}