package com.chatbot.bot.repository;

import com.chatbot.bot.model.Phrase;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PhraseRepository extends JpaRepository<Phrase, Integer> {
}