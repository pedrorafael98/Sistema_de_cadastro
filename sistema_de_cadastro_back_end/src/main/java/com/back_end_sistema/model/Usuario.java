package com.back_end_sistema.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String matricula;
    private String cpf;
    private String senha;

    
    public Usuario(){

    }
    
    public Usuario(String nome, String matricula, String cpf, String senha) {
           super();
           this.nome = nome;
           this.matricula = matricula;
           this.cpf = cpf;
           this.senha = senha;   
    }
    
        

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getMatricula() {
        return matricula;
    }

    public void setMatricula(String matricula) {
        this.matricula = matricula;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    @Override
    public String toString() {
        
        return "******************* \n  Usuario  \n******************* \n ID = "+ id + "\n Nome = "+ nome + "\n Matricula = "+ matricula + "\n  CPF = "+ cpf +"\n*******************";
    }


}
