const {createApp} = Vue;

createApp({
    data(){
        return{
            persone: [
                {
                    nome: `Ms Volpe`,
                    avatar: `img/fox-8275476_1280.jpg`,
                    visible: true,
                    messaggi: [
                        {
                            date: `20/04/2024 17:49`,
                            message: `Ricordati le chiavi di casa`,
                            state: `sent`
                        },
                        {
                            date: `10/05/2024 17:49`,
                            message: `Ci sei domani per il compleanno di Laura?`,
                            state: `sent`
                        },
                        {
                            date: `03/07/2024 16:00`,
                            message: `Dovrei arrivare a casa tua per le 19:00`,
                            state: `not seen`
                        },
                    ]
                },
                {
                    nome: `Mr Cane`,
                    avatar: `img/dog.jpg`,
                    visible: true,
                    messaggi: [
                        {
                            date: `20/04/2024 17:49`,
                            message: `Ricordati le chiavi di casa`,
                            state: `sent`
                        },
                        {
                            date: `10/05/2024 17:49`,
                            message: `Ci sei domani per il compleanno di Laura?`,
                            state: `sent`
                        },
                        {
                            date: `03/07/2024 16:00`,
                            message: `Dovrei arrivare a casa tua per le 19:00`,
                            state: `not seen`
                        },
                    ]
                },
                {
                    nome: `Ms Ragno`,
                    avatar: `img/spider.jpg`,
                    visible: true,
                    messaggi: [
                        {
                            date: `20/04/2024 17:49`,
                            message: `Ricordati le chiavi di casa`,
                            state: `sent`
                        },
                        {
                            date: `10/05/2024 17:49`,
                            message: `Ci sei domani per il compleanno di Laura?`,
                            state: `sent`
                        },
                        {
                            date: `03/07/2024 16:00`,
                            message: `Dovrei arrivare a casa tua per le 19:00`,
                            state: `not seen`
                        },
                    ]
                },
                {
                    nome: `Ms Zebra`,
                    avatar: `img/zebra.png`,
                    visible: true,
                    messaggi: [
                        {
                            date: `20/04/2024 17:49`,
                            message: `Ricordati le chiavi di casa`,
                            state: `sent`
                        },
                        {
                            date: `10/05/2024 17:49`,
                            message: `Ci sei domani per il compleanno di Laura?`,
                            state: `sent`
                        },
                        {
                            date: `03/07/2024 16:00`,
                            message: `Dovrei arrivare a casa tua per le 19:00`,
                            state: `not seen`
                        },
                    ]
                },
                {
                    nome: `Mr Delfino`,
                    avatar: `img/dolphin.png`,
                    visible: true,
                    messaggi: [
                        {
                            date: `20/04/2024 17:49`,
                            message: `Ricordati le chiavi di casa`,
                            state: `sent`
                        },
                        {
                            date: `10/05/2024 17:49`,
                            message: `Ci sei domani per il compleanno di Laura?`,
                            state: `sent`
                        },
                        {
                            date: `03/07/2024 16:00`,
                            message: `Dovrei arrivare a casa tua per le 19:00`,
                            state: `not seen`
                        },
                    ]
                },
                {
                    nome: `Mr Cervo`,
                    avatar: `img/deer.webp`,
                    visible: true,
                    messaggi: [
                        {
                            date: `20/04/2024 17:49`,
                            message: `Ricordati le chiavi di casa`,
                            state: `sent`
                        },
                        {
                            date: `10/05/2024 17:49`,
                            message: `Ci sei domani per il compleanno di Laura?`,
                            state: `sent`
                        },
                        {
                            date: `03/07/2024 16:00`,
                            message: `Dovrei arrivare a casa tua per le 19:00`,
                            state: `not seen`
                        },
                    ]
                }
            ]
        }
    }
}).mount(`#app`);


// <!-- container per info,notifiche, search bar e chat -->
//         <div class="my-utilities">
//             <div class="info-user">
//                 <div class="avatar">
//                     <img src="img/4098dbd3f33b4367904525922e978614.jpg" alt="">
                    
//                 </div>
//                 <h6>Mr Rana</h6>
//                 <div class="icons">
//                     <a href="#"><i class="fa-solid fa-circle-notch"></i></a>
//                     <a href="#"><i class="fa-solid fa-message"></i></a>
//                     <a href="#"><i class="fa-solid fa-ellipsis-vertical"></i></a>
//                 </div>
//             </div>
//             <div class="notifications">
//                 <div class="avatar">
//                     <img src="img/587889-200.png" alt="">
//                 </div>
//                 <div class="notStuff">
//                     <h5>Ricevi notifiche dei nuovi messaggi</h5>
//                     <a href="#">Attiva notifiche desktop</a>
//                 </div>
//             </div>
//             <div class="search">
//                 <div class="searching">
//                     <label for=""><i class="fa-solid fa-magnifying-glass"></i></label>
//                     <input type="text" placeholder="Cerca o inizia una nuova chat">
//                 </div>
//             </div>
//             <div class="chats">
//                 <!-- 1 -->
//                 <div class="struttura-chat">
//                     <div class="avatar-chat">
//                         <img src="img/fox-8275476_1280.jpg" alt="">
//                         <h3>Ms Volpe</h3>
                        
//                     </div>
//                     <div class="activities">
                        
//                         <span>ultimo messaggio inviato</span>
//                         <span class="orario">12:00</span>
//                     </div>
                    
//                 </div>
//                 <!-- 2 -->
//                 <div class="struttura-chat">
//                     <div class="avatar-chat">
//                         <img src="img/fox-8275476_1280.jpg" alt="">
//                         <h3>Mr Cane</h3>
                        
//                     </div>
//                     <div class="activities">
                        
//                         <span>ultimo messaggio inviato</span>
//                         <span class="orario">12:00</span>
//                     </div>
                    
//                 </div>
//                 <!-- 3 -->
//                 <div class="struttura-chat">
//                     <div class="avatar-chat">
//                         <img src="img/fox-8275476_1280.jpg" alt="">
//                         <h3>Ms Ragno</h3>
                        
//                     </div>
//                     <div class="activities">
                        
//                         <span>ultimo messaggio inviato</span>
//                         <span class="orario">12:00</span>
//                     </div>
                    
//                 </div>
//                 <!-- 4 -->
//                 <div class="struttura-chat">
//                     <div class="avatar-chat">
//                         <img src="img/fox-8275476_1280.jpg" alt="">
//                         <h3>Ms Zebra</h3>
                        
//                     </div>
//                     <div class="activities">
                        
//                         <span>ultimo messaggio inviato</span>
//                         <span class="orario">12:00</span>
//                     </div>
                    
//                 </div>
//                 <!-- 5 -->
//                 <div class="struttura-chat">
//                     <div class="avatar-chat">
//                         <img src="img/fox-8275476_1280.jpg" alt="">
//                         <h3>Mr Delfino</h3>
                        
//                     </div>
//                     <div class="activities">
                        
//                         <span>ultimo messaggio inviato</span>
//                         <span class="orario">12:00</span>
//                     </div>
                    
//                 </div>
//                 <!-- 6 -->
//                 <div class="struttura-chat">
//                     <div class="avatar-chat">
//                         <img src="img/fox-8275476_1280.jpg" alt="">
//                         <h3>Mr Cervo</h3>
                        
//                     </div>
//                     <div class="activities">
                        
//                         <span>ultimo messaggio inviato</span>
//                         <span class="orario">12:00</span>
//                     </div>
                    
//                 </div>
                
//             </div>
//         </div>