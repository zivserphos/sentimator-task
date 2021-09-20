
document.body.append("suck my cock")


async function sentimaor(text)
{
    const response = await fetch("https://sentim-api.herokuapp.com/")
    const toJson = await response.json()
    return toJson
}

document.body.append(await sentimaor())