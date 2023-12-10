import db from "../database/db.js";
import bcrypt from "bcrypt"

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