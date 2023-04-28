<%@ page import="java.sql.*" %>

<%
    String url = "jdbc:mysql://localhost:3306/mydatabase";
    String username = "your-username";
    String password = "your-password";

    Connection connection = null;
    try {
        Class.forName("com.mysql.jdbc.Driver");
        connection = DriverManager.getConnection(url, username, password);
        out.println("Connected to the database!");
        
        // Perform database operations here
        
    } catch (Exception e) {
        out.println("Connection failed. Error message: " + e.getMessage());
    } finally {
        if (connection != null) {
            try {
                connection.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
%>
