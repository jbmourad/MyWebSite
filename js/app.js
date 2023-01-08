var app=Vue.createApp({
    data(){
        return{
            brand:'mourad',
            profile:'',
            name:'',
            subject:'',
            message:'',
            api: 'https://script.google.com/macros/s/AKfycby5Xid0qHc_n3CuULsXbl6NjaWlEmcQ4tCmUFuS3ynEDigbkxfZhzaVz3m8LpnuXR7j/exec'

        }
    },
    mounted(){
        //life cycle Hooks
         fetch(this.api).then(res=>res.json()).then(res=>{
            console.log(res)
            this.profile=res
         }).catch(err=>{
            console.log(err)
         })
    },
    methods:{
        submit(){
            return `mailto:${this.profile.email}?subject=${this.subject}&body=${this.message}`
        }
    }
})

app.mount('#app')