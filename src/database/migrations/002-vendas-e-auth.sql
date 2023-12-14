CREATE TABLE "produtos" (
  "id" serial PRIMARY KEY,
  "sku_id" integer NOT NULL,
  "unidade_de_estoque_id" int NOT NULL
);

CREATE TABLE "marcas" (
  "id" serial PRIMARY KEY,
  "nome" varchar NOT NULL
);

CREATE TABLE "unidade_de_estoque" (
  "id" serial PRIMARY KEY,
  "nome" varchar NOT NULL,
  "endereco" varchar NOT NULL
);

CREATE TABLE "SKUs" (
  "id" serial PRIMARY KEY,
  "sku_name" varchar UNIQUE NOT NULL,
  "nome" varchar UNIQUE NOT NULL,
  "marca_id" integer NOT NULL,
  "descricao" text,
  "ultimo_abastecimento" timestamp
);

CREATE TABLE "notificacoes" (
  "id" serial PRIMARY KEY,
  "mensagem" text NOT NULL,
  "usuario_id" int NOT NULL,
  "status" bool NOT NULL
);

CREATE TABLE "usuarios" (
  "id" serial PRIMARY KEY,
  "email" varchar NOT NULL,
  "nome" varchar NOT NULL,
  "senha_hash" varchar NOT NULL
);

CREATE TABLE "vendas" (
  "id" serial PRIMARY KEY NOT NULL,
  "ordemDeVenda" text UNIQUE NOT NULL,
  "sku_id" integer NOT NULL,
  "quantidade" integer NOT NULL,
  "endereco" text NOT NULL,
  "nomeDoCliente" text NOT NULL,
  "dataDeVenda" timestamp NOT NULL,
  "statusDoPedido" text NOT NULL DEFAULT 'Pedido Realizado',
  "preco" int NOT NULL
);

CREATE TABLE usuarios (
    "id" SERIAL PRIMARY KEY NOT NULL,
    "usuario" VARCHAR UNIQUE NOT NULL,
    "email" VARCHAR UNIQUE NOT NULL,
    "senha_hash" VARCHAR NOT NULL
);

ALTER TABLE "SKUs" ADD FOREIGN KEY ("marca_id") REFERENCES "marcas" ("id");

ALTER TABLE "produtos" ADD FOREIGN KEY ("unidade_de_estoque_id") REFERENCES "unidade_de_estoque" ("id");

ALTER TABLE "produtos" ADD FOREIGN KEY ("sku_id") REFERENCES "SKUs" ("id");

ALTER TABLE "notificacoes" ADD FOREIGN KEY ("usuario_id") REFERENCES "usuarios" ("id");

ALTER TABLE "vendas" ADD FOREIGN KEY ("sku_id") REFERENCES "SKUs" ("id");