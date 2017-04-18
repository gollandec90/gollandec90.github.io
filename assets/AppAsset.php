<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace app\assets;

use yii\web\AssetBundle;

/**
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        'css/main.css',
        'css/custom.css',
        'css/jquery.modal.min.css',
        'css/bootstrap-select.min.css',
        'plugins/slick/slick.css',
        'plugins/slick/slick-theme.css',
        'css/fonts.css'
    ];
    public $js = [
        'js/modal.js',
        'js/skel.min.js',
        'js/util.js',
        'js/main.js',
        'js/custom.js',
        'plugins/slick/slick.js',
        'plugins/highcharts/highmaps.js',
        'plugins/highcharts/world.js'
    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset',
    ];
}
