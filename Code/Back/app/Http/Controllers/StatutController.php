<?php
namespace App\Http\Controllers;

use Illuminate\Support\Facades\Session;
use Illuminate\Http\Request;

class StatutController extends Controller
{
 
    /**
     * Recuperation de l'etat du router
     * @return \Illuminate\Http\Response
     */
    public function statut($ip)
    {
        $username = 'admin';
        $password = '3d2R';

        $connection = ssh2_connect( $ip, 22);
        //dd($connection);
        ssh2_auth_password($connection, $username, $password);
        $cisco = "show vlan brief";
        $stream = ssh2_exec($connection, $cisco);
        $errorStream = ssh2_fetch_stream($stream, SSH2_STREAM_STDERR);
        stream_set_blocking($errorStream, true);
        stream_set_blocking($stream, true);
        $output = stream_get_contents($stream);
        $json = [];

        $lignes = explode("\n", $output);
        foreach ( $lignes as $key => $ligne ){
            if ($key < 4) continue;
            $champ1 = substr($ligne,0,4);
            if ( trim(preg_replace('/\s\s+/', ' ',$champ1)) == '"""') continue;
            $champ1 = trim($champ1);
            $champ2 = substr($ligne,5,32);
            if ( $champ2 == false) continue;
            $champ2 = trim($champ2);
            $champ3 = trim( substr($ligne,38,9));
            $champ4 = trim(preg_replace('/\s\s+/', ' ',substr($ligne,47,31) ));
            $json[] = [
                'vlan' => $champ1,
                'name' => $champ2,
                'status' => $champ3,
                'ports' => $champ4
            ];
        }
        dd($json);

        return json_encode($json);

//        $lignes = explode("\n", $output);
//        foreach ( $lignes as $key => $ligne ){
//            if ($key < 4) continue;
//            $champ1 = substr($ligne,0,4);
//            if ( trim(preg_replace('/\s\s+/', ' ',$champ1)) == '"""') continue;
//            $champ1 = trim($champ1);
//            $champ2 = substr($ligne,5,32);
//            if ( $champ2 == false) continue;
//            $champ2 = trim($champ2);
//            $champ3 = trim( substr($ligne,38,9));
//            $champ4 = trim(preg_replace('/\s\s+/', ' ',substr($ligne,47,31) ));
//            $json[] = [
//                'vlan' => $champ1,
//                'name' => $champ2,
//                'status' => $champ3,
//                'ports' => $champ4
//            ];
//        }
        return json_encode($json);

//        dd($out);
//        //Regular expression match the information we are looking for in the routers response.
//        preg_match_all("/([0-9]+|No)\sactive call/",$out,$array) or die("parse error");
//        //display output the monitoring system can understand
//        //Expected format:  [x]  Where x is the number of active calls
//        if(is_numeric($array[1][0]))
//            echo "[" . $array[1][0] ."]";
//        else if($array[1][0] == "No")
//            echo "[0]";
//        else
//            echo "error";
    }
    /**
     * Recuperation de l'etat du router
     * @return \Illuminate\Http\Response
     */
    public function show($ip)
    {
        return $this->statut($ip);
    }

    /**
     * envoi de commande ssh au cisco
     * @return \Illuminate\Http\Response
     */
    public function cmd($ip, $cmd)
    {
        $username = 'admin';
        $password = '3d2R';

//        $username = 'administrateur';
//        $password = '2f2S';

        $connection = ssh2_connect( $ip, 22);
        ssh2_auth_password($connection, $username, $password);
        $cisco = $cmd;
        $cisco = str_replace(' ','/',$cmd);
        $url = "http://$ip/level/15/exec/-/".$cisco;

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        //curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_ANY);
        curl_setopt($ch, CURLOPT_USERPWD, "$username:$password");
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 3);
        $out = curl_exec($ch) or die ("connection error");
        dd($out);
    }
}