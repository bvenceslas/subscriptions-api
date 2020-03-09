/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package brain.exo;

import java.util.Vector;

/**
 *
 * @author  Brain
 */
public class Vecteur {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args)
    {
        
        Vector list = new Vector();
        int len=args.length;
        for(int i=0;i<len;i++)
        {
                list.addElement(args[i]);
        }
        int size=list.size();
        String str[]= new String[size];
        list.copyInto(str);
        for(int i=0;i<size;i++)
        {
                System.out.println ("Element of Vector at position "+i+":"+str[i]);
        }
    }    
}
