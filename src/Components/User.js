function User({name,surname,age,isLoggedIn,friends}){
    console.log(friends)
    return (
        <>
        <h1>
            {isLoggedIn ? `${name} ${surname} ${age}`:"Giriş Yapmadiniz."} 
        </h1>
        {
            friends.map((friend) => ( <div key={friend.id}>{friend.name}</div>))
        }
        </>
    );
}
export default User;