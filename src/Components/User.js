function User({name,surname,age,isLoogedIn}){
    return (
        <h1>
            {!isLoogedIn 
                ?   `${name} ${surname} ${age}` 
                :   "Giriş Yapmadiniz."} 
        </h1>
    );
}
export default User;