import * as produtosRepositories from "../repositories/produtosRepositories.js";
import * as SKURepositories from "../repositories/SKURepositories.js";
import cron from "node-cron";
import { transporter } from "../helpers/emailHelper.js";

export const novoProduto = async (data) => {
    try {
        const existeSku = await SKURepositories.buscaSKU({ id: data.skuId });
        if (existeSku.length === 0) {
            return { response: 404, message: "SKU não encontrado" }
        }   
        const existeProduto = await buscaProduto({ ...data });
        if (existeProduto.response === 200) {
            return { response: 409, message: "Produto já cadastrado" };
        }
        await produtosRepositories.novoProduto({ ...data });
        return { response: 201, message: "Produto Registrado" };

    } catch (error) {
        throw new Error(error);
    }
}

export const buscaProduto = async (data) => {
    try {
        const produtos = await produtosRepositories.buscaProduto({ ...data });
        if (produtos.length === 0) {
            return { message: "Produto não Encontrado", response: 404 };
        }
        return { response: 200, message: "Produto encontrado", payload: produtos };
    } catch (error) {
        throw new Error(error);
    }
}

export const atualizaProduto = async (data) => {
    const { skuId } = data;

    try {
        const existeProduto = await produtosRepositories.buscaProduto({ skuId });

        if (existeProduto.length === 0) {
            return { response: 404, message: "Produto não encontrado" }
        }
        await produtosRepositories.atualizaProduto({ ...data });
        return { response: 200, message: "Produto Atualizado" };
    } catch (error) {
        throw new Error(error)
    }
}

export const verificaEstoqueProduto = async () => {
    try {
        const produtos = await produtosRepositories.verificaEstoqueProduto();
        return produtos;
    } catch (error) {
        throw new Error(error);
    }
}

export const emailNotificacao = async (data) => {
    await produtosRepositories.emailNotificacao({ ...data });
    return { response:200, message: "Email de notificação atualizado"};

}

cron.schedule('0 0 * * 0', async () => {
    const produtos = await verificaEstoqueProduto();
    produtos.forEach(async (produto) => {
        const mensagem = {
            from: 'gummylognotify@gmail.com',
            to: email,
            subject: 'Notificação de Estoque Baixo',
            text: `O produto ${produto.id} está com estoque baixo na unidade de estoque: (${produto.unidade_de_estoque_id} ).`,
        };
        try {
            await transporter.sendMail(mensagem);
        } catch (error) {
            throw new Error(error);
        }
    })
});