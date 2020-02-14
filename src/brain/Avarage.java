package brain;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/**
 *
 * @author Moses Brain
 */
public class Avarage {

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) throws IOException
    {
            double avg;
            float sum=0;
            float sales[]=new float[7];
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            for(int i=1;i<=7;i++)
            {
                    System.out.println ("Enter sales for day"+i+" of week =");
                    sales[i-1] = Float.parseFloat(br.readLine());
                    sum=sum+sales[i-1];
            }
            System.out.println ("Sum = "+sum);
            avg=sum/7;
            System.out.println ("Average sale of week="+avg);
    }    
}
