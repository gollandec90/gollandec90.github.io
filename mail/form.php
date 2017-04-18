<div id="ver-pricing-modal" style="z-index: 1000; line-height: 1.4;" class="custom-modal">
   
    <table style="background-color: rgb(255,255,255); line-height: 1.6;"  id="">
	    <?php foreach($data as $k => $v){ ?>
		<tr>
			<td>
				<?= $k ?>
			</td>
			<td>
                <span><?= is_array($v) ? implode(', ', $v) : $v ?></span>
			</td>
		</tr>
        <?php } ?>
<!--
        <div class="row">
            <div class="col-sm-4">
               Type of service requested
            </div>
            <div class="col-sm-8">
                <span name="ver-user-service"></span>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4">
               Type of evaluations
            </div>
            <div class="col-sm-8">
                <span name="ver-user-evaluation">  </span>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4">
               Industry
            </div>
            <div class="col-sm-8">
                <span name="ver-user-industry">    </span>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4">
               Countries to cover
            </div>
            <div class="col-sm-8">
                <span name="ver-user-cover">   </span>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4">
               Location split
            </div>
            <div class="col-sm-8">
                <span name="ver-user-location">    </span>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4">
               Reporting system
            </div>
            <div class="col-sm-8">
                <span name="ver-user-reporting">   </span>
            </div>
        </div><div class="row">
            <div class="col-sm-4">
               Reporting language
            </div>
            <div class="col-sm-8">
                <span name="ver-user-language">    </span><br>
            </div>
        </div><div class="row">
            <div class="col-sm-4">
               Scenario complexity
            </div>
            <div class="col-sm-8">
                <span name="ver-user-complexity">  </span><br>
            </div>
        </div><div class="row">
            <div class="col-sm-4">
               Questionnaire length
            </div>
            <div class="col-sm-8">
                <span name="ver-user-qtlength">  </span><br>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4">
               Verification requirments
            </div>
            <div class="col-sm-8">
                <span name="ver-user-verrequirm">None</span><br>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <br>
                <span style="text-transform: uppercase">your comment:</span>
                <span name="ver-user-comment"></span>
            </div>
        </div>
-->
    </table>
</div>