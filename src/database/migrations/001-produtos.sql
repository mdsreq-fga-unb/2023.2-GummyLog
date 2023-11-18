CREATE TABLE "produtos" (
  "id" SERIAL PRIMARY KEY,
  "sku_name" varchar UNIQUE NOT NULL,
  "nome" varchar UNIQUE NOT NULL,
  "marca_id" int NOT NULL,
  "unidade_de_estoque_id" int NOT NULL,
  "descricao" text,
  "ultimo_abastecimento" timestamp
);

CREATE TABLE "marcas" (
  "id" SERIAL PRIMARY KEY,
  "nome" varchar NOT NULL
);

CREATE TABLE "unidade_de_estoque" (
  "id" SERIAL PRIMARY KEY,
  "nome" varchar NOT NULL,
  "endereco" varchar NOT NULL
);

ALTER TABLE "produtos" ADD FOREIGN KEY ("marca_id") REFERENCES "marcas" ("id");

ALTER TABLE "produtos" ADD FOREIGN KEY ("unidade_de_estoque_id") REFERENCES "unidade_de_estoque" ("id");