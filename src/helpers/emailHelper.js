import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'gummylognotify@gmail.com',
        pass: 'ubjvzfkeyjxcatdt ',
    },
});