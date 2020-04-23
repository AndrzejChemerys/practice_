var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue !!!',
        seen: true,
        todos: [{
                text: 'Learn JavaScript'
            },
            {
                text: 'Learn Vue'
            },
            {
                text: 'Build something awesome'
            }
        ]
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

app.todos.push({
    text: 'New item'
})