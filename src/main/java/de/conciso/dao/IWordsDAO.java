package de.conciso.dao;

import java.util.List;

import de.conciso.entity.Word;

public interface IWordsDAO {
    public long addWord(Word word);

    public void deleteWord(long id);


    public List<Word> getAllWords();

}
