package Action;

//import Service.*;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Pojo.MyPojo;

/**
 * Servlet implementation class Details
 */

public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
  	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		
		MyPojo p = new MyPojo();
		
		p.setCustid(Integer.parseInt(request.getParameter("custid")));
		p.setPassword(request.getParameter("password"));
		
		Service.SaveUserDetails s= new Service.SaveUserDetails();
		String status = s.checkCredentials(p);
		if(status == null)
		{
			status = "Error occured. Please come back later!";
		}
		else if(status == "Success")
		{
		//passing the result to JSP and print it there 
		RequestDispatcher rd=request.getRequestDispatcher("/myaccount.jsp");  
		rd.include(request, response);
		}
		else if(status == "Failed")
		{
			request.setAttribute("status", "UserId/Password doesn't match!!");
			RequestDispatcher rd=request.getRequestDispatcher("/login.jsp");  
			rd.include(request, response);
		}
		
		/*PrintWriter out = response.getWriter();
		out.print("<h1>"+status+"</h1>");*/
	}

}
