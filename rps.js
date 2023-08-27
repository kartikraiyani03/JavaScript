let user = prompt("Rock Paper Sessior")
let cpuInput = Math.floor(Math.random() * 3)
let cpu = ["R","P","S"][cpuInput]
const match = (user,cpu) =>
{
    if(cpu === user)
    {
        return "Match Tie"
    }
    else if(user === "R" && cpu === "P")
    {
        return "CPU"
    }
    else if(user === "R" && cpu === "S")
    {
        return "USER"
    }
    else if(user === "P" && cpu === "R")
    {
        return "USER"
    }
    else if(user === "P" && cpu === "S")
    {
        return "CPU"
    }
    else if(user === "S" && cpu === "R")
    {
        return "CPU"
    }
    else if(user === "S" && cpu === "P")
    {
        return "USER"
    }
}

document.write(`User : ${user} CPU : ${cpu} : Winner : ${match(user,cpu)}`)
