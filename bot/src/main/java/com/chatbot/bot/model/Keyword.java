package com.chatbot.bot.model;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Keyword {
	private int id;
	private String word;
	private Set<Phrase> phrases;
	
	public Keyword() {
		
	}
	
	public Keyword(String word) {
		this.word = word;
	}
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public int getId() {
        return id;
    }

	public void setId(int id) {
		this.id = id;
	}
	
	public String getWord() {
		return word;
	}
	
	public void setWord(String word) {
		this.word = word;
	}
	
	@OneToMany(mappedBy = "keyword1", cascade = CascadeType.ALL)
//	@OneToMany(mappedBy = "keyword2", cascade = CascadeType.ALL)
//	@OneToMany(mappedBy = "keyword3", cascade = CascadeType.ALL)
	public Set<Phrase> getPhrases() {
		return phrases;
	}
	
	public void setPhrases(Set<Phrase> phrases) {
		this.phrases = phrases;
	}

	@Override
	public String toString() {
		String result = String.format("Keyword[id=%d, word'%s']%n", id, word);
		if (phrases != null) {
			for (Phrase phrase : phrases) {
				result += String.format("Keyword[id=%d, word'%s']%n", phrase.getId(), phrase.getLine());
			}
		}
		return result;
	}
	
	

}
