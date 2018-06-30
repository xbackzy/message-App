import{loginURL,registerURL} from './URLConfig';
class UserMessage{
    async login(username,password){
        try {
            const user={
                username,
                password
            }

            const res=await fetch(loginURL,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(user)
            });
            const result=await res.json();
            if(result.success==true){
                localStorage.access_token=result.data.access_token
            }
            return result;
        } catch (error) {
            return{
                success:false,
                errorMessage:'网络错误'
            }
        }
    }
    async logout(){
        localStorage.access_token='';
    }

    async isLogin(){
        if(localStorage.access_token===''){
            return false;
        }else{
            return true;
        }
    }
    async register(username,password){
        try {
            const user={
                username,
                password
            }

            const res=await fetch(registerURL,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(user)
            })

            const result=await res.json();
            if(result.success===true){
                localStorage.access_token=result.data.access_token
            }
            return result;
        } catch (error) {
            return{
                success:false,
                errorMessage:'网络错误'
            }
        }
    }
}
export default new UserMessage();