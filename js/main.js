const {createApp} = Vue;

createApp({
    data(){
        return{
            persone: [
                {
                    nome: `Ms Volpe`,
                    avatar: `img/fox-8275476_1280.jpg`,
                    visible: true,
                },
                {
                    nome: `Mr Cane`,
                    avatar: `img/`,
                    visible: true,
                },
                {
                    nome: `Ms Ragno`,
                    avatar: `img/`,
                    visible: true,
                },
                {
                    nome: `Ms Zebra`,
                    avatar: `img/`,
                    visible: true,
                },
                {
                    nome: `Mr Delfino`,
                    avatar: `img/`,
                    visible: true,
                },
                {
                    nome: `Mr Cervo`,
                    avatar: `img/`,
                    visible: true,
                }
            ]
        }
    }
})