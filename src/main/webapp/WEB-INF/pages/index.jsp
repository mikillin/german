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


        <input type = "text" id ="description" readonly class="item-description">
        <input type = "button" id="question" value = "Question">


        <input type = "button" id= "firstAnswer" value = "First Answer">

        <input type = "button" id= "secondAnswer" value = "Second Answer">

        <input type = "button" id= "thirdAnswer"  value = "Third Answer">

    </div>

</div>


</body>
</html>