import db from "../database/db.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const cadastraUsuario = async ({ nome, email, senha }) => {
    const senhaEncriptada = await encriptaSenha(senha);

    try {
        return await db.query(`INSERT INTO usuarios (nome, email, senha_hash) VALUES ($1, $2, $3)`, [nome, email, senhaEncriptada]);
    } catch (error) {
        throw new Error(error);
    }
}

export const buscaUsuario = async({ email }) => {
    try {
        const usuario = await db.query(`SELECT * FROM usuarios WHERE email = $1`, [email]);
        return usuario.rows;
    } catch (error) {
        throw new Error(error);
    }
}

const encriptaSenha = async (senha) => {
    const saltRounds = 10;
    const senhaEncriptada = await bcrypt.hash(senha, saltRounds);
    return senhaEncriptada;
}

export const logaUsuario = async ({ senha, email }) => {
    
    try {
        const usuario = await buscaUsuario({email});
        const senhaHash = usuario[0].senha_hash;
        const emailUsuario = usuario[0].email;
        const senhaConfere = await bcrypt.compare(senha, senhaHash);
        if (!senhaConfere) {
            throw new Error("Senha incorreta");
        }
        const token = jwt.sign({email: emailUsuario}, process.env.JWT_SECRET, {expiresIn: '10h'});
        return token;

    } catch (error) {
        throw new Error(error);
    }
}

export const trocaSenha = async ({ novaSenha, email }) => {
    try {
        const saltRounds = 10;
        const senhaEncriptada = await bcrypt.hash(novaSenha, saltRounds)
        return await db.query(`UPDATE usuarios SET senha_hash = $1 WHERE email = $2`, [senhaEncriptada, email]);
    } catch (error) {
        throw new Error(error);
    }
}