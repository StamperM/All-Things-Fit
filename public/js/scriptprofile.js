const age = document.getElementById("age");
const weight =document.getElementById("weight");
const height =document.getElementById("height");
const female =document.getElementById("genderfemale");
const male = document.getElementById("genderMale")
const gender =""
console.log("hello")
const getGender=(female,male)=>{
if (!male && female){
    gender = female;
    return gender;
    
}else{
    gender = male;
    return gender;
}}
// get to the user info
// name,age,weight, height,goal, gender

// post with enter create new data and send data back

fetch("/api/profile/data/"+ req.session.userId).then(response=>{
    return response.json()
        }).then(_data=>{
          res.render("profile",{name:profileData.userName,age:profileData.age,height:profileData.height, weight: profileData.weight, gender:profileData});
        });
    

// add event listener to initate the post
fetch('/api/profile/userinfo'), {
    method: "post",
    headers:{
        Accept: 'application.json',
        'content-type': 'application/json'
    },
    body: JSON.stringify({
        height:height,
        weight: weight,
        gender:gender,
        age:age,
        goal:goal,
        
        user_id: req.session.userId

        

    }),
    cache:'default'
}


document.getElementById("oneRep").addEventListener(populateCalories);