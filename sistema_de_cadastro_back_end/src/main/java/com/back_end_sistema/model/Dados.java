package com.back_end_sistema.model;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class Dados {
    
    public ResponseEntity<Map> receberDados(@RequestBody Map<String, Object> dados){
        return ResponseEntity.ok(dados);
    }
}
