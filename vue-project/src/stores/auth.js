import {defineStore} from 'pinia'

export default defineStore ("auth",{
    state:()=>({
        isLoggedIn:false,
        user:"",
        isLoading:true,
        userId:localStorage.getItem("loggedUserId")
    }),
    actions:{
        async signup (email, password, name){
            try {
                const requestOptions = {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email, password, name }),
                };
           
                await fetch(`http://localhost:8082/auth/signup`, requestOptions);
              } catch (error) {
                console.log(error);
              }
        },

        async login(email, password) {
            try {
              const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
              };
         
              await fetch(`http://localhost:8082/auth/login`, requestOptions)
                .then (async  (response) => await  response.json())
                .then(async (responseJson) => {
                  
                  localStorage.setItem("authToken", responseJson.authToken);

                  const responseUsers = await fetch(`http://localhost:8082/api/users`);
                  let allUsers = await responseUsers.json();
                  
                  for (let i=0; i<allUsers.length;i++){
                    if (email==allUsers[i].email){
                      localStorage.setItem("loggedUserId", allUsers[i].id)
                      this.userId=allUsers[i].id;
                    }
                  }



                });
            } catch (error) {
              console.log(error);
            }
          },

          async  authenticateUser() {
            const storedToken = localStorage.getItem("authToken");
            if (storedToken) {
              try {
                const requestOptions = {
                  headers: {
                    Authorization: `Bearer ${storedToken}`,
                    "Content-Type": "application/json",
                  },
                };
         
                const response = await fetch(`http://localhost:8082/auth/verify/`, requestOptions);
                console.log(response.data)
         
                if (response.ok) {
                  this.isLoggedIn = true;
                  this.isLoading = false;
                  this.user = response.data;
                } else {
                  this.isLoggedIn = false;
                  this.isLoading = false;
                  this.user = null;
                }
              } catch (error) {
                this.isLoggedIn = false;
                this.isLoading = false;
                this.user = null;
              }
            } else {
              this.isLoggedIn = false;
              this.isLoading = false;
              this.user = null;
            }
          }  ,


          async  logOutUser() {
            localStorage.removeItem("authToken");
            localStorage.removeItem("loggedUserId");
            
          }
          
    }
})
