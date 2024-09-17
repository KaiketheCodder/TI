import http from "http"; 

const server = http.createServer((req,res) => {
    //Aqui vou criar as rotas do meu servidor 
    res.writeHead(200,{"Content-type" : "text/plain"});
    res.end(() => {
        "OI! CUZÃO GOSTOSO, ESTOU FUNFANDO"
    });
})

server.listen(3000,() => {
    console.log("Server rodando na porta 3000")
});