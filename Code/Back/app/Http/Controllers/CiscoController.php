<?php
namespace App\Http\Controllers;

use Illuminate\Support\Facades\Session;
use Illuminate\Http\Request;
use phpDocumentor\Reflection\DocBlock\Tags\Uses;

class CiscoController extends Controller
{

    /**
     * Recuperation de l'etat du router
     * @return \Illuminate\Http\Response
     */
    public function statut()
    {
        $username = 'admin';
        $password = '3d2R';
        $ip = '10.1.1.200';
        $port = '22';


        $connection = ssh2_connect( $ip, $port);
        ssh2_auth_password($connection, $username, $password);
        $cisco = "show interface status";
        $stream = ssh2_exec($connection, $cisco);
        $errorStream = ssh2_fetch_stream($stream, SSH2_STREAM_STDERR);
        stream_set_blocking($errorStream, true);
        stream_set_blocking($stream, true);
        $output = stream_get_contents($stream);
        $json = [];
        $lignes = explode("\n", $output);

        foreach ( $lignes as $key => $ligne ){
            if ($key < 1) continue;

            $champ1 = substr($ligne,0,9);
            if ( trim(preg_replace('/\s\s+/', ' ',$champ1)) == '"""' || trim(preg_replace('/\s\s+/', ' ',$champ1)) == 'Port') continue;
            $champ1 = trim($champ1);

            $champ2 = substr($ligne,10,18);
            if ( $champ2 == false) continue;
            $champ2 = trim($champ2);

            $champ3 = trim( substr($ligne,29,12));
            $champ4 = trim(preg_replace('/\s\s+/', ' ',substr($ligne,42,10) ));
            $champ5 = trim(preg_replace('/\s\s+/', ' ',substr($ligne,53,7) ));
            $champ6 = trim(preg_replace('/\s\s+/', ' ',substr($ligne,61,5) ));
            $champ7 = trim(preg_replace('/\s\s+/', ' ',substr($ligne,67,17) ));
            $json[] = [
                'port' => $champ1,
                'name' => $champ2,
                'status' => $champ3,
                'vlan' => $champ4,
                'duplex' => $champ5,
                'speed' => $champ6,
                'type' => $champ7,
            ];
        }
        return response()->json([
            'data' => $json
        ]);
    }

    /**
     * envoi de commande ssh au cisco
     * @return \Illuminate\Http\Response
     */
    public function cmd(Request $req)
    {
        $username = 'admin';
        $password = '3d2R';
        $ip = '10.1.1.200';
        $port = '22';

        $connection = ssh2_connect( $ip, $port);
        ssh2_auth_password($connection, $username, $password);
        $cisco =  $req->get('cmd');
        $stream = ssh2_exec($connection, $cisco);
        $errorStream = ssh2_fetch_stream($stream, SSH2_STREAM_STDERR);
        stream_set_blocking($errorStream, true);
        stream_set_blocking($stream, true);
        $output = stream_get_contents($stream);
        $lignes = explode("\n", $output);
        foreach ( $lignes as $key => $ligne ) {
            if ($key < 1) continue;
            if (trim(preg_replace('/\s\s+/', ' ', $ligne)) == '"""' || trim(preg_replace('/\s\s+/', ' ', $ligne)) == 'Port') continue;
        }

        return response()->json([
            'data' => $output
        ]);
    }

    /**
     * envoi de commande ssh au cisco
     * @return \Illuminate\Http\Response
     */
    public function cossh(Request $req)
    {
        $ip = $req->get('ip');
        $port = $req->get('port');
        $username = $req->get('username');
        $password = $req->get('password');
        $etat = true;

        try {

            $connection = ssh2_connect($ip, $port);

        } catch (\Exception $e) {

            $etat = false;
        }

        try {

            $pass_success = ssh2_auth_password($connection, $username, $password);

        } catch (\Exception $e) {

            $etat = false;
        }

        return response()->json([
            'data' =>  ['ssh' => $etat ]
        ]);
    }

    /**
     * envoi de commande ssh au cisco
     * @return \Illuminate\Http\Response
     */
    public function test()
    {
        return response()->json([
            'data' => 'daygvyvgybggyvta'
        ]);
    }
}