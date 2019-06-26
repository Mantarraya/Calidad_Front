
class AuthEstudiante{

    verificarEstudiante(){
        
        if(localStorage.getItem('mytoken')==null){
            return true
        }else{
            return false
        }
    }
}
export default AuthEstudiante;