const app = Vue.createApp({
    data() {
        return {
            firstName: 'Loki',
            lastName: 'OdinSon',
            email: 'lala@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/66.jpg'
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()

            // console.log(results)

            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        }
    }

})

app.mount('#app')