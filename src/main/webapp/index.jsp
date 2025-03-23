<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>JSP - Hello World</title>
    <script data-main="require.config" src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js"></script>
    <script src="${pageContext.request.contextPath}/dist/require.config.js"></script>
</head>
<body>
<h1><%= "Hello World!" %>
</h1>
<br/>
<div id="app"></div>
</body>
</html>