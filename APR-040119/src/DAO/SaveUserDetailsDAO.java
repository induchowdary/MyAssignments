package DAO;

import java.sql.*;

import Pojo.MyPojo;
import connectBD.MyConnectionJDBC;

public class SaveUserDetailsDAO {

	public String saveDetails(MyPojo p) {
		// TODO Auto-generated method stub
		Connection con = MyConnectionJDBC.getConnection();
		String status = null;
		try {
			Statement stmt = con.createStatement();
			PreparedStatement query;
			query = con.prepareStatement("insert into customerInfo (custName,custage, custEmailId, custPhnNo, password) values(?,?,?,?,?)");
			query.setString(1, p.getName());
			query.setInt(2, p.getAge());
			query.setString(3, p.getEmailid());
			query.setString(4, p.getphno());
			query.setString(5, p.getPassword());
			int i=query.executeUpdate();  
			System.out.println("i "+i);
			if(i==1)//data inserted successfully!!
			{
				query = con.prepareStatement("Select custId from customerInfo where custEmailId = '"+p.getEmailid()+"' and custPhnNo='"+p.getphno()+"'");
				ResultSet rs=query.executeQuery(); 
				while(rs.next())
				{
					status= rs.getString(1);
				}
			}
			else
			{
				
			}
		
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return "could not be created; error occured. Please, try again later!";
		}
		return status;
	}

	public String checkCredentialsDAO(MyPojo p) {

		// TODO Auto-generated method stub
		Connection con = MyConnectionJDBC.getConnection();
		String status = null;
		try {
			Statement stmt = con.createStatement();
			PreparedStatement query;
			query = con.prepareStatement(" select password from customerInfo where custId = "+p.getCustid());
			//query.setInt(0, p.getCustid());
			
			ResultSet rs=query.executeQuery();  
			while(rs.next())
				{
				
					String password = rs.getString(1);
					System.out.println(password);
					if(password.equals(p.getPassword()))
					{
						status = "Success";
						System.out.println("successs!");
					}
					else
					{
						System.out.println("failed");
						status = "Failed";
					}
				}
			 		
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return "could not be created; error occured. Please, try again later!";
		}
		return status;
	}

}
