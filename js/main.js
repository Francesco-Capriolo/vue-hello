const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        imageURL: "",
        classeScelta: "",
    },
    methods: {
        saluta: function () {
            console.log(this.message);
        }
    }
});