
package jdbc;
//------    17/01/2021 Evi Gruenwald with Alla Marianovski
//------   fits to mysql-connector 8 
import java.sql.*;
public class ForDataBase
{

    private Connection con;

    /**
     * constructor - create object con ( Connection type) invoking from the
     * line: <jsp:useBean id="db" class = "jdbc.ForDataBase"/>
     */
    public ForDataBase()
    {
        try
        {
            //we want use MySQL Connector, use new driver and create object that can talk with driver
            Class.forName("com.mysql.cj.jdbc.Driver").getDeclaredConstructor().newInstance();

            //The URL of the database : jdbc:mysql://127.0.0.1:3306/dugma
            // jdbc:mysql - protocol
            // 127.0.0.1 - IP	
            // 3306 - port number
            // db0 - database name
            //name of default user of MySQLServer: root
            //root password: 1234
            //String url = "jdbc:mysql://127.0.0.1:3306/";
            String url = "jdbc:mysql://localhost:3306/";
            String myDB = "db";
            String userPassw = "?user=root&password=1234";
            String sslTZ = "&useSSL=false&serverTimezone=UTC"; 
            url = url + myDB + userPassw + sslTZ;
            System.out.println("url = " + url);
            //this.con = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/db0?user=root&password=1234&useSSL=false&serverTimezone=UTC");
            this.con = DriverManager.getConnection(url);
        } 
        catch (Exception e)
        {
            e.printStackTrace();
        }

    }
    /**
     * This function performs one direction SQL commands and returns the number
     * of updated rows
     * @returns number of updated records
     */
    public int insertUpdateDelete(String sql)
    {
        int countUpdatedRecords = 0; // number of updated rows
        Statement st = null;
        try
        {
            // Create object st (Statement type) - help object for con
            st = this.con.createStatement();
            // Invoke sql command
            countUpdatedRecords = st.executeUpdate(sql);

        } 
        catch (SQLException e)
        {
            e.printStackTrace();

        } 
        finally
        {
            try
            {
                if (st != null)
                {
                    st.close();
                }
                //con.close();
            } 
            catch (SQLException e)
            {
                e.printStackTrace();
            }
        }
        return countUpdatedRecords;
    }
    /**
     * gets sql select statement and returns name of columns - fields
     * @param sql: String
     * @return String[]
     */
    public String[] getColNames(String sql)
    {
        String[] columnNames = null;
        try
        {
            Statement st = con.createStatement();
            ResultSet res = st.executeQuery(sql);

            int countColumns = res.getMetaData().getColumnCount();
            columnNames = new String[countColumns];
            for (int col = 0; col < countColumns; col++)
            {
                columnNames[col] = res.getMetaData().getColumnName(col + 1);
            }
        } 
        catch (SQLException e)
        {
            e.printStackTrace();
        }
        return columnNames;
    }

    /**
     * This function performs Select SQL commands and returns the result array
     * of the data
     * @return String[][] 
     */
    public String[][] select(String sql)
    {
        String result[][] = null;
        Statement st = null;
        ResultSet res = null;
        try
        {
            // Create object st (Statement type) - help object for con
            // TYPE_SCROLL_INSENSITIVE - enable scrolling up and down withour deleting rows
            // CONCUR_UPDATABLE - enable more than one person to deal with set
            st = con.createStatement(
                    ResultSet.TYPE_SCROLL_INSENSITIVE,
                    ResultSet.CONCUR_UPDATABLE
            );
            // Invoke sql command and puts the result into ResultSet object - res
            res = st.executeQuery(sql);
            // m- the column number
            int countColomns = res.getMetaData().getColumnCount();
            // move the cursor to the last row
            res.last();
            // n- the number of the last row
            int countRecords = res.getRow();
            // create the array
            result = new String[countRecords][countColomns];
            // move the cursor before the first line
            res.beforeFirst();
            // copy the data from resultset to the array
            int row = 0;
            while (res.next())
            {
                for (int col = 0; col < countColomns; col++)
                {
                    result[row][col] = res.getString(col + 1);
                }
                row++;
            }

        } 
        catch (SQLException e)
        {
            e.printStackTrace();
        } 
        finally
        {
            try
            {
                if (st != null)
                {
                    st.close();
                }
                if (res != null)
                {
                    res.close();
                }
                //con.close();
            } 
            catch (SQLException e)
            {
                e.printStackTrace();

            }
            return result;
        }
    }
}

    