let app=Vue.createApp({
    data(){
        return{
            brand:'Mourad Web Site',
            profile:'',
            name:'',
            subject:'',
            message:'',
            spinner:true,
            api: 'https://script.google.com/macros/s/AKfycby5Xid0qHc_n3CuULsXbl6NjaWlEmcQ4tCmUFuS3ynEDigbkxfZhzaVz3m8LpnuXR7j/exec'

        }
    },
    mounted(){
        //life cycle Hooks
        this.spinner=true;
         fetch(this.api).then(res=>res.json()).then(res=>{
            console.log(res)
            this.profile=res
            this.spinner=false;
         }).catch(err=>{
            console.log(err);
            this.spinner=false;
         })
    },
    methods:{
        submit(){
            return `mailto:${this.profile.email}?subject=${this.subject}&body=${this.message}`;
        }
    }
})

app.mount('#app')