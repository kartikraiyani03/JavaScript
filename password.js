class Pro 
{
    constructor()
    {
        console.log("\nYour Password")
        this.pass = ""
    }
    password(length) 
    {
        let c = "abcdefghijklmnopqrstuvwxyz"
        let n = "1234567890"
        let s = "!@#$%^&*()-+/"
        let o = ",.;'?}{[]<>_=~"

        let i = 0
        while (i < length) 
        {
            this.pass += c[Math.floor(Math.random()*c.length)]
            this.pass += n[Math.floor(Math.random()*n.length)]
            this.pass += s[Math.floor(Math.random()*s.length)]
            this.pass += o[Math.floor(Math.random()*o.length)]
            i+=4
        }
        return this.pass
    }
}

let p = new Pro()
console.log(p.password(12))
console.log("\n")