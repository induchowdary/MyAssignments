package Action;

//import Service.*;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Pojo.MyPojo;


public class Details extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
  	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		
		MyPojo p = new MyPojo();
		
		p.setName(request.getParameter("username"));
		p.setEmailid(request.getParameter("emailid"));
		p.setPassword(request.getParameter("password"));
		p.setAge(Integer.parseInt(request.getParameter("age")));
		p.setphno(request.getParameter("phno"));
		
		Service.SaveUserDetails s= new Service.SaveUserDetails();
		String status = s.saveUserDetails(p);
		if(status == null)
			status = "could not be created; error occured. Please, try again later!";
		
		//passing the result to JSP and print it there 
		request.setAttribute("status", status);
		RequestDispatcher rd=request.getRequestDispatcher("/home.jsp");  
		rd.include(request, response);
		
	}

}
