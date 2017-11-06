package com.chatbot.bot.repository;

import com.chatbot.bot.model.Keyword;
import org.springframework.data.jpa.repository.JpaRepository;

public interface KeywordRepository extends JpaRepository<Keyword, Integer>{
}