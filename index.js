const nodemailer = require("nodemailer");

const response = [
    {email: "<EMAIL>", nome: "<NOME>", sexo: "M"},
    {email: "<EMAIL>", nome: "<NOME>", sexo: "M"},
    {email: "<EMAIL>", nome: "<NOME>", sexo: "F"}

]

const transporter = nodemailer.createTransport({

    host: "<SMTP do seu email", //Example smtp.gmail.com
    port: <NUMBER PORT />, //Example 587
    secure: false,
    auth:{
        user: "<SUA CONTA EMAIL>",
        pass: "<SENHA DO SEU EMAIL>"
    }
});


console.log("Esta rodando....");

response.map(item => (

    item.sexo === "M" ? ( // IF somente para diferenciar masculino e feminino

        transporter.sendMail({
            from: "TITULO < <SUA CONTA DE EMAIL> >",
            to: `${item.email}`,
            subject: "Assunto aqui!",
            text: "Conteudo de texto",
            html: `<HTML MSG>`
        }).then(message => {
            console.log("Mensagem - >", message);
        }).catch(err => {
            console.log("Error -> ", err);
        })

    ): (

        transporter.sendMail({
            from: "TITULO < <SUA CONTA DE EMAIL> >",
            to: `${item.email}`,
            subject: "Assunto aqui!",
            text: "Conteudo de texto",
            html: `<HTML MSG>`
        }).then(message => {
            console.log("Mensagem - >", message);
        }).catch(err => {
            console.log("Error -> ", err);
        })

    )

))

