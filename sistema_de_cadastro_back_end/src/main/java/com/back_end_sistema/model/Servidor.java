package com.back_end_sistema.model;
import static spark.Spark.*;

import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;

public class Servidor {
    public static void main(String[] args) {
        port(8080);

        before((req, res) -> res.type("application/json"));

        get("/hello", (req, res)->{
            return new Gson().toJson(new Resposta("Servidor on-line"));
        });

        post("/echo", (req, res)->{
            Gson gson = new Gson();
            List<String> lista = new ArrayList<String>();
            lista.add(gson.fromJson(req.body(), String.class));
            
            Requisicao requisicao = gson.fromJson(req.body(), Requisicao.class);
            
            return gson.toJson(new Resposta("Recebido: " + requisicao.mensagem));
        });
    }
    static void createUsuario(String nome, String matricula, String cpf, String senha){
            Usuario usuario = new Usuario(nome, matricula, cpf, senha);
            EntityManagerFactory emf = Persistence.createEntityManagerFactory("back_end");
            EntityManager em = emf.createEntityManager();

            em.getTransaction().begin();
            em.persist(usuario);
            em.getTransaction().commit();

            em.close();
            emf.close();

    }  

}
