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
    }

}
