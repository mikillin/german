package de.conciso.service;

import de.conciso.entity.Word;

import java.util.List;


public interface IWordService {

    public long createWord(Word word);

    public void deleteWord(long id);

    public void deleteAllWords();

    public List<Word> getAllWords();

    public Word getWord(long id);


}
