<div id="pricing-modal" style="display:none; z-index: 1000;" class="custom-modal">
    <section style="background-color: rgb(255,252,0);" id="modal-personal_info">
        <div class="row">
            <div class="col-xs-12 header uppercase">
                please provide your contact information
            </div>
        </div>
        <div class="row" style="padding-top: 1em;">
            <div class="col-xs-12 col-md-6" >
                <div class="form-group flexy-form-group">
                    <span for="Student">First<br>Name</span>
                    <div>
                        <input name="user-name"  />
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-md-6">
                <div class="form-group flexy-form-group">
                    <span for="Student">Company<br>Name</span>
                    <div>
                        <input name="user-company" />
                    </div>
                </div>
            </div>
        </div>
        <div class="row" style="padding-top: 1em;">
            <div class="col-xs-12 col-md-6" >
                <div class="form-group flexy-form-group">
                    <span for="Student">Last<br>Name</span>
                    <div>
                        <input name="user-surname" />
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-md-6">
                <div class="form-group flexy-form-group">
                    <span for="Student"><br>Country</span>
                    <div>
                    <?
                        echo kartik\select2\Select2::widget([
                            'name' => 'user-country',
                            'data' => ['Ukraine','Germany','Netherlands','Estonia'],
                            'theme' => kartik\select2\Select2::THEME_BOOTSTRAP,
                            'options' => [
                                'placeholder' => 'Select country',
                                
                            ],
                            'pluginEvents' => [
	                            'change' => "function() { 
                                    country = $(this).find('option:selected').text();  
                                    $('#user-city').empty();
                                    $.each(city[country], function(key, value) {
                                      $('#user-city').append($(\"<option></option>\")
                                         .attr(\"value\", value).text(value));
                                    });	                            
	                            }",
                            ],
                        ]);
                    ?>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" style="padding-top: 1em;">
            <div class="col-xs-12 col-md-6" >
                <div class="form-group  flexy-form-group">
                    <span><br>Email</span>
                    <div>
                        <input name="user-email" />
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-md-6">
                <div class="form-group  flexy-form-group">
                    <span for="Student"><br>City</span>
                    <div>
                        <?
                            echo kartik\select2\Select2::widget([
                                'name' => 'user-city',
                                'id' => 'user-city',
                                'data' => [''],
                                'theme' => kartik\select2\Select2::THEME_BOOTSTRAP,
                                'options' => [
                                    'placeholder' => 'Select city',
                                    //'multiple' => true
                                ],
                            ]);
                        ?>
                    </div>                        
                </div>
            </div>
        </div>
        <div class="row" style="padding-top: 1em;">
            <div class="col-xs-0 col-md-6">
                 
            </div>
            <div class="col-xs-12 col-md-6">
                 <input id="box1" type="checkbox" name="user-mspa" />
                 <label for="box1" style="font-size: 0.75em">MSPA <br>member</label>
            </div>
        </div>
    </section>
    <section style="background-color: rgb(255,255,255);"  id="modal-specification">
         <div class="row">
            <div class="col-xs-12 header uppercase">
                please specify your request
            </div>
        </div>
        <div class="row" style="padding-top: 1em;">
            <div class="col-xs-12 col-md-6">
                <div class="form-group flexy-form-group">
                    <span for="Student">Type of<br> service<br>requested</span>
                    <div>
                    <?
                        echo kartik\select2\Select2::widget([
                            'name' => 'user-service',
                            'data' => [
                            	'mystery shopping visit',
                            	'mystery audit',
                            	'open audit',
                            	'exit poll',
                            	'on-line survey',
                            	'other'
                            ],
                            'theme' => kartik\select2\Select2::THEME_BOOTSTRAP,
                            'options' => [
                                'placeholder' => 'Select service',
                                //'multiple' => true
                            ],
                        ]);
                      ?>
                    </div>                        
                </div>
            </div>
        </div>
        <div class="row" style="padding-top: 1em;">
            <div class="col-xs-12 col-md-6" >
                <div class="form-group flexy-form-group">
                    <span for="user-evaluation">Type of<br>evaluations</span>
                    <div>
	                    <?
                            echo kartik\select2\Select2::widget([
                                'name' => 'user-evaluation',
                                'data' => [
                                	'visit',
                                	'call',
                                	'purchase visit',
                                	'purchase-return visit',
                                	'mystery employee',
                                	'other'
                                ],
                                'theme' => kartik\select2\Select2::THEME_BOOTSTRAP,
                                'options' => [
                                    'placeholder' => 'Select evaluation',
                                    //'multiple' => true
                                ],
                            ]);
                        ?>
                        
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-md-6">
                <div class="form-group flexy-form-group">
                    <span for="Student"><br>Industry</span>
                    <div >
                        <?
                            echo kartik\select2\Select2::widget([
                                'name' => 'user-industry',
                                'data' => [
                                	'food retail',
                                	'fashion retail',
                                	'automotive',
                                	'luxury',
                                	'gas stations',
                                	'finance',
                                	'health care',
                                	'vendors',
                                	'other'
                                ],
                                'theme' => kartik\select2\Select2::THEME_BOOTSTRAP,
                                'options' => [
                                    'placeholder' => 'Select industry',
                                    //'multiple' => true
                                ],
                            ]);
                        ?>
                    </div>                        
                </div>
            </div>
        </div>
        <div class="row" style="padding-top: 1em;">
            <div class="col-xs-12" >
                <div class="form-group flexy-form-group">
                    <span for="user-cover">Countries<br>to cover</span>
                    <div class="selection-box" id="countries-box">
                        
                    </div>
                </div>
            </div>
    </section>
    <section style="background-color: rgb(230,225,196);">
        <div class="row equal">
            <div class="col-md-3 col-xs-6 countries-section">
                <span class="pricing-modal-subheader underline-yl">Western Europe</span>
                <div class="modal-country">Belgium</div> <div class="modal-country">France</div>
                <div class="modal-country">Ireland</div><div class="modal-country">Netherlands</div>
                <div class="modal-country">Luxemburg</div> <div class="modal-country">United Kindom</div>
            </div>
            <div class="col-md-3 col-xs-6 countries-section">
                <span class="pricing-modal-subheader underline-yl">Northern Europe</span>
                <div class="modal-country">Denmark</div> <div class="modal-country">Finland</div>
                <div class="modal-country">Iceland</div> <div class="modal-country">Norway</div>
                <div class="modal-country">Sweden</div> <div class="modal-country"></div>
            </div>
            <div class="col-md-3 col-xs-6 countries-section">
                <span class="pricing-modal-subheader underline-yl">Southern Europe</span>
                <div class="modal-country">Andorra</div> <div class="modal-country">Cyprus</div>
                <div class="modal-country">Italy</div> <div class="modal-country">Malta</div>
                <div class="modal-country">Portugal</div> <div class="modal-country">Spain</div>
            </div>
            <div class="col-md-3 col-xs-6 countries-section">
                <span class="pricing-modal-subheader underline-yl">Central Asia</span>
                <div class="modal-country">Kazakhstan</div> <div class="modal-country">Kyrgyzstan</div>
                <div class="modal-country">Tajikistan</div><div class="modal-country">Turkmenistan</div>
                <div class="modal-country">Uzbekistan</div>
            </div>
        </div>
        <div class="row equal">
            <div class="col-md-3 col-xs-6 countries-section">
                <span class="pricing-modal-subheader underline-yl">Central Europe</span>
                <div class="modal-country">Austria</div> <div class="modal-country">Croatia</div>
                <div class="modal-country">Czech Republic</div><div class="modal-country">Germany</div>
                <div class="modal-country">Hungary</div> <div class="modal-country">Liechtenstein</div>
                <div class="modal-country">Poland</div> <div class="modal-country">Slovakia</div>
                <div class="modal-country">Slovenia</div> <div class="modal-country">Switzerland</div>
            </div>
            <div class="col-md-3 col-xs-6 countries-section">
                <span class="pricing-modal-subheader underline-yl">South-Eastern Europe</span>
                <div class="modal-country">Albania</div> <div class="modal-country">Bosnia and Herzegovina</div>
                <div class="modal-country">Bulgaria</div> <div class="modal-country">Greece</div>
                <div class="modal-country">Macedonia</div> <div class="modal-country">Montenegro</div>
                <div class="modal-country">Romania</div> <div class="modal-country">Serbia</div>
            </div>
            <div class="col-md-3 col-xs-6 countries-section">
                <span class="pricing-modal-subheader underline-yl">Baltic States</span>
                <div class="modal-country">Estonia</div>
                <div class="modal-country">Latvia</div>
                <div class="modal-country" style="padding-bottom: 1em;">Lithuania</div> 
                
                <span class="pricing-modal-subheader underline-yl">Eastern Europe</span>
                <div class="modal-country">Belarus</div> <div class="modal-country">Moldova</div>
                <div class="modal-country">Russia</div> <div class="modal-country">Ukraine</div>
            </div>
            <div class="col-md-3 col-xs-6 countries-section">
                <span class="pricing-modal-subheader underline-yl">Transcaucasia</span>
                <div class="modal-country">Azerbaijan</div> <div class="modal-country">Armenia</div>
                <div class="modal-country" style="padding-bottom: 1em;">Georgia</div>
                
                <span class="pricing-modal-subheader underline-yl">Other countries</span>
                <div class="modal-country">Israel</div> 
            </div>
        </div>
    </section>
    <section style="background-color: rgb(255,255,255);"  id="modal-details">
        <div class="row">
            <div class="col-xs-12 col-md-4">
                <div class="form-group flexy-form-group">
                    <span for="Student">Location<br>split</span>
                    <div >
                        <?
                            echo kartik\select2\Select2::widget([
                                'name' => 'user-location',
                                'data' => ['Loc1','Loc2','Loc3'],
                                'theme' => kartik\select2\Select2::THEME_BOOTSTRAP,
                                'options' => [
                                    'placeholder' => 'location',
                                    //'multiple' => true
                                ],
                            ]);
                        ?>
                    </div>                        
                </div>
            </div>
            <div class="col-xs-12 col-md-4">
                <div class="form-group flexy-form-group">
                    <span for="Student">Reporting<br>system</span>
                    <div >
                        <?
                            echo kartik\select2\Select2::widget([
                                'name' => 'user-reporting',
                                'data' => ['sys1','sys2','sys3'],
                                'theme' => kartik\select2\Select2::THEME_BOOTSTRAP,
                                'options' => [
                                    'placeholder' => 'system',
                                    //'multiple' => true
                                ],
                            ]);
                        ?>
                    </div>                        
                </div>
            </div>
            <div class="col-xs-12 col-md-4">
                <div class="form-group flexy-form-group">
                    <span for="Student">Reporting<br>language</span>
                    <div >
                        <?
                            echo kartik\select2\Select2::widget([
                                'name' => 'user-lang',
                                'id'=>'lang-select',
                                'data' => ['English','German','Ukraine'],
                                'theme' => kartik\select2\Select2::THEME_BOOTSTRAP,
                                'options' => [
                                    'placeholder' => 'language',
                                    //'multiple' => true
                                ],
                            ]);
                        ?>
                    </div>                        
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 col-xs-0"></div>
            <div class="col-md-4 col-xs-0"></div>
            <div class="col-md-4 col-xs-12 selection-box hr-padding" id="lang-box" style="text-align: right"></div>                
        </div>
        <div class="row" style="padding-top: 1em;">
            <div class="col-xs-12 col-md-8" >
                <div class="form-group flexy-form-group">
                    <span for="Student">Scenario<br>complexity</span>
                    <div>
                        <a class="btn btn-minus" href="#" style="">
                            <i class="fa fa-minus" aria-hidden="true"></i>
                        </a>
                        <input class="input-number" type="range" name="user-complexity" min="1" max="5" style="width: 50%; height: 100%; display: inline-block;">
                        <output for="complexity" onforminput="value = complexity.valueAsNumber;"></output>
                        <a class="btn btn-plus" href="#" style="">
                            <i class="fa fa-plus" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" style="padding-top: 2em;">
            <div class="col-xs-12 col-md-8" >
                <div class="form-group flexy-form-group">
                    <span for="Student">Questionnaire<br>Length</span>
                    <div>
                        <a class="btn btn-minus" href="#" style="">
                            <i class="fa fa-minus" aria-hidden="true"></i>
                        </a>
                        <input class="input-number" name="user-qtlength" type="number" min="0" style="width: 3em; text-align: center;">
                        <a class="btn btn-plus" href="#" style="">
                            <i class="fa fa-plus" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" style="padding-top: 1em;">
            <div class="col-xs-12 col-md-8" >
                <div class="form-group flexy-form-group">
                    <span for="Student">Verification<br>requirments</span>
                    <div>
                        <input id="box2" type="checkbox" check-for="facade" name="user-requirments" />
                        <label for="box2" name="facade" style="font-size: 0.75em">Location facade <br>photo</label>
                        <input id="box3"  type="checkbox" check-for="receipt" name="user-requirments" />
                        <label for="box3" name="receipt" style="font-size: 0.75em">Scanned <br>receipt image</label>
                        <input id="box4" type="checkbox" check-for="bcimage" name="user-requirments" />
                        <label for="box4" name="bcimage" style="font-size: 0.75em">Scanned business <br>card image</label>
                        <input id="box5" type="checkbox" check-for="none" name="user-requirments"/>
                        <label for="box5" name="none" style="font-size: 0.75em">None<br>&nbsp</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-md-8" >
                <div class="form-group flexy-form-group">
                    <span for="Student">&nbsp</span>
                    <div>
                        <input id="box6" type="checkbox" check-for="other" name="user-requirments"/>
                        <label for="box6" name="other" style="font-size: 0.75em; display: inline-block; vertical-align: middle;">Other</label>
                        <input name="user-othercomment"  style="width: 70%; line-height: 1;" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section style="background-color: rgb(255,252,0);" id="modal-comment">
        <div class="row">
            <div class="col-xs-12 col-md-8">
                <textarea type="text" name="user-comment" class="form-control" rows="5" placeholder="Type your comment"></textarea>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
                <a href="#" id="pricing-presubmit" class="button alt  pull-right" style="margin-top: 1em;">Send</a>
            </div>
        </div>
    </section>
</div>

<?php
	
	$this->registerJs("
		var city = {
			'Ukraine' : [
				'Kyiv',
				'Kharkiv',
				'Dnipro',
				'Lviv'
			],
			'Germany' : [
				'Berlin',
				'Munich',
				'Frankfurt',
				'Hamburg'
			],
			'Netherlands' : [
				'Hague',
				'Rotterdam',
				'Eindhoven',
				'Amsterdam'
			],
			'Estonia' : [
				'Tallinn',
				'Tartu',
				'Narva',
				'Parnu'
			]
		};
	");