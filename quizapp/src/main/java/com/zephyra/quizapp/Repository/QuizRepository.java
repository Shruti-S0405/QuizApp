package com.zephyra.quizapp.Repository;

import java.util.ArrayList;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.zephyra.quizapp.Model.Question;
import com.zephyra.quizapp.Model.Quiz;

@Repository
public interface QuizRepository extends JpaRepository<Quiz, Integer> {
}
