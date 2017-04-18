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
    <meta name="viewport" content="width=device-width, initial-scale=1">
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
<body class="stop-fraud">
<?php $this->beginBody() ?>
<header id="header" class="stop-fraud">
    <div style="padding: 0 4em 0 4em;">
        <div style="text-align: center; line-height: 1em; margin-top: 0.5em;" id="main-logo">
            <img src="/images/Main_2/logo.png">
        </div>
        <nav id="nav" style="text-align: left; width: 100%;">
            <a href="/" data-scrollto="main-logo"><img src="/images/logo-min.png" style="padding-bottom: 1.8em;"></a>
            <a href="#news" data-scrollto="news"><i class="fa fa-chevron-right cl-yellow" aria-hidden="true"></i> Hot News</a>
            <a href="#fraud-prevention-committee" data-scrollto="fraud-prevention-committee"><i class="fa fa-chevron-right cl-yellow" aria-hidden="true"> </i> About committee</a>
            <a href="#what-is-fraud" data-scrollto="what-is-fraud"><i class="fa fa-chevron-right cl-yellow" aria-hidden="true"> </i> What is fraud</a>
            <a href="#indicators" data-scrollto="indicators"><i class="fa fa-chevron-right cl-yellow" aria-hidden="true"> </i> Indicators</a>
            <a href="#prevention-process" data-scrollto="prevention-process"><i class="fa fa-chevron-right cl-yellow" aria-hidden="true"> </i> Process</a>
        </nav>
    </div>
    </header>
<a href="#menu" class="navPanelToggle"><i class="fa fa-bars cl-black" aria-hidden="true"></i></a>
    <?= $content ?>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
