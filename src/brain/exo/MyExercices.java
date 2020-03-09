package brain.exo;

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
 * @author  Brain
 */
public class MyExercices {

    /**
     * @param args the command line arguments
     * @throws java.io.IOException
     */
    public static void main(String[] args) throws IOException 
    {
        // TODO code application logic here
        String str;
        int vowels = 0, digits = 0, blanks = 0;
        char ch;

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        System.out.print("Enter a String : ");
        str = br.readLine();

        for(int i = 0; i < str.length(); i ++)
        {
                ch = str.charAt(i);

                if(ch == 'a' || ch == 'A' || ch == 'e' || ch == 'E' || ch == 'i' || 
                ch == 'I' || ch == 'o' || ch == 'O' || ch == 'u' || ch == 'U')
                        vowels ++;
                else if(Character.isDigit(ch))
                        digits ++;
                else if(Character.isWhitespace(ch))
                        blanks ++;
        }

        System.out.println("Vowels : " + vowels);
        System.out.println("Digits : " + digits);
        System.out.println("Blanks : " + blanks);
    }
}