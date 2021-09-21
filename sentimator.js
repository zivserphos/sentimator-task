let x;
async function sentimator()
{
    document.querySelector(".loader").hidden = false
    const response = await fetch("https://sentim-api.herokuapp.com/api/v1/" ,
    {
        method: "POST",
        headers:
        {
            Accept: "application/json", "Content-Type": "application/json"      
        } ,
        body: JSON.stringify({ "text": x })
    })

    if (response.ok)
    {
       const data = await response.json()
       const result = document.getElementById("result")
       if (data.result.type === "positive")
            result.style.backgroundColor = "green"
       else if (data.result.type === "negative")
            result.style.backgroundColor = "red"
       else 
            result.style.backgroundColor = "grey"
       document.querySelector(".loader").hidden = true
       for (let key in data.result)
       {
           result.append(key , " ", data.result[key] , " ")
       } 
    }
    else
    {
        alert("your mom's a hoe")
    }
    
}
document.getElementById("submit").addEventListener("click", (e) => {
x = document.getElementById("text").value
sentimator()
})

