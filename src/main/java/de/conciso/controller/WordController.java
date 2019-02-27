package de.conciso.controller;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import de.conciso.entity.Word;
import de.conciso.service.IWordService;
import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
public class WordController {

    private static final Logger logger = Logger.getLogger(WordController.class);

    public WordController() {

    }

    @Autowired
    private IWordService wordService;

    @ResponseBody
    @RequestMapping(value = "/addNewWordItem")
    public void addNewHistoryItem(@RequestBody Word word) {
        System.out.printf("new word:" + word);
        System.out.printf("new word.description:" + word.getDescription());
        wordService.createWord(word);
    }


    @RequestMapping(value = "/getWords", method = RequestMethod.GET)
    public @ResponseBody
    String getHistory() {
        logger.info("Getting the Word.");

        List<Word> wordList = wordService.getAllWords();
        System.out.println("words size:" + wordList.size());
        Gson gsonBuilder = new GsonBuilder().create();
        String jsonFromPojo = gsonBuilder.toJson(wordList);
        return jsonFromPojo;
    }

    @RequestMapping(value = "/")
    public ModelAndView getIndex() {
        logger.info("Getting index");
        return new ModelAndView("index");
    }
}