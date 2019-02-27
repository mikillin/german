package de.conciso.service.impl;

import de.conciso.dao.IWordsDAO;
import de.conciso.entity.Word;
import de.conciso.service.IWordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
@Transactional
public class WordServiceImpl implements IWordService {

    @Autowired
    private IWordsDAO wordDAO;


    public long createWord(Word word) {
        return wordDAO.addWord(word);
    }

    public void deleteWord(long id) {
        wordDAO.deleteWord(id);
    }

    @Override
    public void deleteAllWords() {
        //TODO: implement
    }

    public List<Word> getAllWords() {
        return wordDAO.getAllWords();
    }

    @Override
    public Word getWord(long id) {
        //TODO: implement
        return null;
    }
}
