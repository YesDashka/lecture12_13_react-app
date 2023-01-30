package com.example.calculator_generator.controller;

import com.example.calculator_generator.service.CalculatorServiceImpl;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/math/examples")
public class GenerateRandomCalculationController {

    private final CalculatorServiceImpl calculatorService;

    public GenerateRandomCalculationController(CalculatorServiceImpl calculatorService) {
        this.calculatorService = calculatorService;
    }

    @GetMapping
    @CrossOrigin(origins = "http://localhost:3000")
    public List<String> getRandomCalculations(@RequestParam long count){
        return calculatorService.generateRandomCalculations(count);
    }
}
