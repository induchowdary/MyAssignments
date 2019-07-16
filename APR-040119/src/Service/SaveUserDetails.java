package Service;

import Pojo.MyPojo;

//import DAO.*;

public class SaveUserDetails {
	
	public String saveUserDetails(MyPojo p)
	{
		DAO.SaveUserDetailsDAO save = new DAO.SaveUserDetailsDAO();
		String status = save.saveDetails(p);
		return status;
		
	}
	
	public String checkCredentials(MyPojo p)
	{
		DAO.SaveUserDetailsDAO check = new DAO.SaveUserDetailsDAO();
		String status = check.checkCredentialsDAO(p);
		return status;
		
	}
	
	public String getALlcustomerDetails(MyPojo p)
	{
		
		return null;
		
	}
	
	

}
