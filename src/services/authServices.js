import * as authRepositories from "../repositories/authRepositories.js";
import { transporter } from "../helpers/emailHelper.js";
import crypto from "crypto";

global.passwordResetTokens = {};

export const cadastraUsuario = async (data) => {
    try {
        const existeUsuario = await buscaUsuario({ email: data.email });
        if (existeUsuario.response === 200) {
            return { response: 409, message: "Usuario ja cadastrado" };
        }
        await authRepositories.cadastraUsuario({ ...data });
        return { response: 201, message: "Usuario Criado" };
    } catch (error) {
        throw new Error(error);
    }
}

export const buscaUsuario = async (data) => {
    try {
        const existeUsuario = await authRepositories.buscaUsuario({ email: data.email });
        if (existeUsuario.rowCount > 0) {
            return { reponse: 200, message: "Usuario ja cadastrado" };
        }
        return { response: 404, message: "Usuario nao encontrado " };
    } catch (error) {
        throw new Error(error);
    }
}

export const logaUsuario = async (data) => {
    try {
        const existeUsuario = await authRepositories.buscaUsuario(data);
        if (existeUsuario.rowCount === 0) {
            return { response: 404, message: "Usuario não encontrado" };
        }
        const login = await authRepositories.logaUsuario(data);
        return { response: 200, message: "Login realizado", token: login };
    } catch (error) {
        throw new Error(error);
    }
}

export const recuperaSenha = async (data) => {
    try {
        const existeUsuario = await authRepositories.buscaUsuario(data);
        if (existeUsuario.rowCount === 0) {
            return { response: 404, message: "Usuario não encontrado" };
        }
        const emailUsuario = existeUsuario[0].email;
        const resetToken = crypto.randomBytes(20).toString('hex');
        passwordResetTokens[emailUsuario] = resetToken;
        const mailOptions = {
            from: 'gummylognotify@gmail.com',
            to: emailUsuario,
            subject: 'Recuperação de Senha',
            text: `text: O seu codigo de redefinição de senha é: ${resetToken}`,
        };
        try {
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return { response: 500, message: "Erro ao enviar o e-mail de recuperação de senha" };
                }
                res.send('E-mail de recuperação de senha enviado com sucesso');
            })
        } catch (error) {
            throw new Error(error);
        }
        return { response: 200, message: "email de recuperação enviado" };
    } catch (error) {
        throw new Error(error);
    }
}

export const trocaSenha = async (data) => {
    const { token, novaSenha } = data
    try {
        const email = Object.keys(passwordResetTokens).find(
            (e) => passwordResetTokens[e] === token
        );
        if (!email) {
            return {response: 400, message: "token invalido"};
        }
        await authRepositories.trocaSenha({email, novaSenha});
        delete passwordResetTokens[email];
        return { response: 200, message: "senha alterada" };
    } catch (error) {
        throw new Error(error);
    }
}