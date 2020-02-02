export default {
    host: 'smtp.mailtrap.io',
    port: '2525',
    secure: false,
    auth: {
        user: 'b122d6cc9fad61',
        pass: 'b7b9a1c3f790bf'
    },
    default: {
        from: 'Equipe   GoBarber <noreply@gobarber.com>'
    }
};

//Aplicação online será usado um desses a baixo:
//Amazon SES
//Mailgun
//Sparkpost
//Mandril(MailChimp)

//Usaremos o MailTrap que só funciona em ambiente de desenvolvimento