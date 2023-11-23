import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'junior.amaral.2121@gmail.com',
        pass: 'azxzlxgkovgjnujs',
    },
});