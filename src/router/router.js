import HomeComponent from '../component/home/home.vue';
import LoginComponent from '../component/login/login.vue';
import RegisterComponent from '../component/register/register.vue';

export default{
    routes:[
        {path:"/",redirect:"/home"},
        {name:"h",path:"/home",component:HomeComponent},

        {name:"l",path:"/login",component:LoginComponent},
        {name:"r",path:"/register",component:RegisterComponent}
    ]
};