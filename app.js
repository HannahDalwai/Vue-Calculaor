const app = Vue.createApp({
    data(){
        return{
                sum:"",
                operators:[
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "6",
                    "7",
                    "8",
                    "9",
                    "+",
                    "-",
                    "/",
                    "*",
                    "."
                ],
           
        }
    },
    methods: {
             addToSum(operator){
                this.sum += operator
             },
                clearSum (){
                    this.sum = ""
                },
                    evalSum(){
                       this.sum = eval(this.sum)
                    },
                       
    },
})
app.mount("#app");
