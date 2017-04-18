<?php

/* @var $this \yii\web\View */
/* @var $content string */

use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use app\assets\AppAsset;

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <script type="text/javascript" charset="utf-8" src="http://animate.adobe.com/runtime/6.0.0/edge.6.0.0.min.js"></script>
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
    
    <link rel="icon" type="image/png" href="/images/favicons/favicon.ico">
	<link rel="apple-touch-icon" sizes="152x152" href="/images/favicons/apple-touch-icon.png">
	<link rel="icon" type="image/png" href="/images/favicons/favicon-32x32.png" sizes="32x32">
	<link rel="icon" type="image/png" href="/images/favicons/favicon-16x16.png" sizes="16x16">
	<link rel="manifest" href="/manifest.json">
	<link rel="mask-icon" href="/images/favicons/safari-pinned-tab.svg" color="#5bbad5">
	<meta name="theme-color" content="#ffffff">

</head>
<body>
<?php $this->beginBody() ?>
<header id="header">
    <div class="inner" style="padding-top: 0;padding-bottom: 0;">
        <div class="row">
            <div class="col-xs-2">
                <a href="/" class="logo" ><img src="/images/logo.png" class="logo-img"></a>
            </div>
            <div class="col-xs-8" style="padding: 0px;">
                <nav id="nav">
                    <a href="#banner"><i class="fa fa-chevron-right cl-yellow" aria-hidden="true"></i> What is Scheduling</a>
                    <a href="#work-with-us"><i class="fa fa-chevron-right cl-yellow" aria-hidden="true"> </i> Why work with us</a>
                    <a href="#where-we-are" ><i class="fa fa-chevron-right cl-yellow" aria-hidden="true"> </i> Where are we</a>
                </nav>
            </div>
            <div class="col-xs-2">
                <a href="/stop-fraud" ><img class="stop-fraud-img" src="/images/Main_1/01.png"></a>
            </div>
        </div>
    </div>
    <div class="visualHide hide question-selection" style="background-color: rgba(211,211,211,0.5)" id="question-selection">
        <nav id="qstn-slctn-nav" style="padding: 0.5em 0 0.5em 0;">
            <span class="open-child" child-view="askquestion" style="text-align: center; line-height: 1;">
				<img src="/images/shape35.png">
                <br>
                <span>Ask<br>question</span>
            </span>
            <span class="open-child" child-view="ringback" style="text-align: center; line-height: 1;">
	            <img src="/images/shape36.png">
                <br>
                <span>ring back<br>request</span>
            </span>
            <span class="open-child" child-view="pricing" style="text-align: center; line-height: 1;">
                <a href="#pricing-modal" style="font-size: 100%">
	                <img src="/images/shape38.png">
                    <br>
                    <span>pricing<br>request</span>
                </a>
            </span>
            <span class="close-question-selection">
                <i class="fa fa-times" style=" font-size: 1.5em;" aria-hidden="true"></i>
                <br>
                <span>close<br>&nbsp</span>
            </span>
        </nav>
    </div>
    <div class="question-selection visualHide hide" style="background-color: rgba(211,211,211,0.5)" id="ringback">
        <table class="qstn-slctn-table" border="0" style="text-align: center; vertical-align: middle;">
            <tr>
                <td class="pad-left" rowspan="2">
                    <i class="fa fa-phone" style="font-size: 1.7em;" aria-hidden="true"></i>
                    <br>
                    <span>ring back<br>request</span>
                </td>
                <td>
                    <input type="text" placeholder="name" class="form-control" id="usr_name">
                </td>
                <td rowspan="2" class="submit-btn hover-effect">
                    Send
                </td>
                <td rowspan="2" class="close-btn">
                    <span style="text-align: center" class="close-question-selection hover-effect">
                        <i class="fa fa-times" style=" font-size: 1.5em;" aria-hidden="true"></i>
                        <br>
                        <span>close<br>&nbsp</span>
                    </span>
                    
                </td>
            </tr>
            <tr>
                <td>
                    <input type="text" placeholder="email adress" class="form-control" id="usr_adress">
                </td>
            </tr>        
        </table>
    </div>
    <div class="question-selection visualHide hide" style="background-color: rgba(211,211,211,0.5)" id="askquestion">
        <table class="qstn-slctn-table" border="0" style="text-align: center; vertical-align: middle;">
            <tr>
                <td class="pad-left" rowspan="2">
                    <i class="fa fa-envelope-o" style="font-size: 1.7em;" aria-hidden="true"></i>
                    <br>
                    <span>ask<br>question</span>
                </td>
                <td>
                    <input type="text" placeholder="name" class="form-control" id="usr_name2">
                </td>
                <td rowspan="2">
                    <textarea type="text" placeholder="question" rows="5" class="form-control" id="usr_question2"></textarea>
                </td>
                <td rowspan="2" class="submit-btn hover-effect">
                    Send
                </td>
                <td rowspan="2" class="close-btn">
                    <span style="text-align: center" class="close-question-selection hover-effect">
                        <i class="fa fa-times" style=" font-size: 1.5em;" aria-hidden="true"></i>
                        <br>
                        <span>close<br>&nbsp</span>
                    </span>
                    
                </td>
            </tr>
            <tr>
                <td>
                    <input type="text" placeholder="email adress" class="form-control" id="usr_adress2">
                </td>
            </tr>        
        </table>
    </div>
</header>
<div id="yellow-block" class="unactive">
    <div class="col-xs-9 uppercase yellow-block-text" style="font-size: small; padding-top: 0.9em; position: relative;">
        <nobr>Have any questions?</nobr><br>
        <nobr><b class="cl-black" style="font-weight: bold">We have the answers!</b></nobr>
    </div>
    <div class="col-xs-3 yellow-block-icon">
    </div>
</div>
<a href="#menu" class="navPanelToggle"><i class="fa fa-bars cl-black" aria-hidden="true"></i></a>
<div id="container" class="cls-container">
    <?= $content ?>
</div>

<?php $this->endBody() ?>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement (o) ,
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-41697519-5', 'auto');
  ga('send', 'pageview');

</script>
</body>
</html>
<?php $this->endPage() ?>
