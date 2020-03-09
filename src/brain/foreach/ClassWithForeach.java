/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package brain.foreach;

/**
 *
 * @author Brain
 */
public class ClassWithForeach {

    public static void main(String[] args) {

        String extension_list = "ferrari,bugatti,berlin,hummer, pradotx";

        //split helps to take in terme of "object of separation" in this case ","
        String nom_vehicule[] = extension_list.split(",");

        //this is how we use foreach
        for (String vehicule : nom_vehicule) {
            System.out.println(vehicule);
        }
    }
}
