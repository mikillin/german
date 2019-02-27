package de.conciso.dao.impl;

import de.conciso.dao.IWordsDAO;
import de.conciso.entity.Word;
import de.conciso.util.HibernateUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public class WordsDAOImpl implements IWordsDAO {

    //delete
    public WordsDAOImpl() {
    }

    @Autowired
    private HibernateUtil hibernateUtil;


    public long addWord(Word word) {
        return (Long) hibernateUtil.create(word);
    }

    public void deleteWord(long id) {
        Word word = new Word();
        word.setId(id);
        hibernateUtil.delete(word);
    }

   public Word getWord(long id) {
        return hibernateUtil.fetchById(id, Word.class);
    }

    @SuppressWarnings("unchecked")
    public List<Word> getAllWords() {
        return hibernateUtil.fetchAll(Word.class);
    }
}