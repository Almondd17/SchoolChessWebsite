package jdbc;
import java.sql.*;
public class connector{
    static final String DB_URL = "jdbc:mysql://localhost:3306/mydatabase";
    static final String USER = "root";
    static final String Pass = "157521";

    public static void main(String[] args) {
        try(Connection conn = DriverManager.getConnection(DB_URL, USER, Pass);
        Statement stmt = conn.createStatement();) {
            String sql = "SELECT * FROM users";
            stmt.executeQuery(sql);
            System.out.println("data base shown!");
        }
        catch (SQLException e)
        {
            e.printStackTrace();
        }
    }

}