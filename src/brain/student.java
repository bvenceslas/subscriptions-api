/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package brain;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/**
 *
 * @author Moses Brain
 */
    /**
     * @param args the command line arguments
     */
class student
{
    String name;
    int roll_no;
    int sub1,sub2;
    int total;
    float per;
    void getdata() throws IOException
    {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        System.out.println ("Enter Name of Student");
        name = br.readLine();
        System.out.println ("Enter Roll No. of Student");
        roll_no = Integer.parseInt(br.readLine());
        System.out.println ("Enter marks out of 100 of 1st subject");
        sub1 = Integer.parseInt(br.readLine());
        System.out.println ("Enter marks out of 100 of 2nd subject");
        sub2 = Integer.parseInt(br.readLine());
    }
    void show()
    {
        total=sub1+sub2;
        per=(total*100)/200;
        System.out.println ("Roll No. = "+roll_no);
        System.out.println ("Name = "+name);
        System.out.println ("Marks of 1st Subject = "+sub1);
        System.out.println ("Marks of 2nd Subject = "+sub2);
        System.out.println ("Total Marks = "+total);
        System.out.println ("Percentage = "+per+"%");
    }
}
class q2Student
{
    public static void main(String args[]) throws IOException
    {
            student s=new student();
            s.getdata();
            s.show();
    }
}