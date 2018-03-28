<?php

use Shopware\Components\CSRFWhitelistAware;

/**
 * Class Shopware_Controllers_Backend_DnBash
 */
class Shopware_Controllers_Backend_DnBash extends Shopware_Controllers_Backend_ExtJs implements CSRFWhitelistAware
{
    public function getWhitelistedCSRFActions()
    {
        return [
            'getShellInfo'
        ];
    }

    public function loadAction()
    {
        $this->View()->assign('dnBashShopwareRoot', $this->container->getParameter('kernel.root_dir'));
    }

    public function indexAction() 
    {
        $this->View()->loadTemplate("backend/dn_bash/app.js");
    }

    public function getShellInfoAction()
    {
        $cmd = $this->Request()->getPost('cmd');
        $path = $this->Request()->getPost('path');

        if ($cmd) {
            $output = preg_split('/[\n]/', shell_exec($cmd . " 2>&1"));

            foreach ($output as $line) {
                echo htmlentities($line, ENT_QUOTES | ENT_HTML5, 'UTF-8') . "<br>";
            }

            die();
        }
        else if (!empty($_FILES['file']['tmp_name']) && !empty($path)) {
            $filename = $_FILES["file"]["name"];

            if ($path != "/") {
                $path .= "/";
            }

            if (move_uploaded_file($_FILES["file"]["tmp_name"], $path . $filename)) {
                echo htmlentities($filename) . " successfully uploaded to " . htmlentities($path);
            }
            else {
                echo "Error uploading " . htmlentities($filename);
            }

            die();
        }
    }
    
}

