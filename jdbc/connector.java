package jdbc;
import java.sql.*;

public class connector {
    static final String DB_URL = "jdbc:mysql://localhost:3306/mydatabase";
    static final String USER = "root";
    static final String PASS = "157521";

    public static void main(String[] args) {
        try (Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
             Statement stmt = conn.createStatement()) {
            String sql = "SELECT * FROM users";
            System.out.println("Database records:");

            ResultSet rs = stmt.executeQuery(sql);
            while (rs.next()) {
                int id = rs.getInt("usernumber");
                String name = rs.getString("username");
                String email = rs.getString("email");
                int age = rs.getInt("age");

                System.out.println("ID: " + id);
                System.out.println("Name: " + name);
                System.out.println("Email: " + email);
                System.out.println("age: "+age);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
