
document.body.append("suck my cock")

let x;
async function sentimator()
{
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
        console.log(await response.json())
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

