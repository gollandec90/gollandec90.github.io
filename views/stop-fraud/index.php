<?php
$this->title = 'Stop Fraud';
?>
<!-- Banner -->
<script type="text/javascript" charset="utf-8" src="http://animate.adobe.com/runtime/5.0.1/edge.5.0.1.min.js"></script>
<style>.edgeLoad-EDGE-34774265 { visibility:hidden; }</style>

<?//$this->render('sections/_news')?>
<?=$this->render('sections/_prevention-committee');?>
<?=$this->render('sections/_what-is-fraud');?>
<?=$this->render('sections/_indicators');?>
<?=$this->render('sections/_prevention-process');?>
<?=$this->render('sections/_control-system');?>
<?=$this->render('sections/_footer');?>

<?$this->registerJs("
$(document).on('ready', function() {
  
  $(\".news-slider\").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  
  
  $(\".prevention-steps-slider\").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
");
?>