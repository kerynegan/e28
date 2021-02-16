const MyApp = {
    data() {
        return {
            isAdmin: true
       }
    }
}
const app = Vue.createApp(MyApp).mount('#app');
app.data['isAdmin']
// app.data.isAdmin
// app.$data.isAdmin
// $app.data.isAdmin
// app.isAdmin