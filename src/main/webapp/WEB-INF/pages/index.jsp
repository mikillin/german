<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!doctype html>
<html>
<head>
    <title>
        Learn Words
    </title>

    <!-- meta -->
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">

    <!-- css -->
    <link rel="stylesheet" type="text/css" href="/resources/css/main.css">

    <!-- scripts -->
    <script type="text/javascript"
            src="${pageContext.request.contextPath}/resources/js/jquery/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="/resources/js/main.js"></script>

</head>

<body>
<div class="container">

    <div class="main-window">

        <div><input type="text" id="description" readonly class="item-description"></div>
        <div><input type="button" id="question" value="Question">
            <input type="button" id="firstAnswer" value="First Answer">
            <input type="button" id="secondAnswer" value="Second Answer"></div>
        <div><input type="button" id="thirdAnswer" value="Third Answer"></div>

    </div>
    <div>
        <div><input type="text" id="description_add" placeholder="description"></div>
        <div><input type="text" id="question_add" placeholder="question"></div>
        <div><input type="text" id="firstAnswer_add" placeholder="firstAnswer"></div>
        <div><input type="text" id="secondAnswer_add" placeholder="secondAnswer"></div>
        <div><input type="text" id="thirdAnswer_add" placeholder="thirdAnswer"></div>
        <div><input type="text" id="translation_add" placeholder="translation"></div>
        <div><input type="text" id="correct_add" placeholder="correct"></div>
        <div><input type="button" id="saveNewItem" value = "Add new item"></div>
    </div>
</div>


</body>
</html>