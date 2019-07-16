<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>GetUrInfoSaved</title>
<link rel="stylesheet" type="text/css" href="MyCSS.css">
</head>

<body>

<h1> <centre> Give info and save It 4Ever</h1>
<div class="addName">
<form name="login" method="post" action="login" >
<table>
	<tr><td>User ID : </td> <td ><input placeholder="ex:23456678" type=text name = "custid" /> <br></td></tr>
	<tr><td>Password : </td> <td colspan="8"><input placeholder="please choose without ($,%)" type=password name = "password" /> <br></td></tr>
	<tr><td colspan="9"><input type="submit" value="Authorise to My Account"/></td></tr>
	<% String status = (String)request.getAttribute("status"); 
	if(status != null)
	{%>
		<h3 style="color: red"><%=status %></h3><br>
		<h4><a href="home.jsp"><i>New user? Register here!</i></a> </h4>
	<%} %>
</table>
</form>
</div>
<%-- <script type="text/javascript">
function onloadDoThis()
{
 String status1 = <%=status%>
}
</script> --%>

</body>
</html>