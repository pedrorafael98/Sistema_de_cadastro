package com.back_end_sistema.model;
import static spark.Spark.*;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.back_end_sistema.Main;
import com.google.gson.Gson;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;

@SpringBootApplication
public class Servidor {
    public static void main(String[] args) {
        SpringApplication.run(Servidor.class, args);
        System.out.println("Servidor Ligado!");
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
