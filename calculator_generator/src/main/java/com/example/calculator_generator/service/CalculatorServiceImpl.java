package com.example.calculator_generator.service;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.concurrent.ThreadLocalRandom;
import java.util.stream.LongStream;

@Service
public class CalculatorServiceImpl implements CalculatorService{
    private static final int RANDOM_OPERAND_MIN_RANGE = 0;
    private static final int RANDOM_OPERAND_MAX_RANGE = 1000;

    @Override
    public List<String> generateRandomCalculations(long count) {
        return LongStream.range(0, count)
                .mapToObj(s -> randomEvaluation())
                .toList();
    }

    private static int getRandomNumber(int min, int max){
        return ThreadLocalRandom.current().nextInt(min, max);
    }

    private static String randomEvaluation(){
        int leftOperand = getRandomNumber(RANDOM_OPERAND_MIN_RANGE, RANDOM_OPERAND_MAX_RANGE);
        int rightOperand = getRandomNumber(RANDOM_OPERAND_MIN_RANGE, RANDOM_OPERAND_MAX_RANGE);
        String randomOperation = getRandomOperation();

        return leftOperand + randomOperation + rightOperand;
    }

    private static String getRandomOperation() {
        int randomNumber = getRandomNumber(0, 4);
        return switch (randomNumber){
            case 0 -> "+";
            case 1 -> "-";
            case 2 -> "*";
            case 3 -> "/";
            default -> throw new IllegalArgumentException("Unexpected value: " + randomNumber);
        };
    }
}
