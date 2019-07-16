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
<form name="details" method="post" action="Details" >
<table>
	<tr><td>Name : </td> <td ><input placeholder="FirstName LastName" type=text name = "username" /> <br></td></tr>
	<tr><td>Email Id : </td> <td colspan="8"><input placeholder="xxxxx@gmail.com" type=text name = "emailid" /> <br></td></tr>
	<tr><td>Password : </td> <td colspan="8"><input placeholder="please choose without ($,%)" type=password name = "password" /> <br></td></tr>
	<tr><td>Age :</td> <td colspan="8"><input type=text name = "age" /> <br></td></tr>
	<tr><td>Contacat Number : </td> <td colspan="8"><input placeholder="+91-9999999999" type=text name = "phno" /> <br></td></tr>
	<tr><td colspan="9"><h4><i>Please click submit to get your ID and make a note of your password!</i></h4> <br></td></tr>
	<tr><td colspan="9"><input type="submit" value="Submit my Details"/></td></tr>
	<% System.out.println("Hi");
	String status = (String)request.getAttribute("status"); 
	if(status != null)
	{%>
		<h3>Your ID: <%=status %></h3><br>
		<h1><a href="login.jsp">Please login here to continue</a></h1>
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