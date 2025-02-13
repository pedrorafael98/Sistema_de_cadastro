package com.back_end_sistema.model;
import static spark.Spark.*;
import com.google.gson.Gson;

public class Servidor {
    public static void main(String[] args) {
        port(8080);

        before((req, res) -> res.type("application/json"));

        get("/hello", (req, res)->{
            return new Gson().toJson(new Resposta("Servidor on-line"));
        });

        post("/echo", (req, res)->{
            Gson gson = new Gson();
            String nome, matricula, cpf, senha = gson.fromJson(req.body(), String.class);
            Requisicao requisicao = gson.fromJson(req.body(), Requisicao.class);
            return gson.toJson(new Resposta("Recebido: " + requisicao.mensagem));
        });
    }

}
