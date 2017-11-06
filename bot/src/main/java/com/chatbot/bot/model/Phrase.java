package com.chatbot.bot.model;

import javax.persistence.*;

@Entity
public class Phrase {
	private int id;
	private String line;
	
//	@OneToMany(mappedBy="word")
	private Keyword keyword1;
//	@OneToMany(mappedBy="word")
//	private Keyword keyword2;
//	@OneToMany(mappedBy="word")
//	private Keyword keyword3;
	
	public Phrase() {
		
	}

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getLine() {
		return line;
	}

	public void setLine(String line) {
		this.line = line;
	}

	@ManyToOne
    @JoinColumn(name = "keyword_id")
	public Keyword getKeyword1() {
		return keyword1;
	}

	public void setKeyword1(Keyword keyword1) {
		this.keyword1 = keyword1;
	}

//	@ManyToOne
//    @JoinColumn(name = "keyword_id")
//	public Keyword getKeyword2() {
//		return keyword2;
//	}
//
//	public void setKeyword2(Keyword keyword2) {
//		this.keyword2 = keyword2;
//	}
//
//	@ManyToOne
//    @JoinColumn(name = "keyword_id")
//	public Keyword getKeyword3() {
//		return keyword3;
//	}
//
//	public void setKeyword3(Keyword keyword3) {
//		this.keyword3 = keyword3;
//	}
//	
}
