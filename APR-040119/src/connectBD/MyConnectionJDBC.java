package connectBD;
import java.sql.*;

public class MyConnectionJDBC {
	/*    private static String url = "jdbc:mysql://localhost:3306/prototypeeop";    
	    private static String driverName = "com.mysql.jdbc.Driver";   
	    private static String username = "root";   
	    private static String password = "1234";
	    private static Connection con;
	    private static String urlstring;*/

	    public static Connection getConnection() {
	    	Connection con = null;
	    	try {
	    	
	        	Class.forName("oracle.jdbc.driver.OracleDriver");  
	        	try {
	        	 con=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:orcl","javadata","javadata");  
	        		} 
	        	catch (SQLException ex) {
	                        System.out.println("Failed to create the database connection."); }
	        } 
	        catch (ClassNotFoundException ex) {
	             System.out.println("Driver not found."); 
	        }
	        return con;
	    }
}	
	
	
	
	
	
	